"use client";
import { useState } from "react";
import BornShineDie from "./BornShineDIe";
import Opening from "./Opening";

function Hero({ heroDone, setHeroDone }: { heroDone: boolean, setHeroDone: (heroDone: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false); // after user scrolls down from stage 1
  const [canLeaveHero, setCanLeaveHero] = useState(false); // after all text is done

  return <>
    <Opening scrolled={scrolled} setScrolled={setScrolled} shouldAllowScroll={canLeaveHero} />
    {scrolled && <BornShineDie
      canLeaveHero={canLeaveHero}
      setCanLeaveHero={setCanLeaveHero}
      heroDone={heroDone}
      setHeroDone={setHeroDone} />}
  </>
}

export default Hero;