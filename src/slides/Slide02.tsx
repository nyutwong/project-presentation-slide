import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Slide02() {
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
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — center left */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: -300,
          transform: 'translateY(-50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — center right */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: -300,
          transform: 'translateY(-50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #7C3AED)',
            }}
          />
          <span
            style={{
              fontSize: 13,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#7C3AED',
              fontWeight: 700,
            }}
          >
            02 — Section
          </span>
          <div
            style={{
              width: 28,
              height: 1,
              background: 'linear-gradient(90deg, #7C3AED, transparent)',
            }}
          />
        </motion.div>

        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          style={{
            fontSize: 192,
            fontWeight: 900,
            letterSpacing: '-7px',
            lineHeight: 0.9,
            margin: 0,
            textAlign: 'center',
            color: '#0A0A0A',
            userSelect: 'none',
          }}
        >
          Problem
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
            Definition.
          </span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
          style={{
            height: 3,
            width: 80,
            background: 'linear-gradient(90deg, #7C3AED, #A855F7)',
            borderRadius: 2,
            transformOrigin: 'center',
            marginTop: 52,
          }}
        />
      </div>

      {/* Slide label bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: 'absolute',
          bottom: 72,
          right: 108,
          fontSize: 11,
          color: '#E5E7EB',
          letterSpacing: '0.08em',
          zIndex: 1,
        }}
      >
        AiQ — v1.0
      </motion.div>
    </div>
  );
}
