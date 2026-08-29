import { motion } from 'framer-motion';
import { Award, FolderGit2, Calendar, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Cumulative CGPA', value: '8.21', subtext: '/ 10', icon: Award, color: 'text-neon-blue' },
  { label: 'Personal Projects', value: '3+', subtext: 'Built', icon: FolderGit2, color: 'text-neon-purple' },
  { label: 'Industry Internship', value: '1', subtext: 'Mimber Academy', icon: Briefcase, color: 'text-neon-cyan' },
  { label: 'B.Tech Specialization', value: 'AI & DS', subtext: 'Student Focus', icon: GraduationCap, color: 'text-neon-pink' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Student developer exploring the intersections of Intelligent Systems and Modern Web Applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Education & Bio column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-neon-blue" />
              Professional Biography
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Motivated Artificial Intelligence & Data Science student passionate about software development, Generative AI, and solving real-world problems through technology. I love building highly interactive, responsive applications that run on robust backends.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Equipped with deep theoretical knowledge in Computer Science topics, I bridge artificial intelligence methods with user-friendly web interfaces to create comprehensive data-driven products.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-neon-purple" />
              Academic Journey
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-4">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base md:text-lg">
                    B.Tech in Artificial Intelligence & Data Science
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Annai Mira College of Engineering and Technology
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2023 - 2027</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="p-2.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <Award className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Current Academic Standing</p>
                  <p className="font-bold text-slate-850 dark:text-white text-sm md:text-base">
                    Cumulative CGPA: <span className="text-neon-blue">8.21 / 10</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Cards grid column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between h-[170px]"
              >
                <div className="flex justify-between items-center">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white flex items-baseline gap-1">
                    {stat.value}
                    <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{stat.subtext}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
