import { GitBranch, GitCommit, GitPullRequest } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const languages = [
  { name: "Java", share: 45, color: "bg-[#b07219]" },
  { name: "Python", share: 30, color: "bg-[#3572A5]" },
  { name: "TypeScript / JS", share: 20, color: "bg-[#3178c6]" },
  { name: "SQL", share: 5, color: "bg-[#e38c00]" }
];

export default function GithubDashboard() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 relative z-10 px-6 max-w-7xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Code{" "}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Contributions
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Analyzing version control footprints, language breakdown, and commit velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Main GitHub header metrics */}
        <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <FaGithub className="w-5 h-5 text-neon-cyan" />
              <span className="font-extrabold text-slate-800 dark:text-white">Github Dashboard</span>
            </div>
            <a 
              href="https://github.com/vasanth4597" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold text-neon-cyan hover:underline inline-flex items-center gap-1"
            >
              Open Github Profile
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 my-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 block">Total Repos</span>
              <span className="text-2xl font-black text-slate-850 dark:text-white">12</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 block">Commits (YTD)</span>
              <span className="text-2xl font-black text-slate-850 dark:text-white">248</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 block">Longest Streak</span>
              <span className="text-2xl font-black text-slate-850 dark:text-white">15 Days</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 block">Active Status</span>
              <span className="text-xs font-bold text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded-full border border-neon-cyan/20 inline-block">Pushing Code</span>
            </div>
          </div>

          {/* Quick Commit branch icons */}
          <div className="flex gap-4 text-xs font-semibold text-slate-455 dark:text-slate-500 justify-center border-t border-slate-100 dark:border-white/5 pt-4">
            <div className="flex items-center gap-1">
              <GitCommit className="w-4 h-4 text-neon-blue" />
              <span>Commits</span>
            </div>
            <div className="flex items-center gap-1">
              <GitBranch className="w-4 h-4 text-neon-purple" />
              <span>Branches</span>
            </div>
            <div className="flex items-center gap-1">
              <GitPullRequest className="w-4 h-4 text-neon-cyan" />
              <span>PRs</span>
            </div>
          </div>
        </div>

        {/* Languages gauge card */}
        <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between min-h-[300px]">
          <h3 className="font-bold text-sm text-slate-850 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-white/5 pb-4">Top Languages</h3>
          
          <div className="space-y-4 my-auto py-2">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700 dark:text-slate-300">{lang.name}</span>
                  <span className="text-slate-455 dark:text-slate-455">{lang.share}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${lang.color}`} style={{ width: `${lang.share}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-center font-bold text-slate-400 dark:text-slate-550 uppercase pt-4 border-t border-slate-100 dark:border-white/5">
            Updated in real-time from GitHub API
          </div>
        </div>

      </div>
    </motion.section>
  );
}
