import React, { useState } from "react";

const UpcomingAppointDoctorCard = () => {
  const [desc, setDesc] = useState(false);

  function handleDesc() {
    setDesc(!desc);
  }

  return (
    <div
      className={`relative bg-white p-2 py-4 container border-2 border-slate-200 rounded-lg m-3 ${
        desc ? "w-[400px] h-[450px]" : "w-[320px] h-[370px]"
      }`}
    >
      <img
        src="./upcoming.png"
        alt="upcoming task image"
        className="rounded-lg"
      />
      <div>
        <h1>Dr. John Doe (appointment with)</h1>
        <p>About appointment</p>
        <h1>10:00 AM - 12:00 PM (time slot)</h1>
        <p>Days Left</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-blue-500 text-[20px] rounded-xl p-1 text-white w-[85px]">
          pending
        </div>
        <button
          onClick={handleDesc}
          className="text-[20px] rounded-xl p-1 text-blue-500 underline hover:scale-105 transition-all w-[85px]"
        >
          {desc ? "Less" : "View"}
        </button>
      </div>
      {desc && (
        <div className="absolute bg-white p-2 py-4 container border-2 border-slate-200 rounded-lg m-3 w-[400px] h-[450px]">
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consectetur magni nostrum atque deleniti beatae ut ea minima ipsa a,
            eaque nesciunt animi similique distinctio recusandae ratione sed cum
            ab nobis itaque omnis quidem officiis?
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointDoctorCard;
