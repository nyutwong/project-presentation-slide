import { motion } from "framer-motion";
import {
  SlideShell,
  SlideHeader,
} from "../components/index.ts";
import { fadeInUp, DURATION } from "../lib/motion.ts";

const SEM1 = [
  { wk: "1–2", label: "Literature review & problem framing" },
  { wk: "3–4", label: "Requirements + user stories" },
  { wk: "5–7", label: "System architecture + tool selection" },
  { wk: "8–10", label: "Web app prototype (NestJS + Vector)" },
  { wk: "11–12", label: "Data Ingestion service (Docling)" },
  { wk: "13–14", label: "Full end-to-end pipeline integration" },
  { wk: "15–16", label: "Final proposal + documentation" },
];

const SEM2 = [
  { wk: "17–18", label: "Pipeline enhancement + metrics" },
  { wk: "19–20", label: "GraphRAG bottleneck → HyDE pivot" },
  { wk: "21–23", label: "Citations, UI/UX polish, SSO deferred" },
  { wk: "24–26", label: "UAT preparation + JWT finalization" },
  { wk: "27–28", label: "UAT + 50+ query evaluation" },
  { wk: "29–30", label: "Bug fixes + performance stabilization" },
  { wk: "31–32", label: "Final report + demo" },
];

const COLUMNS = ["12.5%", "37.5%", "62.5%", "87.5%"];

function TimelineDot({ item, top, left, delay }: { item: typeof SEM1[0] & { pivot?: boolean }, top: number, left: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay }}
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: 0,
        height: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10,
        overflow: "visible",
      }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", width: 200, marginTop: -8 }}>
        {/* Dot */}
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "white",
            border: "3px solid #8B5CF6",
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          }}
        />
        
        {/* Labels */}
        <div style={{ marginTop: 14, fontSize: 12, fontWeight: 800, color: "#6B7280", marginBottom: 6 }}>
          WK {item.wk}
        </div>
        <div style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", lineHeight: 1.4, padding: "0 8px" }}>
          {item.label}
        </div>
      </div>
    </motion.div>
  );
}

function TimelineTrack({ title, subtitle, data, delayOffset }: { title: string, subtitle: string, data: typeof SEM1, delayOffset: number }) {
  const row1 = data.slice(0, 4); // Items 0, 1, 2, 3
  const row2 = data.slice(4);    // Items 4, 5, 6

  return (
    <div style={{ position: "relative", marginBottom: 120, height: 210 }}>
      {/* ── STYLED HEADER ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
        <div style={{
          fontSize: 14,
          fontWeight: 800,
          color: "white",
          background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
          padding: "6px 16px",
          borderRadius: 8,
          boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
          letterSpacing: "0.02em"
        }}>
          {title}
        </div>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          color: "#8B5CF6",
          letterSpacing: "0.08em",
          textTransform: "uppercase"
        }}>
          {subtitle}
        </div>
      </div>

      {/* ── BACKGROUND FAINT LINES ── */}
      {/* Top line */}
      <div style={{ position: "absolute", top: 56, left: COLUMNS[0], width: "75%", height: 3, background: "rgba(0,0,0,0.06)" }} />
      {/* Bottom line */}
      <div style={{ position: "absolute", top: 168, left: COLUMNS[0], width: "50%", height: 3, background: "rgba(0,0,0,0.06)" }} />


      {/* ── ANIMATED ACTIVE LINES ── */}
      {/* Top line (L to R) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "75%" }}
        transition={{ duration: 1.0, delay: delayOffset, ease: "linear" }}
        style={{ position: "absolute", top: 56, left: COLUMNS[0], height: 3, background: "#8B5CF6" }}
      />
      {/* Bottom line (L to R) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 0.7, delay: delayOffset + 1.2, ease: "linear" }}
        style={{ position: "absolute", top: 168, left: COLUMNS[0], height: 3, background: "linear-gradient(90deg, #8B5CF6, #EC4899)" }}
      />


      {/* ── DOTS ── */}
      {row1.map((item, i) => (
        <TimelineDot key={item.wk} item={item} top={56} left={COLUMNS[i]} delay={delayOffset + 0.2 + (i * 0.25)} />
      ))}
      
      {row2.map((item, i) => (
        <TimelineDot key={item.wk} item={item} top={168} left={COLUMNS[i]} delay={delayOffset + 1.4 + (i * 0.25)} />
      ))}
    </div>
  );
}

export function Slide22() {
  return (
    <SlideShell
      glowColorTop="#3B82F6"
      glowColorBottom="#F59E0B"
      glowOpacity={0.08}
    >
      <SlideHeader
        label="Aingo"
        title="Project"
        highlight="Timeline."
        tagline="32-week engineering lifecycle · Scrum · bi-weekly sprints"
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 8 }}>
        <motion.div {...fadeInUp(0.3, { distance: 10, duration: DURATION.med })}>
          <div style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: 24,
            padding: "56px 40px 24px 40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            width: "100%",
          }}>
            <TimelineTrack title="Semester 1" subtitle="Week 1–16" data={SEM1} delayOffset={0.4} />
            <TimelineTrack title="Semester 2" subtitle="Week 17–32" data={SEM2} delayOffset={2.6} />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
