import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal, Award, Code2, Cpu, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { audio } from '../utils/audioFX';
import profilePhoto from '../assets/vasantharaj_screen.jpg';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI & Data Science Engineer',
  'Generative AI Specialist',
  'Algorithmic Problem Solver',
];

export default function Hero() {
  const [typedText, setTypedText]   = useState('');
  const [roleIndex, setRoleIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex];
    let t: number;
    if (isDeleting) t = window.setTimeout(() => setTypedText(full.slice(0, typedText.length - 1)), 35);
    else            t = window.setTimeout(() => setTypedText(full.slice(0, typedText.length + 1)), 70);
    if (!isDeleting && typedText === full)  t = window.setTimeout(() => setIsDeleting(true), 1600);
    if ( isDeleting && typedText === '')  { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [typedText, isDeleting, roleIndex]);

  const triggerConfetti = () => {
    audio.playSuccess();
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#00f0ff', '#bd00ff', '#00ffd1', '#ff007a'] });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-0 z-10"
    >
      {/* ─── Background subtle grid ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* ─── Right-side ambient light (behind photo) ────────── */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Main glow orb — sits behind the person */}
        <div style={{
          position: 'absolute', bottom: 0, right: '5%',
          width: 520, height: 700,
          background: 'radial-gradient(ellipse at 60% 80%, rgba(0,240,255,0.12) 0%, rgba(189,0,255,0.08) 45%, transparent 75%)',
          borderRadius: '50%',
        }} />
        {/* Floor light glow */}
        <div style={{
          position: 'absolute', bottom: -40, right: '8%',
          width: 400, height: 160,
          background: 'radial-gradient(ellipse, rgba(0,240,255,0.18) 0%, rgba(189,0,255,0.1) 50%, transparent 80%)',
          filter: 'blur(30px)',
        }} />
        {/* Purple accent light from upper right */}
        <div style={{
          position: 'absolute', top: '10%', right: 0,
          width: 280, height: 380,
          background: 'radial-gradient(ellipse, rgba(189,0,255,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-screen">

        {/* ─── LEFT: Text content ─────────────────────────────── */}
        <div className="space-y-7 text-left pb-24 pt-24 lg:pt-0 self-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/8 backdrop-blur-md text-neon-cyan text-xs font-mono font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            <Terminal className="w-3.5 h-3.5 text-neon-blue" />
            <span>B.Tech AI &amp; DS · Open to Opportunities</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm font-mono text-neon-blue/80 uppercase tracking-[0.25em]"
            >
              Software Engineering Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-[68px] font-black tracking-tight leading-[1.0]"
            >
              <span className="block text-white">Hi, I'm</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff 0%, #bd00ff 50%, #00ffd1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(0,240,255,0.35))',
                }}
              >
                VASANTHARAJ
              </span>
            </motion.h1>
          </div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-200"
          >
            <Zap className="w-5 h-5 text-neon-cyan flex-shrink-0" />
            <span style={{
              background: 'linear-gradient(90deg, #bd00ff, #00ffd1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>{typedText}</span>
            <span className="typing-caret w-0.5 h-6 bg-neon-cyan inline-block" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg"
          >
            Software Engineering undergraduate specialising in AI &amp; Data Science — expert in Java, DSA, Generative AI, and full-stack development. Building scalable, production-ready systems and intelligent applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a href="#resume" onClick={triggerConfetti} onMouseEnter={() => audio.playHover()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 focus:outline-none"
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #bd00ff, #00ffd1)',
                boxShadow: '0 0 30px rgba(0,240,255,0.35), 0 4px 20px rgba(189,0,255,0.2)',
              }}
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href="#projects" onMouseEnter={() => audio.playHover()} onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/10 bg-white/5 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 hover:scale-105 backdrop-blur-md transition-all duration-300"
            >
              View Projects <ArrowRight className="w-4 h-4 text-neon-cyan" />
            </a>
            <a href="#contact" onMouseEnter={() => audio.playHover()} onClick={() => audio.playClick()}
              className="px-4 py-3 text-slate-400 hover:text-neon-cyan font-medium text-sm transition-colors duration-200"
            >
              Let's Talk →
            </a>
          </motion.div>

          {/* Socials + stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap items-center gap-5 pt-2 border-t border-white/8"
          >
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/vasanth4597',             Icon: FaGithub,  label: 'GitHub',   cls: 'hover:text-neon-cyan hover:border-neon-cyan/40' },
                { href: 'https://www.linkedin.com/in/vasantharaj-s45', Icon: FaLinkedin, label: 'LinkedIn', cls: 'hover:text-neon-blue hover:border-neon-blue/40' },
                { href: 'mailto:vasanth.ai1931@gmail.com',             Icon: Mail,       label: 'Email',    cls: 'hover:text-neon-purple hover:border-neon-purple/40' },
              ].map(({ href, Icon, label, cls }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => audio.playHover()} aria-label={label}
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:scale-110 transition-all duration-200 ${cls}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              {[
                { icon: Award, val: '8.21 CGPA',    color: '#00f0ff' },
                { icon: Code2, val: '3+ Live Builds', color: '#bd00ff' },
                { icon: Cpu,   val: '200+ DSA Solved', color: '#00ffd1' },
              ].map(({ icon: I, val, color }) => (
                <span key={val} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/4 border border-white/6">
                  <I style={{ width: 11, height: 11, color }} />
                  <span style={{ color }}>{val}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT: Photo — pure frameless blend ─────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden lg:block"
          style={{ height: '100vh', overflow: 'visible' }}
        >
          <img
            src={profilePhoto}
            alt="Vasantharaj S — Software Engineer"
            draggable={false}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              height: '94vh',
              width: 'auto',
              maxWidth: 'none',
              display: 'block',
              userSelect: 'none',
              // screen blend: pure black = transparent, reveals 3D model behind
              mixBlendMode: 'screen',
              // Bottom fade mask
              WebkitMaskImage:
                'linear-gradient(to bottom, black 0%, black 58%, transparent 90%)',
              maskImage:
                'linear-gradient(to bottom, black 0%, black 58%, transparent 90%)',
              filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
              zIndex: 10,
            }}
          />

          {/* Subtle ambient glow behind the person — bottom */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 340,
              height: 120,
              background:
                'radial-gradient(ellipse, rgba(0,240,255,0.18) 0%, rgba(189,0,255,0.08) 55%, transparent 100%)',
              filter: 'blur(28px)',
              zIndex: 5,
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
