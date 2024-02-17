import React from "react";

const Hero = () => {
  return (
    <div className="px-14 flex flex-row w-screen items-center">
      <div className="w-1/2">
        <p>hello this appointment management app</p>
      </div>
      <div className="w-1/2 ">
        <img src="../../public/hero.svg" className=" w-[800px] " alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
