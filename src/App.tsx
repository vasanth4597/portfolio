import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import DsaJourney from './components/DsaJourney';
import GithubDashboard from './components/GithubDashboard';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Custom3DCursor from './components/Custom3DCursor';
import Background3DSpace from './components/3d/Background3DSpace';
import Hero3DCanvas from './components/3d/Hero3DCanvas';
import InteractiveTerminal from './components/InteractiveTerminal';
import LoadingScreen from './components/LoadingScreen';
import { Terminal } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-neon-blue/30 selection:text-neon-cyan overflow-x-hidden">
      
      {/* Initial System Boot Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Interactive 3D Three.js Starfield & Nebula Background */}
      <Background3DSpace />

      {/* 3D Model — fixed, positioned behind right-side photo area */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '4%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div style={{ pointerEvents: 'auto', opacity: 0.65 }}>
          <Hero3DCanvas />
        </div>
      </div>

      {/* Custom Cyber 3D Cursor */}
      <Custom3DCursor />

      {/* Navigation Shell */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Interactive Cyber CLI Terminal Playground Section */}
        <section id="terminal" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive CLI Station</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Developer{' '}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,209,0.3)]">
                Playground
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Execute live commands, explore my background, or run <code className="text-neon-cyan font-bold bg-white/5 px-1.5 py-0.5 rounded">sudo hire</code> for a special surprise.
            </p>
          </div>

          <InteractiveTerminal />
        </section>

        <Experience />
        <Achievements />
        <DsaJourney />
        <GithubDashboard />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer & Utilities */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
