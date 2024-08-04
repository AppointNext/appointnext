import { Button } from "@/components/ui/button";
import { AiTwotoneQuestionCircle } from "react-icons/ai";

export default function HelpCard() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="absolute bottom-0  mb-4  bg-gradient-to-tl from-gray-500 to-blue-950 flex flex-col items-center justify-center p-4 shadow-lg w-48 rounded-xl">
        <div className="relative -top-6 text-white">
          <AiTwotoneQuestionCircle size={30} className="" />
        </div>
        <div className="text-white font-semibold flex flex-col items-center justify-center gap-2">
          <h1>Need help</h1>
          <p className="text-center">
            Having Trouble in Booking. Please contact us for more questions.
          </p>
          <Button className="rounded-xl">Go to Help Center</Button>
        </div>
      </div>
    </div>
  );
}
