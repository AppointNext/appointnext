"use client";

import React, { use, useState } from "react";
import { GrHide } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "js-cookie";

export default function Page() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    phone: "",
    profileImage: "",
  });
  const [cpassword, setCPassword] = useState("");
  const [showp, setShowP] = useState(false);
  const [showcp, setShowCP] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    console.log(
      userData.email,
      userData.password,
      userData.phone,
      userData.profileImage
    );
  };

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    console.log("submit");
    console.log(userData.password, cpassword);
    console.log(userData);
    if (userData.password !== cpassword) {
      toast.error("password not matched");
      return;
    }
    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("phone", userData.phone);
    formData.append("profileImage", userData.profileImage);
    const response = await axios.post("/api/user/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
  };

  return (
    <form action="" onSubmit={handleSumbit}>
      <div className=" flex flex-row bg-[#ccd5ae]  ">
        <div className="border-2 border-black w-1/2 h-screen lg:block 2xl:block sm:flex flex-col md:block items-center justify-center hidden lg:flex md:flex 2xl:flex  bg-gradient-to-r from-[#fbcac2] to-[#a8c9fe] ">
          <Image
            src="./login.svg"
            width={500} // Set the width of the image
            height={300}
            alt="Picture of the author"
          />
        </div>

        <div className="border-2 border-black w-full sm:w-full md:w-1/2 lg:xl:w-1/2 h-screen flex flex-col items-center justify-center gap-2 ">
          <div className=" left-20 top-4">
            <label htmlFor="profileImage">Profile Image</label>
            <div className="h-[150px] w-[150px] bg-[#d4a373] rounded-full flex flex-col items-center justify-center p-1 ">
              <label htmlFor="profileImage" className="w-[150px] text-center">
                Click to upload
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                value={userData.profileImage}
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </div>
          <div className="flex flex-col w-[400px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-2 border-black rounded p-1  bg-[#d4a373] "
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col relative w-[400px] justify-center">
            <label htmlFor="password">Password</label>
            <input
              type={showp ? "text" : "password"}
              className="border-2 border-black rounded p-1  bg-[#d4a373] "
              name="password"
              value={userData.password}
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
              name="confirm-password"
              id="confirm-password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <GrHide
              onClick={() => setShowCP((prev) => !prev)}
              className="absolute bottom-1 transform -translate-y-1/2 right-2 cursor-pointer"
            ></GrHide>
          </div>
          <div className="flex flex-col w-[400px]">
            <label htmlFor="phone">Phone no</label>
            <input
              type="text"
              className="border-2 border-black rounded p-1  bg-[#d4a373] "
              name="phone"
              value={userData.phone}
              id="phone"
              onChange={handleChange}
            />
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

          <button
            className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1 bg-[#fefae0] "
            type="submit"
          >
            Sign Up
          </button>
          <h1>OR</h1>
          <div className="flex flex-row">
            <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
              <FaGoogle className="text-2xl static" />
              <button className="" type="submit">
                Google
              </button>
            </div>
            <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
              <FaFacebook className="text-2xl" />
              <button className="" type="submit">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </form>
  );
}
