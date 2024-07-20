"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthNav from "@/components/own/AuthNav";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const { pathname }: any = router;

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <AuthNav />
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
        <div className="flex items-center justify-center h-full w-full md:w-1/2 overflow-scroll ">
          {children}
        </div>
        <div className="hidden h-full md:flex md:w-1/2 justify-center items-center bg-blue-400 z-50">
          <Image
            src={"/assets/auth/login.svg"}
            alt="login svg"
            width={200}
            height={100}
          ></Image>
        </div>
      </div>
    </div>
  );
}
