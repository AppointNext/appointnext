import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/signup");
    }, 500); // Adjust delay time as needed
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between py-8">
        <div className="flex flex-row items-center cursor-pointer">
          <img src="./logo.png" alt="logo" className="h-[50px]" />
          <p className="inline text-[24px] pl-2">
            Appoint<span className="font-bold">Next</span>
          </p>
        </div>
        <div>
          <ul className="flex flex-row justify-between xl:sm:w-screen w-[400px] md:w-screen 2xl:w-[500px] text-[16px] border-2 border-white h-[35px] transition-colors">
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
        <div className="flex justify-between items-center w-100 flex-row gap-1 cursor-pointer">
          <button className="px-10 rounded-2xl py-2">Sign In</button>
          <button
            className={`border-[#003CD8] border-2 px-10 text-[#003CD8] rounded-2xl py-2 hover:shadow-2xl active:translate-y-2 transition-all ${
              isAnimating ? "active:delay-75" : ""
            }`}
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
