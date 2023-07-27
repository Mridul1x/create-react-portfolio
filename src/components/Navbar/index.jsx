import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Button.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px )");
  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.nav className=" flex z-40 items-center justify-between  bg-purple py-2 ">
      <div className=" ml-3 md:pl-[10em] md:w-1/4">
        <LinkR to="/">
          <img src={"../assets/logo1.png"} alt="logo" width={120} />
        </LinkR>
      </div>

      {/*  Desktop Nav */}

      {isAboveSmallScreens ? (
        <div className="flex items-center justify-between  gap-3 w-3/5 ">
          <ul className="flex flex-row gap-6 w-1/3 justify-center  ">
            <li className="hover:text-yellow hover:font-semibold transition duration-500">
              <LinkR
                to="/#works"
                /* smooth={true} */
                durantion={1500}
                /* spy={true}
              exact={true} */
                offset={70}
              >
                Works
              </LinkR>
            </li>
            <li className="hover:cursor-pointer hover:text-yellow hover:font-semibold transition duration-500">
              <LinkR durantion={1500} offset={70} to="/#gallery">
                Gallery
              </LinkR>
            </li>
            <li className="hover:text-yellow  hover:font-semibold transition duration-500">
              <LinkR to="/aboutme">About Me</LinkR>
            </li>
          </ul>
          <div className="w-2/4 pr-36 items-center justify-end flex ">
            {/* <button className="button-54">
            <a href="mailto:anushrighose@gmail.com">Let's Talk!</a>
          </button> */}
            <button
              className="uppercase touch-manipulation relative text-lg tracking-wider border-4 border-solid py-[0.25em] px-[0.5em]  shadow-[5px_5px_0px_0px]
            active:shadow-[0px_0px_0px_0px] active:top-1.5 active:left-1.5 active:translate-y-2 hover:border-yellow hover:text-yellow
  "
            >
              <a href="mailto:anushrighose@gmail.com">Let's Talk!</a>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="rounded-full bg-blue mr-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="menu icon" src="../assets/menu-icon.svg" />
        </button>
      )}
      {/* Mobile Menu */}
      {!isAboveSmallScreens && isMenuToggled && (
        <motion.div
          initial="closed"
          animate={isMenuToggled ? "open" : "closed"}
          variants={variants}
          className="fixed items-center right-0 bottom-0 h-full bg-blue w-[300px]"
        >
          {/* CLOSE ICON */}
          <div className="flex justify-start items-center  p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="close icon" src="../assets/close-icon.svg" />
            </button>
          </div>
          {/* Menu Itens */}
          <div className="flex items-center  flex-col gap-10 ml-[33%] text-2xl text-white">
            <motion.ul className="py-[2em]">
              <motion.li
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="py-[0.2em] hover:text-yellow hover:font-semibold transition duration-500"
              >
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
                  Works
                </LinkR>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={transition}
                className="py-[0.2em] hover:cursor-pointer hover:text-yellow transition duration-500 hover:font-semibold "
              >
                <LinkR
                  to="/#gallery"
                  offset={70}
                  durantion={1500}
                  location={{
                    pathname: "/",

                    hash: "#gallery",
                  }}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Gallery
                </LinkR>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={transition}
                className="py-[0.2em] hover:text-yellow  hover:font-semibold transition duration-500"
              >
                <LinkR
                  to="/aboutme"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  About Me
                </LinkR>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={transition}
                variants={liVariants}
                className="py-[0.2em] hover:text-yellow hover:font-semibold transition duration-500"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <a href="mailto:anushrighose@gmail.com">Let's Talk!</a>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
