import React, { useState, useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { FAQ } from "../components/FAQ";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";
const Home = (props) => {
  const location = useLocation();

  return (
    <div>
      <HeroSection />

      <FAQ />

      <About />

    </div>
  );
};
export default Home;
