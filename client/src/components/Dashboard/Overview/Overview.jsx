import React from "react";
import Nav from "../Nav";
import Hero from "../Hero";
import Appointment from "../Appointment";
import Calendar from "../Calender";

const Overview = () => {
  return (
    <div className="flex flex-col gap-2">
      <Nav />
      <Hero />
      <div className="flex flex-col gap-2 rounded-lg border-2 p-1 border-slate-200">
        <div className=" my-3 flex justify-between px-2">
          <h1 className=" font-semibold">Upcoming Appointments</h1>
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <Appointment />
      </div>
      <div className="border-2 p-1 border-slate-200">
        <Calendar />
      </div>
      <div>
        <Appointment />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Overview;
