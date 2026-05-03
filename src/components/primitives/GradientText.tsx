import type { ReactNode } from "react";

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(120deg, #7C3AED 0%, #A855F7 45%, #EC4899 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
