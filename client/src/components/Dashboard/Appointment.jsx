import React from "react";

const Appointment = () => {
  return (
    <div>
      <div className="">
        <img
          className="rounded-lg w-screen h-[1/2]"
          src="../../../public/appointdemo.jpg"
          alt=""
        />
        <div>
          <h2 className=" font-bold">Dr.Mishra</h2>
          <div className="text-[#54577A]">AfterNoon at 2:30 pm</div>
          <div>
            <h2>Want to cancel ?</h2>
            <button className=" bg-blue-600 font-semibold text-white rounded-md p-2 hover:shadow-xl active:translate-y-2 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
