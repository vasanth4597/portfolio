import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface Ripple { id: number; x: number; y: number }

export default function Custom3DCursor() {
  const [isVisible,  setIsVisible]  = useState(false);
  const [isHovered,  setIsHovered]  = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [coords,     setCoords]     = useState({ x: 0, y: 0 });
  const [ripples,    setRipples]    = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  // Exact mouse position — for core dot
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Spring-lagged — for brackets / ring
  const lagX = useSpring(rawX, { damping: 30, stiffness: 220, mass: 0.4 });
  const lagY = useSpring(rawY, { damping: 30, stiffness: 220, mass: 0.4 });

  const checkHover = useCallback((t: HTMLElement | null) =>
    !!(t && (
      t.tagName === 'BUTTON' || t.tagName === 'A' ||
      t.tagName === 'INPUT'  || t.tagName === 'TEXTAREA' ||
      t.closest('button')    || t.closest('a') ||
      t.getAttribute('role') === 'button'
    )), []);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      setIsHovered(checkHover(e.target as HTMLElement));
    };

    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      const id = rippleId.current++;
      setRipples(p => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 700);
    };

    const onUp    = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [rawX, rawY, isVisible, checkHover]);

  if (!isVisible) return null;

  const color  = isHovered ? '#bd00ff' : '#00f0ff';
  const glow   = isHovered ? 'rgba(189,0,255,0.5)' : 'rgba(0,240,255,0.5)';
  const bracketGap = isHovered ? 10 : isClicking ? 3 : 16;

  return (
    <>
      {/* ── Click ripples ─────────────────────────────────── */}
      <AnimatePresence>
        {ripples.map(r => (
          <motion.div
            key={r.id}
            className="fixed pointer-events-none z-[9990] rounded-full"
            style={{
              left: r.x, top: r.y,
              translateX: '-50%', translateY: '-50%',
              border: `1px solid ${color}`,
              boxShadow: `0 0 8px ${glow}`,
            }}
            initial={{ width: 6, height: 6, opacity: 0.9 }}
            animate={{ width: 72, height: 72, opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.4, 1] }}
          />
        ))}
      </AnimatePresence>

      {/* ── Scanning bracket reticle (spring-lagged) ──────── */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{ left: lagX, top: lagY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.82 : isHovered ? 1.4 : 1,
            rotate: isHovered ? 45 : 0,
            opacity: 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ position: 'relative', width: 44, height: 44 }}
        >
          {/* Corner brackets — TL, TR, BR, BL */}
          {[
            { top: 0,    left: 0,    borderTop: `1.5px solid ${color}`, borderLeft:  `1.5px solid ${color}`, borderRadius: '2px 0 0 0' },
            { top: 0,    right: 0,   borderTop: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}`, borderRadius: '0 2px 0 0' },
            { bottom: 0, right: 0,   borderBottom: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}`, borderRadius: '0 0 2px 0' },
            { bottom: 0, left: 0,    borderBottom: `1.5px solid ${color}`, borderLeft:  `1.5px solid ${color}`, borderRadius: '0 0 0 2px' },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ width: bracketGap, height: bracketGap }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                filter: `drop-shadow(0 0 3px ${color})`,
                ...s,
              }}
            />
          ))}

          {/* Center crosshair lines */}
          <motion.div
            animate={{ opacity: isHovered ? 0.2 : 0.45, scaleX: isClicking ? 1.4 : 1 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute', top: '50%', left: '10%',
              width: '80%', height: '1px',
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              transform: 'translateY(-50%)',
            }}
          />
          <motion.div
            animate={{ opacity: isHovered ? 0.2 : 0.45, scaleY: isClicking ? 1.4 : 1 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute', left: '50%', top: '10%',
              height: '80%', width: '1px',
              background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Pulse scan ring (periodic) ────────────────────── */}
      <motion.div
        className="fixed pointer-events-none z-[9995] rounded-full"
        style={{
          left: lagX, top: lagY,
          translateX: '-50%', translateY: '-50%',
          border: `1px solid ${color}`,
        }}
        animate={{
          width:   [0, 60, 60],
          height:  [0, 60, 60],
          opacity: [0.7, 0.2, 0],
          scale:   [0.3, 1, 1.2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeOut',
          times: [0, 0.6, 1],
        }}
      />

      {/* ── Core tech dot (exact mouse pos) ──────────────── */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{ left: rawX, top: rawY, translateX: '-50%', translateY: '-50%' }}
      >
        {/* Diamond core */}
        <motion.div
          animate={{
            scale:           isClicking ? 2 : isHovered ? 0.5 : 1,
            backgroundColor: isHovered ? '#bd00ff' : '#00f0ff',
            rotate:          isHovered ? 0 : 45,
          }}
          transition={{ duration: 0.12 }}
          style={{
            width:  7,
            height: 7,
            borderRadius: '1px',
            boxShadow: `0 0 10px 2px ${glow}, 0 0 20px 4px ${glow}`,
          }}
        />
      </motion.div>

      {/* ── Data readout tag ──────────────────────────────── */}
      <motion.div
        className="fixed pointer-events-none z-[9999] font-mono select-none"
        style={{
          left: rawX,
          top:  rawY,
          translateX: '14px',
          translateY: '14px',
        }}
        animate={{ opacity: isHovered ? 0 : 0.65 }}
        transition={{ duration: 0.2 }}
      >
        <div
          style={{
            fontSize:   '8px',
            lineHeight: 1.4,
            color,
            textShadow: `0 0 6px ${glow}`,
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          <div>{`X:${String(coords.x).padStart(4, '0')}`}</div>
          <div>{`Y:${String(coords.y).padStart(4, '0')}`}</div>
        </div>
      </motion.div>
    </>
  );
}
