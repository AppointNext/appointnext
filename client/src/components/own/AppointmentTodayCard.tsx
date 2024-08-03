import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

export default function AppointmentTodayCard() {
  const [Details, setDetails] = useState([
    "Understanding the tools in Figma",
    "Understand basics of making design",
    "Design a mobile application with figma",
  ]);
  return (
    <div className="px-2 py-2 bg-white rounded-xl lg:w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-sm font-bold">Appointment Today</h1>
        <BsThreeDots />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src="" alt="" />
          <h1 className="fond-bold text-lg">Creating Awesome Mobile Apps</h1>
          <p className="text-sm">UI/UX Designer</p>
          <Divider />
          <div>
            <h1>Appointment Details</h1>
            <p className=" text-sm">UI/UX Designer</p>
            <ul className="flex flex-col gap-2 ">
              {Details.map((detail: string, index: number) => (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm">{detail}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Button
          className="bg-primary text-white w-full  rounded-xl my-2"
          variant="contained"
        >
          Go To Details
        </Button>
      </div>
    </div>
  );
}
