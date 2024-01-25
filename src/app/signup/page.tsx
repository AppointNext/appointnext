"use client";

import React, { use, useState } from "react";
import { GrHide } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
const page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [showp, setShowP] = useState(false);
  const [showcp, setShowCP] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    //console.log(userData.username, userData.password);
  };
  return (
    <div className=" flex flex-row bg-[#ccd5ae]  ">
      <div className="border-2 border-black w-1/2 h-screen lg:block 2xl:block sm:flex flex-col md:block items-center justify-center hidden lg:flex md:flex 2xl:flex">
        <Image
          src="./login.svg"
          width={500} // Set the width of the image
          height={300}
        />
      </div>

      <div className="border-2 border-black w-full sm:w-full md:w-1/2 lg:xl:w-1/2 h-screen flex flex-col items-center justify-center gap-2 ">
        <div className=" left-20 top-4">
          <label htmlFor="uploadImage">Profile Image</label>
          <div className="h-[140px] w-[140px] bg-[#d4a373] rounded-full flex flex-col items-center justify-center p-1 ">
            <label htmlFor="uploadImage" className="w-[150px] text-center">
              Click to upload
            </label>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              className="hidden"
            />
          </div>
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="border-2 border-black rounded p-1  bg-[#d4a373] "
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col relative w-[400px] justify-center">
          <label htmlFor="password">Password</label>
          <input
            type={showp ? "text" : "password"}
            className="border-2 border-black rounded p-1  bg-[#d4a373] "
            name="username"
            id="password"
            onChange={handleChange}
          />
          <GrHide
            className="absolute bottom-1 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowP((prev) => !prev)}
          ></GrHide>
        </div>
        <div className="flex flex-col relative w-[400px] justify-center">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type={showcp ? "text" : "password"}
            className="border-2 border-black rounded p-1 pl-2 bg-[#d4a373]"
            name="password"
            id="confirm-password"
            onChange={handleChange}
          />
          <GrHide
            onClick={() => setShowCP((prev) => !prev)}
            className="absolute bottom-1 transform -translate-y-1/2 right-2 cursor-pointer"
          ></GrHide>
        </div>

        <p>
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className=" hover:cursor-pointer hover:text-blue-500 text-blue-400"
          >
            wanna login....
          </span>
        </p>

        <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1 bg-[#fefae0] ">
          Sign Up
        </button>
        <h1>OR</h1>
        <div className="flex flex-row">
          <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
            <FaGoogle className="text-2xl static" />
            <button className="">Google</button>
          </div>
          <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
            <FaFacebook className="text-2xl" />
            <button className="">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
