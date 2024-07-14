const Features = [
  "Booking via WhatsApp",
  "Queue Management system",
  "Intelligent Appointment Analysis",
  "Appointment Reminder",
];

const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:my-52 gap-10 mx-10 mt-4">
      <div>
        <img src="/assets/home/feature.svg" alt="Feature" />
      </div>
      <div>
        <h1 className="lg:text-3xl font-bold my-4">
          We Provide Many Features You Can Use
        </h1>
        <p className="">
          You can explore the features that we provide and have their own
          functions of each feature
        </p>
        <ul className="flex flex-col gap-4 my-4">
          {Features.map((feature, index) => (
            <li key={index}>
              <div className="flex flex-row gap-4 items-center">
                <div>
                  <img
                    src="/assets/home/check.svg"
                    alt="Check"
                    height={20}
                    width={20}
                  />
                </div>
                <div>{feature}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureSection;
