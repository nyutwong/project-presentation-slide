import { motion } from "framer-motion";
import {
  Callout,
  HorizontalDivider,
  IconCard,
  IconTile,
  SectionTitle,
  SlideHeader,
  SlideShell,
  ThaiText,
} from "../components/index.ts";
import Lanyard from "../components/Lanyard.tsx";
import { fadeIn, fadeInRight } from "../lib/motion.ts";

const GLOWS = [
  { bottom: -260, left: -140, size: 680, color: "239,68,68", opacity: 0.07 },
  { top: -180, right: -100, size: 560, color: "124,58,237", opacity: 0.1 },
];

function SearchFailIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#EF4444" strokeWidth="2" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="9" x2="13" y2="13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="9" x2="9" y2="13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconTile>
  );
}

function ScatterIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="2" fill="#EF4444" opacity="0.7" />
        <rect x="16" y="2" width="6" height="6" rx="2" fill="#EF4444" opacity="0.5" />
        <rect x="9" y="9" width="6" height="6" rx="2" fill="#EF4444" opacity="0.9" />
        <rect x="2" y="16" width="6" height="6" rx="2" fill="#EF4444" opacity="0.4" />
        <rect x="16" y="16" width="6" height="6" rx="2" fill="#EF4444" opacity="0.6" />
      </svg>
    </IconTile>
  );
}

function ClockIcon() {
  return (
    <IconTile rgb="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="2" />
        <polyline points="12 7 12 12 15 15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconTile>
  );
}

function AlertCircleIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
        <line x1="12" y1="8" x2="12" y2="12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#EF4444" />
      </svg>
    </IconTile>
  );
}

function CostIcon() {
  return (
    <IconTile rgb="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#F59E0B" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#F59E0B" strokeWidth="2" />
        <line x1="12" y1="12" x2="12" y2="16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="14" x2="14" y2="14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconTile>
  );
}

export function Slide04() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader label="Problems" title="The" highlight="Problem." />

      {/* Areas 2 + 3: Two columns filling remaining height */}
      <div style={{ flex: 1, display: "flex", gap: 24, minHeight: 0 }}>
        {/* Area 2: Lanyard — left column, full height */}
        <motion.div {...fadeIn(0.3)} style={{ flex: 1, minHeight: 0 }}>
          <Lanyard
            position={[0, 0, 15]}
            gravity={[0, -40, 0]}
            fov={25}
            transparent
          />
        </motion.div>

        {/* Area 3: Content — right column */}
        <motion.div
          {...fadeInRight(0.42)}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 0,
          }}
        >
          <SectionTitle
            icon={
              <IconTile size={30} radius={8} rgb="124,58,237" bgOpacity={0.1} borderOpacity={0.2}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="#7C3AED" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="#7C3AED" />
                </svg>
              </IconTile>
            }
          >
            <ThaiText>ความเป็นจริงที่ต้องเจอ</ThaiText>
          </SectionTitle>

          <Callout eyebrow={<ThaiText>ความต้องการ</ThaiText>} color="#7C3AED" rgb="124,58,237">
            <p style={{ fontSize: "var(--slide-body)", color: "#374151", margin: 0, lineHeight: 1.6 }}>
              <ThaiText>
                หา Technical Specifications
                ของโครงการที่เปิดตัวไปเมื่อไตรมาสที่แล้ว
              </ThaiText>
            </p>
          </Callout>

          <IconCard
            icon={<SearchFailIcon />}
            title={<ThaiText>การค้นหาไร้ประสิทธิภาพ</ThaiText>}
            titleColor="#EF4444"
          >
            <ThaiText>
              Keyword-Search แบบเดิมให้ผลลัพธ์เป็นรายการไฟล์นับร้อย
              โดยไม่เกี่ยวกับความต้องการจริง
            </ThaiText>
          </IconCard>

          <IconCard
            icon={<ScatterIcon />}
            title={<ThaiText>ข้อมูลกระจัดกระจาย</ThaiText>}
            titleColor="#EF4444"
          >
            <ThaiText>
              ข้อมูลสำคัญของโครงการถูกแยกส่วนและซ่อนอยู่ตามระบบต่าง ๆ เช่น
              SharePoint, ไดรฟ์, และอีเมล
              ซึ่งไม่สามารถให้ภาพรวมที่สมบูรณ์ได้
            </ThaiText>
          </IconCard>

          <HorizontalDivider />

          <SectionTitle
            icon={
              <IconTile size={30} radius={8} rgb="239,68,68" bgOpacity={0.1} borderOpacity={0.2}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </IconTile>
            }
          >
            <ThaiText>ผลกระทบทางธุรกิจ</ThaiText>
          </SectionTitle>

          <IconCard
            icon={<ClockIcon />}
            title={<ThaiText>เวลาสูญเปล่า</ThaiText>}
            titleColor="#F59E0B"
          >
            <ThaiText>เสียเวลาหลายชั่วโมงในการค้นหาข้อมูล</ThaiText>
          </IconCard>

          <IconCard
            icon={<AlertCircleIcon />}
            title={<ThaiText>ความล่าช้า</ThaiText>}
            titleColor="#EF4444"
          >
            <ThaiText>
              เกิดความล่าช้าของโครงการ เสี่ยงที่จะเกิดข้อผิดพลาดซ้ำ
            </ThaiText>
          </IconCard>

          <IconCard
            icon={<CostIcon />}
            title={<ThaiText>ต้นทุนที่ซ่อนอยู่ขององค์กร</ThaiText>}
            titleColor="#F59E0B"
            align="center"
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
