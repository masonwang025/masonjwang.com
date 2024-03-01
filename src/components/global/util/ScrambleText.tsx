"use client";
import { useScramble } from "use-scramble";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function ScrambleText({
  text,
  settings = {},
  delay
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
  delay?: number,
}) {
  const [startScrambling, setStartScrambling] = useState(false);

  const {
    speed = 0.3,
    tick = 5,
    step = 5,
    overflow = false,
    scramble = 10,
    chance = 0.8,
    overdrive = false,
  } = settings;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    if (startScrambling) {
      scrambleRef.current = node;
      ref.current = node;
    } else {
      ref.current = node;
    }
  };

  // as soon as isInView is true, start the delay timer and then set startScrambling to true
  useEffect(() => {
    if (isInView && !startScrambling) {
      const timer = setTimeout(() => {
        setStartScrambling(true);
      }, delay ? delay * 1000 : 0);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  if (startScrambling)
    return <p ref={setRef} />
  else
    return <p ref={setRef} />
}

export default ScrambleText;