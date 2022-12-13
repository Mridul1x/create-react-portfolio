import React from "react";

//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
function Home() {
  return (
    <div className="flex  flex-col items-center">
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
