import React from "react";
import Advert from "../components/Advert";
import Card from "../components/Card";
import Explore from "../components/Explore";
import HeroSection from "../components/HeroSection";
import Startup from "../components/Startup";
import SummerSection from "../components/SummerSection";
import Swipers from "../components/swiper/Swipers";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Explore />
      <Startup />
      <Advert />
      <Swipers />
      {/* <SummerSection /> */}
    </>
  );
}

export default HomePage;
