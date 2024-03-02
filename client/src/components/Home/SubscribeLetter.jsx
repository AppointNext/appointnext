import React from "react";
import Button from "../utils/Button";

const SubscribeLetter = () => {
  return (
    <div className="flex flex-row shadow-lg gap-4 p-4 m-2">
      <div>
        <h1 className=" text-[12px] font-bold ">
          Subscribe Now for Get Special Features!
        </h1>
        <p className=" text-[10px] ">
          Lets subscribe with us and find the fun.
        </p>
      </div>
      <div>
        <Button title="Subscribe Now" />
      </div>
    </div>
  );
};

export default SubscribeLetter;
