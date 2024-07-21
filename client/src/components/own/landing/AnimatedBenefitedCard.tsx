"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface AnimatedBenefitCardProps {
  title: string;
  description: string;
  index: number;
}

const AnimatedBenefitCard: React.FC<AnimatedBenefitCardProps> = ({
  title,
  description,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 740px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 items-center justify-center w-52 lg:w-72 border-2 border-gray-200 rounded-xl px-4 py-8 max-h-[350px] min-h-[350px] hover:shadow-lg hover:border-[#003CD8]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="lg:p-10 flex items-center justify-center flex-col gap-4">
        <div className="">
          <img
            src="/assets/home/benefit.svg"
            alt="Check"
            height={100}
            width={100}
          />
        </div>
        <div>
          <h1 className="text-lg font-bold md:text-xl">{title}</h1>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedBenefitCard;
