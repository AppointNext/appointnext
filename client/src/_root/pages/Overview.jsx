import React from "react";
import Hero from "../../components/ui/Dashboard/Hero";
import Calendar from "../../components/ui/Dashboard/Calender";
import DoctorCard from "../../components/shared/DoctorCard";

const Overview = () => {
  return (
    <div className="md:ml-[200px] bg-[#f5f5f7]">
      <div className="flex xl:flex-row xl:justify-between md:justify-between bg-[#F5F5F7] ">
        <Hero />
        <Calendar />
      </div>
      <div className="w-[800px]">
        <div className="flex flex-row justify-between">
          <div>Monthly Doctors</div>
          <div>&lt; &gt;</div>
        </div>
        <div className="flex flex-row overflow-x-auto   gap-3 ">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
      <div className="flex flex-row">
        <div>Upcoming Appointments</div>
        <div>&lt; &gt;</div>
      </div>
    </div>
  );
};

export default Overview;
