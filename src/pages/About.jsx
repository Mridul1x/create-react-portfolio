import React from "react";

function About() {
  return (
    <div className=" pt-[200px] flex flex-col md:flex-row align-center justify-center items-center gap-11">
      <img src="../../assets/sara.png" alt="Sara" className="w-3/5 md:w-2/5" />
      <div>
        <h1 className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
          About Me
        </h1>
        <p className="flex md:text-xl align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
          this is me blah blah blah
        </p>
      </div>
    </div>
  );
}

export default About;
