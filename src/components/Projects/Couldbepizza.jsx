import React from "react";
import Lottie from "lottie-react";
import animation02 from "../../assets/pizza.json";

function Upmanager() {
  return (
    <div className=" pt-[200px] flex flex-col align-center justify-center items-center">
      <div className="order-2 flex flex-col align-center justify-center items-center md:flex-row px-9 md:px-24">
        <a
          className="w-11/12 flex align-center justify-center items-center"
          href="https://lilac-drill-cuff.cyclic.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/couldbepizza_pages.png"
            alt="project Could be pizza"
            width="700"
            className="hover:filter items-center hover:saturate-200 transition duration-500 z-10 w-full  md:max-w-[800px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <a
            href="https://precious-starship-8d8098.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex align-center justify-center flex-row px-6 mt-6">
              <img
                src="./assets/could_be.svg"
                alt="project-3"
                width="400px"
                className="px-11 pb-[3em] hover:w-[405px] transition duration-500"
              />
              <Lottie
                animationData={animation02}
                loop={true}
                className="z-10 w-full items-center mt-[-20px] min-w-[60px]
              md:w-[120px] "
              />
            </span>
          </a>
          <p className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
            About the project
          </p>
          <p className="flex md:text-xl align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
            This projects was executed during my Ironhack Bootcamp. It's the
            final project and I did it together with my colegues Shirin and
            Stephanie.
          </p>
          <button className="bg-yellow max-w-[10em] text-purple rounded-full font-bold px-10 py-1 hover:bg-dark-purple hover:text-yellow transition duration-500">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upmanager;
