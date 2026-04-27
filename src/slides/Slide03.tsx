import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

function ZapIcon() {
  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.15))',
        border: '1px solid rgba(124,58,237,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="zap-grad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
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
        background: 'linear-gradient(135deg, rgba(236,72,153,0.07), rgba(168,85,247,0.12))',
        border: '1px solid rgba(168,85,247,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="paradox-a" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        {/* Up arrow */}
        <path d="M9 18V9M9 9L6 12M9 9L12 12" stroke="url(#paradox-a)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Down arrow (dashed — the slowdown) */}
        <path d="M15 6V15M15 15L12 12M15 15L18 12" stroke="url(#paradox-a)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

export function Slide03() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — top right */}
      <div
        style={{
          position: 'absolute',
          top: -280,
          right: -160,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '72px 108px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              boxShadow: '0 0 8px rgba(124,58,237,0.6)',
            }}
          />
          <span
            style={{
              fontSize: 13,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7C3AED',
              fontWeight: 700,
            }}
          >
            03 — Section
          </span>
        </motion.div>

        {/* Split layout */}
        <div style={{ flex: 1, display: 'flex', gap: 72, alignItems: 'stretch' }}>

          {/* Left: Title */}
          <div
            style={{
              width: '34%',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.12, ease: EASE }}
              style={{
                fontSize: 100,
                fontWeight: 900,
                letterSpacing: '-3px',
                lineHeight: 0.93,
                margin: '0 0 40px',
                color: '#0A0A0A',
                userSelect: 'none',
              }}
            >
              Back
              <br />
              <span
                style={{
                  background: 'linear-gradient(120deg, #7C3AED 0%, #A855F7 45%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                grounds.
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              style={{
                height: 3,
                width: 72,
                background: 'linear-gradient(90deg, #7C3AED, #A855F7)',
                borderRadius: 2,
                transformOrigin: 'left center',
              }}
            />
          </div>

          {/* Vertical divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
            style={{
              width: 1,
              background:
                'linear-gradient(to bottom, transparent, #E5E7EB 15%, #E5E7EB 85%, transparent)',
              transformOrigin: 'top center',
              flexShrink: 0,
            }}
          />

          {/* Right: Cards */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              justifyContent: 'center',
            }}
          >
            {/* Card 1 — Speed & Adaptability */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              style={{
                padding: '28px 32px',
                background: '#FAFAFA',
                borderRadius: 20,
                border: '1px solid #F3F4F6',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                <ZapIcon />
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#7C3AED',
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    Speed &amp; Adaptability
                  </div>
                  <p
                    style={{
                      fontSize: 19,
                      color: '#374151',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    ในปัจจุบัน การที่ธุรกิจจะอยู่รอดในโลกที่เปลี่ยนแปลงย่างรวดเร็วได้
                    ตัวธุระกิจเองก็ต้องสามารถที่จะปรับตัวได้อย่างรวดเร็ว
                    ส่งมอบผลิตภัณฑ์ได้ทันต่อการเปลี่ยนแปลง
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
                padding: '28px 32px',
                background: '#FAFAFA',
                borderRadius: 20,
                border: '1px solid #F3F4F6',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                <ParadoxIcon />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#EC4899',
                        fontWeight: 700,
                      }}
                    >
                      The Paradox
                    </span>
                    <div
                      style={{
                        fontSize: 11,
                        padding: '2px 8px',
                        borderRadius: 20,
                        background: 'rgba(236,72,153,0.08)',
                        border: '1px solid rgba(236,72,153,0.2)',
                        color: '#EC4899',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                      }}
                    >
                      Core Problem
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 19,
                      color: '#374151',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    เมื่อเวลาผ่านไปบริษัทเติบโตขึ้น มีประสบการณ์และความรู้มากขึ้น
                    เราก็คาดหวังว่าประสบการณ์และความรู้เหล่านี้จะช่วยพลักดันบริษัทไปข้างหน้าได้เร็วขึ้น
                    แต่มันกลับช้าลงเพราะความไม่เป็นระเบียบและความกระจัดกระจาย ขององค์ความรู้เหล่านั้น
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
