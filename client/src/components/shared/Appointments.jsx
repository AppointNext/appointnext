import React, { useState } from "react";

const AppointsCard = ({ dname, specialization, description, time }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="bg-white p-2 py-4 container w-[275px] min-w-[275px] rounded-lg">
      <img
        src="./upcoming.png"
        alt="upcoming task image"
        className="rounded-lg"
      />
      <div>
        <h1 className="font-bold">{dname}</h1>
        <p className="font-semibold text-sm text-blue-300">{specialization} </p>
        <p>{showDescription ? description : description.substring(0, 50)}</p>
        {description.length > 50 && (
          <button
            onClick={toggleDescription}
            className="text-blue-500 underline cursor-pointer"
          >
            {showDescription ? "Show Less" : "Show More"}
          </button>
        )}
        <h1>{time}</h1>
      </div>
    </div>
  );
};

export default AppointsCard;
