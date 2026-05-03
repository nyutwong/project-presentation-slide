import { motion } from "framer-motion";
import {
  BigGhostNumber,
  Callout,
  ImagePlaceholder,
  Pill,
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
  stagger,
} from "../lib/motion.ts";

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
      <SlideHeader
        label="Aingo"
        title="Why Existing"
        highlight="System Fails."
        tagline="The Core Technical Challenge"
        marginBottom={28}
      />

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
              {...fadeInLeft(stagger(0.35, 0.12, i), {
                distance: DISTANCE.lg,
                duration: DURATION.base,
              })}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 24,
                borderBottom:
                  i < GAPS.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              <BigGhostNumber rgb={gap.accentRgb} width={68}>
                {gap.num}
              </BigGhostNumber>

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
                  <Pill color={gap.accent} rgb={gap.accentRgb} padding="2px 9px">
                    {gap.en}
                  </Pill>
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

        <VerticalDivider />

        {/* Right: image card */}
        <motion.div
          {...fadeInRight(0.28, { distance: 24, duration: DURATION.slow })}
          style={{
            width: "30%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <ImagePlaceholder variant="dotted" label="Image placeholder" />

          <Callout
            eyebrow={null}
            bgOpacity={0.04}
            style={{ borderLeftColor: "rgba(124,58,237,0.5)" }}
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
          </Callout>
        </motion.div>
      </div>
    </SlideShell>
  );
}
