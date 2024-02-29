"use client";
import ScrambleText from "@/components/global/util/ScrambleText";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Opening() {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);

  const startAnimation = () => {
    if (!scrolled) {
      controls.start({
        height: "auto",
        color: "#D3D3D3",
        marginTop: "5rem",
        transition: { duration: 1 }
      });
      setScrolled(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        startAnimation();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, scrolled]); // Include scrolled in the dependency array

  return (
    <motion.div
      layout
      className="wrapper mx-auto flex flex-col justify-center items-center text-white"
      style={{ height: "100vh" }}
      animate={controls}
      initial={{ justifyContent: "center", height: "100vh", color: "white" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout className="header text-2xl text-center"><ScrambleText text="What is the meaning of life?" settings={{ speed: 0.4, tick: 9 }} /></motion.div>
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="absolute bottom-10 cursor-pointer"
            onClick={startAnimation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 2, transition: { duration: 0.5, delay: 3 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <ArrowDownIcon className="h-8 w-8" color="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Opening;