import Image from "next/image";
import LogoSVG from "@/assets/logo.svg";

const LogoText = () => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <Image src="/assets/home/logo.svg" alt="Logo" width={20} height={20} />
      </div>
      <div>
        <h1>
          Appoint<span className=" font-bold">Next</span>
        </h1>
      </div>
    </div>
  );
};

export default LogoText;
