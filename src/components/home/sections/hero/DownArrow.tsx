import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";

function DownArrow({ visible, onClickHandler, showDelay }: { visible: boolean, onClickHandler: () => void, showDelay: number }) {
  const exit = {
    opacity: 0, transition: { duration: 0.5 }
  }

  return <AnimatePresence>
    {visible && <motion.div className="cursor-pointer absolute w-screen bottom-0 left-0"
      onClick={onClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: showDelay } }} exit={exit}>
      <motion.div
        className="cursor-pointer bottom-0 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: showDelay } }}
        exit={exit}
      >
        <ArrowDownIcon className="h-8 w-8 mx-auto md:h-10 md:w-10 mb-6 sm:mb-8 md:mb-12 xl:mb-20" color="white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, transition: { duration: 0.5, delay: showDelay } }}
        className="clickable absolute w-screen bottom-0 left-0 h-24 md:h-36 bg-gradient-to-t from-[#ffffff25] to-transparent"
        exit={exit}
      ></motion.div>
    </motion.div>}
  </AnimatePresence>
}

export default DownArrow;