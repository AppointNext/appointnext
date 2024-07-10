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
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
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

const userConnections = new Map();

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", async (message: any) => {
    const messageData = JSON.parse(message);
    const { type, userId, username, recipient, sender, msg } = messageData;

    // Handle initial connection message
    if (type === "set-online") {
      userConnections.set(userId, ws);

      // Set user as online in Redis
      try {
        await redisClient.hset("onlineUsers", { [userId]: username });
      } catch (err) {
        console.error("Error setting user online", err);
      }

      return; // Exit early to avoid processing as a regular message
    }

    // Handle regular chat messages
    if (recipient) {
      const recipientWs = userConnections.get(recipient);
      if (recipientWs && recipientWs.readyState === WebSocket.OPEN) {
        recipientWs.send(JSON.stringify({ sender, message: msg }));
      }
    }
  });

  ws.on("close", () => {
    console.log("Client has disconnected");
    userConnections.forEach((value, key) => {
      if (value === ws) {
        userConnections.delete(key);
      }
    });
  });

  ws.on("error", (error) => {
    console.error("WebSocket error: ", error);
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
