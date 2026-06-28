import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Attributes from '../components/Attributes';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const showCertifications = portfolioData.certifications && portfolioData.certifications.length > 0;
  const showAchievements = portfolioData.achievements && portfolioData.achievements.length > 0;

  return (
    <div className="relative">
      {/* Decorative Blur Spheres for Premium Glass Feel */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/10 via-violet-600/5 to-transparent dark:from-sky-500/10 dark:via-violet-950/5 dark:to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[120vh] right-[-5%] w-[30rem] h-[30rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[250vh] left-[-5%] w-[30rem] h-[30rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[400vh] right-[-5%] w-[30rem] h-[30rem] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[50vh] left-[10%] w-[25rem] h-[25rem] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Timeline Section container linking Attributes & Education in a 2-column layout */}
      <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Attributes />
        <Education />
      </div>
      
      {showCertifications && <Certifications />}
      {showAchievements && <Achievements />}
      
      <Resume />
      <Contact />
    </div>
  );
}
