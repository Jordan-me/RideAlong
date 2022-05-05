import React, { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { FAQ } from "../components/FAQ";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
export const Home = () => (
  <div>
    <HeroSection />

    <FAQ />

    <About />

    <Footer/>
  </div>
);
