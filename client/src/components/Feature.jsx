import React from "react";
import { FaUser } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="px-40 my-8 py-12 shadow-2xl shadow-gray-300 flex flex-row justify-between items-center rounded-lg">
      <div className="flex flex-row items-center justify-between w-[190px]">
        <FaUser />
        <p>Manage Patients</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <FaUser className="bg-[#C2D0F5] rounded-full h-10 w-10 text-[#003cd8] p-2" />

        <p>Manage Patients</p>
      </div>
      <div className="flex flex-row items-center justify-between w-[190px] ">
        <FaUser />
        <p>Manage Patients</p>
      </div>
    </div>
  );
};

export default Feature;
