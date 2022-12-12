import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-6 w-4/6">
        <Navbar />
      </div>
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
