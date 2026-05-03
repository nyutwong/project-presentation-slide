import { motion } from "framer-motion";
import {
  IconBadge,
  Pill,
  SectionTitle,
  SlideHeader,
  SlideShell,
  ThaiText,
  VerticalDivider,
} from "../components/index.ts";
import {
  DISTANCE,
  DURATION,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
} from "../lib/motion.ts";

const GLOWS = [
  { top: -260, right: -120, size: 720, color: "124,58,237", opacity: 0.11 },
  { bottom: -180, left: -80, size: 580, color: "16,185,129", opacity: 0.08 },
];

export function Slide08() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Aingo"
        title="Objective"
        highlight="& Scope."
        tagline="What we aim to build and where we draw the line"
        marginBottom={28}
      />

      {/* ── 2 columns ── */}
      <div style={{ flex: 1, display: "flex", gap: 28, minHeight: 0 }}>
        {/* ── Left: Objective ── */}
        <motion.div
          {...fadeInLeft(0.28)}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          <SectionTitle
            icon={
              <IconBadge
                gradient={["#7C3AED", "#A855F7"]}
                shadow="rgba(124,58,237,0.35)"
                size={32}
                radius={9}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="2" fill="white" />
                </svg>
              </IconBadge>
            }
            sub={<ThaiText>เป้าหมายของโปรเจค</ThaiText>}
            style={{ marginBottom: 6 }}
          >
            Objective
          </SectionTitle>

          {[
            {
              title: "Research & Design",
              th: "สืบค้นและออกแบบวิธีแก้ปัญหา เน้นไปที่ Data Ingestion Pipeline",
              grad: ["#6366F1", "#8B5CF6"] as [string, string],
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
              grad: ["#EC4899", "#F43F5E"] as [string, string],
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
              grad: ["#10B981", "#059669"] as [string, string],
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
              {...fadeInUp(stagger(0.38, 0.1, i), {
                distance: DISTANCE.sm,
                duration: DURATION.short,
              })}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              <IconBadge
                gradient={item.grad}
                shadow={item.shadow}
                size={44}
                radius={12}
              >
                {item.icon}
              </IconBadge>
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

        <VerticalDivider />

        {/* ── Right: Scope ── */}
        <motion.div
          {...fadeInRight(0.34)}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          <SectionTitle
            icon={
              <IconBadge
                gradient={["#F59E0B", "#EF4444"]}
                shadow="rgba(245,158,11,0.35)"
                size={32}
                radius={9}
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
              </IconBadge>
            }
            sub={<ThaiText>ขอบเขตของโปรเจค</ThaiText>}
            style={{ marginBottom: 6 }}
          >
            Scope
          </SectionTitle>

          {[
            {
              title: "Data Ingestion",
              th: "โฟกัสแหล่งข้อมูล SharePoint (Xhive)",
              grad: ["#F59E0B", "#F97316"] as [string, string],
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
              grad: ["#06B6D4", "#3B82F6"] as [string, string],
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
              {...fadeInUp(stagger(0.44, 0.1, i), {
                distance: DISTANCE.sm,
                duration: DURATION.short,
              })}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "10px 4px",
                minHeight: 100,
              }}
            >
              <IconBadge
                gradient={item.grad}
                shadow={item.shadow}
                size={44}
                radius={12}
              >
                {item.icon}
              </IconBadge>
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
                  <Pill
                    color={item.grad[0]}
                    rgb={item.tagRgb}
                    fontSize={10}
                    letterSpacing="0.06em"
                    padding="2px 8px"
                    uppercase={false}
                  >
                    {item.tag}
                  </Pill>
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

          <div style={{ flex: 1 }} />
        </motion.div>
      </div>
    </SlideShell>
  );
}
