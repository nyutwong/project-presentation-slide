import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Slide01() {
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
      {/* Subtle dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — top right */}
      <div
        style={{
          position: 'absolute',
          top: -320,
          right: -180,
          width: 960,
          height: 960,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: -200,
          left: -120,
          width: 640,
          height: 640,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 65%)',
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
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
              Project AiQ
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span
              style={{
                fontSize: 12,
                color: '#C4B5FD',
                letterSpacing: '0.08em',
                fontWeight: 500,
              }}
            >
              Knowledge Management
            </span>
            <div style={{ width: 1, height: 14, background: '#E5E7EB' }} />
            <span style={{ fontSize: 12, color: '#9CA3AF', letterSpacing: '0.06em' }}>
              2025
            </span>
          </div>
        </motion.div>

        {/* Hero */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.12, ease: EASE }}
            style={{
              fontSize: 150,
              fontWeight: 900,
              letterSpacing: '-5px',
              lineHeight: 0.93,
              margin: '0 0 48px',
              color: '#0A0A0A',
              userSelect: 'none',
            }}
          >
            Intelligence
            <br />
            That Drives
            <br />
            <span
              style={{
                background:
                  'linear-gradient(120deg, #7C3AED 0%, #A855F7 45%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Execution.
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
            style={{
              height: 3,
              width: 140,
              background: 'linear-gradient(90deg, #7C3AED, #A855F7)',
              borderRadius: 2,
              transformOrigin: 'left center',
              marginBottom: 36,
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: EASE }}
            style={{
              fontSize: 26,
              color: '#6B7280',
              margin: 0,
              fontWeight: 400,
              letterSpacing: '-0.2px',
              lineHeight: 1.5,
            }}
          >
            An AI-driven Knowledge Management Platform
          </motion.p>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: 28 }}>
            {(['Intelligence', 'Knowledge', 'Execution'] as const).map((tag, i) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: i === 0 ? '#7C3AED' : '#D1D5DB',
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 11, color: '#E5E7EB', letterSpacing: '0.08em' }}>
            AiQ — v1.0
          </span>
        </motion.div>
      </div>
    </div>
  );
}
