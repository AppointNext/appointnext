"use client";
import { FeedbackCardCarousel } from "./FeedbackCardCarousel";

const TestimonalSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-10 my-10 mx-10 md:my-24">
      <div className="flex flex-col gap-4">
        <h1 className=" font-bold lg:text-3xl text-center">
          Here's what our Patients and Doctors think
        </h1>
        <p className=" text-center text-xs">
          These are the stories of our patients and doctors who have joined us
          with great pleasure when using this beloved feature.
        </p>
      </div>
      <div className="my-10 mx-10">
        <FeedbackCardCarousel />
      </div>
    </div>
  );
};

export default TestimonalSection;
