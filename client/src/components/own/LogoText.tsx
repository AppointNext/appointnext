import Image from "next/image";
import LogoSVG from "@/assets/logo.svg";

const LogoText = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <Image
          src="/assets/home/logo.svg"
          alt="Logo"
          width={20}
          height={20}
          className=" lg:h-14"
        />
      </div>
      <div>
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
          Appoint<span className="font-extrabold">Next</span>
        </h1>
      </div>
    </div>
  );
};

export default LogoText;
