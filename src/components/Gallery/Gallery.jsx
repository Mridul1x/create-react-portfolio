import { data } from "../../data/galleryImages";
import GalleryItem from "./GalleryItem";
import { motion } from "framer-motion";
import DivisionBar from "../DivisionBar";

const Gallery = () => {
  return (
    <section id="gallery" className="wrapper mt-10 pb-48">
      <div className="overflow-hidden md:w-2/5 mx-auto">
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-10 text-center"
        >
          <p className="font-playfair font-semibold text-4xl ">MY GALLERY</p>
          <div className="flex justify-center mt-5">
            <DivisionBar width="w-2/3" />
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((image, index) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
