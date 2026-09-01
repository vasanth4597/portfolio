import { BrainCircuit, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { audio } from '../utils/audioFX';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030014]/80 backdrop-blur-xl py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding logo */}
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-cyan">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            VASANTHARAJ
          </span>
        </div>

        {/* Info */}
        <p className="text-xs font-mono text-slate-400 text-center md:text-left flex items-center gap-1.5">
          <span>&copy; {currentYear} Vasantharaj S. &nbsp;Software Engineer · Built with React, TypeScript & Node.js.</span>
        </p>

        {/* Quick Socials */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/vasanth4597"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audio.playHover()}
            className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vasantharaj-s45"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audio.playHover()}
            className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-neon-blue hover:border-neon-blue/40 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:vasanth.ai1931@gmail.com"
            onMouseEnter={() => audio.playHover()}
            className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-neon-purple hover:border-neon-purple/40 hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
