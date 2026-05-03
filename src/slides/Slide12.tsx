import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { DISTANCE, DURATION, fadeInUp } from "../lib/motion.ts";
import systemOverview from "../assets/system-overview.png";

const GLOWS = [
  { top: -200, right: -100, size: 640, color: "124,58,237", opacity: 0.08 },
  { bottom: -150, left: -80, size: 500, color: "16,185,129", opacity: 0.07 },
];

export function Slide12() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Aingo"
        title="Solution"
        highlight="Overview."
        titleSize={64}
        paddingBottom={20}
      />

      <motion.div
        {...fadeInUp(0.3, { distance: DISTANCE.sm, duration: DURATION.med })}
        style={{
          flex: 1,
          minHeight: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={systemOverview}
          alt="System Overview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 12,
          }}
        />
      </motion.div>
    </SlideShell>
  );
}
