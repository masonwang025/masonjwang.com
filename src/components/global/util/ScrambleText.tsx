"use client";
import { useScramble } from "use-scramble";

function ScrambleText({
  text,
  settings = {},
}: {
  text: string,
  settings?: { // Make settings optional
    speed?: number,
    tick?: number,
    step?: number,
    overflow?: boolean,
    scramble?: number,
    chance?: number,
    overdrive?: boolean,
  },
}) {
  // Destructure with default values
  const {
    speed = 0.5,
    tick = 2,
    step = 5,
    overflow = false,
    scramble = 10,
    chance = 5,
    overdrive = false,
  } = settings;


  // hook returns a ref
  const { ref } = useScramble({
    text,
    speed,
    tick,
    step,
    overflow,
    scramble,
    chance,
    overdrive
  });
  // apply the ref to a node
  return <p ref={ref} />;
}

export default ScrambleText;