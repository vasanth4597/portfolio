import { GitBranch, GitCommit, GitPullRequest, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

const languages = [
  { name: "Java", share: 45, color: "bg-gradient-to-r from-amber-500 to-amber-400" },
  { name: "Python", share: 30, color: "bg-gradient-to-r from-sky-500 to-cyan-400" },
  { name: "TypeScript / React", share: 20, color: "bg-gradient-to-r from-cyan-500 to-neon-blue" },
  { name: "SQL & DBMS", share: 5, color: "bg-gradient-to-r from-emerald-500 to-teal-400" }
];

export default function GithubDashboard() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 relative z-10 px-6 max-w-7xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Code{' '}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,209,0.3)]">
            Contributions
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Version control metrics, language distributions, and continuous engineering cadence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Main GitHub header metrics */}
        <Interactive3DCard
          maxTilt={8}
          glowColor="rgba(0, 240, 255, 0.25)"
          className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[300px]"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <FaGithub className="w-5 h-5 text-neon-cyan" />
              <span className="font-extrabold text-white">GitHub Telemetry</span>
            </div>
            <a 
              href="https://github.com/vasanth4597" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playClick()}
              className="text-xs font-mono font-semibold text-neon-cyan hover:underline inline-flex items-center gap-1.5"
            >
              <span>@vasanth4597</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 my-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Total Repositories</span>
              <span className="text-3xl font-black text-white font-mono">12+</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Commits (YTD)</span>
              <span className="text-3xl font-black text-white font-mono">248+</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Longest Coding Streak</span>
              <span className="text-3xl font-black text-white font-mono">15 Days</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Development Status</span>
              <span className="text-xs font-mono font-bold text-neon-cyan bg-neon-cyan/10 px-2.5 py-1 rounded-full border border-neon-cyan/30 inline-block shadow-[0_0_8px_rgba(0,255,209,0.2)]">
                ● Pushing Code
              </span>
            </div>
          </div>

          {/* Commit branch badges */}
          <div className="flex gap-6 text-xs font-mono font-semibold text-slate-400 justify-center border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <GitCommit className="w-4 h-4 text-neon-blue" />
              <span>Commits</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-neon-purple" />
              <span>Branches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitPullRequest className="w-4 h-4 text-neon-cyan" />
              <span>Pull Requests</span>
            </div>
          </div>
        </Interactive3DCard>

        {/* Languages gauge card */}
        <Interactive3DCard
          maxTilt={8}
          glowColor="rgba(189, 0, 255, 0.25)"
          className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[300px]"
        >
          <h3 className="font-bold text-sm text-white font-mono uppercase tracking-wider border-b border-white/10 pb-4">
            Language Composition
          </h3>
          
          <div className="space-y-4 my-auto py-2">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono font-semibold">
                  <span className="text-slate-200">{lang.name}</span>
                  <span className="text-neon-cyan font-bold">{lang.share}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.share}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full ${lang.color} shadow-[0_0_8px_rgba(0,240,255,0.4)]`} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-center font-mono font-bold text-slate-500 uppercase pt-4 border-t border-white/10">
            Realtime Analytics & Version Control Summary
          </div>
        </Interactive3DCard>

      </div>
    </motion.section>
  );
}
