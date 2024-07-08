import React from "react";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <div className=" flex flex-row w-full bg-cyan-200 items-center overflow-hidden px-5">
      <div className="w-1/2 ">
        <p className=" text-4xl sm:text-2xl md:text-6xl text-blue-800 font-black ">
          Appoint <span className="text-black"> Next</span>
        </p>
        <p className=" mt-5 mb-5 text-base sm:text-sm md:text-lg  text-gray-500 font-semibold">
          You can book your appointment online at any time of the day because we
          care about you
        </p>

        <Button title="Get Started" />
      </div>
      <div className="w-1/2 ">
        <img src="../../../hero.svg" className=" w-[700px] " alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
