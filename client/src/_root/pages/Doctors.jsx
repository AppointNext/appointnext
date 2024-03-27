import React from "react";
import { CiSearch } from "react-icons/ci";
import AppointmentNav from "../../components/shared/AppointmentNav";
import DoctorCard from "../../components/shared/DoctorCard";
// import "../pages/"
const Doctors = () => {
  return (
    <div className="mt-20 doctor-container">
      <AppointmentNav />

      <div className="flex flex-col gap-y-5">
        <div>
          <div className="">
            <h1 className="font-bold text-[23px]">Recent Doctors</h1>
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
        </div>

        <div>
          <div className="">
            <h1 className="font-bold text-[23px]">Doctors</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden gap-2 doctor-scroll-container">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
