import React from "react";
import { TiBusinessCard } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

const DoctorCard = () => {
  return (
    <div className="doctor-card-container container">
      <div className="doctor-card-content bg-white p-2 rounded-lg w-[320px]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="./assets/doctorImg.png"
              alt="DoctorProfileImg"
              className="rounded-full w-8 h-8 cursor-pointer"
            />
            <h1 className="text-sm md:text-base">Curious George</h1>
          </div>
          <button className="text-base">Follow</button>
        </div>
        <div className="flex flex-row items-center justify-between text-sm md:text-base">
          <div className="flex flex-row items-center gap-1">
            <TiBusinessCard />
            40 Appointments
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaStar />
            4.5 Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
