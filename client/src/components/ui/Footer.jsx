import React from "react";
import Logo from "../utils/Logo";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:items-center md:justify-between justify-between md:gap-6 p-8 gap-4 items-center">
      <div className="flex flex-col items-center md:items-start   gap-8 py-8 md:flex-col md:w-400px md:w-1/2 xl:items-start 2xl:items-start ">
        <Logo />
        <h1 className=" text-sm md:text-base max-w-prose md:text-[12px] ">
          AppointNext LaslesVPN is a private virtual network that has unique
          features and has high security.
        </h1>
<div className="md:flex hidden gap-4">
        <FaFacebookF className="text-[#F53838]" />
        <FaTwitter className="text-[#F53838]" />
        <FaInstagram className="text-[#F53838]" />
      </div>


      </div>
      <div className="md:w-1/2 md:flex-row md:flex md:gap-4 md:justify-between md:px-10 gap-8 flex items-start justify-evenly">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start md:justify-normal py-4">
          <h3 className="text-sm md:text-base font-bold mb-2">Product</h3>
          <p className="text-[12px]">Download</p>
          <p className="text-[12px]">Pricing</p>
          <p className="text-[12px]">Locations</p>
          <p className="text-[12px]">Countries</p>
          <p className="text-[12px]">Server</p>
          <p className="text-[12px]">Blog</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-center md:items-start md:justify-normal py-4">
          <h3 className="text-sm md:text-base font-bold mb-2">Engage</h3>
          <p className="text-[12px]">AppointNext</p>
          <p className="text-[12px]">FAQ</p>
          <p className="text-[12px]">Tutorials</p>
          <p className="text-[12px]">About Us</p>
          <p className="text-[12px]">Privacy Policy</p>
          <p className="text-[12px]">Terms of Service</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center md:items-start text-center md:justify-normal py-4">
          <h3 className="text-sm md:text-base font-bold mb-2">Earn Money</h3>
          <p className="text-[12px]">Affiliate</p>
          <p className="text-[12px]">Become Partner</p>
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
