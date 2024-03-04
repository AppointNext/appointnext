import React from "react";

const Appointment = () => {
  return (
    <div>
      <div className="">
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
