import { motion } from "framer-motion";

const GalleryItem = ({ src, alt, index }) => {
  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "100px" }}
      whileInView={{ scale: 1, borderRadius: "0.75rem" }}
      transition={{ ease: "easeInOut", duration: 1.35, delay: index / 10 }}
      className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-500 "
    >
      <img
        src={src}
        alt={alt}
        width={500}
        height={500}
        priority="true"
        className="w-full h-full object-cover group-hover:scale-125 duration-1000"
      />
    </motion.div>
  );
};

export default GalleryItem;
