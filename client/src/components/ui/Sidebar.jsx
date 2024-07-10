import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";

import Logo from "../utils/Logo";
import { FaBell } from "react-icons/fa";

const Sidebar = () => {
  const [, , removeCookie] = useCookies(["refreshToken", "accessToken"]);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Always open for non-mobile devices
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleLogout = async () => {
    const response = await axios.post("http://127.0.0.1:8000/api/logout", {
      username,
    });
    if (response.data.success === true) {
      removeCookie("refreshToken", { path: "/" });
      removeCookie("accessToken", { path: "/" });
      localStorage.removeItem("username");
      navigate("/login");
    }
  };

  return (
    <div className="py-0 fixed top-0  ">
      <nav className="flex justify-between w-screen items-center px-4 bg-white py-1">
        <div className="flex justify-center items-center px-2 w-[1/2]">
          <IoMenuSharp
            className="xl:hidden md:hidden cursor-pointer text-3xl"
            onClick={toggleDropdown}
          ></IoMenuSharp>
          {isDropdownOpen && (
            <div className="absolute left-2 top-6 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 xl:h-screen flex flex-col items-center md:left-0 md:top-0 xl:left-0 xl:top-0 md:h-screen  ">
              <div className="py-1">
                <Link
                  to="/overview"
                  className="block px-4 py-2 text-gray-800 text-[14px] "
                >
                  <div className="sm:flex flex-row items-center gap-2 hidden xl:block">
                    <Logo />
                  </div>
                </Link>
                <Link
                  to="/overview"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px] active:bg-indigo-500 "
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <HiOutlineSquares2X2 />
                    Overview
                  </div>
                </Link>
                <Link
                  to="/appointments"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <SlBookOpen />
                    Appointments
                  </div>
                </Link>
                <Link
                  to="/doctors"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <FaUserDoctor />
                    Doctors
                  </div>
                </Link>
                <Link
                  to="/Chats"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <CiChat1 />
                    Chat
                  </div>
                </Link>
                <Link
                  to="/Profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <AiOutlineMessage />
                    Profile
                  </div>
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <IoSettingsOutline />
                    Settings
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex justify-center items-center full gap-4 mt-4  ">
          <FaBell className="text-2xl cursor-pointer"></FaBell>
          <div className="relative">
            <img
              className="rounded-full w-10 h-10 cursor-pointer "
              src="./profile.png"
              alt="profile"
              onClick={toggleDropdown2}
            />
            {isDropdownOpen2 && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl z-10">
                <div className="py-1">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                  >
                    Settings
                  </Link>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
