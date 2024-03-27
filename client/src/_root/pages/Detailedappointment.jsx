import React, { useState } from "react";
import AppointmentNav from "../../components/shared/AppointmentNav";
import { FiClock } from "react-icons/fi";

const Detailedappointment = ({ dname, description, time, specialization }) => {
  return (
    <div className="">
      <AppointmentNav />
      <div className="flex flex-col items-center mt-8">
        <div className="max-w-[600px] rounded-lg overflow-hidden shadow-md">
          <img src="./upcoming.png" alt="Doctor" className="w-full" />
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="font-bold text-2xl">Dr. Mishra</h1>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <p className="text-gray-600 text-sm">Afternoon 3:00 pm</p>
              </div>
            </div>
            <div className="mb-4">
              <h1 className="font-semibold text-lg">Description</h1>
              <p>{description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailedappointment;
