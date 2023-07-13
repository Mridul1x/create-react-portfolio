import React from "react";

function Upmanager() {
  return (
    <div className="pt-[150px] mx-10 mb-12 flex flex-col md:flex-row align-center justify-center items-center gap-11">
      <img
        src="./assets/rainabstract.png"
        alt="Rain Abstract"
        width="700"
        className="w-[700px] items-center  md:max-w-[800px]"
      />
      <div className="flex md:px-24 align-center justify-center items-center flex-col md:w-1/2">
        <h1 className="md:text-5xl text-3xl font-black font-playfair z-10 text-center md:text-start">
          Rain Abstract
        </h1>
        <p className="flex md:text-2xl text-lg  font-raleway z-10 text-center mt-8 md:mt-11">
          About The Art
        </p>
        <p className="md:text-xl font-raleway mt-5 font-extralight z-10 text-center  ">
          This is an abstract geometry art, made by some special colours. I used
          Soft pastels, muted earth tones, and gentle grays to style.
        </p>
      </div>
    </div>
  );
}

export default Upmanager;
