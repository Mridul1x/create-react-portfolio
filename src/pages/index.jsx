import React from "react";

//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery/Gallery";
import Video from "../components/Video/Video";
function Home() {
  return (
    <div className="flex  flex-col items-center">
      <Hero />
      <Projects />
      <Gallery />
      <Video />
    </div>
  );
}

export default Home;
