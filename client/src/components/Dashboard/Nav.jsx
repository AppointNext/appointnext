import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Nav = () => {
  const [, , removeCookie] = useCookies(["refreshToken", "accessToken"]);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <div className="py-4">
      <nav className="flex justify-between w-screen items-center px-4">
        <div className="flex justify-center items-center px-2 w-[1/2]">
          <i
            className="fa-solid fa-bars cursor-pointer"
            onClick={toggleDropdown}
          ></i>
          {isDropdownOpen && (
            <div className="absolute left-2 top-10 mt-2 w-32 bg-white rounded-lg shadow-xl z-10">
              <div className="py-1">
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px] active:bg-indigo-500 "
                >
                  Overview
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  Task
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  Mentor
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  Message
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                >
                  Setting
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center full gap-2">
          <i className="fa-solid fa-bell"></i>
          <div className="relative">
            <img
              className="rounded-full w-10 h-10 cursor-pointer"
              src="./profile.png"
              alt="profile"
              onClick={toggleDropdown2}
            />
            {isDropdownOpen2 && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl z-10">
                <div className="py-1">
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                  >
                    Settings
                  </NavLink>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white text-[14px]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  {/* Add more options as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
