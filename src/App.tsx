import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./slides/index.ts";
import { usePresentation } from "./hooks/usePresentation.ts";
import { PresentationFrame } from "./components/PresentationFrame.tsx";
import { SlideContext } from "./context/SlideContext.tsx";

const slideVariants = {
  enter: (dir: 1 | -1) => ({ x: dir * 1920 }),
  center: () => ({ x: 0 }),
  exit: (dir: 1 | -1) => ({ x: dir * -1920 }),
};

const slideTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function App() {
  const { currentIndex, direction } = usePresentation(slides.length);
  const CurrentSlide = slides[currentIndex];

  return (
    <PresentationFrame>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
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
