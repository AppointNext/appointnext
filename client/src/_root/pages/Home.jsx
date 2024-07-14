import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/ui/Hero";
import Feature from "../../components/ui/Feature";
import Feedback from "../../components/ui/Feedback";
import SubscribeLetter from "../../components/ui/SubscribeLetter";
import Footer from "../../components/ui/Footer";
import Benefit from "../../components/ui/Benefit";

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
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
  }, []); // Empty dependency array ensures the effect runs only once

  console.log(location); // You can access location here, or wherever needed

  return (
    <div className="md:px-4 px-2">
      <Navbar />
      <Hero />
      <Feature />
      <Benefit />
      <Feedback />
      <SubscribeLetter />
      <Footer />
    </div>
  );
};

export default Home;
