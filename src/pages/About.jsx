import React from "react";

function About() {
  return (
    <div className="md:pt-[150px] pt-28">
      <h1 className="md:text-2xl text-center font-raleway mb-8 md:mb-12 ">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-11">
        <img
          src="https://i.ibb.co/Lnjh0p1/Black-White-Trendy-Aesthetic-Beauty-Blog-Your-Story.jpg"
          alt="Anushri"
          className="w-10/12 md:w-[380px]"
        />
        <p className="md:w-[550px] w-10/12 font-raleway text-justify">
          I'm from the green lands of Bangladesh, in a city called Rangpur by
          the Dharla River. It was there where I spent my childhood and teenage
          dreams as a girl who always liked Artwork. I always enjoyed learning
          things by myself, and that's how I learned abstract art. At the time,
          I also liked to deal with a bit of Quilling Art, but what I didn't
          know was that I could be a professional in that.
          <br /> <br />
          Growing up in the enchanting city of Rangpur, I had the privilege of
          witnessing the beauty of nature, which effortlessly influenced my
          creativity. The vibrant surroundings inspired me to delve into various
          forms of art, and I found immense joy in self-learning and
          experimenting.
          <br /> <br />
          My artistic journey took flight with abstract art, where I explored
          the depths of emotions through strokes of color, embracing the
          unpredictable and the unrestrained.
          <br /> <br />
          I have successfully completed my Higher Secondary Certificate (HSC)
          examination under the Dhaka Board.
          <br /> <br />
          From an early age, I discovered the joy of learning and exploring
          things on my own.
          <br /> <br />
          As I move forward, I am filled with gratitude for the opportunities
          that have led me to this point. With boundless passion and a strong
          foundation in art and design, I eagerly embrace the future, ready to
          make my mark in the artistic realm and share my vision with the world.
        </p>
      </div>
    </div>
  );
}

export default About;
// {/* <div className="md:text-l align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10">
// <h1>
//   <strong>Current</strong>
// </h1>
// <p>
//   -In <s>Itajaí, Lisbon, Barreiro, Hengelo,</s> Enschede{" "}
// </p>
// <p>-Looking for a FrontEnd Developer Opportunity</p>
// <br /> <br />
// </div> */}
