import React from "react";
import BenefitCard from "./BenefitCard";

const BenefitContent = [
  {
    heading: "Patient Experience Enhancement",
    content:
      "Improve appointment scheduling and communication for faster check-in and check-out, providing personalized care to patients.",
  },
  {
    heading: "Streamlined Operations",
    content:
      "Electronic medical records management, automate appointment scheduling, billing management to streamline the operations.",
  },
  {
    heading: "Lure New Patients",
    content: `Increase your online presence, attract new patients, and retain them with the help of AppointNext.`,
  },
  {
    heading: "Analytical Approach",
    content:
      "Analyze patient data, appointment history, and other metrics to improve patient care and optimize operations.",
  },
  {
    heading: "Revenue Growth",
    content:
      "Increase revenue by reducing no-shows, optimizing operations, and attracting new patients.",
  },
];

const Benefit = () => {
  return (
    <div>
      <h1>
        Benefits of Using <br /> AppointNext
      </h1>
      <p>Explore the benefits for better engagement</p>
      <div>
        {BenefitContent.map((content, index) => (
          <BenefitCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Benefit;
