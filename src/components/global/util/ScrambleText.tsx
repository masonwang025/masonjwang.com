"use client";
import { useRef } from "react";
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";

function ScrambleText({
  text,
  settings = {},
  fadeInDuration = 0.5, // Optional fade-in duration prop
}: {
  text: string,
  settings?: {
    speed?: number,
    tick?: number,
    step?: number,
    overflow?: boolean,
    scramble?: number,
    chance?: number,
    overdrive?: boolean,
  },
  fadeInDuration?: number, // Adding the fade-in duration prop type
}) {

  const {
    speed = 0.8,
    tick = 1,
    step = 2.3,
    overflow = false,
    scramble = 10,
    chance = 0.8,
    overdrive = false,
  } = settings;

  const ref = useRef(null);

  const scrambleSettings = {
    text,
    speed,
    tick,
    step,
    overflow,
    scramble,
    chance,
    overdrive,
  };

  const { ref: scrambleRef } = useScramble(scrambleSettings);

  const setRef = (node: any) => {
    scrambleRef.current = node;
    ref.current = node;
  };

  // Adjusting the return statement to include the fade-in animation
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: fadeInDuration }}
    >
      <p ref={setRef} />
      <p className="opacity-0" style={{ height: 0, overflow: 'hidden', margin: 0, padding: 0 }}>{text}</p>
    </motion.div>
  );
}

export default ScrambleText;