import { motion } from 'framer-motion';
import { Code2, GraduationCap, Flame, Sparkles } from 'lucide-react';

const achievements = [
  {
    title: "Maintained 8.21 CGPA",
    desc: "Demonstrated strong consistent academic performance throughout B.Tech semesters in challenging coursework related to Artificial Intelligence, Data Science, and Computer Science.",
    icon: GraduationCap,
    gradient: "from-neon-blue to-neon-purple"
  },
  {
    title: "Built Academic Projects",
    desc: "Successfully deployed full-stack, data-driven platforms, including an AI ATS Resume Scorer, Price Scraping Engine, and Activity tracking applications.",
    icon: Code2,
    gradient: "from-neon-purple to-neon-cyan"
  },
  {
    title: "Continuous DSA Practice",
    desc: "Cultivated a regular schedule of solving algorithmic problems across prominent competitive coding sites, keeping analytical skills sharp.",
    icon: Flame,
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Active AI Learner",
    desc: "Independently upskilled in Generative AI techniques, Large Language Models prompting, Retrieval-Augmented Generation, and basic Python data pipelines.",
    icon: Sparkles,
    gradient: "from-neon-pink to-neon-purple"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Key{" "}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Highlights of academic excellence, coding diligence, and engineering adaptability.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, index) => {
          const Icon = ach.icon;
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start border border-slate-200 dark:border-white/10"
            >
              {/* Animated Icon Frame */}
              <div className={`p-4 rounded-xl bg-gradient-to-br ${ach.gradient} text-white shrink-0 shadow-lg`}>
                <Icon className="w-6 h-6 animate-pulse-slow" />
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-slate-805 dark:text-white">
                  {ach.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
