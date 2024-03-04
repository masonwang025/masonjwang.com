import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";

function DownArrow({ visible, onClickHandler, showDelay, text }: { visible: boolean, onClickHandler: () => void, showDelay: number, text?: string }) {
  const exit = {
    opacity: 0, transition: { duration: 0.5 }
  }

  return <AnimatePresence>
    {visible && <motion.div className="cursor-pointer absolute w-screen bottom-0 left-0"
      onClick={onClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 2, transition: { duration: 0.5, delay: showDelay } }} exit={exit}>
      {text && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, transition: { duration: 0.5, delay: showDelay } }}
        exit={exit}>
        <p className="text-center text-title px-4">{text}</p>
      </motion.div>}
      <motion.div
        className="cursor-pointer bottom-0 mx-auto mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, transition: { duration: 0.5, delay: text ? showDelay + 1 : showDelay } }}
        exit={exit}
      >
        <ArrowDownIcon className="h-8 w-8 mx-auto md:h-10 md:w-10 mb-6 sm:mb-8 md:mb-12 xl:mb-20" color="white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, transition: { duration: 0.5, delay: text ? showDelay + 1 : showDelay } }}
        className="absolute w-screen bottom-0 left-0 h-24 md:h-36 bg-gradient-to-t from-[#ffffff19] to-transparent"
        exit={exit}
      ></motion.div>
    </motion.div>}
  </AnimatePresence>
}

export default DownArrow;