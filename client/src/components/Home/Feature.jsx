import React from "react";
import { FaUser } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Feature = () => {
  return (
    <>
      {/* px-40 my-8 py-12 shadow-2xl shadow-gray-300 flex flex-row justify-between items-center rounded-lg overflow-hidden sm:p-0 md:p-0 */}
      <div className="w-screen flex flex-row sm:text-[15px] md:text-[15px] text-[12px]  my-2 shadow-xl rounded-sm justify-between px-2">
        <div className="flex flex-row items-center justify-between md:w-[190px] xl:w-[190px] gap-1 w-auto ">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto " />
          <p className="">Manage Patients</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 w-auto">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto" />

          <p>Manage Patients</p>
        </div>
        <div className="flex flex-row items-center justify-between md:w-[190px] xl:w-[190px] w-auto gap-1 ">
          <FaUser className="bg-[#C2D0F5] rounded-full md:h-10 md:w-10 text-[#003cd8] md:p-2 p-1 h-5 w-auto" />
          <p>Manage Patients</p>
        </div>
      </div>
      <div className="flex md:flex-row md:gap-4 justify-between m-2 mt-10 flex-col gap-2">
        <div className=" w-150">
          <img src="./feature.svg" alt="feature image" className="" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className=" md:text-[25px] xl:text-[50px] 2xl:text-[50px] text-[20px] font-bold">
            We Provide Many <br /> Features You Can Use
          </h1>
          <p className="text-[12px] md:text-[15px] xl:text-[15px] ">
            You can explore the features that we provide with <br /> fun and
            have their own functions each feature.
          </p>
          <ul>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />
              <p className="inline  text-[15px]  ">
                Powerfull online protection.
              </p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline text-[15px]">Internet without borders.</p>
            </li>
            <li className="flex flex-row items-center gap-2 ">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline text-[15px]">Supercharged VPN.</p>
            </li>
            <li className="flex flex-row items-center gap-2">
              <RiCheckboxCircleFill className="text-[#2FAB73] " />{" "}
              <p className="inline text-[15px]">No specific time limits.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Feature;
