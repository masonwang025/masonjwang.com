"use client";
import ScrambleText from "@/components/global/util/ScrambleText";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Opening({ scrolled, setScrolled }: { scrolled: boolean, setScrolled: (scrolled: boolean) => void }) {
  const controls = useAnimation();

  const startAnimation = () => {
    if (!scrolled) {
      controls.start({
        height: "auto",
        color: "#9ca3af",
        marginTop: "5rem",
        transition: { duration: 1 }
      });
      setScrolled(true);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    // overflow: hidden
    document.body.style.overflow = "hidden";

    const handleScroll = (e: any) => {
      e.preventDefault();
      startAnimation();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [controls, scrolled]); // Include scrolled in the dependency array

  return (
    <motion.div
      className="wrapper mx-auto flex flex-col justify-center items-center text-white"
      style={{ height: "100vh" }}
      animate={controls}
      initial={{ justifyContent: "center", height: "100vh", color: "white" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout className="header text-xl text-center"><ScrambleText text="What is the meaning of life?" settings={{ speed: 0.6, tick: 9 }} /></motion.div>
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="absolute bottom-10 md:bottom-14 xl:bottom-20"
            // onClick={startAnimation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 2, transition: { duration: 0.5, delay: 2.2 } }}
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