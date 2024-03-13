import React from "react";

const Hero = () => {
  return (
    <div className=" bg-white">
      <div className=" m-4">
        <div className="  px-2 rounded-md w-[150px] ">
          <h1 className=" font-bold">Name of Patient</h1>
          <p className=" text-[#54577A]">sdlfshjdh</p>
        </div>
      </div>
      <div className=" flex flex-row bg-[#141522] rounded-md text-white px-2 py-2 items-center w-full">
        <div className=" flex-row border-r-2 border-r-[#546FFF] px-1 my-2">
          <h2>pending Appoint</h2>
          <h1 className=" font-bold">65</h1>
        </div>
        <div className="mx-1 py-3 px-2  items-center flex border-r-2 border-r-[#546FFF] my-2">
          <h1 className=" text-center">50%</h1>
        </div>
        <div className="py-2 my-2 flex-col pl-2 mx-2 item-center">
          <h2 className=" px-2">5</h2>
          <h2 className=" text-[#8E92BC]">task</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
