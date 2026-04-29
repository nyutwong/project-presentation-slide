import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import { ThaiText } from "../components/ThaiText.tsx";
import { EASE } from "../lib/motion.ts";

const GLOWS = [
  { top: -280, right: -160, size: 800, color: "124,58,237", opacity: 0.12 },
];

function ZapIcon() {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.15))",
        border: "1px solid rgba(124,58,237,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient
            id="zap-grad"
            x1="4"
            y1="2"
            x2="20"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" fill="url(#zap-grad)" />
      </svg>
    </div>
  );
}

function ParadoxIcon() {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background:
          "linear-gradient(135deg, rgba(236,72,153,0.07), rgba(168,85,247,0.12))",
        border: "1px solid rgba(168,85,247,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient
            id="paradox-a"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          d="M9 18V9M9 9L6 12M9 9L12 12"
          stroke="url(#paradox-a)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6V15M15 15L12 12M15 15L18 12"
          stroke="url(#paradox-a)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 2"
        />
      </svg>
    </div>
  );
}

export function Slide03() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideLabel label="Section" style={{ marginBottom: 40 }} />

      {/* Split layout */}
      <div style={{ flex: 1, display: "flex", gap: 72, alignItems: "stretch" }}>
        {/* Left: Title */}
        <div
          style={{
            width: "34%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.12, ease: EASE }}
            style={{
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.0,
              margin: "0 0 40px",
              color: "#0A0A0A",
              userSelect: "none",
              paddingTop: 6,
            }}
          >
            Back
            <br />
            <GradientText>grounds.</GradientText>
          </motion.h1>

          <AccentLine delay={0.45} width={72} />
        </div>

        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
          style={{
            width: 1,
            background:
              "linear-gradient(to bottom, transparent, #E5E7EB 15%, #E5E7EB 85%, transparent)",
            transformOrigin: "top center",
            flexShrink: 0,
          }}
        />

        {/* Right: Cards */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {/* Card 1 — Speed & Adaptability */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            style={{
              padding: "32px 36px",
              background: "#FAFAFA",
              borderRadius: 20,
              border: "1px solid #F3F4F6",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <ZapIcon />
              <div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#7C3AED",
                    letterSpacing: "-0.3px",
                    marginBottom: 12,
                  }}
                >
                  Speed &amp; Adaptability
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#374151",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <ThaiText>
                    ในปัจจุบัน
                    การที่ธุรกิจจะอยู่รอดในโลกที่เปลี่ยนแปลงย่างรวดเร็วได้
                    ตัวธุระกิจเองก็ต้องสามารถที่จะปรับตัวได้อย่างรวดเร็ว
                    ส่งมอบผลิตภัณฑ์ได้ทันต่อการเปลี่ยนแปลง
                  </ThaiText>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — The Paradox */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            style={{
              padding: "32px 36px",
              background: "#FAFAFA",
              borderRadius: 20,
              border: "1px solid #F3F4F6",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <ParadoxIcon />
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#EC4899",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    The Paradox
                  </span>
                  <div
                    style={{
                      fontSize: 13,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: "rgba(236,72,153,0.08)",
                      border: "1px solid rgba(236,72,153,0.2)",
                      color: "#EC4899",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Core Problem
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#374151",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <ThaiText>
                    เมื่อเวลาผ่านไปบริษัทเติบโตขึ้น
                    มีประสบการณ์และความรู้มากขึ้น
                    เราก็คาดหวังว่าประสบการณ์และความรู้เหล่านี้จะช่วยพลักดันบริษัทไปข้างหน้าได้เร็วขึ้น
                    แต่มันกลับช้าลงเพราะความไม่เป็นระเบียบและความกระจัดกระจาย
                    ขององค์ความรู้เหล่านั้น
                  </ThaiText>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
