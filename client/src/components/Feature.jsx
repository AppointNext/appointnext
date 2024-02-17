import React from "react";
import { FaUser } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="px-40 my-8 py-12 shadow-2xl shadow-gray-300 flex flex-row justify-between items-center rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <FaUser />
        <p>Manage Patients</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <FaUser />
        <p>Manage Patients</p>
      </div>
      <div className="flex flex-row items-center justify-between ">
        <FaUser />
        <p>Manage Patients</p>
      </div>
    </div>
  );
};

export default Feature;
