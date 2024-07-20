import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Image
        src="/assets/other/loader.svg"
        height={60}
        width={60}
        alt="Loader"
        className="svg-loader"
      />
    </div>
  );
}
