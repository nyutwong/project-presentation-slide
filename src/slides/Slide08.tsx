import { motion } from "framer-motion";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import { ThaiText } from "../components/ThaiText.tsx";
import { EASE } from "../lib/motion.ts";

const GLOWS = [
  { top: -260, right: -120, size: 720, color: "124,58,237", opacity: 0.11 },
  { bottom: -180, left: -80, size: 580, color: "16,185,129", opacity: 0.08 },
];

export function Slide08() {
  return (
    <SlideShell glows={GLOWS}>
      {/* ── Header ── */}
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
          Objective <GradientText>&amp; Scope.</GradientText>
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
            What we aim to build and where we draw the line
          </span>
        </div>
      </motion.div>

      {/* ── 2 columns ── */}
      <div style={{ flex: 1, display: "flex", gap: 28, minHeight: 0 }}>
        {/* ── Left: Objective ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          {/* Column header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(124,58,237,0.35)",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="2" fill="white" />
              </svg>
            </div>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0A" }}>
              Objective
            </span>
            <span style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 500 }}>
              <ThaiText>เป้าหมายของโปรเจค</ThaiText>
            </span>
          </div>

          {/* Card 1 — Research & Design */}
          {[
            {
              title: "Research & Design",
              th: "สืบค้นและออกแบบวิธีแก้ปัญหา เน้นไปที่ Data Ingestion Pipeline",
              grad: ["#6366F1", "#8B5CF6"],
              shadow: "rgba(99,102,241,0.3)",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Evaluation",
              th: "กำหนดเมทริกเพื่อวัดคุณภาพของระบบ",
              grad: ["#EC4899", "#F43F5E"],
              shadow: "rgba(236,72,153,0.3)",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <polyline
                    points="22 12 18 12 15 21 9 3 6 12 2 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Implementation",
              th: "พัฒนาระบบที่มี Performance, Scalability และ Usability ที่เหมาะสม\nคำนึงความปลอดภัยพื้นฐาน",
              grad: ["#10B981", "#059669"],
              shadow: "rgba(16,185,129,0.3)",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <polyline
                    points="16 18 22 12 16 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="8 6 2 12 8 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 + i * 0.1, ease: EASE }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  flexShrink: 0,
                  background: `linear-gradient(135deg, ${item.grad[0]}, ${item.grad[1]})`,
                  boxShadow: `0 4px 16px ${item.shadow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "var(--slide-card-heading)",
                    fontWeight: 800,
                    color: "#0A0A0A",
                    marginBottom: 5,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  <ThaiText>{item.th}</ThaiText>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            background:
              "linear-gradient(180deg, transparent, #E5E7EB 15%, #E5E7EB 85%, transparent)",
            flexShrink: 0,
          }}
        />

        {/* ── Right: Scope ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          {/* Column header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "linear-gradient(135deg, #F59E0B, #EF4444)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="3"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M9 9h6M9 12h6M9 15h4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0A" }}>
              Scope
            </span>
            <span style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 500 }}>
              <ThaiText>ขอบเขตของโปรเจค</ThaiText>
            </span>
          </div>

          {[
            {
              title: "Data Ingestion",
              th: "โฟกัสแหล่งข้อมูล SharePoint (Xhive)",
              grad: ["#F59E0B", "#F97316"],
              shadow: "rgba(245,158,11,0.3)",
              tagRgb: "245,158,11",
              tag: "SharePoint · Xhive",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <ellipse
                    cx="12"
                    cy="5"
                    rx="9"
                    ry="3"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              ),
            },
            {
              title: "User Interface",
              th: "พัฒนา Minimal Web Chat MVP พร้อมฟังก์ชันถาม-ตอบ",
              grad: ["#06B6D4", "#3B82F6"],
              shadow: "rgba(6,182,212,0.3)",
              tagRgb: "6,182,212",
              tag: "Web Chat · MVP",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="9"
                    y1="10"
                    x2="15"
                    y2="10"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="9"
                    y1="14"
                    x2="13"
                    y2="14"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.44 + i * 0.1, ease: EASE }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  flexShrink: 0,
                  background: `linear-gradient(135deg, ${item.grad[0]}, ${item.grad[1]})`,
                  boxShadow: `0 4px 16px ${item.shadow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--slide-card-heading)",
                      fontWeight: 800,
                      color: "#0A0A0A",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: item.grad[0],
                      padding: "2px 8px",
                      borderRadius: 99,
                      background: `rgba(${item.tagRgb}, 0.08)`,
                      border: `1px solid rgba(${item.tagRgb}, 0.25)`,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "var(--slide-body)",
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  <ThaiText>{item.th}</ThaiText>
                </p>
              </div>
            </motion.div>
          ))}

          {/* Spacer to fill height like left col */}
          <div style={{ flex: 1 }} />
        </motion.div>
      </div>
    </SlideShell>
  );
}
