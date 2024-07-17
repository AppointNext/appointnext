"use client";

import { Button } from "@/components/ui/button";
import { BASE_COLOR } from "@/utils/constants";
import doctorHero from "/assets/home/hero.svg";
import consultantHero from "/assets/home/consultant.svg";
import specialityHero from "/assets/home/specialitiesHero.svg";
import { motion } from "framer-motion";

const bannerOptions = [
  {
    icon: "/assets/home/doctorHero.svg",
    number: "40k",
    content: "Doctors Onboards",
  },
  {
    icon: "/assets/home/consultantHero.svg",
    number: "30k",
    content: "Consultants Recorded",
  },
  {
    icon: "/assets/home/specialitiesHero.svg",
    number: "50+",
    content: "Specialities Covered",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row mx-10 mt-16 lg:px-16 gap-4 items-center justify-between md:gap-10 lg:my-24">
        <div className="flex flex-col gap-2 items-start justify-center md:gap-4 lg:w-[600px]">
          <h1 className="text-sm font-bold md:text-lg lg:text-3xl">
            Effortlessly Streamline Appointment Management with Intelligent
            Features
          </h1>
          <p className=" text-[10px] lg:text-[12px]">
            To save time, accelerate growth, and deliver an exceptional patient
            experience, top clinics and hospitals trust AppointNext for your
            next appointment.
          </p>
          <motion.button
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className={`bg-[${BASE_COLOR}] text-white rounded-2xl px-4 py-2 hover:bg-[#003CD8]`}
          >
            Get Started
          </motion.button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/home/hero.svg"
            alt="Hero"
            height={200}
            width={200}
            className="md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px]"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row md:flex-row gap-4 md:gap-10 items-center justify-between  rounded-xl shadow-md mt-10 mx-6 lg:px-16 py-4 px-4 lg:py-10 border-2 border-gray-200">
          {bannerOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-2 "
            >
              <div>
                <img
                  src={option.icon}
                  alt="Icon"
                  height={30}
                  width={30}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">
                  {option.number}
                </h1>
                <p className="text-xs">{option.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
