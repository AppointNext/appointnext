import express from "express";
import authUserRoute from "./user/routes/routes";
import authDoctorRoute from "./doctor/routes/routes";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { setupWebSocketServer } from "./web_socket";
import bodyParser from "body-parser";
// import redistRoutes from "./user/services/redis/redis";

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

app.use("/api/user", authUserRoute);
app.use("/api/doctor", authDoctorRoute);

// redis routes
// app.use("/api/redis", redistRoutes);

// Setup WebSocket server
const wss = setupWebSocketServer(server);

mongoose
  .connect(dataURL)
  .then(() => {
    console.log("MongoDb Connected");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  .catch((err) => console.error("Mongo Err", err));

export default app;
