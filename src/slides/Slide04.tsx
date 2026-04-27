import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SlideShell } from "../components/SlideShell.tsx";
import { SlideLabel } from "../components/SlideLabel.tsx";
import { GradientText } from "../components/GradientText.tsx";
import { AccentLine } from "../components/AccentLine.tsx";
import { ThaiText } from "../components/ThaiText.tsx";
import { EASE } from "../lib/motion.ts";

const GLOWS = [
  { bottom: -260, left: -140, size: 680, color: "239,68,68", opacity: 0.07 },
  { top: -180, right: -100, size: 560, color: "124,58,237", opacity: 0.1 },
];

function Pill({
  children,
  color = "#7C3AED",
  bg = "rgba(124,58,237,0.08)",
  border = "rgba(124,58,237,0.2)",
}: {
  children: ReactNode;
  color?: string;
  bg?: string;
  border?: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: 13,
        padding: "3px 12px",
        borderRadius: 20,
        background: bg,
        border: `1px solid ${border}`,
        color,
        fontWeight: 600,
        letterSpacing: "0.03em",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function IconBox({ children, color }: { children: ReactNode; color: string }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 11,
        background: `rgba(${color}, 0.08)`,
        border: `1px solid rgba(${color}, 0.18)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function SearchFailIcon() {
  return (
    <IconBox color="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
          x1="9"
          y1="9"
          x2="13"
          y2="13"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="9"
          x2="9"
          y2="13"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconBox>
  );
}

function ScatterIcon() {
  return (
    <IconBox color="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.7"
        />
        <rect
          x="16"
          y="2"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.5"
        />
        <rect
          x="9"
          y="9"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.9"
        />
        <rect
          x="2"
          y="16"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.4"
        />
        <rect
          x="16"
          y="16"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.6"
        />
      </svg>
    </IconBox>
  );
}

function ClockIcon() {
  return (
    <IconBox color="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="2" />
        <polyline
          points="12 7 12 12 15 15"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBox>
  );
}

function AlertCircleIcon() {
  return (
    <IconBox color="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill="#EF4444" />
      </svg>
    </IconBox>
  );
}

function CostIcon() {
  return (
    <IconBox color="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="16"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14"
          x2="14"
          y2="14"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconBox>
  );
}

function TargetHeaderIcon() {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="#7C3AED" />
      </svg>
    </div>
  );
}

function ImpactHeaderIcon() {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "rgba(239,68,68,0.1)",
        border: "1px solid rgba(239,68,68,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="13"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="17"
          x2="12.01"
          y2="17"
          stroke="#EF4444"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Slide04() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Area 1: Header — full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        style={{
          paddingBottom: 22,
          borderBottom: "1px solid #F0F0F0",
          marginBottom: 24,
        }}
      >
        <SlideLabel label="04 — Problems" style={{ marginBottom: 16 }} />
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            lineHeight: 1.0,
            margin: "0 0 18px",
            color: "#0A0A0A",
            userSelect: "none",
            paddingTop: 4,
          }}
        >
          The <GradientText>Problem.</GradientText>
        </h1>
        <AccentLine delay={0.4} width={80} />
      </motion.div>

      {/* Areas 2 + 3: Two columns filling remaining height */}
      <div style={{ flex: 1, display: "flex", gap: 24, minHeight: 0 }}>

        {/* Area 2: Alex Profile Card — left column, full height */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderRadius: 18,
            border: "1px solid #EDE9FE",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {/* Gradient accent bar */}
          <div
            style={{
              height: 5,
              background: "linear-gradient(90deg, #7C3AED, #A855F7, #EC4899)",
              flexShrink: 0,
            }}
          />

          {/* Card body */}
          <div
            style={{
              flex: 1,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.05) 0%, transparent 60%)",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 34,
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
                boxShadow: "0 8px 24px rgba(124,58,237,0.25)",
                flexShrink: 0,
              }}
            >
              A
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: "#0A0A0A",
                letterSpacing: "-0.5px",
                marginBottom: 10,
              }}
            >
              Alex
            </div>

            {/* Role pill */}
            <Pill>New Project Manager</Pill>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)",
                margin: "20px 0",
                flexShrink: 0,
              }}
            />

            {/* Description */}
            <p
              style={{
                fontSize: "var(--slide-body)",
                color: "#6B7280",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "center",
              }}
            >
              <ThaiText>
                Project Manager หน้าใหม่ที่เพิ่งเข้ามาทำงานที่บริษัท X
                และกำลังเผชิญกับความท้าทายในการค้นหาข้อมูล
              </ThaiText>
            </p>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Company tag */}
            <Pill
              color="#6B7280"
              bg="rgba(107,114,128,0.06)"
              border="rgba(107,114,128,0.15)"
            >
              Company X
            </Pill>
          </div>

          {/* Aingo footer */}
          <div
            style={{
              padding: "14px 24px",
              borderTop: "1px solid #F0F0F0",
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(168,85,247,0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 12, color: "#A78BFA", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Powered by
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 900,
                color: "#7C3AED",
                letterSpacing: "0.06em",
              }}
            >
              Aingo
            </span>
          </div>
        </motion.div>

        {/* Area 3: Content — right column, single stacked column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, minHeight: 0 }}
        >
          {/* ความเป็นจริงที่ต้องเจอ — header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <TargetHeaderIcon />
            <span style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0A" }}>
              <ThaiText>ความเป็นจริงที่ต้องเจอ</ThaiText>
            </span>
          </div>

          {/* Need box */}
          <div
            style={{
              padding: "12px 16px",
              background: "rgba(124,58,237,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(124,58,237,0.12)",
              borderLeft: "3px solid #7C3AED",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>
              <ThaiText>ความต้องการ</ThaiText>
            </div>
            <p style={{ fontSize: "var(--slide-body)", color: "#374151", margin: 0, lineHeight: 1.6 }}>
              <ThaiText>หา Technical Specifications ของโครงการที่เปิดตัวไปเมื่อไตรมาสที่แล้ว</ThaiText>
            </p>
          </div>

          {/* Challenge 1 */}
          <div style={{ padding: "14px 18px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #F0F0F0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <SearchFailIcon />
              <div>
                <div style={{ fontSize: "var(--slide-card-heading)", fontWeight: 700, color: "#EF4444", marginBottom: 6 }}>
                  <ThaiText>การค้นหาไร้ประสิทธิภาพ</ThaiText>
                </div>
                <p style={{ fontSize: "var(--slide-body)", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
                  <ThaiText>Keyword-Search แบบเดิมให้ผลลัพธ์เป็นรายการไฟล์นับร้อย โดยไม่เกี่ยวกับความต้องการจริง</ThaiText>
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 2 */}
          <div style={{ padding: "14px 18px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #F0F0F0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <ScatterIcon />
              <div>
                <div style={{ fontSize: "var(--slide-card-heading)", fontWeight: 700, color: "#EF4444", marginBottom: 6 }}>
                  <ThaiText>ข้อมูลกระจัดกระจาย</ThaiText>
                </div>
                <p style={{ fontSize: "var(--slide-body)", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
                  <ThaiText>ข้อมูลสำคัญของโครงการถูกแยกส่วนและซ่อนอยู่ตามระบบต่าง ๆ เช่น SharePoint, ไดรฟ์, และอีเมล ซึ่งไม่สามารถให้ภาพรวมที่สมบูรณ์ได้</ThaiText>
                </p>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #E5E7EB 10%, #E5E7EB 90%, transparent)", margin: "4px 0" }} />

          {/* ผลกระทบทางธุรกิจ — header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ImpactHeaderIcon />
            <span style={{ fontSize: 17, fontWeight: 800, color: "#0A0A0A" }}>
              <ThaiText>ผลกระทบทางธุรกิจ</ThaiText>
            </span>
          </div>

          {/* Impact 1 */}
          <div style={{ padding: "14px 18px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #F0F0F0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <ClockIcon />
              <div>
                <div style={{ fontSize: "var(--slide-card-heading)", fontWeight: 700, color: "#F59E0B", marginBottom: 6 }}>
                  <ThaiText>เวลาสูญเปล่า</ThaiText>
                </div>
                <p style={{ fontSize: "var(--slide-body)", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
                  <ThaiText>เสียเวลาหลายชั่วโมงในการค้นหาข้อมูล</ThaiText>
                </p>
              </div>
            </div>
          </div>

          {/* Impact 2 */}
          <div style={{ padding: "14px 18px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #F0F0F0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <AlertCircleIcon />
              <div>
                <div style={{ fontSize: "var(--slide-card-heading)", fontWeight: 700, color: "#EF4444", marginBottom: 6 }}>
                  <ThaiText>ความล่าช้า</ThaiText>
                </div>
                <p style={{ fontSize: "var(--slide-body)", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
                  <ThaiText>เกิดความล่าช้าของโครงการ เสี่ยงที่จะเกิดข้อผิดพลาดซ้ำ</ThaiText>
                </p>
              </div>
            </div>
          </div>

          {/* Impact 3 */}
          <div style={{ padding: "14px 18px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #F0F0F0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <CostIcon />
              <div style={{ fontSize: "var(--slide-card-heading)", fontWeight: 700, color: "#F59E0B" }}>
                <ThaiText>ต้นทุนที่ซ่อนอยู่ขององค์กร</ThaiText>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
