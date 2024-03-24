import React from "react";

const AppointsCard = ({ dname, specialization, description, time }) => {
  return (
    <div className="bg-white p-2 py-4 container  w-[275px] min-w-[275px]  rounded-lg ">
      <img
        src="./upcoming.png"
        alt="upcoming task image"
        className="rounded-lg"
      />
      <div>
        <h1 className=" font-bold">Dr. John Doe(appointment with)</h1>
        <p className=" font-semibold text-sm text-blue-300">Cardiologist,MD</p>
        <p>About appointment</p>
        <p>Available time slots</p>
        <h1>10:00 AM-12:00 AM(time slot)</h1>
      </div>
    </div>
  );
};

export default AppointsCard;
