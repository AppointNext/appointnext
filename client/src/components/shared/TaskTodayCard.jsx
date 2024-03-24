import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Button from "./Button";

const TaskTodayCard = ({ title, description, dateTime }) => {
  return (
    <div className="p-4 m-2 bg-white rounded-lg w-auto flex flex-col gap-2">
      <div className="flex flex-row justify-between ">
        <h1>Appointment Today</h1>
        <BsThreeDots />
      </div>
      <img
        src="./todaytask.png"
        alt="today's appointment"
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <div className="border-[#c8c8c8] border-b-[1px]">
          <h1>{title}</h1>
          <h1>{}</h1>
        </div>
        <div>
          <h1>Appointment Details</h1>
          <ol>
            <li>Understanding the tools in figma</li>
            <li>understand the basic of making design</li>
          </ol>
          <Button title="Go to Details" />
        </div>
      </div>
    </div>
  );
};

export default TaskTodayCard;
