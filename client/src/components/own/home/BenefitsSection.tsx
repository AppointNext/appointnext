interface BenefitContent {
  title: string;
  description: string;
}

const BenefitContent: BenefitContent[] = [
  {
    title: "Patient Experience Enhancement",
    description:
      "Improve appointment scheduling and communication for faster check-in and check-out, providing personalized care to patients.",
  },
  {
    title: "Streamlined Operations",
    description:
      "Automate appointment scheduling, reduce no-shows, and optimize resource utilization to improve operational efficiency.",
  },
  {
    title: "Lure New clients",
    description:
      "Attract new patients by offering them the convenience of booking appointments online, anytime, anywhere.",
  },
  {
    title: "Enhanced Productivity",
    description:
      "Automate appointment scheduling, reduce no-shows, and optimize resource utilization to improve operational efficiency.",
  },
  {
    title: "Increased Revenue",
    description:
      "Reduce no-shows, optimize resource utilization, and attract new patients to increase revenue and profitability.",
  },
  {
    title: "Improved Patient Engagement",
    description:
      "Engage patients with automated appointment reminders, confirmations, and follow-ups to improve patient loyalty.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg md:text-xl">
          Benefits of Using AppointNext
        </h1>
        <p className="text-xs">Explore the benefits for better engagement</p>
      </div>
      <div className="flex flex-wrap flex-row gap-20 md:gap-10 items-center justify-center">
        {BenefitContent.map((content, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center w-52 lg:w-44 border-2 border-gray-200 rounded-xl px-4 py-8 max-h-[350px] min-h-[350px]
            hover:shadow-lg  hover:border-[#003CD8] transition-all duration-200"
          >
            <div>
              <img
                src="/assets/home/benefit.svg"
                alt="Check"
                height={100}
                width={100}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold md:text-xl">{content.title}</h1>
              <p className="text-xs">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
