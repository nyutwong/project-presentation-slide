import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import { ThaiText } from "../components/ThaiText.tsx";
import { EASE } from "../lib/motion.ts";

const GLOWS = [
  { top: -300, right: -160, size: 800, color: "124,58,237", opacity: 0.13 },
  { bottom: -200, left: -80, size: 640, color: "239,68,68", opacity: 0.07 },
];

const GAPS = [
  {
    num: "01",
    en: "The Ingestion Gap",
    th: "ข้อมูลไม่เป็นระเบียบ",
    desc: "ขาด data pipeline ที่ดีพอจะจัดการกับ Messy Data จากแหล่งข้อมูลองค์กร ส่งผลต่อความแม่นยำของ RAG",
    accent: "#EF4444",
    accentRgb: "239,68,68",
  },
  {
    num: "02",
    en: "The Contextual Gap",
    th: "การแตกส่วนของบริบท",
    desc: "Generic RAG ใช้การแบ่งแบบ Naive Chunking ไม่สนใจโครงสร้างและความหมายของเอกสาร",
    accent: "#F59E0B",
    accentRgb: "245,158,11",
  },
  {
    num: "03",
    en: "The Synchronization Gap",
    th: "ไม่มีการติดตามการเปลี่ยนแปลง",
    desc: "RAG ทั่วไปมองฐานความรู้เป็น Static Dataset ขาด Event-driven architecture ทำให้ข้อมูลไม่อัปเดท",
    accent: "#7C3AED",
    accentRgb: "124,58,237",
  },
];

export function Slide05() {
  return (
    <SlideShell glows={GLOWS}>
      {/* ── Header (consistent with other slides) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        style={{
          paddingBottom: 22,
          borderBottom: "1px solid #F0F0F0",
          marginBottom: 28,
        }}
      >
        <SlideLabel label="05 — Aingo" style={{ marginBottom: 14 }} />
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            lineHeight: 1.0,
            margin: "0 0 16px",
            color: "#0A0A0A",
            userSelect: "none",
            paddingTop: 4,
          }}
        >
          Why Existing <GradientText>System Fails.</GradientText>
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <AccentLine delay={0.4} width={80} />
          <span
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            The Core Technical Challenge
          </span>
        </div>
      </motion.div>

      {/* ── Body: 2-col asymmetric ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 48,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        {/* Left: numbered gap rows */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {GAPS.map((gap, i) => (
            <motion.div
              key={gap.num}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.35 + i * 0.12,
                ease: EASE,
              }}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 24,
                borderBottom:
                  i < GAPS.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              {/* Big ghost number */}
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  color: `rgba(${gap.accentRgb},0.12)`,
                  fontVariantNumeric: "tabular-nums",
                  flexShrink: 0,
                  width: 68,
                  textAlign: "right",
                }}
              >
                {gap.num}
              </span>

              {/* Accent bar */}
              <div
                style={{
                  width: 3,
                  height: 44,
                  borderRadius: 4,
                  background: gap.accent,
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              />

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    marginBottom: 6,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--slide-card-heading)",
                      fontWeight: 800,
                      color: "#0A0A0A",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    <ThaiText>{gap.th}</ThaiText>
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: gap.accent,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "2px 9px",
                      borderRadius: 99,
                      background: `rgba(${gap.accentRgb},0.08)`,
                      border: `1px solid rgba(${gap.accentRgb},0.2)`,
                      flexShrink: 0,
                    }}
                  >
                    {gap.en}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  <ThaiText>{gap.desc}</ThaiText>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vertical rule */}
        <div
          style={{
            width: 1,
            background:
              "linear-gradient(180deg, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)",
            flexShrink: 0,
          }}
        />

        {/* Right: image card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          style={{
            width: "30%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {/* Image placeholder card */}
          <div
            style={{
              flex: 1,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              background: "#F8F8FC",
              position: "relative",
              minHeight: 0,
            }}
          >
            {/* Placeholder pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Subtle purple-to-white gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(160deg, rgba(124,58,237,0.08) 0%, transparent 60%)",
              }}
            />
            {/* Centered image icon */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    fill="#7C3AED"
                    opacity="0.6"
                  />
                  <path
                    d="M3 15l5-5 4 4 3-3 6 6"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#A78BFA",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Image placeholder
              </span>
            </div>
          </div>

          {/* Caption card */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              background: "rgba(124,58,237,0.04)",
              border: "1px solid rgba(124,58,237,0.14)",
              borderLeft: "3px solid rgba(124,58,237,0.5)",
            }}
          >
            <div
              style={{
                fontSize: "var(--slide-card-heading)",
                fontWeight: 700,
                color: "#0A0A0A",
                marginBottom: 4,
              }}
            >
              <ThaiText>ลักษณะระบบเดิม</ThaiText>
            </div>
            <p
              style={{
                fontSize: "var(--slide-body)",
                color: "#6B7280",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <ThaiText>
                ระบบเดิมล้มเหลวไม่ใช่เพราะขาดข้อมูล —
                แต่เพราะขาดสถาปัตยกรรมที่ถูกต้อง
              </ThaiText>
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
