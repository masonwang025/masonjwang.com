import React, { useState, useEffect } from 'react';
import ScrambleText from "@/components/global/util/ScrambleText";
import DownArrow from './DownArrow';

function BornShineDie({ canLeaveHero, setCanLeaveHero, heroDone, setHeroDone }: { canLeaveHero: boolean, setCanLeaveHero: (canLeaveHero: boolean) => void, heroDone: boolean, setHeroDone: (heroDone: boolean) => void }) {
  // Define an array of delays in seconds
  const delaysInSeconds = [1, 2, 3, 4, 5, 4];
  // Convert seconds to milliseconds for setTimeout
  const delaysInMilliseconds = delaysInSeconds.map(seconds => seconds * 1000);

  // State to control the visibility of each ScrambleText component
  const [visibleElements, setVisibleElements] = useState([false, false, false, false]);
  const texts = ["“We are born,", "we have a chance to shine,", "and then we die.", "Life's about maximizing that shine.”"];

  useEffect(() => {
    // Set timeouts based on the specified delays to update the visibility state
    const timers = delaysInMilliseconds.map((delay, index) =>
      setTimeout(() => {
        setVisibleElements(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, delay)
    );

    // Cleanup function to clear all timeouts when the component unmounts
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // set hero done after the longest delay
    const timer = setTimeout(() => setCanLeaveHero(true), Math.max(...delaysInMilliseconds));
    return () => clearTimeout(timer);
  }, []);

  const finishHero = () => {
    setHeroDone(true);
    setCanLeaveHero(true);
    document.body.style.overflow = "auto";
  }

  // allow user to leave hero section after all text is done
  useEffect(() => {
    if (!canLeaveHero) return;

    const handleFinish = (e: Event) => {
      finishHero();
    };

    window.addEventListener("wheel", handleFinish);
    window.addEventListener("touchmove", handleFinish);

    return () => {
      window.removeEventListener("wheel", handleFinish);
      window.removeEventListener("touchmove", handleFinish);
    };
  }, [canLeaveHero]);

  return (
    <div className="wrapper header text-title flex flex-col">
      <VerticalSpacer />
      <div className="header text-gray-400 text-center">
        {visibleElements[0] && <ScrambleText text="My best friend told me:" />}
      </div>
      <div className="uppercase flex flex-col min-w-md max-w-md mx-auto mt-4 space-y-3">
        {visibleElements[1] ? <div className="text-left"><ScrambleText text={texts[0]} /></div> : <div className="opacity-0">{texts[0]}</div>}
        {visibleElements[2] ? <div className="text-center"><ScrambleText text={texts[1]} /></div> : <div className="opacity-0">{texts[1]}</div>}
        {visibleElements[3] ? <div className="text-right"><ScrambleText text={texts[2]} /></div> : <div className="opacity-0">{texts[2]}</div>}
        {visibleElements[4] ? <div className="text-center mt-4"><ScrambleText text={texts[3]} /></div> : <div className="opacity-0">{texts[3]}</div>}
      </div>
      {canLeaveHero && <DownArrow visible={!heroDone} onClickHandler={finishHero} showDelay={0.5} />}
      <VerticalSpacer />
    </div>
  );
}

// somewhat hacky vertical alignment fix
const VerticalSpacer = () => <div className="h-[18vh] md:h-[24vh] lg:h-[26vh]" />;

export default BornShineDie;

