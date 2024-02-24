import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div className="md:px-14 px-2">
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
};

export default Home;
