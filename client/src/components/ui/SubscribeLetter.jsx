import React from "react";
import Button from "../utils/Button";

const SubscribeLetter = () => {
  return (
    <div className="flex flex-row gap-4 p-4 m-2 md:justify-between rounded-md">
      <div>
        <h1 className=" text-xl sm:text-base md:text-lg  font-bold ">
          Subscribe Now for Get Special Features!
        </h1>
        {/* <p className=" text-base ">Lets subscribe with us and find the fun.</p> */}
      </div>
      <div>
        <Button title="Subscribe Now" />
      </div>
    </div>
  );
};

export default SubscribeLetter;
