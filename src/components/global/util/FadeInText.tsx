
import { motion } from "framer-motion";

const FadeInText = ({ children, delay, className, inPlace }: { children: any, delay?: number, className?: string, inPlace?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: inPlace ? 0 : 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay ?? 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInText;