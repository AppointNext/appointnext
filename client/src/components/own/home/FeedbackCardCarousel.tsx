"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const feedbacks = [
  {
    name: "John Doe",
    location: "Japan",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Doe",
    location: "USA",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Smith",
    location: "UK",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Smith",
    location: "Canada",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Doe",
    location: "Japan",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function FeedbackCardCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-44  md:max-w-screen-sm lg:max-w-screen-lg   md:mx-auto "
    >
      <CarouselContent>
        {feedbacks.map((feedback, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 my-12">
            <motion.div
              className=" box-border border-[2px] border-transparent hover:border-[2px] hover:border-[#003CD8] rounded-xl xl:mx-8"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-xl">
                <CardContent className="flex md:aspect-square items-center justify-center ">
                  <div className="flex flex-col m-1">
                    <div className="">
                      <img
                        src="/assets/other/feedback1.png"
                        alt="Feedback"
                        className="h-16 w-16"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{feedback.name}</div>
                      <div className="text-xs">{feedback.location}</div>
                      <div className="text-sm">{feedback.feedback}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
