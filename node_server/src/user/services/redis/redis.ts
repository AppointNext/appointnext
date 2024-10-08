// import app from "../../../app";

// import { Redis } from "@upstash/redis";
// import { Router } from "express";
// import dotenv from "dotenv";
// const redistRoutes = Router();

// const redisClient = new Redis({
//   url: process.env.UPSTASH_REDIS_URL,
//   token: process.env.UPSTASH_REDIS_TOKEN,
// });

// console.log(
//   "Redis URL: ",
//   process.env.UPSTASH_REDIS_URL,
//   process.env.UPSTASH_REDIS_TOKEN
// );

// redistRoutes.post("/set-online", async (req, res) => {
//   const { userId, username } = req.body;

//   // Set user as online in Redis
//   try {
//     await redisClient.hset("onlineUsers", { [userId]: username });
//     res.send("User set online");
//   } catch (err) {
//     res.status(500).send("Error setting user online");
//   }
// });

// // API Endpoint to get online users
// redistRoutes.get("/online-users", async (req, res) => {
//   try {
//     const onlineUsers = await redisClient.hgetall("onlineUsers");
//     res.json(onlineUsers);
//   } catch (err) {
//     res.status(500).send("Error getting online users");
//   }
// });

// export default redistRoutes;
