import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal, Award, Code2, Cpu, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { audio } from '../utils/audioFX';
import profilePhoto from '../assets/vasantharaj_transparent.png';

const roles = [
  'Algorithmic Problem Solver',
  'Software Engineer',
  'Full-Stack Developer',
  'AI & Data Science Engineer',
  'Generative AI Specialist',
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
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-6 z-10"
    >
      {/* ─── Background subtle cyber matrix grid ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        
        {/* ─── LEFT / MAIN COLUMN: Typography & Content ─────────────────────── */}
        <div className="lg:col-span-7 space-y-6 text-left z-20">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/8 backdrop-blur-md text-neon-cyan text-xs font-mono font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            <Terminal className="w-3.5 h-3.5 text-neon-blue" />
            <span>B.Tech AI &amp; DS · Open to Opportunities</span>
          </motion.div>

          {/* Headline Section */}
          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm font-mono text-neon-blue/80 uppercase tracking-[0.25em]"
            >
              Software Engineering Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]"
            >
              <span className="block text-white">Hi, I'm</span>
              <span
                className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]"
              >
                VASANTHARAJ
              </span>
            </motion.h1>
          </div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 h-9"
          >
            <Zap className="w-5 h-5 text-neon-cyan flex-shrink-0" />
            <span
              style={{
                background: 'linear-gradient(90deg, #bd00ff, #00ffd1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-bold"
            >
              {typedText}
            </span>
            <span className="typing-caret w-0.5 h-6 bg-neon-cyan inline-block" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-300 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-normal"
          >
            Software Engineering undergraduate specialising in AI &amp; Data Science with proven mastery in Java, DSA, Generative AI, and full-stack development. Building scalable, production-ready systems and intelligent applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#resume"
              onClick={triggerConfetti}
              onMouseEnter={() => audio.playHover()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 focus:outline-none"
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #bd00ff, #00ffd1)',
                boxShadow: '0 0 30px rgba(0,240,255,0.35), 0 4px 20px rgba(189,0,255,0.2)',
              }}
            >
              <Download className="w-4 h-4 animate-bounce" />
              Download Resume
            </a>

            <a
              href="#projects"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:scale-105 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              View Projects
              <ArrowRight className="w-4 h-4 text-neon-cyan" />
            </a>

            <a
              href="#contact"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playClick()}
              className="px-4 py-3.5 text-slate-400 hover:text-neon-cyan font-semibold text-sm transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links & Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10"
          >
            <div className="flex items-center space-x-3">
              {[
                { href: 'https://github.com/vasanth4597',             Icon: FaGithub,  label: 'GitHub Profile',   hover: 'hover:text-neon-cyan hover:border-neon-cyan/40' },
                { href: 'https://www.linkedin.com/in/vasantharaj-s45', Icon: FaLinkedin, label: 'LinkedIn Profile', hover: 'hover:text-neon-blue hover:border-neon-blue/40' },
                { href: 'mailto:vasanth.ai1931@gmail.com',             Icon: Mail,       label: 'Email Address',    hover: 'hover:text-neon-purple hover:border-neon-purple/40' },
              ].map(({ href, Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => audio.playHover()}
                  aria-label={label}
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:scale-110 transition-all duration-200 ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Award className="w-3.5 h-3.5 text-neon-blue" />
                <span>CGPA: <strong className="text-white">8.21</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Code2 className="w-3.5 h-3.5 text-neon-purple" />
                <span>Builds: <strong className="text-white">3+ Live</strong></span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Cpu className="w-3.5 h-3.5 text-neon-cyan" />
                <span>DSA: <strong className="text-white">200+ Solved</strong></span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── RIGHT COLUMN: Integrated Frameless Portrait ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-10"
        >
          {/* Subtle Atmospheric Lighting Aura behind Portrait */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '130%',
              height: '130%',
              background:
                'radial-gradient(ellipse at 50% 45%, rgba(0, 240, 255, 0.14) 0%, rgba(189, 0, 255, 0.09) 50%, transparent 75%)',
              filter: 'blur(40px)',
              zIndex: 0,
            }}
          />

          {/* Portrait Container — Completely Frameless & Seamlessly Blended */}
          <div
            className="relative w-full max-w-[420px] lg:max-w-[480px] flex items-end justify-center"
            style={{ zIndex: 1 }}
          >
            <img
              src={profilePhoto}
              alt="Vasantharaj S"
              draggable={false}
              className="w-full h-auto max-h-[540px] md:max-h-[580px] object-contain object-bottom select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
              style={{
                // 2-Way progressive mask: Soft side edge integration + deep bottom dissolve
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage:
                  'linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                maskComposite: 'intersect',
                filter: 'brightness(1.02) contrast(1.03) saturate(1.03)',
              }}
            />

            {/* Soft Ambient Ground Bloom */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 pointer-events-none w-4/5 h-16 rounded-full"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(0, 240, 255, 0.22) 0%, rgba(189, 0, 255, 0.10) 50%, transparent 80%)',
                filter: 'blur(22px)',
                zIndex: 2,
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
