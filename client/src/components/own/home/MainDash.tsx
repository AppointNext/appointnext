"use client";

import CalAndAppoint from "./CalAndAppoint";
import DashNav from "./DashNav";
import Sidebar from "./Sidebar";
import StatsComp from "./StatsComp";

export default function MainDash() {
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-row w-full">
          <Sidebar />
          <DashNav />
        </div>
        <StatsComp />
      </div>
      <div>
        <CalAndAppoint />
      </div>
    </div>
  );
}
