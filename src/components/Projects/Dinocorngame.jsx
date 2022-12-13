import React from "react";

function Upmanager() {
  return (
    <div className=" pt-[200px] flex flex-col align-center justify-center items-center">
      <div className="order-2 flex flex-col align-center justify-center items-center md:flex-row px-9 md:px-24">
        <a
          className="w-11/12 flex align-center justify-center items-center"
          href="https://saracsilva.github.io/the-dinocorn-game/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/dino_pages.png"
            alt="Dinocorn Game"
            width="700"
            className="hover:filter items-center hover:saturate-200 transition duration-500 z-10 w-full  md:max-w-[800px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <a
            href="https://saracsilva.github.io/the-dinocorn-game/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/dino_logo.svg"
              alt="Dinocorn Logo"
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
          <button className="bg-yellow max-w-[10em] text-purple rounded-full font-bold px-10 py-1 hover:bg-dark-purple hover:text-yellow transition duration-500">
            <a
              href="https://github.com/saracsilva/the-dinocorn-game"
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
