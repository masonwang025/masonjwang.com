"use client";
import { useState } from "react";
import BornShineDie from "./BornShineDIe";
import Opening from "./Opening";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroDone, setHeroDone] = useState(false);

  return <>
    <Opening scrolled={scrolled} setScrolled={setScrolled} />
    {scrolled && <BornShineDie heroDone={heroDone} setHeroDone={setHeroDone} />}
  </>
}

export default Hero;