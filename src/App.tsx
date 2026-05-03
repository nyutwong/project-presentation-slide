import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./slides/index.ts";
import { usePresentation } from "./hooks/usePresentation.ts";
import { PresentationFrame } from "./components/index.ts";
import { SlideContext } from "./context/SlideContext.tsx";
import { slideSwipeTransition, slideSwipeVariants } from "./lib/motion.ts";

export default function App() {
  const { currentIndex, direction } = usePresentation(slides.length);
  const CurrentSlide = slides[currentIndex];

  return (
    <PresentationFrame>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideSwipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideSwipeTransition}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <SlideContext.Provider value={{ slideNum: currentIndex + 1 }}>
            <CurrentSlide />
          </SlideContext.Provider>
        </motion.div>
      </AnimatePresence>
    </PresentationFrame>
  );
}
