import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Button.css";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px )");
  return (
    <nav className=" flex z-40 align-center justify-between  bg-purple  ">
      <div className="pt-6 ml-3 md:pl-[10em] md:w-1/4">
        <LinkR to="/">
          <img src={"../assets/sara_logo.svg"} alt="logo" width={120} />
        </LinkR>
      </div>

      {/*  Desktop Nav */}

      {isAboveSmallScreens ? (
        <div className="flex align-center justify-between pt-9 gap-3 w-3/5 ">
          <ul className="flex flex-row gap-6 w-1/3 justify-center  ">
            <li className="hover:text-yellow hover:font-semibold transition duration-500">
              <LinkR
                to="/#works"
                /* smooth={true} */
                durantion={1500}
                /* spy={true}
              exact={true} */
                offset={70}
                location={{
                  pathname: "/",

                  hash: "#works",
                }}
              >
                {" "}
                Works
              </LinkR>
            </li>
            <li className="hover:cursor-pointer hover:text-yellow hover:font-semibold transition duration-500">
              <LinkS to="contact">Contact</LinkS>
            </li>{" "}
            <li className="hover:text-yellow  hover:font-semibold transition duration-500">
              <LinkR to="/aboutme">About Me</LinkR>
            </li>{" "}
          </ul>
          <div className="w-2/4 pr-36 justify-end align-end flex ">
            {/* <button className="button-54">
            <a href="mailto:saracarolinasilva@gmail.com">Let's Talk!</a>
          </button>{" "} */}
            <button
              className="uppercase touch-manipulation relative text-lg tracking-wider border-4 border-solid py-[0.25em] px-[0.5em]  shadow-[5px_5px_0px_0px]
            active:shadow-[0px_0px_0px_0px] active:top-1.5 active:left-1.5 active:translate-y-2 hover:border-yellow hover:text-yellow
  "
            >
              <a href="mailto:saracarolinasilva@gmail.com">Let's Talk!</a>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="rounded-full bg-blue p-2 "
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="menu icon" src="../assets/menu-icon.svg" />
        </button>
      )}
      {/* Mobile Menu */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
          {/* CLOSE ICON */}
          <div className="flex justify-start p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="close icon" src="../assets/close-icon.svg" />
            </button>
          </div>{" "}
          {/* Menu Itens */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
            {" "}
            <ul className="py-[2em]">
              <li className="py-[0.2em] hover:text-yellow hover:font-semibold transition duration-500">
                <LinkR
                  to="/#works"
                  /* smooth={true} */
                  durantion={1500}
                  /* spy={true}
              exact={true} */
                  offset={70}
                  location={{
                    pathname: "/",

                    hash: "#works",
                  }}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  {" "}
                  Works
                </LinkR>
              </li>
              <li className="py-[0.2em] hover:cursor-pointer hover:text-yellow transition duration-500 hover:font-semibold ">
                <LinkS
                  to="contact"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Contact
                </LinkS>
              </li>{" "}
              <li className="py-[0.2em] hover:text-yellow  hover:font-semibold transition duration-500">
                <LinkR
                  to="/aboutme"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  About Me
                </LinkR>
              </li>{" "}
              <li
                className="py-[0.2em] hover:text-yellow hover:font-semibold transition duration-500"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {" "}
                <a href="mailto:saracarolinasilva@gmail.com">Let's Talk!</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
