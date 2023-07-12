import React from "react";

function Upmanager() {
  return (
    <div className=" pt-[200px] flex flex-col align-center justify-center items-center">
      <div className="order-2 flex flex-col align-center justify-center items-center md:flex-row px-9 md:px-24">
        <a
          className="w-full"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/rainabstract.png"
            alt="Rain Abstract"
            width="700"
            className="hover:filter items-center  hover:saturate-50 transition duration-500 z-10 w-full  md:max-w-[800px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <p className=" font-playfair font-black text-5xl">Rain Abstract</p>
          <p className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
            About The Art
          </p>
          <p className=" md:text-xl font-raleway font-extralight z-10 text-center   ">
            This is an abstract geometry art, made by some special colours. I
            used Soft pastels, muted earth tones, and gentle grays to style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Upmanager;
