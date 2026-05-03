import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import { ThaiText } from "../components/ThaiText.tsx";
import { cardRise, slideHeader, stagger } from "../lib/motion.ts";

const GLOWS = [
  { top: -280, right: -140, size: 760, color: "124,58,237", opacity: 0.11 },
  { bottom: -180, left: -60, size: 560, color: "16,185,129", opacity: 0.07 },
];

const LEVELS = [
  {
    num: "01",
    label: "Legacy Keyword Search",
    accent: "#EF4444",
    accentRgb: "239,68,68",
    status: "Legacy",
    statusBg: "rgba(239,68,68,0.08)",
    statusBorder: "rgba(239,68,68,0.2)",
    desc: "ปัญหา: ใช้ Keyword ค้นหาเอกสาร ทำให้ไม่รู้ intent จริงๆ ของผู้ใช้ ได้ผลเป็นเอกสารมากมาย แต่ไม่ตรงกับที่หา",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#EF4444" strokeWidth="2" />
        <line
          x1="16.5"
          y1="16.5"
          x2="21"
          y2="21"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="11"
          x2="14"
          y2="11"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="8"
          x2="11"
          y2="14"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    imgColor: "239,68,68",
  },
  {
    num: "02",
    label: "Naive / Generic RAG",
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    status: "Partial",
    statusBg: "rgba(245,158,11,0.08)",
    statusBorder: "rgba(245,158,11,0.2)",
    desc: "ปัญหา: ตอบคำถามด้วย Natural-Language ได้ แต่ยังขาด Context/Meta ที่ดีของข้อมูล",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line
          x1="9"
          y1="10"
          x2="15"
          y2="10"
          stroke="#F59E0B"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="14"
          x2="13"
          y2="14"
          stroke="#F59E0B"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    imgColor: "245,158,11",
  },
  {
    num: "03",
    label: "The Proposed System",
    accent: "#7C3AED",
    accentRgb: "124,58,237",
    status: "Aingo",
    statusBg: "rgba(124,58,237,0.08)",
    statusBorder: "rgba(124,58,237,0.25)",
    desc: "อัปเกรด Data Pipeline ทำให้ได้ Data ที่มีความเที่ยงตรง มี Agent ที่ฉลาดสำหรับการตอบคำถาม",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient
            id="zap-g"
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
        <path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" fill="url(#zap-g)" />
      </svg>
    ),
    imgColor: "124,58,237",
  },
];

export function Slide06() {
  return (
    <SlideShell glows={GLOWS}>
      {/* ── Header ── */}
      <motion.div
        {...slideHeader()}
        style={{
          paddingBottom: 22,
          borderBottom: "1px solid #F0F0F0",
          marginBottom: 32,
        }}
      >
        <SlideLabel label="Aingo" style={{ marginBottom: 14 }} />
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
          System <GradientText>Evolution.</GradientText>
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

      {/* ── 3 horizontal cards ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 20,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        {LEVELS.map((lvl, i) => (
          <motion.div
            key={lvl.num}
            {...cardRise(stagger(0.28, 0.12, i))}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              borderRadius: 18,
              border: `1px solid rgba(${lvl.accentRgb},0.15)`,
              overflow: "hidden",
              background: "#FAFAFA",
              boxShadow: `0 2px 24px rgba(${lvl.accentRgb},0.06)`,
            }}
          >
            {/* Image placeholder area */}
            <div
              style={{
                flex: "0 0 62%",
                position: "relative",
                background: `rgba(${lvl.accentRgb},0.04)`,
                overflow: "hidden",
              }}
            >
              {/* dot grid */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(circle, rgba(${lvl.accentRgb},0.1) 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />
              {/* gradient wash */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(160deg, rgba(${lvl.accentRgb},0.1) 0%, transparent 65%)`,
                }}
              />
              {/* level number watermark */}
              <span
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 12,
                  fontSize: 96,
                  fontWeight: 900,
                  letterSpacing: "-6px",
                  color: `rgba(${lvl.accentRgb},0.07)`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {lvl.num}
              </span>
              {/* centered icon */}
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
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: `rgba(${lvl.accentRgb},0.1)`,
                    border: `1px solid rgba(${lvl.accentRgb},0.22)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 20px rgba(${lvl.accentRgb},0.15)`,
                  }}
                >
                  {lvl.icon}
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: `rgba(${lvl.accentRgb},0.5)`,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Level {lvl.num}
                </span>
              </div>
            </div>

            {/* Content area */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "18px 20px",
                gap: 10,
                minHeight: 0,
              }}
            >
              {/* Status pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 99,
                  background: lvl.statusBg,
                  border: `1px solid ${lvl.statusBorder}`,
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: lvl.accent,
                    boxShadow: `0 0 5px ${lvl.accent}`,
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: lvl.accent,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {lvl.status}
                </span>
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: "var(--slide-card-heading)",
                  fontWeight: 800,
                  color: "#0A0A0A",
                  lineHeight: 1.25,
                  letterSpacing: "-0.3px",
                }}
              >
                {lvl.label}
              </div>

              {/* Accent rule */}
              <div
                style={{
                  width: 32,
                  height: 2,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${lvl.accent}, transparent)`,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "var(--slide-body)",
                  color: "#6B7280",
                  margin: 0,
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                <ThaiText>{lvl.desc}</ThaiText>
              </p>
            </div>

            {/* Bottom accent line */}
            <div
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${lvl.accent}, rgba(${lvl.accentRgb},0.2))`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
