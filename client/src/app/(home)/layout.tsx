"use client";

import Sidebar from "@/components/own/home/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
