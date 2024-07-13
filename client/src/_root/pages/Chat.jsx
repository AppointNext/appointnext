import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/ui/Sidebar";
import DoctorSidebar from "../../components/ui/DoctorSidebar";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  let ws = useRef(null);

  useEffect(() => {
    const WS_BACKEND_URL =
      "ws:" + import.meta.env.VITE_BACKEND_BASE_URL.split("http")[1];
    // Fetch doctors from your backend
    fetchDoctors();

    // Connect to WebSocket server
    ws.current = new WebSocket(WS_BACKEND_URL);

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

  const fetchDoctors = async () => {
    // Replace with your actual API call
    const response = await axios.get();
    const data = await response.json();
    setDoctors(data);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "" && selectedDoctor) {
      const messageData = {
        text: input,
        sender: "You",
        receiver: selectedDoctor.id,
      };
      setMessages([...messages, messageData]);
      ws.current.send(JSON.stringify(messageData));
      setInput("");
    }
  };

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setMessages([]); // Clear messages when selecting a new doctor
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar showIconsOnly={true} />
      <DoctorSidebar doctors={doctors} onSelectDoctor={handleSelectDoctor} />
      <div className="flex flex-col flex-1">
        <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">Chat App</h1>
          {selectedDoctor && <span>Chatting with {selectedDoctor.name}</span>}
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
              disabled={!selectedDoctor}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
              onClick={handleSendMessage}
              disabled={!selectedDoctor}
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
