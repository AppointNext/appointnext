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
        <div className="flex flex-row w-full bg-bg_primary">
          <Sidebar />
          <DashNav />
        </div>
        <StatsComp />
      </div>
      <div className="md:hidden">
        <CalAndAppoint />
      </div>
      <div>
        <MonthlyDoctor />
      </div>
      <div>
        <UpComingAppointments />
      </div>
    </div>
  );
}
