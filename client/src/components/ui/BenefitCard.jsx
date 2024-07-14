import React from "react";

const BenefitCard = ({ content }) => {
  return (
    <div className="flex items-center justify-center w-40 p-10 border-[1px] shadow-md border-gray-200">
      <div>
        <img src="./assets/benefit.svg" alt="benefit" />
        <h3>{content.heading}</h3>
        <p>{content.content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
