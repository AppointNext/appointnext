// import WebSocket from "ws";

// import app, { server } from "./app";
// import redis from "redis";

// const wss = new WebSocket.Server({ server });

// const redisClient = redis.createClient();

// redisClient.on("connect", () => {
//   console.log("Redis client connected");
// });

// redisClient.on("error", (err) => {
//   console.error("Redis error: ", err);
// });

// const userConnections = new Map();

// wss.on("connection", (ws) => {
//   console.log("New client connected");

//   ws.on("message", (message: any) => {
//     const messageData = JSON.parse(message);
//     const { recipient, sender, msg } = messageData;

//     if (recipient) {
//       const recipientWs = userConnections.get(recipient);
//       if (recipientWs && recipientWs.readyState === WebSocket.OPEN) {
//         recipientWs.send(JSON.stringify({ sender, message: msg }));
//       }
//     }
//   });

//   ws.on("close", () => {
//     console.log("Client has disconnected");
//     userConnections.forEach((value, key) => {
//       if (value === ws) {
//         userConnections.delete(key);
//       }
//     });
//   });

//   ws.on("error", (error) => {
//     console.error("WebSocket error: ", error);
//   });
// });

// // API Endpoint to set a user as online
// app.post("/set-online", (req, res) => {
//   const { userId, username } = req.body;

//   // Set user as online in Redis
//   //@ts-ignore
//   redisClient.hSet("onlineUsers", userId, username, (err) => {
//     if (err) {
//       res.status(500).send("Error setting user online");
//     } else {
//       res.send("User set online");
//     }
//   });
// });

// // API Endpoint to get online users
// app.get("/online-users", (req, res) => {
//   //@ts-ignore
//   redisClient.hgetall("onlineUsers", (err, onlineUsers) => {
//     if (err) {
//       res.status(500).send("Error getting online users");
//     } else {
//       res.json(onlineUsers);
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
