"use client";
import { useState } from "react";
import BornShineDie from "./BornShineDIe";
import Opening from "./Opening";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  return <>
    <Opening scrolled={scrolled} setScrolled={setScrolled} />
    {scrolled && <BornShineDie />}
  </>
}

export default Hero;