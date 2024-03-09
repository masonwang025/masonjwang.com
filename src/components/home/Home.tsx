"use client";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "../global/header/Header";
import Welcome from "../welcome/Welcome";
import Hero from "./sections/hero/Hero";

function Home() {
  let isDev = false;

  if (process.env.NODE_ENV !== "development")
    isDev = false;

  const [heroDone, setHeroDone] = useState(isDev); // after hero is done, scrolling functionality is normal

  return <main>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.clickable'
      ]}
    />
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