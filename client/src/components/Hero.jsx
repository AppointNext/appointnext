import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-row w-screen items-center overflow-hidden">
      <div className="w-1/2 ">
        <p className=" sm:text-[15px] text-[15px] ">
          hello this appointment management app
        </p>
        <button className="bg-[#003cd8] text-white xl:py-4 xl:px-10 px-2 py-1 hover:shadow-2xl hover:shadow-[#003cd8] rounded-xl transition-all active:translate-y-3 ">
          Get Started
        </button>
      </div>
      <div className="w-1/2 ">
        <img src="./hero.svg" className=" w-[800px] " alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
