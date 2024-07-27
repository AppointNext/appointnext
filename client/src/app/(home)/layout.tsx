"use client";

import Sidebar from "@/components/own/home/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row w-full h-full bg-[#F5F5F7]">
      {/* <div className="h-full">
        <Sidebar />
      </div> */}
      <div className="h-full w-full">
        {/* <Sidebar /> */}
        {children}
      </div>
    </div>
  );
}
