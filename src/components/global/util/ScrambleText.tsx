"use client";
import { useRef } from "react";
import { useScramble } from "use-scramble";

function ScrambleText({
  text,
  settings = {},
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
}) {

  const {
    speed = 0.4,
    tick = 3,
    step = 5,
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

  return <p ref={setRef} />
}

export default ScrambleText;