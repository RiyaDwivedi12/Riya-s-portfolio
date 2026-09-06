import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Attributes from '../components/Attributes';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const showCertifications = portfolioData.certifications && portfolioData.certifications.length > 0;
  const showAchievements = portfolioData.achievements && portfolioData.achievements.length > 0;

  return (
    <div className="relative bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-300">
      {/* Behance-inspired ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-coral-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[140vh] left-[-10%] w-[35rem] h-[35rem] bg-coral-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[280vh] right-[-5%] w-[35rem] h-[35rem] bg-coral-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[420vh] left-[-5%] w-[35rem] h-[35rem] bg-coral-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[40vh] right-[10%] w-[30rem] h-[30rem] bg-coral-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Timeline Section container linking Experience & Education in a 2-column layout */}
      <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Experience />
        <Education />
      </div>

      {/* Personal Attributes & Core Strengths */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Attributes />
      </div>
      
      {showCertifications && <Certifications />}
      {showAchievements && <Achievements />}
      
      <Resume />
      <Contact />
    </div>
  );
}
