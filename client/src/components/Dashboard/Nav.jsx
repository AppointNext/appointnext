import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const username = userData.username;
  console.log(userData, username);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    const response = await axios.post("http://127.0.0.1:8000/api/logout", {
      username,
    });
    if (response.data.success === true) {
      navigate("/login");
    }
  };

  return (
    <div className="py-4">
      <nav className="flex justify-between w-screen items-center px-4">
        <div className="flex justify-center items-center px-2 w-[1/2]">
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="flex justify-center items-center full gap-2">
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>

          <div className="relative">
            <img
              className="rounded-full w-10 h-10 cursor-pointer"
              src="./profile.png"
              alt="profile"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl z-10">
                <div className="py-1">
                  <Link
                    href="#"
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
