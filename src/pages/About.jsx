import React from "react";

function About() {
  return (
    <div className=" pt-[200px] flex flex-col md:flex-row align-center justify-center items-center gap-11">
      <img
        src="../../assets/sara.png"
        alt="Sara"
        className="w-3/5 md:w-[400px]"
      />
      <div className="w-2/5 md:w-[600px]">
        <h1 className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
          About Me
        </h1>
        <p className="flex flex-col md:text-l align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
          I'm from the warm lands of Brazil, in a city called Itajaí by the
          beach. It was there where I spent my childhood and teenage dreams as a
          girl that always liked computers. I always enjoyed learning things by
          myself, and that's how I learned photoshop and ended up graduating in
          Design, except It was Industrial Design (back then, it was the only
          possible option for me). At the time, I also liked to deal with a bit
          of HTML, but what I didn't know was that I could be a professional in
          that (coding).
          <br /> <br />
          So during my journey as a professional, I was also discovering myself.
          I had some bad experiences that again made me not look at IT as a
          profession.
          <br /> <br />
          I worked for five years animating logos for Real States with Adobe
          Flash in a company, then for a few years became a freelancer where I
          started learning After Effects by myself.
          <br /> <br />
          So in 2017, my partner and I decided that it was time for some
          adventures, packed our things, and came to Lisbon to study. And it was
          there that I became a Lead motion Designer at an
          advertisement agency.   
          <br /> <br />
          After 3 years and with a PhD position opportunity for my partner, we
          decided to move to the Netherlands.  
          <br /> <br />
          And it was here that I had to reevaluate my professional life and came
          across IT again. But at this time, with a different perspective. I
          started taking courses, and I loved it. Then, I thought to myself, why
          didn't I start with this before? To focus and go really deep into it,
          I started in October 2022 a Bootcamp at Ironhack, and now I'm a
          FrontEnd Developer. 
          <br /> <br />{" "}
        </p>

        <div className="md:text-l align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10">
          <h1>
            <strong>Current</strong>
          </h1>
          <p>
            -In <s>Itajaí, Lisbon, Barreiro, Hengelo,</s> Enschede{" "}
          </p>
          <p>-Looking for a FrontEnd Developer Opportunity</p>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}

export default About;
