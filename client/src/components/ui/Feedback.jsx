import React, { useState } from "react";
import FeedBox from "./FeedBox";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFeedbacks = 3;

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalFeedbacks);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalFeedbacks - 1 : prevIndex - 1
    );
  };

  const users = {
    user1: {
      name: "John",
      title: "CEO",
      address: "New York",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    user2: {
      name: "John",
      title: "CEO",
      address: "New Delhi",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    user3: {
      name: "John",
      title: "CEO",
      address: "Dubai",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
  };

  return (
    <div className="text-center m-5">
      <h1 className="text-2xl sm:text-2xl md:text-4xl text-blue-800 font-black">
        Trusted by Thousands of <br /> Happy Customers
      </h1>
      {/* <p className="text-xs">
        These are the stories of our customers who have joined us with great
        <br /> pleasure when using this amazing feature.
      </p> */}
      <div className="relative mt-10">
        <div className="flex flex-row overflow-hidden">
          <div
            className="w-full flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <FeedBox user={users.user1} />
            <FeedBox user={users.user2} />
            <FeedBox user={users.user3} />
            <FeedBox user={users.user1} />
            <FeedBox user={users.user2} />
            <FeedBox user={users.user3} />
          </div>
        </div>
        <button
          className="prev-btn absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent border-none cursor-pointer text-lg text-gray-700"
          onClick={prevFeedback}
        >
          &#10094;
        </button>
        <button
          className="next-btn absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent border-none cursor-pointer text-lg text-gray-700"
          onClick={nextFeedback}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Feedback;
