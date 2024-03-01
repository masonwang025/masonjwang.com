import React, { useState, useEffect } from 'react';
import ScrambleText from "@/components/global/util/ScrambleText";

function BornShineDie({ heroDone, setHeroDone }: { heroDone: boolean, setHeroDone: (heroDone: boolean) => void }) {
  // Define an array of delays in seconds
  const delaysInSeconds = [1, 2.8, 4.5, 7, 9];
  // Convert seconds to milliseconds for setTimeout
  const delaysInMilliseconds = delaysInSeconds.map(seconds => seconds * 1000);

  // State to control the visibility of each ScrambleText component
  const [visibleTexts, setVisibleTexts] = useState([false, false, false, false]);

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
    <div className="wrapper header py-10">
      <div className="header text-md md:text-lg lg:text-xl text-gray-400">
        {visibleTexts[0] && <ScrambleText text="My best friend told me:" />}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl flex flex-col space-y-12 justify-center">
        {visibleTexts[1] && <div className="text-left"><ScrambleText text="We are born," /></div>}
        {visibleTexts[2] && <div className="text-center"><ScrambleText text="we have a chance to shine," /></div>}
        {visibleTexts[3] && <div className="text-right"><ScrambleText text="and then we die." /></div>}
        {visibleTexts[4] && <div className="text-center"><ScrambleText text="So it's about maximizing that shine." /></div>}
      </div>
    </div>
  );
}

export default BornShineDie;