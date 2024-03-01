import React, { useState, useEffect } from 'react';
import ScrambleText from "@/components/global/util/ScrambleText";

function BornShineDie({ heroDone, setHeroDone }: { heroDone: boolean, setHeroDone: (heroDone: boolean) => void }) {
  // Define an array of delays in seconds
  const delaysInSeconds = [1, 2, 3, 4, 5];
  // Convert seconds to milliseconds for setTimeout
  const delaysInMilliseconds = delaysInSeconds.map(seconds => seconds * 1000);

  // State to control the visibility of each ScrambleText component
  const [visibleTexts, setVisibleTexts] = useState([false, false, false, false]);
  const texts = ["We are born,", "we have a chance to shine,", "and then we die.", "So it's about maximizing that shine."];

  useEffect(() => {
    // Set timeouts based on the specified delays to update the visibility state
    const timers = delaysInMilliseconds.map((delay, index) =>
      setTimeout(() => {
        setVisibleTexts(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, delay)
    );

    // Cleanup function to clear all timeouts when the component unmounts
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="wrapper header hero-font py-10">
      <div className="header text-md md:text-lg lg:text-xl text-gray-400">
        {visibleTexts[0] && <ScrambleText text="My best friend told me:" />}
      </div>
      <div className="flex flex-col justify-between my-[15vh] h-[25vh] ">
        {visibleTexts[1] ? <div className="text-left"><ScrambleText text={texts[0]} /></div> : <div className="opacity-0">{texts[0]}</div>}
        {visibleTexts[2] ? <div className="text-center"><ScrambleText text={texts[1]} /></div> : <div className="opacity-0">{texts[1]}</div>}
        {visibleTexts[3] ? <div className="text-right"><ScrambleText text={texts[2]} /></div> : <div className="opacity-0">{texts[2]}</div>}
      </div>
      {visibleTexts[4] ? <div className="text-center"><ScrambleText text={texts[3]} /></div> : <div className="opacity-0">{texts[3]}</div>}
    </div>
  );
}

export default BornShineDie;