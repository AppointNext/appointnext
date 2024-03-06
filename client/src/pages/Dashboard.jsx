import React, { useState } from "react";
import Appointment from "../components/Dashboard/Appointment";
import Nav from "../components/Dashboard/Nav";
import Hero from "../components/Dashboard/Hero";
import { useSelector } from "react-redux";
import Calendar from "../components/Dashboard/Calender";
import { Routes,Route } from "react-router-dom";

const Dashboard = () => {
  // 1. Overveiw
  // 2. Task
  // 3. Mentor
  // 4. Message
  // 5. Setting
  const [page, setPage] = useState(1);
  return (
    <Routes>
      <Route path="/overview" element={<}/>
    </Routes>
  );
};

export default Dashboard;
