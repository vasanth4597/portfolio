import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, LayoutTemplate, BrainCircuit, Database, Cpu, Layers } from 'lucide-react';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

const categories = [
  { id: 'all', label: 'All Competencies', icon: Layers },
  { id: 'programming', label: 'Languages', icon: Code2 },
  { id: 'frontend', label: 'Frontend & UI', icon: LayoutTemplate },
  { id: 'ai-ds', label: 'AI & Data Science', icon: BrainCircuit },
  { id: 'core-cs', label: 'Core CS & Data', icon: Database },
];

interface SkillItem {
  name: string;
  category: 'programming' | 'frontend' | 'ai-ds' | 'core-cs';
  proficiency: 'Advanced' | 'Proficient' | 'Specialized' | 'Core Competency';
  level: number; // 0 - 100 percentage
  badgeColor: string;
  desc: string;
  tags: string[];
}

const skillsList: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    category: 'programming',
    proficiency: 'Advanced',
    level: 92,
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    desc: 'Strong object-oriented architecture, Collections framework, multithreading, and memory-efficient algorithmic implementations.',
    tags: ['OOP Core', 'Collections', 'Multithreading', 'Generics']
  },
  {
    name: 'Python',
    category: 'programming',
    proficiency: 'Proficient',
    level: 88,
    badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    desc: 'Data analysis scripting, NumPy arrays, Pandas DataFrames, Scikit-learn models, and automation workflows.',
    tags: ['NumPy', 'Pandas', 'Scikit-learn', 'Automation']
  },
  {
    name: 'SQL',
    category: 'programming',
    proficiency: 'Proficient',
    level: 84,
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    desc: 'Relational database schema modeling, complex joins, subqueries, grouping aggregations, and query optimization.',
    tags: ['PostgreSQL', 'MySQL', 'Schema Design', 'Indexing']
  },
  // Frontend & 3D
  {
    name: 'React.js & Three.js',
    category: 'frontend',
    proficiency: 'Advanced',
    level: 90,
    badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    desc: 'Modern SPA development, component architecture, custom hooks, context state management, and virtual DOM rendering.',
    tags: ['React Hooks', 'Context API', 'SPA Architecture', 'Virtual DOM']
  },
  {
    name: 'Tailwind CSS & Framer Motion',
    category: 'frontend',
    proficiency: 'Advanced',
    level: 94,
    badgeColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    desc: 'Utility-first styling systems, responsive multi-device layouts, dark/light theme switching, and glassmorphism styling.',
    tags: ['Framer Motion', 'Glassmorphism', 'Responsive Design', 'CSS Animations']
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    proficiency: 'Proficient',
    level: 88,
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    desc: 'Asynchronous event loops, Web Audio API, Promises, async/await, DOM manipulations, closures, and modern ESNext features.',
    tags: ['Web Audio', 'Async/Await', 'DOM APIs', 'Event Loop']
  },
  // AI & Data Science
  {
    name: 'Generative AI & LLMs',
    category: 'ai-ds',
    proficiency: 'Specialized',
    level: 89,
    badgeColor: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20',
    desc: 'Large Language Model integrations, structured prompt engineering, Retrieval-Augmented Generation (RAG) pipelines, and Gemini API solutions.',
    tags: ['Prompt Engineering', 'RAG Pipelines', 'Gemini API', 'LLM Agents']
  },
  {
    name: 'Machine Learning Foundations',
    category: 'ai-ds',
    proficiency: 'Proficient',
    level: 82,
    badgeColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    desc: 'Supervised and unsupervised learning, linear & logistic regression, classification trees, and model evaluation metrics.',
    tags: ['Classification', 'Regression', 'Feature Engineering', 'Model Tuning']
  },
  {
    name: 'Data Analytics & EDA',
    category: 'ai-ds',
    proficiency: 'Proficient',
    level: 86,
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    desc: 'Exploratory Data Analysis (EDA), statistical pattern recognition, feature distribution analysis, and business dashboards.',
    tags: ['Exploratory Analysis', 'Data Cleaning', 'Visualization', 'Inference']
  },
  // Core CS
  {
    name: 'Data Structures & Algorithms',
    category: 'core-cs',
    proficiency: 'Core Competency',
    level: 90,
    badgeColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    desc: 'Arrays, Two-Pointers, Sliding Windows, Trees, Graphs, Dynamic Programming, and asymptotic runtime optimizations.',
    tags: ['DP & Recursion', 'Trees/Graphs', 'Time Complexity', 'Space Optim']
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'core-cs',
    proficiency: 'Core Competency',
    level: 92,
    badgeColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns, and clean decoupled code architecture.',
    tags: ['Inheritance', 'Polymorphism', 'Encapsulation', 'SOLID Principles']
  },
  {
    name: 'Database Management Systems (DBMS)',
    category: 'core-cs',
    proficiency: 'Core Competency',
    level: 87,
    badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    desc: 'ACID transactions, Normalization (1NF to BCNF), indexing mechanisms, ER diagramming, and concurrency control.',
    tags: ['ACID Rules', 'Normalization', 'ER Modeling', 'Transactions']
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  const handleTabChange = (id: string) => {
    audio.playClick();
    setActiveCategory(id);
  };

  return (
    <section id="skills" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-mono font-semibold">
          <Cpu className="w-3.5 h-3.5 text-neon-purple" />
          <span>Technical Architecture</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Technical{' '}
          <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(189,0,255,0.3)]">
            Competencies
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Core technical skill set spanning software development, artificial intelligence, and algorithmic theory.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              onMouseEnter={() => audio.playHover()}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.03]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Interactive3DCard
                maxTilt={10}
                glowColor="rgba(0, 240, 255, 0.2)"
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4"
              >
                <div className="space-y-3">
                  {/* Skill Title & Proficiency Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-lg text-white group-hover:text-neon-cyan transition-colors">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${skill.badgeColor}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Level Bar */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>Proficiency Score</span>
                    <span className="text-neon-cyan font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan shadow-[0_0_8px_#00f0ff]"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Interactive3DCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
