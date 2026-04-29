import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { EASE } from "../lib/motion.ts";
import { useSlideNum } from "../context/SlideContext.tsx";

interface SlideLabelProps {
  label: string;
  style?: CSSProperties;
}

export function SlideLabel({ label, style }: SlideLabelProps) {
  const slideNum = useSlideNum();
  const prefix = slideNum > 0 ? `${String(slideNum).padStart(2, "0")} — ` : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ display: "flex", alignItems: "center", gap: 10, ...style }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
          boxShadow: "0 0 8px rgba(124,58,237,0.6)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 17,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7C3AED",
          fontWeight: 700,
        }}
      >
        {prefix}
        {label}
      </span>
    </motion.div>
  );
}
