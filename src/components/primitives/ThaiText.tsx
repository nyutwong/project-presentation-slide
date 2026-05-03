import type { ReactNode, CSSProperties } from "react";

interface ThaiTextProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function ThaiText({ children, style }: ThaiTextProps) {
  return (
    <span style={{ fontFamily: '"Noto Sans Thai", sans-serif', ...style }}>
      {children}
    </span>
  );
}
