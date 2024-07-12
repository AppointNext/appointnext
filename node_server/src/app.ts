import express from "express";
import authUserRoute from "./user/routes/authRoutes";
import authDoctorRoute from "./doctor/routes/authDoctorRoutes";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { setupWebSocketServer } from "./web_socket";
import bodyParser from "body-parser";
import { Redis } from "@upstash/redis";

dotenv.config();

const dataURL = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

if (!dataURL) {
  throw new Error("Missing MONGO_URI in environment variables");
}

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user/auth", authUserRoute);
app.use("/api/doctor/auth", authDoctorRoute);

// Setup WebSocket server
const wss = setupWebSocketServer(server);

const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

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

mongoose
  .connect(dataURL)
  .then(() => {
    console.log("MongoDb Connected");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  .catch((err) => console.error("Mongo Err", err));
