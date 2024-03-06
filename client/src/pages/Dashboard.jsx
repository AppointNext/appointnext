import React, { useState } from "react";
import Appointment from "../components/Dashboard/Appointment";
import { Routes, Route } from "react-router-dom";
import Overview from "../components/Dashboard/Overview/Overview";

const Dashboard = () => {
  // 1. Overveiw
  // 2. Task
  // 3. Mentor
  // 4. Message
  // 5. Setting
  const [page, setPage] = useState(1);
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/task" element={<Appointment />} />
      <Route path="/mentor" element={<Appointment />} />
      <Route path="/message" element={<Appointment />} />
      <Route path="/setting" element={<Appointment />} />
    </Routes>
  );
};

export default Dashboard;
