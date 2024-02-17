import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-row w-screen items-center">
      <div className="w-1/2">
        <p>hello this appointment management app</p>
        <button className="bg-[#003cd8] text-white py-4 px-10 shadow-2xl shadow-[#003cd8] rounded-xl ">
          Get Started
        </button>
      </div>
      <div className="w-1/2 ">
        <img src="../../public/hero.svg" className=" w-[800px] " alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
