import { motion } from 'framer-motion';

export function Slide01() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        style={{
          fontSize: 18,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        Slide 01
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          fontSize: 120,
          fontWeight: 700,
          letterSpacing: '-3px',
          margin: 0,
          textAlign: 'center',
          lineHeight: 1.05,
        }}
      >
        Hello, World.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          fontSize: 32,
          color: 'rgba(255,255,255,0.6)',
          margin: 0,
        }}
      >
        Presentation system is running.
      </motion.p>
    </div>
  );
}
