import { motion } from 'framer-motion';
import { ExternalLink, Code2, Cpu, GitBranch, Layers, Search, CheckCircle2, Zap, Target } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

const algorithmicDomains = [
  {
    topic: "Dynamic Programming & Recursion",
    focus: "Memoization, Tabulation, 1D/2D Subproblems, Knapsack & State Transitions",
    complexity: "O(N) / O(N×W)",
    icon: Layers,
    color: "from-neon-purple to-pink-500",
    glow: "rgba(189, 0, 255, 0.25)",
    badge: "Optimal Substructure"
  },
  {
    topic: "Trees, BST & Graph Algorithms",
    focus: "DFS/BFS Traversals, Binary Search Trees, Shortest Paths, Topological Sort",
    complexity: "O(V + E)",
    icon: GitBranch,
    color: "from-neon-blue to-cyan-400",
    glow: "rgba(0, 240, 255, 0.25)",
    badge: "Hierarchical & Networks"
  },
  {
    topic: "Arrays, Two-Pointers & Sliding Window",
    focus: "Prefix Sums, Subarray Optimization, In-place Swaps, Monotonic Windows",
    complexity: "O(N) Time, O(1) Space",
    icon: Zap,
    color: "from-cyan-400 to-emerald-400",
    glow: "rgba(0, 255, 209, 0.25)",
    badge: "Linear Optimization"
  },
  {
    topic: "Searching & Sorting Paradigms",
    focus: "Binary Search on Search Space, Divide & Conquer, Merge Sort, Quick Select",
    complexity: "O(log N) / O(N log N)",
    icon: Search,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.25)",
    badge: "Divide & Conquer"
  },
  {
    topic: "Linear Structures (Stack & Queue)",
    focus: "Monotonic Stacks, Next Greater Element, Queue Buffer Systems, Fast/Slow Pointers",
    complexity: "O(1) Amortized",
    icon: Cpu,
    color: "from-indigo-400 to-neon-purple",
    glow: "rgba(99, 102, 241, 0.25)",
    badge: "Sequential Buffering"
  },
  {
    topic: "Hashing & String Manipulations",
    focus: "Collision Resolution, Frequency Maps, Anagram Analysis, Rolling Hash",
    complexity: "O(1) Lookup",
    icon: Code2,
    color: "from-neon-pink to-rose-400",
    glow: "rgba(255, 0, 122, 0.25)",
    badge: "Fast Lookup & Pattern"
  }
];

const solvingMethodology = [
  {
    step: "01",
    title: "Constraint & Edge Analysis",
    desc: "Deconstruct time & space limits (N ≤ 10⁵ ⟹ O(N log N)) and identify edge boundaries before writing code."
  },
  {
    step: "02",
    title: "Data Structure Selection",
    desc: "Select optimal memory models (Trees, Monotonic Stacks, Hash Maps) to guarantee optimal asymptotic bounds."
  },
  {
    step: "03",
    title: "Modular Clean Implementation",
    desc: "Craft clean, readable code with robust variable naming, defensive null handling, and minimal memory overhead."
  },
  {
    step: "04",
    title: "Complexity Verification",
    desc: "Dry-run edge test cases, boundary states, and mathematically verify Time & Space complexity metrics."
  }
];

export default function DsaJourney() {
  return (
    <section id="dsa-github" className="py-28 relative z-10 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* SECTION HEADER */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-2"
        >
          <Target className="w-4 h-4" />
          <span>Core Engineering Fundamentals</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          DSA & Problem Solving{' '}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Architecture
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Deep computational problem-solving through disciplined algorithmic paradigms, optimal time-space trade-offs, and clean architectural design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Algorithmic Topic Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-lg md:text-xl text-white flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-neon-cyan" />
              Core Algorithmic Domains
            </h3>
            <span className="text-xs font-mono font-semibold text-slate-400">
              Java & Python Foundations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {algorithmicDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.topic}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Interactive3DCard
                    maxTilt={10}
                    glowColor={domain.glow}
                    className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${domain.color} text-white shadow-sm shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                          {domain.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-sm text-white group-hover:text-neon-cyan transition-colors duration-200">
                        {domain.topic}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {domain.focus}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-500">Target Efficiency</span>
                      <span className="text-[11px] font-mono font-bold text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/20">
                        {domain.complexity}
                      </span>
                    </div>
                  </Interactive3DCard>
                </motion.div>
              );
            })}
          </div>

          {/* Profile Platform Links */}
          <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">GeeksforGeeks Profile</h4>
                <p className="text-xs font-mono text-slate-400">Handle: @vasanthqd3q • Regular Practice & DSA Solutions</p>
              </div>
            </div>

            <a
              href="https://www.geeksforgeeks.org/profile/vasanthqd3q"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audio.playHover()}
              onClick={() => audio.playClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold hover:opacity-90 shadow-md transition-all duration-200 shrink-0"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Engineering Methodology & Architecture Blueprint */}
        <div className="lg:col-span-5 space-y-6">
          <Interactive3DCard
            maxTilt={8}
            glowColor="rgba(189, 0, 255, 0.2)"
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 space-y-6"
          >
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon-purple uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Problem Solving Philosophy</span>
              </div>
              <h3 className="font-extrabold text-lg md:text-xl text-white">
                Engineering Execution Flow
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A structured, repeatable methodology applied to decompose complex algorithmic challenges into optimal, scalable software code.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-4">
              {solvingMethodology.map((item) => (
                <div key={item.step} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-neon-cyan flex items-center justify-center font-mono font-black text-xs shrink-0 group-hover:border-neon-cyan/40 transition-colors duration-200">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-xs md:text-sm text-white flex items-center gap-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights pill box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block">
                Guiding Principles
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Optimal Big-O Time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Space Efficiency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Edge Case Resilience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Clean Modular Code</span>
                </div>
              </div>
            </div>
          </Interactive3DCard>
        </div>

      </div>
    </section>
  );
}
