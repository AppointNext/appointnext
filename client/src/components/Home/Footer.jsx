import React from "react";
import Logo from "../utils/Logo";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <Logo />
      <h1 className="text-center text-sm md:text-base max-w-prose">
        AppointNext LaslesVPN is a private virtual network that has unique
        features and has high security.
      </h1>
      <div className="flex gap-4">
        <FaFacebookF className="text-[#F53838]" />
        <FaTwitter className="text-[#F53838]" />
        <FaInstagram className="text-[#F53838]" />
      </div>

      <div className=" flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-sm md:text-base font-bold mb-2">Product</h3>
          <p className="text-[12px]">Download</p>
          <p className="text-[12px]">Pricing</p>
          <p className="text-[12px]">Locations</p>
          <p className="text-[12px]">Countries</p>
          <p className="text-[12px]">Server</p>
          <p className="text-[12px]">Blog</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-sm md:text-base font-bold mb-2">Engage</h3>
          <p className="text-[12px]">AppointNext</p>
          <p className="text-[12px]">FAQ</p>
          <p className="text-[12px]">Tutorials</p>
          <p className="text-[12px]">About Us</p>
          <p className="text-[12px]">Privacy Policy</p>
          <p className="text-[12px]">Terms of Service</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-sm md:text-base font-bold mb-2">Earn Money</h3>
          <p className="text-[12px]">Affiliate</p>
          <p className="text-[12px]">Become Partner</p>
        </div>
        <p className="text-xs">© 2022 AppointNext</p>
      </div>
    </div>
  );
};

export default Footer;
