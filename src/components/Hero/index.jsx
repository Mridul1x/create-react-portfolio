import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

import animation01 from "../../assets/sara_animation01.json";
import Lottie from "lottie-react";
import SocialMediaIcons from "../SocialMediaIcons";
import Typewriter from "typewriter-effect";

function Hero() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="w-5/6 md:flex flex-row-reverse md:justify-center md:items-center md:h-5/6 gap-16 mt-10 md:mb-10 mb-6 "
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:order-2 flex justify-center basis-3/6 z-10 mt-16 md:mt-32 "
        >
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute
          "
            >
              <Lottie
                animationData={animation01}
                loop={true}
                className="z-10 w-full
              max-w-[400px] md:max-w-[600px]"
              />
            </div>
          ) : (
            <div>
              <Lottie
                animationData={animation01}
                loop={true}
                className="z-10 w-full
              max-w-[400px] md:max-w-[600px]"
              />
            </div>
          )}
        </motion.div>
      </div>
      {/* MAIN SECTION */}
      <div className=" z-30 basis-3/6 mt-12 md:mt-32">
        {/* HEADINGS */}
        <div className="overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="flex justify-center text-center font-raleway z-10  md:text-start ">
              <div className="uppercase">
                <p className="md:text-5xl ">
                  Hello, my name is&nbsp;
                  <span
                    style={{
                      fontWeight: "900",
                    }}
                  >
                    ANUSHRI GHOSE.
                  </span>
                </p>
                <p className="inline-flex md:text-3xl">
                  I'm a&nbsp;
                  <span className="bg-yellow text-purple justify-center text-center">
                    <Typewriter
                      options={{
                        strings: [
                          "Quilling Artist",
                          "Paper Quilling Expert",
                          "DIY Artisan",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 28,
                        delay: 93,
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
