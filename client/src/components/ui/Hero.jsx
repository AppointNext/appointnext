import React from "react";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <div className=" flex flex-row w-full items-center overflow-hidden px-5">
      <div className="w-1/2 ">
        <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-800  font-black ">
          Appoint <span className="text-black"> Next</span>
        </p>
        <p className=" mt-5 mb-5 text-sm sm:text-base md:text-lg  text-gray-500 font-semibold">
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
