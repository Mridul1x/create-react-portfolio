import React from "react";

//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery/Gallery";
function Home() {
  return (
    <div className="flex  flex-col items-center">
      <Hero />
      <Projects />
      <Gallery />
    </div>
  );
}

export default Home;
