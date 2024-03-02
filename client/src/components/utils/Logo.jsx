import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex flex-row items-center cursor-pointer ">
        <img src="./logo.png" alt="logo" className="h-[50px]" />
        <p className="inline md:text-[24px] text-[15px] md:pl-2">
          Appoint<span className="font-bold">Next</span>
        </p>
      </div>
    </>
  );
};

export default Logo;
