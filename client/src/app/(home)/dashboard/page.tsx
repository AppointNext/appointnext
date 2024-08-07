import CalAndAppoint from "@/components/own/home/CalAndAppoint";
import MainDash from "@/components/own/home/MainDash";

export default function Dashboard() {
  return (
    <div className="flex flex-row h-full w-full max-w-[820px] lg:max-w-[950px] xl:max-w-[880px] ">
      <div className="flex flex-row w-full m-0 p-0">
        <MainDash />
      </div>
      <div className="hidden md:flex w-full h-full">
        <CalAndAppoint />
      </div>
    </div>
  );
}
