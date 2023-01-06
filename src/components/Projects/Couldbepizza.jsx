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
            alt="Project Could be pizza"
            width="700"
            className="hover:filter items-center hover:saturate-200 transition duration-500 z-10 w-full  md:max-w-[800px]"
          />
        </a>
        <div className="flex align-center justify-center items-center flex-col md:pr-48">
          <a
            href="https://lilac-drill-cuff.cyclic.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex align-center justify-center flex-row px-6 mt-6">
              <img
                src="./assets/could_be.svg"
                alt="Could Be Pizza Logo"
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
            This was the second project. I made it together with my colleague
            Andrea. We decided to make an App where you can put all kinds of
            crazy pizza flavors on it, so everybody that visits the app can know
            the different types of pizza that exist in the world.
            <br />
            <br />
            We used MongoDB for the Database, Express for the BackEnd and
            JavaScript and EJS in the FrontEnd. To give a better look to the
            APP, we used CSS and a bit of Bootstrap.
          </p>
          <button className="bg-yellow max-w-[10em] mb-6 text-purple rounded-full font-bold px-10 py-2 hover:bg-dark-purple hover:text-yellow transition duration-500">
            <a
              href="https://lilac-drill-cuff.cyclic.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Demo
            </a>
          </button>
          <button className="bg-yellow max-w-[10em] mb-6 text-purple rounded-full font-bold px-10 py-2 hover:bg-dark-purple hover:text-yellow transition duration-500">
            <a
              href="https://github.com/andreiacpafonso/couldbepizza"
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
