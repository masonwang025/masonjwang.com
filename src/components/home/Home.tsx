"use client";
import { useState } from "react";
import Header from "../global/header/Header";
import Hero from "./sections/hero/Hero";
import Welcome from "../welcome/Welcome";

function Home() {
  const isDev = false; process.env.NODE_ENV === "development";

  const [heroDone, setHeroDone] = useState(isDev); // after hero is done, scrolling functionality is normal

  return <main>
    <Header />
    {!isDev && <div>
      <Hero heroDone={heroDone} setHeroDone={setHeroDone} />
    </div>}
    {heroDone && <div>
      <Welcome />
    </div>}
  </main>
}

export default Home;