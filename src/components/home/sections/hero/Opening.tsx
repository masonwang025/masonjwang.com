"use client";
import ScrambleText from "@/components/global/util/ScrambleText";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import DownArrow from "./DownArrow";

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
  }, [controls, scrolled]);

  return (
    <motion.div
      className="wrapper mx-auto flex flex-col justify-center items-center text-white"
      style={{ height: "100vh" }}
      animate={controls}
      initial={{ justifyContent: "center", height: "100vh", color: "white" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout className="header hero-font text-center">
        <ScrambleText text="What is the meaning of life?" settings={{ speed: 0.6, tick: 9, step: 5 }} />
      </motion.div>
      {!scrolled && <DownArrow onClickHandler={startAnimation} showDelay={2.2} />}
    </motion.div>
  );
}

export default Opening;