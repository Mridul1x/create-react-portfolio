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
    </div>
  );
};

export default Video;
