"use client";

import Sidebar from "@/components/own/home/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row w-full h-full bg-[#F5F5F7]">
      <div className="fix top-0 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
