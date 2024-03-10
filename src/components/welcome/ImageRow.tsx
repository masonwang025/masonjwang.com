import animateOnScroll from "@/lib/utils/useAnimateOnScroll";
import { motion } from "framer-motion";

const ImageRow = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <Image src={img} index={i} key={i} />
      ))}
    </div>
  );
}

const Image = ({ src, index }: { src: string, index: number }) => {
  const { ref, controls } = animateOnScroll();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-gray-400"
    >
      <img src={`/assets/img/landing/${src}`} alt={src} className="w-full h-auto" />
    </motion.div>
  );
}

export default ImageRow;