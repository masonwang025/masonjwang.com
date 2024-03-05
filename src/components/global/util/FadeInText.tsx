import useAnimateOnScroll from "@/lib/utils/useAnimateOnScroll";
import { motion } from "framer-motion";

const FadeInText = ({ children, delay, className, inPlace, onScrollIntoView = true }: { children: any, delay?: number, className?: string, inPlace?: boolean, onScrollIntoView?: boolean }) => {
  const { ref, controls } = useAnimateOnScroll(onScrollIntoView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: inPlace ? 0 : 20 }}
      animate={onScrollIntoView ? controls : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay ?? 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;