
import { motion } from "framer-motion";

const FadeInText = ({ text, delay, className }: { text: any, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: delay ?? 0 }}
    className={className}
  >
    {text}
  </motion.div>
);

export default FadeInText;