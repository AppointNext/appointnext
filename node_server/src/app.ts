import express from "express";
import authUserRoute from "./user/routes/authRoutes";
import authDoctorRoute from "./doctor/routes/authDoctorRoutes";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const dataURL = process.env.MONGO_URI;

const bodyParser = require("body-parser");

if (!dataURL) {
  throw new Error("Missing MONGO_URI in environment variables");
}

mongoose
  .connect(dataURL)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log("Mongo Err", err));

const app = express();

app.use(express.json());

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user/auth", authUserRoute);
app.use("/api/doctor/auth", authDoctorRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
