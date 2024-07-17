"use client";
import { Button } from "@/components/ui/button";
import { BASE_COLOR } from "@/utils/constants";
import { motion } from "framer-motion";
const NewsLetter = () => {
  return (
    <div className="flex items-center  justify-center absolute -top-16">
      <div className="  flex flex-row items-center justify-center mx-2 px-4 border-2 hover:border-[#003CD8] rounded-xl py-4 bg-white md:gap-10 hover:shadow-xl transition-all transition-200 md:p-8 lg:px-20 lg:gap-28 lg:justify-between xl:gap-96">
        <div className="flex flex-col items-center justify-center md:gap-2">
          <h1 className=" font-bold text-sm md:text-lg lg:text-xl xl:text-2xl">
            Still hadn’t Registered? What’s waiting...Register Now!
          </h1>
          <p className="text-xs md:text-sm">
            Revolutionize your practice with AppointNext!!
          </p>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.5 }}
            className={`bg-[#003CD8] text-white rounded-xl px-4 py-2 hover:bg-[#003CD8] lg:px-12 lg:py-4`}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
