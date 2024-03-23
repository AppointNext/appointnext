import React from "react";

const UpcomingAppointCard = ({ title, description, time }) => {
  return (
    <div className="bg-white p-2 py-4 container  w-[320px] min-w-[320px]  rounded-lg">
      <img
        src="./upcoming.png"
        alt="upcoming task image"
        className="rounded-lg"
      />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h1>{time}</h1>
        <p>Days Left</p>
      </div>
    </div>
  );
};

export default UpcomingAppointCard;
