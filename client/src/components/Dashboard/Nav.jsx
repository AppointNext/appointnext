import React from "react";

const Nav = () => {
  return (
    <div className=" py-4">
      <nav className=" flex justify-between w-screen items-center px-4">
        <div className=" flex justify-center items-center  px-2 w-[1/2]">
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className=" flex justify-center items-center full gap-2">
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>

          <div>
            img
            <img />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
