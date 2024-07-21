"use client";
import LogoText from "./LogoText";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const options = [
  { product: ["Features", "Pricing", "Contact Us"] },
  { company: ["About Us", "Careers", "Blog"] },
  { support: ["Help Center", "Terms of Service", "Legal"] },
  { contact: ["Contact Us", "Support", "Sales"] },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="my-4 flex flex-col gap-4 bg-[#F8F8F8]">
      <div className=" pt-16 flex flex-col md:flex-row  justify-between md:px-8 lg:px-28">
        <div className="flex flex-col max-w-[380px] gap-2">
          <div className="flex flex-col items-center justify-center px-4">
            <LogoText />
            <p className="text-[14px] md:text-sm text-center">
              <span className=" font-bold ">AppointNext</span> is an appointment
              management platform that has unique features and has high
              security.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-row gap-2">
                <FaInstagram className="text-2xl text-[#003CD8] cursor-pointer shadow-2xl" />
                <CiFacebook className="text-2xl text-[#003CD8] cursor-pointer shadow-2xl" />
                <CiTwitter className="text-2xl text-[#003CD8] cursor-pointer shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 lg:gap-16">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col  ">
              {Object.entries(option).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col gap-2 items-center justify-center py-2 "
                >
                  <h1
                    className="text-lg
             font-bold lg:text-xl"
                  >
                    {key}
                  </h1>
                  {value.map((item: any, index: any) => (
                    <p
                      key={index}
                      className="text-xs lg:text-sm cursor-pointer hover:text-[#003CD8] "
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs">
        © {year} AppointNext. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
