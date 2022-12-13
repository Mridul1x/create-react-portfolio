import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Button.css";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px )");
  return (
    <nav className=" flex z-40 align-center justify-between  bg-purple ">
      <div className="pt-6 pl-[11em] md:pl-[10em] sm:pl-[5em]  min-w-[300px]">
        <LinkR to="/">
          <img src={"../assets/sara_logo.svg"} alt="logo" width={120} />
        </LinkR>
      </div>

      {/*  Desktop Nav */}

      {isAboveSmallScreens ? (
        <div className="flex align-center justify-center pt-9 gap-3 pr-[20em]">
          <ul className="flex flex-row gap-6 pr-[20em]">
            <li>
              <LinkR
                to="/#projects"
                /* smooth={true} */
                durantion={1500}
                /* spy={true}
              exact={true} */
                offset={70}
                location={{
                  pathname: "/",

                  hash: "#projects",
                }}
              >
                {" "}
                Projects
              </LinkR>
            </li>
            <li>
              <LinkS to="contact">Contact</LinkS>
            </li>{" "}
            <li>
              <LinkR to="/aboutme">About Me</LinkR>
            </li>{" "}
          </ul>
          <button className="button-54">
            <a href="mailto:saracarolinasilva@gmail.com">Let's Talk!</a>
          </button>
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
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="close icon" src="../assets/close-icon.svg" />
            </button>
          </div>{" "}
          {/* Menu Itens */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
            {" "}
            <ul className="py-[2em]">
              <li className="py-[0.2em]">
                <LinkR
                  to="/#projects"
                  /* smooth={true} */
                  durantion={1500}
                  /* spy={true}
              exact={true} */
                  offset={70}
                  location={{
                    pathname: "/",

                    hash: "#projects",
                  }}
                >
                  {" "}
                  Projects
                </LinkR>
              </li>
              <li className="py-[0.2em]">
                <LinkS to="contact">Contact</LinkS>
              </li>{" "}
              <li className="py-[0.2em]">
                <LinkR to="/aboutme">About Me</LinkR>
              </li>{" "}
              <li className="py-[0.2em]">
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
