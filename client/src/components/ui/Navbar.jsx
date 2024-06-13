import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../utils/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSignUpClick = () => {
    // Add animation class
    setIsAnimating(true);

    // Delay navigation
    setTimeout(() => {
      setIsAnimating(false);

      // Navigate to "/signup"
      navigate("/register");
    }, 500); // Adjust delay time as needed
  };

  return (
    <>
      <div
        className="flex flex-row items-center justify-between md:py-8 xl:py-8 2xl:py-8 py-4 px-4 md:gap-4
      "
      >
        <Logo />
        <div>
          <ul className=" hidden md:flex md:flex-row md:text-[15px] md:gap-4">
            <li className="hover:border-b-2 border-[#003cd8] cursor-pointer">
              About
            </li>
            <li className="hover:border-b-2 border-[#003cd8] cursor-pointer">
              Features
            </li>
            <li className="hover:border-b-2 border-[#003cd8] cursor-pointer">
              Pricing
            </li>
            <li className="hover:border-b-2 border-[#003cd8] cursor-pointer">
              Testimonials
            </li>
            <li className="hover:border-b-2 border-[#003cd8] cursor-pointer">
              Help
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center w-100  flex-row gap-1 cursor-pointer md:w-auto">
          <button className=" rounded-2xl md:py-2 md:text-[12px] text-[10px] md:px-2 xl:px-4 2xl:px-4 px-2 py-1">
            Sign In
          </button>
          <button
            className={`border-[#003CD8] border-2 md:px-2 text-[#003CD8] rounded-2xl md:py-2 hover:shadow-2xl active:translate-y-2 transition-all ${
              isAnimating ? "active:delay-75" : ""
            } md:text-[12px] text-[10px] px-4 py-1`}
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
