"use client";

import CalAndAppoint from "./CalAndAppoint";
import DashNav from "./DashNav";
import MonthlyDoctor from "./MonthlyDoctor";
import Sidebar from "./Sidebar";
import StatsComp from "./StatsComp";

export default function MainDash() {
  return (
    <div className="w-full">
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
    </div>
  );
}
