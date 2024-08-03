import CalAndAppoint from "@/components/own/home/CalAndAppoint";
import MainDash from "@/components/own/home/MainDash";

export default function Dashboard() {
  return (
    <div className="flex flex-row h-full w-full max-w-screen-md">
      <div className="flex flex-row w-full m-0 p-0">
        <MainDash />
      </div>
      <div className="hidden md:flex w-full h-full">
        <CalAndAppoint />
      </div>
    </div>
  );
}
