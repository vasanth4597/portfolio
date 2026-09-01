import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Code, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

export default function ResumeSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    audio.playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#bd00ff', '#00ffd1', '#ff007a']
    });

    window.print();
  };

  return (
    <section id="resume" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Interactive{" "}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Resume
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Preview comprehensive academic, internship, and project background, or download a high-resolution printable copy.
        </p>
      </div>

      {/* PREVIEW CONTAINER */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Interactive3DCard
            maxTilt={8}
            glowColor="rgba(0, 240, 255, 0.3)"
            className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Looking for my CV?
              </h3>
              <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed">
                View the formatted document directly inside the app, or download a printable PDF copy for your engineering team.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start font-mono">
                <span className="text-[10px] bg-neon-blue/15 text-neon-cyan border border-neon-blue/30 px-2.5 py-0.5 rounded-full font-bold uppercase">A4 Format</span>
                <span className="text-[10px] bg-neon-purple/15 text-neon-purple border border-neon-purple/30 px-2.5 py-0.5 rounded-full font-bold uppercase">ATS Optimized</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => {
                  audio.playClick();
                  setIsOpen(true);
                }}
                onMouseEnter={() => audio.playHover()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 focus:outline-none shadow-lg"
              >
                <Eye className="w-4 h-4 text-neon-cyan" />
                View Resume
              </button>
              <button
                onClick={handleDownload}
                onMouseEnter={() => audio.playHover()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white font-semibold text-sm hover:opacity-95 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 focus:outline-none transform hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-white animate-bounce" />
                Download / Print
              </button>
            </div>
          </Interactive3DCard>
        </motion.div>
      </div>

      {/* RESUME A4 PREVIEW MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            
            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-10 my-8 max-h-[90vh] overflow-y-auto print:max-h-none print:p-0 print:m-0 print:shadow-none print:rounded-none"
            >
              {/* Actions Header - Hidden in Print */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 print:hidden">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Resume Document Preview</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200"
                    title="Download/Print"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 transition-colors duration-205"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* DOCUMENT BODY - A4 Resume formatting (Simulates A4 layout) */}
              <div id="resume-printable-area" className="space-y-8 font-sans print:space-y-6">
                
                {/* Header (Title, contacts) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b-2 border-slate-900">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">VASANTHARAJ</h1>
                    <p className="text-sm font-bold text-slate-600 tracking-wide">Artificial Intelligence & Data Science Undergraduate</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500" /> vasanth.ai1931@gmail.com</span>
                    <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-500" /> +91 93454 98983</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Vellore, Tamil Nadu, India</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-500" /> github.com/vasanth4597</span>
                  </div>
                </div>

                {/* Grid layout for columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Education, Experience, Skills */}
                  <div className="md:col-span-7 space-y-6">
                    
                    {/* Education */}
                    <div className="space-y-3">
                      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-slate-800" />
                        Education
                      </h2>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between font-bold text-slate-800 text-sm">
                            <span>B.Tech in Artificial Intelligence & Data Science</span>
                            <span>2023 - 2027</span>
                          </div>
                          <p className="text-xs text-slate-600 font-semibold">Annai Mira College of Engineering and Technology</p>
                          <p className="text-xs text-slate-500 font-medium">Cumulative CGPA: 8.21 / 10</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-3">
                      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-slate-800" />
                        Work Experience
                      </h2>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between font-bold text-slate-800 text-sm">
                            <span>Software Engineer Intern</span>
                            <span>June 2024 - July 2024</span>
                          </div>
                          <p className="text-xs text-slate-600 font-semibold">Mimber Academy | Remote</p>
                          <ul className="list-disc pl-4 text-xs text-slate-550 space-y-1 mt-1.5 font-normal">
                            <li>Developed front-end web layout modules using React and styling frameworks.</li>
                            <li>Coordinated with coding teams to review updates and refactor script codes.</li>
                            <li>Implemented local Git version control workflows for product deployments.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-3">
                      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-slate-800" />
                        Certifications & Simulations
                      </h2>
                      <div className="space-y-1.5 text-xs text-slate-700">
                        <div className="flex justify-between font-semibold">
                          <span>Google Cloud Cybersecurity Certificate</span>
                          <span className="text-slate-500">Google Cloud</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>GenAI Powered Data Analytics Simulation</span>
                          <span className="text-slate-500">Tata (Forage)</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Software Engineering Simulation</span>
                          <span className="text-slate-500">Wells Fargo</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Data Analytics Job Simulation</span>
                          <span className="text-slate-500">Deloitte Australia</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>AI in Action Job Simulation</span>
                          <span className="text-slate-500">Vista Equity Partners</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Projects & Tech skills */}
                  <div className="md:col-span-5 space-y-6">
                    
                    {/* Skills Summary */}
                    <div className="space-y-3">
                      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 flex items-center gap-1.5">
                        <Code className="w-4 h-4 text-slate-800" />
                        Technical Skills
                      </h2>
                      <div className="space-y-2 text-xs text-slate-700 font-medium">
                        <div>
                          <span className="font-bold text-slate-800 block text-[10px] uppercase">Programming</span>
                          <span>Java, Python, SQL</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 block text-[10px] uppercase">Frontend</span>
                          <span>React.js, Tailwind CSS, JavaScript, HTML5/CSS3</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 block text-[10px] uppercase">AI & Data Science</span>
                          <span>Generative AI, Machine Learning Basics, Data Analytics</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 block text-[10px] uppercase">Core CS</span>
                          <span>Data Structures & Algorithms, OOP, DBMS, OS</span>
                        </div>
                      </div>
                    </div>

                    {/* Projects summaries */}
                    <div className="space-y-3">
                      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 flex items-center gap-1.5">
                        <Code className="w-4 h-4 text-slate-800" />
                        Key Projects
                      </h2>
                      <div className="space-y-3.5">
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">ATS Resume Analyzer</h4>
                          <p className="text-xs text-slate-500 font-semibold">React, Gemini API, Python</p>
                          <p className="text-xs text-slate-600 mt-1 leading-normal">AI platform calculating resume ATS compatibility and keyword density matching.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">Fitness Tracker Dashboard</h4>
                          <p className="text-xs text-slate-500 font-semibold">React, Tailwind CSS, Framer Motion</p>
                          <p className="text-xs text-slate-600 mt-1 leading-normal">Web dashboard logs activity habits, calories, and goals with visual graphs.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">Price Comparison Scraper</h4>
                          <p className="text-xs text-slate-500 font-semibold">Next.js, MongoDB, Web Scraping</p>
                          <p className="text-xs text-slate-600 mt-1 leading-normal">Search aggregator scraping and comparing pricing across multiple storefronts.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
