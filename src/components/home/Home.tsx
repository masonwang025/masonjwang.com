"use client";
import { useState } from "react";
import Header from "../global/header/Header";
import Welcome from "../welcome/Welcome";
import Hero from "./sections/hero/Hero";
import CursorBlob from "../global/CursorBlob";

function Home() {
  let isDev = false;

  if (process.env.NODE_ENV !== "development")
    isDev = false;

  const [heroDone, setHeroDone] = useState(isDev); // after hero is done, scrolling functionality is normal

  return <main>
    <CursorBlob />
    <Header />
    {isDev ?
      // full screen placeholder so I can scroll down
      <div style={{ height: "100vh" }}></div> :
      <div>
        <Hero heroDone={heroDone} setHeroDone={setHeroDone} />
      </div>}
    {heroDone && <div>
      <Welcome />
    </div>}
  </main>
}

export default Home;