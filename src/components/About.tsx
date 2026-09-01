import { motion } from 'framer-motion';
import { Award, FolderGit2, Calendar, BookOpen, GraduationCap, Briefcase, Terminal } from 'lucide-react';
import Interactive3DCard from './3d/Interactive3DCard';

const stats = [
  { label: 'Cumulative CGPA', value: '8.21', subtext: '/ 10', icon: Award, color: 'text-neon-blue', glow: 'rgba(0, 240, 255, 0.3)' },
  { label: 'Personal Projects', value: '3+', subtext: 'Live Builds', icon: FolderGit2, color: 'text-neon-purple', glow: 'rgba(189, 0, 255, 0.3)' },
  { label: 'Industry Internship', value: '1', subtext: 'Mimber Academy', icon: Briefcase, color: 'text-neon-cyan', glow: 'rgba(0, 255, 209, 0.3)' },
  { label: 'B.Tech Specialization', value: 'AI & DS', subtext: 'Student Focus', icon: GraduationCap, color: 'text-neon-pink', glow: 'rgba(255, 0, 122, 0.3)' },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-mono font-semibold">
          <Terminal className="w-3.5 h-3.5" />
          <span>Profile Overview</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          About{' '}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Me
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          AI & Data Science undergraduate exploring the intersections of intelligent data systems and modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Bio & Education column */}
        <div className="lg:col-span-7 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Interactive3DCard
              maxTilt={8}
              glowColor="rgba(0, 240, 255, 0.2)"
              className="glass-card p-8 rounded-2xl border border-white/10 space-y-5"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-cyan">
                  <BookOpen className="w-5 h-5" />
                </div>
                Professional Biography
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Motivated Artificial Intelligence & Data Science student passionate about software development, Generative AI, and solving complex algorithmic challenges. I love building highly interactive, responsive applications that run on robust backends.
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Equipped with deep theoretical knowledge in Computer Science topics, I bridge artificial intelligence methods with user-friendly web interfaces to create comprehensive data-driven products.
              </p>
            </Interactive3DCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Interactive3DCard
              maxTilt={8}
              glowColor="rgba(189, 0, 255, 0.2)"
              className="glass-card p-8 rounded-2xl border border-white/10 space-y-5"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">
                  <GraduationCap className="w-5 h-5" />
                </div>
                Academic Credentials
              </h3>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg">
                      B.Tech in Artificial Intelligence & Data Science
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Annai Mira College of Engineering and Technology
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2023 - 2027</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-neon-blue/10 border border-neon-blue/30 text-neon-cyan">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Current Academic Standing</p>
                    <p className="font-bold text-white text-sm md:text-base">
                      Cumulative CGPA: <span className="text-neon-cyan font-mono font-extrabold">8.21 / 10</span>
                    </p>
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          </motion.div>

        </div>

        {/* 3D Statistics Cards Column */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Interactive3DCard
                  maxTilt={14}
                  glowColor={stat.glow}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-[180px]"
                >
                  <div className="flex justify-between items-center">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${stat.color} shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-extrabold text-white flex items-baseline gap-1 font-mono">
                      {stat.value}
                      <span className="text-xs font-normal text-slate-400 font-sans">{stat.subtext}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </Interactive3DCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
