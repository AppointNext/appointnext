import React from "react";
import { FaUser } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Feature = () => {
  return (
    <>
      <div className="px-40 my-8 py-12 shadow-2xl shadow-gray-300 flex flex-row justify-between items-center rounded-lg overflow-hidden sm:p-0 md:p-0">
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
      <div className="flex flex-row 2xl:flex-row justify-between m-10 px-36 mt-28 sm:flex-col md:flex-row sm:p-0 xl:flex-row">
        <div className=" w-150">
          <img src="./feature.svg" alt="feature image" className="" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-[50px] font-bold">
            We Provide Many <br /> Features You Can Use
          </h1>
          <p>
            You can explore the features that we provide with fun and
            <br />
            have their own functions each feature.
          </p>
          <ul>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />
              <p className="inline">Powerfull online protection.</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline">Internet without borders.</p>
            </li>
            <li className="flex flex-row items-center gap-2 ">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline">Supercharged VPN.</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline">No specific time limits.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Feature;
