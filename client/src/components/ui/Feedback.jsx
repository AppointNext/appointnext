import React, { useState } from "react";
import FeedBox from "./FeedBox";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFeedbacks = 4;
  const cardsToShow = 3; // Number of cards to show

  const cardWidth = 100 / cardsToShow;

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalFeedbacks);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalFeedbacks - 1 : prevIndex - 1
    );
  };

  const users = [
    {
      name: "John",
      title: "CEO",
      address: "New York",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name: "John",
      title: "CEO",
      address: "New Delhi",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name: "John",
      title: "CEO",
      address: "Dubai",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name:"Sudhanva",
      title:"CEO",
      address:"Bengaluru",
      feedback:"lorem ispum",

    },
    {
      name: "John",
      title: "CEO",
      address: "New York",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name: "John",
      title: "CEO",
      address: "New Delhi",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name: "John",
      title: "CEO",
      address: "Dubai",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla.",
    },
    {
      name:"Sudhanva",
      title:"CEO",
      address:"Bengaluru",
      feedback:"lorem ispum",

    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="text-center mx-auto my-20 bg-gray">
      <h1 className="text-2xl font-bold">
        Trusted by Thousands of <br /> Happy Customers
      </h1>
      <p className="text-xs">
        These are the stories of our customers who have joined us with great
        <br /> pleasure when using this amazing feature.
      </p>
      <Carousel responsive={responsive}  showDots={true}>
        {users.map((u,index)=>(
              <div key={index} style={{  width: "95%"   }} className="flex-row snap-start px-2">
                <FeedBox user={u} />
              </div>
            ))} 
      </Carousel>
    </div>
  );
};

export default Feedback;
