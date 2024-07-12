import express from "express";
import authUserRoute from "./user/routes/authRoutes";
import authDoctorRoute from "./doctor/routes/authDoctorRoutes";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import WebSocket from "ws";
import { Redis } from "@upstash/redis";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

dotenv.config();

const dataURL = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

if (!dataURL) {
  throw new Error("Missing MONGO_URI in environment variables");
}

mongoose
  .connect(dataURL)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log("Mongo Err", err));

const app = express();
export const server = http.createServer(app);

app.use(express.json());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// User routes
app.use("/api/user/auth", authUserRoute);
// Doctor routes
app.use("/api/doctor/auth", authDoctorRoute);

const wss = new WebSocket.Server({ server });

// Upstash Redis Client Initialization
const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

const userConnections: { [key: string]: WebSocket } = {};

wss.on("connection", (ws: WebSocket) => {
  // Assign a unique identifier to each connection
  const connectionId = uuid();
  // @ts-ignore
  ws.id = connectionId; // Assuming you want to track the connection ID
  console.log("New connection", connectionId);

  ws.on("message", (data: any) => {
    const dataString = data.toString();

    let parsedData;
    try {
      parsedData = JSON.parse(dataString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return;
    }

    const { userId, type, message, receiver } = parsedData;

    // Handle the connection event
    if (type === "connect") {
      userConnections[userId] = ws;
      console.log(`User ${userId} connected`);
    }

    // Handle the message event
    else if (type === "message") {
      console.log(`Message from ${userId} to ${receiver}: ${message}`);

      const receiverSocket = userConnections[receiver];
      if (receiverSocket) {
        receiverSocket.send(JSON.stringify({ userId, message }));
      }
    }
  });

  ws.on("close", () => {
    // Find and remove the closed connection
    for (const userId in userConnections) {
      if (userConnections[userId] === ws) {
        delete userConnections[userId];
        console.log(`User ${userId} disconnected`);
        break;
      }
    }
  });

  ws.on("error", (error) => {
    console.log("Error with ws", error);
  });
});

// API Endpoint to set a user as online
app.post("/set-online", async (req, res) => {
  const { userId, username } = req.body;

  // Set user as online in Redis
  try {
    await redisClient.hset("onlineUsers", { [userId]: username });
    res.send("User set online");
  } catch (err) {
    res.status(500).send("Error setting user online");
  }
});

// API Endpoint to get online users
app.get("/online-users", async (req, res) => {
  try {
    const onlineUsers = await redisClient.hgetall("onlineUsers");
    res.json(onlineUsers);
  } catch (err) {
    res.status(500).send("Error getting online users");
  }
});

server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} \n link http://localhost:${PORT}`
  );
});
