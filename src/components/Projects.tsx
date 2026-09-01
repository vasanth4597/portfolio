import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, BrainCircuit, Activity, BarChart3, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

const projects = [
  {
    title: "ATS Resume Analyzer",
    desc: "AI-powered platform analyzing resumes against targeted job descriptions, computing match scoring, detecting missing keywords, and generating ATS-optimized advice.",
    tech: ["React.js", "Tailwind CSS", "Gemini API", "Node.js"],
    github: "https://github.com/vasanth4597",
    live: "https://atsanalyser.netlify.app/",
    icon: BrainCircuit,
    color: "from-neon-blue to-neon-purple",
    glowColor: "rgba(0, 240, 255, 0.35)",
    features: ["Resume Scoring (87%+)", "Keyword Detection", "ATS Optimization", "Gemini AI Engine"],
    mockup: (
      <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between rounded-t-xl border-t border-x border-white/10 shadow-inner">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-cyan font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            ats_analyzer.ai
          </span>
          <span className="text-emerald-400 font-semibold text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            Active Neural Model
          </span>
        </div>
        <div className="space-y-2 py-3 flex-1">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
            <span className="text-slate-400">Match Compatibility</span>
            <span className="text-neon-cyan font-extrabold text-xs">87.4% High Fit</span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-500 block text-[9px]">Extracted Core Keywords:</span>
            <div className="flex flex-wrap gap-1">
              <span className="bg-neon-blue/15 text-neon-cyan px-1.5 py-0.5 rounded text-[9px]">RAG Architecture</span>
              <span className="bg-neon-purple/15 text-neon-purple px-1.5 py-0.5 rounded text-[9px]">TypeScript</span>
              <span className="bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded text-[9px]">REST APIs</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan w-[87%]" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Fitness Tracker & Analytics",
    desc: "A comprehensive health tracking web dashboard for daily workouts, caloric intake ratios, running speed splits, and interactive animated visualization metrics.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
    github: "https://github.com/vasanth4597",
    live: "https://agent-6a35123c9f7e9bc601f2--fitnesstrackno1.netlify.app/",
    icon: Activity,
    color: "from-neon-purple to-neon-pink",
    glowColor: "rgba(189, 0, 255, 0.35)",
    features: ["Calorie Burn Ratios", "Activity Syncing", "Fitness Milestones", "Interactive Graphs"],
    mockup: (
      <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between rounded-t-xl border-t border-x border-white/10 shadow-inner">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-pink font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
            fitness_metrics.dashboard
          </span>
          <span className="text-neon-purple text-[9px] font-semibold">● Realtime</span>
        </div>
        <div className="py-3 flex-1 grid grid-cols-2 gap-2">
          <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col justify-center items-center">
            <span className="text-[9px] text-slate-400">Calories Burned</span>
            <span className="text-neon-pink font-extrabold text-sm">620 kcal</span>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col justify-center items-center">
            <span className="text-[9px] text-slate-400">Cardio Time</span>
            <span className="text-neon-purple font-extrabold text-sm">45 mins</span>
          </div>
        </div>
        <div className="flex gap-1.5 items-end justify-between h-7 px-1">
          <div className="w-3 h-[45%] bg-neon-purple/40 rounded-t" />
          <div className="w-3 h-[65%] bg-neon-purple/60 rounded-t" />
          <div className="w-3 h-[50%] bg-neon-purple/50 rounded-t" />
          <div className="w-3 h-[90%] bg-neon-pink rounded-t shadow-[0_0_8px_#ff007a]" />
          <div className="w-3 h-[75%] bg-neon-cyan rounded-t" />
        </div>
      </div>
    )
  },
  {
    title: "Price Comparison Hub",
    desc: "A smart price scraping and comparison engine evaluating e-commerce platforms to cross-examine pricing trends, detailed specs, and customer reviews.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cheerio Scraper"],
    github: "https://github.com/vasanth4597",
    live: "https://example.com",
    icon: BarChart3,
    color: "from-neon-cyan to-neon-blue",
    glowColor: "rgba(0, 255, 209, 0.35)",
    features: ["Price Scraping", "Cross-Platform Compare", "Discount Alerts", "Sentiment Insights"],
    mockup: (
      <div className="w-full h-full bg-slate-950/90 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between rounded-t-xl border-t border-x border-white/10 shadow-inner">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-cyan font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            scraper_engine.v2
          </span>
          <span className="text-neon-blue text-[9px] font-semibold">● 3 Stores Connected</span>
        </div>
        <div className="space-y-1.5 py-3 flex-1">
          <div className="flex justify-between items-center text-[9px] bg-white/5 p-1.5 rounded border border-white/5">
            <span className="text-slate-400">Store Alpha</span>
            <span className="text-neon-cyan font-bold">$799.99 (Best Deal)</span>
          </div>
          <div className="flex justify-between items-center text-[9px] bg-white/5 p-1.5 rounded border border-white/5">
            <span className="text-slate-400">Store Beta</span>
            <span className="text-rose-400 font-bold">$849.00</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] bg-emerald-500/10 text-emerald-300 p-1.5 rounded border border-emerald-500/20">
          <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Optimal savings: $49.01 detected.</span>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-cyan text-xs font-mono font-semibold">
          <Layers className="w-3.5 h-3.5 text-neon-blue" />
          <span>Featured Software Builds</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Featured{' '}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Projects
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Hover over any project card to explore features, tech stack, and live preview details.
        </p>
      </div>

      {/* Projects 3D Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Interactive3DCard
                glowColor={project.glowColor}
                maxTilt={12}
                className="glass-card flex flex-col justify-between h-full border border-slate-200 dark:border-white/10 group cursor-default"
              >
                {/* 3D Mockup Visual Header */}
                <div className="h-48 bg-slate-950/80 flex items-end justify-center relative overflow-hidden p-3 border-b border-white/10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="w-full h-full transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {project.mockup}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-xl text-white group-hover:text-neon-cyan transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                        <ProjectIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
                      {project.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase block">
                        Features
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.map((f) => (
                          <span
                            key={f}
                            className="text-[10px] font-semibold bg-white/5 text-slate-300 px-2 py-0.5 rounded-md border border-white/5"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges & Action Links */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audio.playHover()}
                        onClick={() => audio.playClick()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-neon-cyan transition-colors duration-200"
                      >
                        <FaGithub className="w-4 h-4" />
                        Source Code
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audio.playHover()}
                        onClick={() => audio.playClick()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/30 text-neon-cyan text-xs font-semibold shadow-[0_0_10px_rgba(0,255,209,0.2)] transition-all duration-200"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
