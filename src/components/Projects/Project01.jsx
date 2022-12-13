import React from "react";

function Project01() {
  return (
    <div className=" pt-[200px] flex flex-col align-center justify-center items-center">
      <div className="order-2 flex flex-col align-center justify-center items-center md:flex-row px-9 md:px-24">
        <a
          className="w-5/6 items-center"
          href="https://precious-starship-8d8098.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/upmanager_pages.png"
            alt="project-3"
            width="1000"
            className="hover:filter items-center hover:saturate-200 transition duration-500 z-10 w-full ss:min-w-[50px] md:max-w-[1200px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <a
            href="https://precious-starship-8d8098.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/upmanager_logo.svg"
              alt="project-3"
              width="400px"
              className="px-11 pb-[3em] hover:w-[405px] transition duration-500"
            />
          </a>
          <p className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
            About the project
          </p>
          <p className="flex md:text-xl align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
            This projects was executed during my Ironhack Bootcamp. It's the
            final project and I did it together with my colegues Shirin and
            Stephanie.
          </p>
          <button className="bg-yellow max-w-[10em] text-purple rounded-full font-bold px-10 py-1 hover:bg-[#1f1236] hover:text-yellow transition duration-500">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project01;
