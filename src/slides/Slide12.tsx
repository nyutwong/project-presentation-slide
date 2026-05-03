import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import {
  DISTANCE,
  DURATION,
  fadeInUp,
  slideHeader,
} from "../lib/motion.ts";
import systemOverview from "../assets/system-overview.png";

const GLOWS = [
  { top: -200, right: -100, size: 640, color: "124,58,237", opacity: 0.08 },
  { bottom: -150, left: -80, size: 500, color: "16,185,129", opacity: 0.07 },
];

export function Slide12() {
  return (
    <SlideShell glows={GLOWS}>
      {/* ── Header ── */}
      <motion.div
        {...slideHeader()}
        style={{
          paddingBottom: 20,
          borderBottom: "1px solid #F0F0F0",
          marginBottom: 24,
        }}
      >
        <SlideLabel label="Aingo" style={{ marginBottom: 14 }} />
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            lineHeight: 1.0,
            margin: "0 0 14px",
            color: "#0A0A0A",
            userSelect: "none",
            paddingTop: 4,
          }}
        >
          Solution <GradientText>Overview.</GradientText>
        </h1>
        <AccentLine delay={0.4} width={80} />
      </motion.div>

      {/* ── Image ── */}
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
