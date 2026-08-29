import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Mimber Academy",
    duration: "June 2024 - July 2024 (1 Month)",
    location: "Remote",
    tasks: [
      "Web Development: Engineered clean UI modules, responsive components, and fluid layout frameworks using React.js and styling libraries.",
      "Team Collaboration: Attended daily syncs, collaborated with senior engineers, and code-reviewed project sprints.",
      "Software Development Workflow: Gained familiarity with enterprise Git practices, automated CI/CD configurations, and agile development sprint pipelines."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Professional{" "}
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          A summary of my industry placements and engineering internship roles.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent z-0" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 mb-12">
            
            {/* Pulsing timeline circle */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-slate-900 border-2 border-neon-blue z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping" />
            </div>

            {/* Empty space placeholder for desktop alignment */}
            <div className="hidden md:block w-[45%]" />

            {/* Actual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl w-full md:w-[45%] relative z-10 border border-slate-200 dark:border-white/10"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-neon-blue">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Internship Role</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-655 dark:text-slate-350">
                    {exp.company}
                  </h4>
                </div>

                {/* Duration & Location details */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neon-purple" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
                    {exp.location}
                  </span>
                </div>

                {/* Tasks List */}
                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  {exp.tasks.map((task, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-350">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
