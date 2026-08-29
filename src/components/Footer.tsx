import { BrainCircuit, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-[#f8fafc]/50 dark:bg-[#030014]/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding logo */}
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-6 h-6 text-neon-blue" />
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            VASANTHARAJ
          </span>
        </div>

        {/* Copyleft / Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
          &copy; {currentYear} VASANTHARAJ. All rights reserved. 
          <span className="block md:inline md:ml-2 text-slate-400 dark:text-slate-500">
            B.Tech AI & DS student.
          </span>
        </p>

        {/* Quick Socials */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/vasanth4597"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue hover:border-neon-blue/40 dark:hover:border-neon-blue/40 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vasantharaj-s45"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue hover:border-neon-blue/40 dark:hover:border-neon-blue/40 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:vasanth.ai1931@gmail.com"
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue hover:border-neon-blue/40 dark:hover:border-neon-blue/40 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
