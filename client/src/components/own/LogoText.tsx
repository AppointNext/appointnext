"use client";
import Image from "next/image";
import LogoSVG from "@/assets/logo.svg";
import Link from "next/link";

const LogoText = () => {
  return (
    <div className="flex flex-row items-center gap-2  p-4">
      <div>
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={34}
          height={34}
          className="h-auto w-auto lg:h-12 lg:w-12"
        />
      </div>
      <div>
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
          Appoint<span className="font-extrabold">Next</span>
        </h1>
      </div>
    </div>
  );
};

export default LogoText;
