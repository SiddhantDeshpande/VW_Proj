import React from "react";
import Hero from "../common_components/Hero/Hero";
import { homeObjOne } from "../Data/Data";
import Skills from "../common_components/Skills/Skills";
import About from "../common_components/About/About";

function HomePage() {
  return (
    <div>
      <Hero {...homeObjOne} />
      <About number="0" />
      <Skills />
    </div>
  );
}

export default HomePage;
