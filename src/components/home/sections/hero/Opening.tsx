"use client";
import ScrambleText from "@/components/global/util/ScrambleText";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import DownArrow from "./DownArrow";

function Opening({ scrolled, setScrolled, shouldAllowScroll }: { scrolled: boolean, setScrolled: (scrolled: boolean) => void, shouldAllowScroll: boolean }) {
  const controls = useAnimation();

  const startAnimation = () => {
    if (!scrolled) {
      controls.start({
        height: "auto",
        color: "#9ca3af",
        marginTop: "5rem",
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 50,
          mass: 1,
          duration: 1
        }
      });
      setScrolled(true);
    }
  };

  const handleScroll = (e: any) => {
    if (shouldAllowScroll) return;
    e.preventDefault();
    startAnimation();
  };

  useEffect(() => {
    if (shouldAllowScroll) return;
    document.body.style.overflowY = "hidden";

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [scrolled, shouldAllowScroll]);

  return (
    <motion.div
      className="wrapper mx-auto flex flex-col justify-center items-center text-white"
      style={{ height: "100vh" }}
      animate={controls}
      initial={{ justifyContent: "center", height: "100vh", color: "white" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout className="header text-title text-center">
        <ScrambleText text="What is the meaning of our lives?" settings={{ speed: 0.8, tick: 9, step: 5 }} />
      </motion.div>
      <DownArrow visible={!scrolled} onClickHandler={startAnimation} showDelay={2} />
    </motion.div>
  );
}

export default Opening;