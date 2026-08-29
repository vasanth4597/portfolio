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

function App() {
  return (
    <div className="relative min-h-screen">


      {/* Navigation Shell */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
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
