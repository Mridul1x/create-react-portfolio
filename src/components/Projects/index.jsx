import React, { useEffect } from "react";
import DivisionBar from "../../components/DivisionBar";
import { motion } from "framer-motion";

import { Link as LinkR, useLocation } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("").toLowerCase();

  return (
    <LinkR to={`/${projectTitle}`}>
      <motion.div
        variants={projectVariant}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative"
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{subtitle}</p>
        </div>
        <img
          src={`./assets/${projectTitle}.png`}
          alt={projectTitle}
          width="400"
          height="370"
          className="w-[400px] h-[370px] object-cover"
        />
      </motion.div>
    </LinkR>
  );
};

function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <section id="works" className="mt-28  mb-28">
      {/* HEADINGS */}
      <div className="md:w-2/5 mx-auto text-center">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <p className="font-playfair font-semibold text-4xl">MY WORKS</p>
            <div className="flex justify-center mt-5">
              <DivisionBar width="w-2/3" />
            </div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="mt-10 mb-10  "
          >
            Here you are going to find some of my works about Abstract ART,
            Quilling Paper Design and many more .
          </motion.p>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center overflow-hidden">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex uppercase justify-center text-center items-center p-10 bg-light-pink
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-purple"
          >
            Quiling Art
          </div>
          <Project
            title="Rain Abstract"
            subtitle="Everybody wants happiness, nobody wants pain, but you can’t have a rainbow without a little rain"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-light-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-purple"
          >
            RAIN ABSTRACT
          </div>
          {/* ROW 2 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-[#392576] 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            QUILLING ART
          </div>
          <Project
            title="The Red Wine"
            subtitle="A managment App made as a final project from the Bootcamp."
          />
          <div
            className="flex justify-center text-center items-center p-10  bg-deep-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            THE RED WINE
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-[#e0ba7e]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-purple"
          >
            QUILLING ART
          </div>

          <Project
            title="Eternal Embrace"
            subtitle="A mesmerizing
            quilled masterpiece that portrays the timeless bond of love."
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-[#523c8f]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-dark-purple"
          >
            Eternal Embrace
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
