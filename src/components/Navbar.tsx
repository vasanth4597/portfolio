import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, BrainCircuit, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { audio } from '../utils/audioFX';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'DSA & GitHub', href: '#dsa-github' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Initial theme set
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    setIsMuted(audio.getIsMuted());

    // ── Boot sound on first user interaction ──────────────────
    const handleFirstInteraction = () => {
      audio.playBoot();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
    window.addEventListener('click',      handleFirstInteraction, { once: true });
    window.addEventListener('keydown',    handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });

    // ── Section whoosh via IntersectionObserver ───────────────
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) audio.playWhoosh();
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => observer.observe(s));

    // ── Scroll tick (throttled — fires every ~120px delta) ────
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) setScrollProgress((window.scrollY / totalHeight) * 100);
      setIsScrolled(window.scrollY > 20);

      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 120) {
        audio.playScrollTick();
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    audio.playClick();
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleSound = () => {
    const muted = audio.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      {/* 3D Gradient Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan shadow-[0_0_10px_#00f0ff]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / 3D Holographic Branding */}
        <a
          href="#home"
          onClick={() => audio.playClick()}
          className="flex items-center space-x-2.5 text-slate-900 dark:text-white group"
        >
          <div className="relative p-2 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform duration-300">
            <BrainCircuit className="w-5 h-5 text-neon-cyan animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent group-hover:opacity-90">
              VASANTHARAJ
            </span>
            <span className="text-[9px] font-mono text-neon-blue/70 tracking-widest uppercase">
              Software Engineer · AI/DS
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playClick()}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Audio FX Toggle Button */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-semibold ${
              !isMuted
                ? 'bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan shadow-[0_0_10px_rgba(0,255,209,0.2)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 h-full bg-neon-cyan animate-pulse" />
                  <span className="w-0.5 h-2 bg-neon-cyan animate-pulse delay-75" />
                  <span className="w-0.5 h-3 bg-neon-cyan animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Muted</span>
              </>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-cyan hover:border-neon-blue/50 dark:hover:border-neon-cyan/50 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleSound}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Audio"
          >
            {!isMuted ? <Volume2 className="w-4 h-4 text-neon-cyan" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-800 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    audio.playClick();
                    setIsOpen(false);
                  }}
                  className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-neon-cyan dark:hover:text-neon-cyan transition-colors duration-200 py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
