"use client";

import CalAndAppoint from "./CalAndAppoint";
import DashNav from "./DashNav";
import MonthlyDoctor from "./MonthlyDoctor";
import Sidebar from "./Sidebar";
import StatsComp from "./StatsComp";
import UpComingAppointments from "./UpComingAppointments";

export default function MainDash() {
  return (
    <div className="w-full h-full">
      <div>
        <div className="flex flex-row w-full bg-bg_primary lg:gap-4">
          <div className="lg:hidden">
            <Sidebar />
          </div>
          <DashNav />
        </div>
        <StatsComp />
      </div>
      <div className=" flex flex-col xl:gap-4">
        <div className="md:hidden ">
          <CalAndAppoint />
        </div>
        <div>
          <MonthlyDoctor />
        </div>
        <div>
          <UpComingAppointments />
        </div>
      </div>
    </div>
  );
}
