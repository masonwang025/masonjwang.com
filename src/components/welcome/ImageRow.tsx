import animateOnScroll from "@/lib/utils/useAnimateOnScroll";
import { motion } from "framer-motion";

const ImageRow = ({ images }: { images: string[] }) => {
  const { ref, controls } = animateOnScroll(true);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <motion.div
          ref={ref}
          key={i}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={controls}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="relative bg-gray-800 aspect-square"
        >
          <img src={`/assets/img/landing/${img}`} alt={`Image ${i}`} className="absolute top-0 left-0 w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageRow;