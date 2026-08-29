import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const roles = [
  "Web Developer",
  "Generative AI Enthusiast",
  "Problem Solver",
  "AI & Data Science Student"
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer: number;

    if (isDeleting) {
      // Deleting text
      timer = window.setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length - 1));
      }, 40);
    } else {
      // Typing text
      timer = window.setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length + 1));
      }, 80);
    }

    // Switch states
    if (!isDeleting && typedText === currentFullRole) {
      timer = window.setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#bd00ff', '#00ffd1'],
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 z-10"
    >


      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-neon-blue text-xs font-semibold tracking-wide uppercase"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>B.Tech AI & DS Student</span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              VASANTHARAJ
            </span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200"
          >
            Artificial Intelligence & Data Science Student
          </motion.h2>
        </div>

        {/* Subheadline (Typing Animation) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 h-8 flex justify-center items-center"
        >
          <span className="text-gradient-purple-cyan font-semibold">
            {typedText}
          </span>
          <span className="typing-caret h-5 w-0.5 bg-neon-blue ml-1 inline-block" />
        </motion.div>

        {/* Short Introduction */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal"
        >
          Passionate AI & Data Science undergraduate with strong foundations in Java, DSA, OOP, DBMS and Web Development. Building intelligent solutions and modern web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#resume"
            onClick={triggerConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white font-semibold text-sm hover:opacity-90 shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
          >
            <Download className="w-4 h-4 animate-bounce" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-sm hover:border-neon-blue/40 dark:hover:border-neon-blue/40 backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue font-semibold text-sm transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center space-x-6 pt-6"
        >
          <a
            href="https://github.com/vasanth4597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon-blue dark:text-slate-400 dark:hover:text-neon-blue transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vasantharaj-s45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon-blue dark:text-slate-400 dark:hover:text-neon-blue transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vasanth.ai1931@gmail.com"
            className="text-slate-500 hover:text-neon-blue dark:text-slate-400 dark:hover:text-neon-blue transition-colors duration-300"
            aria-label="Email Address"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
