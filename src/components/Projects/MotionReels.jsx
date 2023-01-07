import React from "react";
import ReactPlayer from "react-player";

function MotionReels() {
  return (
    <div className=" pt-[200px] pb-[150px] flex flex-col md:flex-row align-center justify-center items-center gap-11">
      <ReactPlayer url="https://vimeo.com/780913967" className="w-4/5 h-4/5" />
      <div className="flex align-center justify-center items-center flex-col md:pr-48">
        <h1 className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
          Motion Reel
        </h1>
        <p className="flex md:text-xl align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
          This is a little bit about my background as a Motion Designer.
        </p>
        <button className="bg-yellow max-w-[20em] mb-6 py-2 text-purple rounded-full font-bold px-[35px]  hover:bg-dark-purple hover:text-yellow transition duration-500">
          <a
            href="https://www.behance.net/saracarolic7cd"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Motion Portfolio
          </a>
        </button>
      </div>
    </div>
  );
}

export default MotionReels;
