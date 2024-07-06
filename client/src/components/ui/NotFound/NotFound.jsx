import React from "react";
import nurse from "./images/nurse.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container pt-10 flex flex-col md:flex-row items-center">
      {/* Image Container */}
      <div className="md:w-1/2">
        <img src={nurse} alt="404" className="not-found-image mx-auto" />
      </div>
      {/* Text Container */}
      <div className="text-container md:w-1/2 md:text-left mt-6 md:mt-0 md:pl-6">
        <h1 className="not-found-title text-pink-700 font-black text-4xl md:text-5xl">
          404 Sorry!
        </h1>
        <p className="not-found-description text-pink-600 font-semibold text-lg md:text-xl">
          Nobody is allowed in the emergency room
        </p>
        <Link
          to="/"
          className="back-home-button bg-blue-900 text-white py-2 px-4 mt-4 inline-block rounded-lg hover:bg-blue-600"
        >
          You can go now!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
