import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const animateOnScroll = (
  onScrollIntoView: boolean = true,
  animateSettings?: any
) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && onScrollIntoView) {
      controls.start(
        animateSettings || {
          opacity: 1,
          y: 0,
        }
      );
    }
  }, [isInView, onScrollIntoView]);

  return { ref, controls };
};

export default animateOnScroll;
