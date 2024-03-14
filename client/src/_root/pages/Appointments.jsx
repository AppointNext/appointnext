import React from "react";
import Hero from "../../components/ui/Dashboard/Hero";

import AppointsCard from "../../components/shared/Appointments";
import AppointmentNav from "../../components/shared/AppointmentNav";
const Appointments = () => {
  return (
    <div className="ml-[200px]">
      <AppointmentNav/>
      <div className=" gap-y-4">
        <p>Time Limit</p>
        <div className="flex flex-row overflow-x-auto gap-3">
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
        </div>
        <div className="flex flex-row overflow-x-auto   gap-3 ">
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
          <AppointsCard/>
        </div>
      </div>
      
    </div>
  );
};

export default Appointments;
