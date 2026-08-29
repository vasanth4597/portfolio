import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, BrainCircuit, Activity, BarChart3 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "ATS Resume Analyzer",
    desc: "AI-powered web platform that analyzes resumes against job descriptions, suggesting critical missing keywords and calculating matching ATS scores.",
    tech: ["React.js", "Tailwind CSS", "Gemini API", "Node.js"],
    github: "https://github.com/vasanth4597",
    live: "https://atsanalyser.netlify.app/",
    icon: BrainCircuit,
    color: "from-neon-blue to-neon-purple",
    shadow: "rgba(0, 240, 255, 0.2)",
    features: ["Resume Scoring", "Keyword Detection", "ATS Optimization"],
    // Mock UI mockup data
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between rounded-t-xl border-t border-x border-white/5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-blue font-semibold">ats_analyzer.py</span>
          <span className="text-neon-cyan animate-pulse">● AI Active</span>
        </div>
        <div className="space-y-2 py-4 flex-1">
          <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
            <span>ATS Match Rate</span>
            <span className="text-neon-cyan font-bold">87% Excellent</span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-500 block">Missing keywords found:</span>
            <div className="flex flex-wrap gap-1">
              <span className="bg-red-500/10 text-red-400 px-1 rounded">RAG</span>
              <span className="bg-red-500/10 text-red-400 px-1 rounded">FastAPI</span>
              <span className="bg-red-500/10 text-red-400 px-1 rounded">Typescript</span>
            </div>
          </div>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan w-[87%]" />
        </div>
      </div>
    )
  },
  {
    title: "Fitness Tracker",
    desc: "A premium dashboard application for tracking daily activities, workout logs, running metrics, and calorie burn ratios with animated visualizations.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
    github: "https://github.com/vasanth4597",
    live: "https://agent-6a35123c9f7e9bc601f2--fitnesstrackno1.netlify.app/",
    icon: Activity,
    color: "from-neon-purple to-neon-pink",
    shadow: "rgba(189, 0, 255, 0.2)",
    features: ["Calorie Tracking", "Activity Monitoring", "Fitness Goals"],
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between rounded-t-xl border-t border-x border-white/5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-purple font-semibold">activity_dashboard.jsx</span>
          <span className="text-neon-pink">● Synced</span>
        </div>
        <div className="py-4 flex-1 grid grid-cols-2 gap-2">
          <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col justify-center items-center">
            <span className="text-[9px] text-slate-500">Burned</span>
            <span className="text-neon-pink font-bold text-sm">620 kcal</span>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col justify-center items-center">
            <span className="text-[9px] text-slate-500">Active Time</span>
            <span className="text-neon-purple font-bold text-sm">45 mins</span>
          </div>
        </div>
        <div className="flex gap-1 items-end justify-between h-8 px-1">
          <div className="w-2.5 h-[40%] bg-neon-purple/40 rounded-t" />
          <div className="w-2.5 h-[65%] bg-neon-purple/60 rounded-t" />
          <div className="w-2.5 h-[50%] bg-neon-purple/50 rounded-t" />
          <div className="w-2.5 h-[90%] bg-neon-pink rounded-t" />
          <div className="w-2.5 h-[75%] bg-neon-purple rounded-t" />
        </div>
      </div>
    )
  },
  {
    title: "Shopping Comparison Analyzer",
    desc: "A smart comparing engine evaluating multiple shopping platforms to cross-examine prices, detailed specifications, and sentiment ratings of products.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cheerio Scraper"],
    github: "https://github.com/vasanth4597",
    live: "https://example.com",
    icon: BarChart3,
    color: "from-neon-cyan to-neon-blue",
    shadow: "rgba(0, 255, 209, 0.2)",
    features: ["Product Analysis", "Price Comparison", "Rating Insights"],
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between rounded-t-xl border-t border-x border-white/5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-neon-cyan font-semibold">price_scraper.py</span>
          <span className="text-neon-blue">● Online</span>
        </div>
        <div className="space-y-2 py-4 flex-1">
          <div className="flex justify-between items-center text-[9px] border-b border-white/5 pb-1">
            <span>Store A Price</span>
            <span className="text-neon-cyan font-bold">$799.99</span>
          </div>
          <div className="flex justify-between items-center text-[9px] border-b border-white/5 pb-1">
            <span>Store B Price</span>
            <span className="text-red-400 font-bold">$849.00</span>
          </div>
          <div className="flex justify-between items-center text-[9px]">
            <span>Optimal Choice</span>
            <span className="text-neon-blue font-bold">Store A (-6%)</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] bg-white/5 p-1 rounded">
          <Sparkles className="w-2.5 h-2.5 text-neon-cyan animate-pulse" />
          <span>Save $49.01 on order.</span>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Explore my academic and software engineering builds showcasing end-to-end applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card flex flex-col justify-between rounded-2xl overflow-hidden hover:border-slate-350 dark:hover:border-white/20 transition-all duration-300 relative group"
              style={{
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.3)`,
              }}
            >
              {/* Card visual header mockup */}
              <div className="h-44 bg-slate-900/50 flex items-end justify-center relative overflow-hidden group-hover:bg-slate-900/30 transition-all duration-300">
                {/* Background color gradient overlay inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="w-[85%] h-[85%] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {project.mockup}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-xl text-slate-800 dark:text-white group-hover:text-neon-blue transition-colors duration-250">
                      {project.title}
                    </h3>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-md`}>
                      <ProjectIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
                    {project.desc}
                  </p>

                  {/* Features Bullets */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 tracking-wider uppercase block">Key Features</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map(f => (
                        <span key={f} className="text-[10px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-650 dark:text-slate-350 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Badges & Actions */}
                <div className="space-y-4 pt-4 border-t border-slate-150 dark:border-white/5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-neon-blue bg-neon-blue/10 dark:bg-neon-blue/5 border border-neon-blue/15 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-200"
                    >
                      <FaGithub className="w-4 h-4" />
                      Repository Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-blue hover:underline"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
