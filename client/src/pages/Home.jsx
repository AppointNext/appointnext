import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const Home = () => {
  const [location, setLocation] = useState(null);

  const handleSearch = async () => {
    try {
      const { coords } = await getCurrentLocation();
      const { latitude, longitude } = coords;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  const getCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  handleSearch();
  console.log(location);
  return (
    <div className="md:px-14 px-2">
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
};

export default Home;
