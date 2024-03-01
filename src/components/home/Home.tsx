"use client";
import { useState } from "react";
import Header from "../global/header/Header";
import Hero from "./sections/hero/Hero";
import Welcome from "../welcome/Welcome";

function Home() {
  const [heroDone, setHeroDone] = useState(false); // after hero is done, scrolling functionality is normal

  return <main>
    <Header />
    <Hero heroDone={heroDone} setHeroDone={setHeroDone} />
    {heroDone && <div>
      <Welcome />
    </div>}
  </main>
}

export default Home;