import React from "react";

const UpcomingAppointCard = () => {
  return (
    <div className="bg-white p-2 py-4 container  w-[320px] min-w-[320px]  rounded-lg">
      <img
        src="./upcoming.png"
        alt="upcoming task image"
        className="rounded-lg"
      />
      <div>
        <h1>Dr. John Doe(appointment with)</h1>
        <p>About appointment</p>
        <h1>10:00 AM-12:00 AM(time slot)</h1>
        <p>Days Left</p>
      </div>
    </div>
  );
};

export default UpcomingAppointCard;
