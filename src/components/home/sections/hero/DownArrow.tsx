import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";

function DownArrow({ onClickHandler, showDelay }: { onClickHandler: () => void, showDelay: number }) {
  return <AnimatePresence>
    <motion.div
      className="absolute cursor-pointer bottom-0"
      onClick={onClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 2, transition: { duration: 0.5, delay: showDelay } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ArrowDownIcon className="h-8 w-8 md:h-10 md:w-10 mb-8 md:mb-12 xl:mb-20" color="white" />
    </motion.div>
  </AnimatePresence>
}

export default DownArrow;