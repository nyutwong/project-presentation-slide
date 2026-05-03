import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import {
  DISTANCE,
  bottomStrip,
  heroTitle,
  sectionLabel,
} from "../lib/motion.ts";
import { useSlideNum } from "../context/SlideContext.tsx";

const GLOWS = [
  {
    top: "50%",
    left: -300,
    size: 800,
    color: "124,58,237",
    opacity: 0.12,
    transform: "translateY(-50%)",
  },
  {
    top: "50%",
    right: -300,
    size: 800,
    color: "168,85,247",
    opacity: 0.1,
    transform: "translateY(-50%)",
  },
];

export function Slide11() {
  const slideNum = useSlideNum();
  const numLabel = String(slideNum).padStart(2, "0");
  return (
    <SlideShell
      glows={GLOWS}
      contentStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      {/* Section label */}
      <motion.div
        {...sectionLabel()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            width: 28,
            height: 1,
            background: "linear-gradient(90deg, transparent, #7C3AED)",
          }}
        />
        <span
          style={{
            fontSize: 17,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7C3AED",
            fontWeight: 700,
          }}
        >
          {numLabel} — Section
        </span>
        <div
          style={{
            width: 28,
            height: 1,
            background: "linear-gradient(90deg, #7C3AED, transparent)",
          }}
        />
      </motion.div>

      {/* Main text */}
      <motion.h1
        {...heroTitle(0.1, DISTANCE.xl)}
        style={{
          fontSize: 192,
          fontWeight: 900,
          letterSpacing: "-7px",
          lineHeight: 1.0,
          margin: 0,
          textAlign: "center",
          color: "#0A0A0A",
          userSelect: "none",
          paddingTop: 8,
        }}
      >
        System
        <br />
        <GradientText>Design.</GradientText>
      </motion.h1>

      <AccentLine
        delay={0.55}
        width={80}
        style={{ marginTop: 52, transformOrigin: "center" }}
      />

      {/* Bottom label */}
      <motion.div
        {...bottomStrip(0.9)}
        style={{
          position: "absolute",
          bottom: 72,
          right: 108,
          fontSize: 14,
          color: "#E5E7EB",
          letterSpacing: "0.08em",
        }}
      >
        AiQ — v1.0
      </motion.div>
    </SlideShell>
  );
}
