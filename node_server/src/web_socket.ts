import WebSocket from "ws";
import { v4 as uuid } from "uuid";

const userConnections: { [key: string]: WebSocket } = {};

export function setupWebSocketServer(server: any) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws: WebSocket) => {
    const connectionId = uuid();
    // @ts-ignore
    ws.id = connectionId;
    console.log("New connection", connectionId);

    ws.on("message", (data: WebSocket.Data) => {
      try {
        const dataString = data.toString();
        const parsedData = JSON.parse(dataString);

        const { userId, type, message, receiver } = parsedData;

        if (type === "connect") {
          userConnections[userId] = ws;
          console.log(`User ${userId} connected`);
        } else if (type === "message") {
          console.log(`Message from ${userId} to ${receiver}: ${message}`);

          const receiverSocket = userConnections[receiver];
          if (receiverSocket) {
            receiverSocket.send(JSON.stringify({ userId, message }));
          }
        }
      } catch (error) {
        console.error("Error handling WebSocket message:", error);
      }
    });

    ws.on("close", () => {
      for (const userId in userConnections) {
        if (userConnections[userId] === ws) {
          delete userConnections[userId];
          console.log(`User ${userId} disconnected`);
          break;
        }
      }
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
  });

  return wss;
}
