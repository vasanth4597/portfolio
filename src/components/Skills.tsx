import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, LayoutTemplate, BrainCircuit, Database, Sparkles } from 'lucide-react';

const categories = [
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'frontend', label: 'Frontend', icon: LayoutTemplate },
  { id: 'ai-ds', label: 'AI & Data Science', icon: BrainCircuit },
  { id: 'core-cs', label: 'Core CS', icon: Database },
];

interface SkillItem {
  name: string;
  proficiency: 'Advanced' | 'Proficient' | 'Specialized' | 'Core Competency';
  badgeColor: string;
  desc: string;
  tags: string[];
}

const skillsData: Record<string, SkillItem[]> = {
  programming: [
    {
      name: 'Java',
      proficiency: 'Advanced',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      desc: 'Strong object-oriented architecture, Collections framework, multithreading, and memory-efficient algorithmic implementations.',
      tags: ['OOP Core', 'Collections', 'Multithreading', 'Generics']
    },
    {
      name: 'Python',
      proficiency: 'Proficient',
      badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
      desc: 'Data analysis scripting, NumPy arrays, Pandas DataFrames, Scikit-learn models, and automation workflows.',
      tags: ['NumPy', 'Pandas', 'Scikit-learn', 'Automation']
    },
    {
      name: 'SQL',
      proficiency: 'Proficient',
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      desc: 'Relational database schema modeling, complex joins, subqueries, grouping aggregations, and query optimization.',
      tags: ['PostgreSQL', 'MySQL', 'Schema Design', 'Indexing']
    },
  ],
  frontend: [
    {
      name: 'React.js',
      proficiency: 'Advanced',
      badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      desc: 'Modern SPA development, custom hooks, context state management, component lifecycle patterns, and performant virtual DOM rendering.',
      tags: ['Hooks', 'Context API', 'Component Lifecycle', 'Virtual DOM']
    },
    {
      name: 'Tailwind CSS',
      proficiency: 'Advanced',
      badgeColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
      desc: 'Utility-first styling systems, responsive multi-device layouts, dark/light theme switching, and glassmorphism styling.',
      tags: ['Responsive UI', 'Theme System', 'Glassmorphism', 'Flex/Grid']
    },
    {
      name: 'JavaScript (ES6+)',
      proficiency: 'Proficient',
      badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      desc: 'Asynchronous event loops, Promises, async/await, DOM manipulations, closures, and modern ESNext features.',
      tags: ['Async/Await', 'DOM APIs', 'Event Loop', 'Closures']
    },
    {
      name: 'HTML5 & CSS3',
      proficiency: 'Advanced',
      badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      desc: 'Semantic web architecture, accessible markup (ARIA), modern CSS Grid, Flexbox, custom CSS properties, and smooth keyframe animations.',
      tags: ['Semantic HTML', 'CSS Grid', 'Keyframes', 'Accessibility']
    },
  ],
  'ai-ds': [
    {
      name: 'Generative AI & LLMs',
      proficiency: 'Specialized',
      badgeColor: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20',
      desc: 'Large Language Model integrations, structured prompt engineering, Retrieval-Augmented Generation (RAG) pipelines, and Gemini API solutions.',
      tags: ['Prompt Engineering', 'RAG Pipelines', 'Gemini API', 'LLM Agents']
    },
    {
      name: 'Machine Learning Foundations',
      proficiency: 'Proficient',
      badgeColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
      desc: 'Supervised and unsupervised learning, linear & logistic regression, classification trees, and model evaluation metrics.',
      tags: ['Classification', 'Regression', 'Feature Engineering', 'Model Tuning']
    },
    {
      name: 'Data Analytics & EDA',
      proficiency: 'Proficient',
      badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      desc: 'Exploratory Data Analysis (EDA), statistical pattern recognition, feature distribution analysis, and business dashboards.',
      tags: ['Exploratory Analysis', 'Data Cleaning', 'Visualization', 'Statistical Inference']
    },
  ],
  'core-cs': [
    {
      name: 'Data Structures & Algorithms',
      proficiency: 'Core Competency',
      badgeColor: 'text-neon-blue bg-neon-blue/10 border-neon-blue/20',
      desc: 'Algorithmic time-space complexity analysis (Big-O), dynamic programming, tree traversals, graphs, stacks, and recursion.',
      tags: ['Big-O Analysis', 'Dynamic Programming', 'Trees & Graphs', 'Sorting']
    },
    {
      name: 'Object-Oriented Programming (OOP)',
      proficiency: 'Core Competency',
      badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      desc: 'SOLID principles, polymorphism, encapsulation, inheritance, modular abstraction, and robust design patterns.',
      tags: ['Encapsulation', 'Polymorphism', 'Abstraction', 'SOLID']
    },
    {
      name: 'Database Management Systems (DBMS)',
      proficiency: 'Core Competency',
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      desc: 'Relational database theory, normalization (1NF-BCNF), ACID transaction properties, and concurrency control.',
      tags: ['Normalization', 'ACID Properties', 'Transactions', 'ER Modeling']
    },
    {
      name: 'Operating Systems & Architecture',
      proficiency: 'Core Competency',
      badgeColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
      desc: 'Process lifecycle scheduling, virtual memory management, CPU synchronization, deadlocks, and file systems.',
      tags: ['Process Scheduling', 'Virtual Memory', 'Threads', 'Deadlocks']
    },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('programming');

  return (
    <section id="skills" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-semibold uppercase tracking-wider mb-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Technical Stack</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Technical{" "}
          <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Skills & Competencies
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Comprehensive technical proficiencies across software development, AI systems, and core computer science disciplines.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold transition-all duration-300 focus:outline-none ${
                isActive 
                  ? 'text-white border-transparent' 
                  : 'text-slate-600 dark:text-slate-350 border border-slate-200 dark:border-white/10 hover:border-neon-purple/50 bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple -z-10 shadow-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-4.5 h-4.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
        <AnimatePresence mode="wait">
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-white/10 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-800 dark:text-white group-hover:text-neon-cyan transition-colors duration-200">
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${skill.badgeColor} shrink-0`}>
                    {skill.proficiency}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {skill.desc}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5 mt-6">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
