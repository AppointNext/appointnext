"use client";
import { GoogleLogin } from "@matheusluizn/react-google-login";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrHide } from "react-icons/gr";
import Image from "next/image";
import { gapi } from "gapi-script";
const page = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  const router = useRouter();
  const [showp, setShowP] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const successLogin = (response: any) => {
    console.log(response);
  };

  const failedLogin = (response: any) => {
    console.log(response);
  };
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const handleGoogleLogin = (response: any) => {};

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    //console.log(userData.username, userData.password);
  };
  return (
    <div className=" flex flex-row bg-[#ccd5ae] ">
      <div className="border-2 border-black w-1/2 h-screen lg:block 2xl:block sm:flex flex justify-center 2xl:flex items-center md:block items-center justify-center hidden lg:flex md:flex">
        <Image
          src="./login.svg"
          width={500} // Set the width of the image
          height={300}
          alt="Picture of the author"
        />
      </div>

      <div className="border-2 border-black w-full sm:w-full md:w-1/2 lg:xl:w-1/2 h-screen flex flex-col items-center justify-center gap-2 ">
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
        <div className="flex flex-col w-[400px] relative ">
          <label htmlFor="password">Password</label>
          <input
            type={showp ? "text" : "password"}
            className="border-2 border-black rounded p-1 bg-[#d4a373] "
            name="password"
            id="password"
            onChange={handleChange}
          />
          <GrHide
            className="absolute bottom-1 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowP((prev) => !prev)}
          ></GrHide>
        </div>
        <p>
          Dont have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className=" hover:cursor-pointer hover:text-blue-500 text-blue-400"
          >
            create one....
          </span>
        </p>

        <button className="border-2 border-black rounded-xl p-2 px-4 m-1 active:translate-y-1 bg-[#fefae0] ">
          Login
        </button>
        <h1>OR</h1>
        <div className="flex flex-row">
          <div className=" flex flex-row border-2 border-black rounded-xl p-2  px-2 m-1 active:translate-y-1 items-center justify-between gap-1 w-[150px] bg-[#fefae0]">
            <FaGoogle className="text-2xl static" />
            <button className="">Google</button>
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={successLogin}
              onFailure={failedLogin}
            />
            ;
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
