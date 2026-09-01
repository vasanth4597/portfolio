import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import Interactive3DCard from './3d/Interactive3DCard';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Mimber Academy",
    duration: "June 2024 - July 2024",
    location: "Remote Internship",
    tasks: [
      "Web Development: Engineered clean UI modules, responsive components, and fluid layout frameworks using React.js and modern styling systems.",
      "Team Collaboration: Attended daily engineering standups, collaborated with mentors, and actively code-reviewed sprint commits.",
      "Engineering Workflow: Gained familiarity with Git version control, automated CI/CD configurations, and agile development sprint cycles."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Industry Placements</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Professional{' '}
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,209,0.3)]">
            Experience
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Practical industry internship experience applying modern web architectures.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Glowing Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent z-0 shadow-[0_0_8px_#00ffd1]" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 mb-12">
            
            {/* Pulsing timeline radar circle */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-slate-950 border-2 border-neon-cyan z-10 flex items-center justify-center shadow-[0_0_10px_#00ffd1]">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
            </div>

            {/* Desktop alignment spacer */}
            <div className="hidden md:block w-[45%]" />

            {/* 3D Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] relative z-10"
            >
              <Interactive3DCard
                maxTilt={10}
                glowColor="rgba(0, 255, 209, 0.3)"
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/10"
              >
                <div className="space-y-4">
                  {/* Header info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Internship Placement</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-300">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Duration & Location details */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
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
                  <div className="space-y-2.5 pt-3 border-t border-white/10">
                    {exp.tasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
