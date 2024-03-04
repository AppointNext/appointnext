import React from "react";

const Appointment = () => {
  return (
    <div>
      <div className=" my-3 flex justify-between px-2">
        <h1 className=" font-semibold">Upcoming Appointments</h1>
        <div className="flex gap-1 items-center">
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div className=" rounded-lg border-2 p-2 border-slate-200">
        <img
          className="rounded-lg w-screen h-[1/2]"
          src="./appointdemo.jpg"
          alt=""
        />
        <div>
          <h2 className=" font-bold">Dr.Mishra</h2>
          <div className="text-[#54577A]">AfterNoon at 2:30 pm</div>
          <div>
            <h2>Want to cancel ?</h2>
            <button className=" bg-blue-600 font-semibold text-white rounded-md p-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
