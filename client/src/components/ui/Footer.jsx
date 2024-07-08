import React from "react";
import Logo from "../utils/Logo";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:items-center md:justify-between justify-between md:gap-6 p-8 gap-4 items-center">
      <div className="flex flex-col items-center md:items-start   gap-8 py-8 md:flex-col md:w-400px md:w-1/2 xl:items-start 2xl:items-start ">
        <Logo />
        <h1 className=" text-sm md:text-base max-w-prose md:  ">
          AppointNext lets you seamlessly book appointments with doctors at
          clinics and hospitals. Explore the future of healthcare with our
          technologically advanced and accessible medical website.
        </h1>
        <div className="md:flex hidden gap-4">
          <FaFacebookF className="text-blue-900" />
          <FaTwitter className="text-blue-900" />
          <FaInstagram className="text-blue-900" />
        </div>
      </div>
      <div className="md:w-1/2 md:flex-row md:flex md:gap-4 md:justify-between md:px-10 gap-8 flex items-start justify-evenly">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start md:justify-normal py-4">
          <h3 className="text-sm md:text-lg font-bold mb-2">Product</h3>
          <p className=" text-sm md:text-base ">Download</p>
          <p className=" text-sm md:text-base ">Pricing</p>
          <p className="text-sm md:text-base ">Locations</p>
          <p className="text-sm md:text-base ">Countries</p>
          <p className="text-sm md:text-base">Server</p>
          <p className="text-sm md:text-base">Blogs</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-center md:items-start md:justify-normal py-4">
          <h3 className="text-sm md:text-lg font-bold mb-2">Engage</h3>
          <p className=" text-sm md:text-base">AppointNext</p>
          <p className="text-sm md:text-base">FAQ</p>
          <p className="text-sm md:text-base">Tutorials</p>
          <p className="text-sm md:text-base">About Us</p>
          <p className="text-sm md:text-base">Privacy Policy</p>
          <p className="text-sm md:text-base ">Terms of Service</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center md:items-start text-center md:justify-normal py-4">
          <h3 className="text-sm md:text-lg font-bold mb-2">Earn Money</h3>
          <p className=" text-sm md:text-base">Affiliate</p>
          <p className="text-sm md:text-base">Become Partner</p>
        </div>
      </div>
      <div className="flex md:hidden gap-4">
        <FaFacebookF className="text-[#F53838]" />
        <FaTwitter className="text-[#F53838]" />
        <FaInstagram className="text-[#F53838]" />
      </div>
    </div>
  );
};

export default Footer;
