import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { EASE } from "../lib/motion.ts";

interface AccentLineProps {
  delay?: number;
  width?: number;
  style?: CSSProperties;
}

export function AccentLine({ delay = 0, width = 140, style }: AccentLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      style={{
        height: 3,
        width,
        background: "linear-gradient(90deg, #7C3AED, #A855F7)",
        borderRadius: 2,
        transformOrigin: "left center",
        ...style,
      }}
    />
  );
}
