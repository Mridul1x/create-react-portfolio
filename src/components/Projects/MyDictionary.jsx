import React from "react";

function Upmanager() {
  return (
    <div className=" pt-[200px] flex flex-col align-center justify-center items-center">
      <div className="order-2 flex flex-col align-center justify-center items-center md:flex-row px-9 md:px-24">
        <a
          className="w-11/12 flex align-center justify-center items-center"
          href="https://glowing-stardust-4eab74.netlify.app/search"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/mydictionary_pages.png"
            alt="My Dictionary Picture"
            width="700"
            className="hover:filter items-center  hover:saturate-50 transition duration-500 z-10 w-full  md:max-w-[800px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <p className=" font-playfair font-black text-5xl">My Dictionary</p>
          <p className="flex md:text-2xl align-center justify-center font-raleway z-10 text-center md:text-start p-11 ">
            About the project
          </p>
          <p className="flex md:text-xl align-center justify-center font-raleway font-extralight z-10 text-center md:text-start pb-10  ">
            This is a personal project, an English Dictionary that you can also
            find some pictures related to the word you are looking for.
            <br />
            <br />I used React and Tailwind css to style.
          </p>
          <button className="bg-yellow max-w-[10em] mb-6 text-purple rounded-full font-bold px-10 py-2 hover:bg-dark-purple hover:text-yellow transition duration-500">
            <a
              href="https://glowing-stardust-4eab74.netlify.app/search"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Demo
            </a>
          </button>
          <button className="bg-yellow max-w-[10em] mb-6 text-purple rounded-full font-bold px-10 py-2 hover:bg-dark-purple hover:text-yellow transition duration-500">
            <a
              href="https://github.com/saracsilva/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upmanager;
