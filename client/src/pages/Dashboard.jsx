import React from "react";
import Appointment from "../components/Dashboard/Appointment";
import Nav from "../components/Dashboard/Nav";
import Hero from "../components/Dashboard/Hero";

const Dashboard = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Appointment/>
    </div>
  );
};

export default Dashboard;
