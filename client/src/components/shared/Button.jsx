import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button
        className="bg-[#003cd8] text-white xl:py-4 xl:px-10 px-2 py-1 hover:shadow-2xl hover:shadow-[#003cd8] rounded-xl transition-all active:translate-y-3 
      md:font-semibold  xl:font-semibold font-bold  md:text-[15px] xl:text-[15px] text-[12px]
      "
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
