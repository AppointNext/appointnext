"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Feature from "@/components/Feature/Feature";

const page = () => {
  const listItems = [
    { name: "Home", link: "/" },
    { name: "Contact Us", link: "/contact" },
    { name: "About Us", link: "/about" },
    { name: "Login", link: "/login" },
    { name: "Signup", link: "/signup" },
  ];

  return (
    <div>
      {/* we are going to make navbar */}
      <div className="flex flex-row w-screen border-b-[1px] border-black shadow-lg p-3 bg-[#FFC8DD] ">
        <ul className="flex flex-row items-center  justify-between w-full ">
          <Link href="">
            <li>
              <Image
                src="/logo-only-removebg-preview.png"
                width={50}
                height={50}
                alt="appoint-next-logo"
              />
            </li>
          </Link>
          {listItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <li className="hover:font-bold transition-all w-[150px]">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="h-screen w-screen bg-[#ffffff] flex flex-row items-center justify-center border-b-[1px] border-black shadow-2xl
      "
      >
        <div className="p-40">Book Appointment like never before</div>
        <div>
          <Image
            className=""
            src="/hero-bg.png"
            width={window.innerWidth}
            height={window.innerHeight}
            alt="Picture of the author"
          />
        </div>
      </div>
      <h1>hello</h1>
      <Feature />
    </div>
  );
};

export default page;
