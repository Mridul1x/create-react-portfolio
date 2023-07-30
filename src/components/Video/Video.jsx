import React from "react";
import DivisionBar from "../DivisionBar";
import { motion } from "framer-motion";
const Video = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-10 text-center"
        >
          <p className="font-playfair font-semibold text-4xl ">
            Surprise Video
          </p>
          <div className="flex justify-center mt-5">
            <DivisionBar />
          </div>
        </motion.div>
      </div>
      <div className="text-center">
        <iframe
          width="320"
          height="400"
          src="https://www.youtube.com/embed/xTPdX5z5L44"
          title="Surprise Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <a href="https://www.youtube.com/embed/xTPdX5z5L44" download>
            <button className="mt-3 bg-deep-blue text-white font-bold py-2 px-4 rounded">
              Download Video
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
