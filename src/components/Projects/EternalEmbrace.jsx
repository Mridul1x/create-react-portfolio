import React from "react";

function MotionReels() {
  return (
    <div className="pt-[150px] mx-11 mb-12 flex flex-col md:flex-row align-center justify-center items-center gap-11">
      <img
        src="./assets/eternalembrace.png"
        alt="Eternal Embrace"
        width="700"
        className="w-[500px]  items-center  md:max-w-[800px]"
      />
      <div className="flex md:px-24 align-center justify-center items-center flex-col md:w-1/2">
        <h1 className="md:text-5xl text-3xl font-black font-playfair z-10 text-center md:text-start">
          Eternal Embrace
        </h1>
        <p className="flex md:text-2xl text-lg  font-raleway z-10 text-center mt-8 md:mt-11">
          About The Art
        </p>
        <p className="md:text-xl font-raleway mt-5 font-extralight z-10 text-center  ">
          Experience the enchanting beauty of 'Eternal Embrace,' a mesmerizing
          quilled masterpiece that portrays the timeless bond of love.
        </p>
      </div>
    </div>
  );
}

export default MotionReels;
