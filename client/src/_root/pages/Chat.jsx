import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  let ws = useRef(null);

  useEffect(() => {
    // Connect to WebSocket server
    ws.current = new WebSocket("ws://localhost:3000");

    // Handle incoming messages
    ws.current.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, messageData]);
    };

    // Cleanup on component unmount
    return () => {
      ws.current.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const messageData = { text: input, sender: "You" };
      setMessages([...messages, messageData]);
      ws.current.send(JSON.stringify(messageData));
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Chat App</h1>
      </header>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender === "You" ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              <span className="font-semibold">{message.sender}</span>:{" "}
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <footer className="p-4">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
