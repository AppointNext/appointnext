import LogoText from "./LogoText";

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="">
        <div className="flex flex-col items-center justify-center px-4">
          <LogoText />
          <p className="text-[14px] md:text-sm">
            <span className=" font-bold ">AppointNext</span> is an appointment
            management platform that has unique features and has high security.
          </p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
