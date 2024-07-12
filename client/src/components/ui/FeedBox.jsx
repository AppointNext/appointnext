import React from "react";

const FeedBox = ({ user }) => {
  return (
    <div className="border-[#DDDDDD] border-2 rounded-md w-screen mr-4">
      <div className="flex flex-row gap-2 items-center justify-between px-2 py-2">
        <div className="flex flex-row items-center gap-5">
          <div className="w-10">
            <img src="./TestUserImg.png" alt="" />
          </div>
          <div>
            <h3 className=" text-[13px] font-bold ">{user.name}</h3>
            <p className=" text-[10px] ">{user.address}</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <p className=" text-[12px] ">4.5</p>
          <img className="h-5" src="./star.png" alt="" />
        </div>
      </div>
      <div className=" text-[12px] px-2 pb-4">
        {/* Wow!... I am very happy to use this Appointment app it turned out to be
        more than my expectations and so fac there have been no
        problems.AppointNext always the best */}
        {user.feedback}
      </div>
    </div>
  );
};

export default FeedBox;
