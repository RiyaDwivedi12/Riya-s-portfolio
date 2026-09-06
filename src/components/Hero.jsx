import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { 
  SiHtml5, 
  SiCss as SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiCplusplus 
} from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

const TYPING_WORDS = [
  "Software Developer",
  "MERN Stack Specialist",
  "React Native Developer",
  "Frontend & API Engineer"
];

const TECH_ITEMS = [
  { name: 'HTML5', icon: SiHtml5, color: 'hover:text-[#E34F26]' },
  { name: 'CSS3', icon: SiCss3, color: 'hover:text-[#1572B6]' },
  { name: 'Javascript', icon: SiJavascript, color: 'hover:text-[#F7DF1E]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933]' },
  { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
  { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032]' },
  { name: 'Github', icon: SiGithub, color: 'hover:text-slate-900 dark:hover:text-white' },
  { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-[#47A248]' },
  { name: 'Express', icon: SiExpress, color: 'hover:text-slate-800 dark:hover:text-slate-300' },
  { name: 'C++', icon: SiCplusplus, color: 'hover:text-[#00599C]' },
];

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = TYPING_WORDS[wordIdx];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && subText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
      }, 500);
    } else {
      timer = setTimeout(() => {
        setSubText(
          isDeleting
            ? currentWord.substring(0, subText.length - 1)
            : currentWord.substring(0, subText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Column: Hello . I'm Riya + Titles & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* "Hello ." */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2"
            >
              Hello <span className="text-coral-500 font-black">.</span>
            </motion.div>

            {/* Coral horizontal line + "I'm Riya" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 sm:w-14 h-[3px] bg-coral-500 rounded-full" />
              <span className="text-xl sm:text-2xl font-bold text-coral-600 dark:text-coral-400">
                I'm Riya
              </span>
            </motion.div>

            {/* Dynamic Large Heading: Software Developer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Software Developer
              </h1>
              <div className="h-8 flex items-center text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400">
                <span className="text-coral-500 mr-2 font-mono">▸</span>
                <span className="text-slate-800 dark:text-slate-200">{subText}</span>
                <span className="w-2 h-5 bg-coral-500 ml-1 inline-block animate-pulse" />
              </div>
            </motion.div>

            {/* Tagline / Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              Passionate developer specializing in full-stack web applications, scalable REST APIs, and cross-platform mobile experiences with clean, modern UI.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Solid Coral: Got a project? */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-7 py-3.5 rounded-full text-sm font-bold bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                Got a project? <FiArrowRight className="w-4 h-4" />
              </a>

              {/* Coral Outline: My resume */}
              <a
                href={personalInfo.resumeUrl}
                download="Riya_Dwivedi_Resume.pdf"
                className="px-7 py-3.5 rounded-full text-sm font-bold border-2 border-coral-500 text-slate-800 dark:text-slate-200 hover:text-coral-600 dark:hover:text-white hover:bg-coral-500/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                My resume <FiDownload className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Glowing Circular Ring with Profile Picture & Angle Brackets */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10">
            <div className="relative">
              {/* Floating Wireframe Angle Bracket: < */}
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 text-5xl sm:text-6xl font-light font-mono text-coral-500/70 select-none pointer-events-none z-20 drop-shadow-[0_0_12px_rgba(255,94,77,0.5)]"
              >
                &lt;
              </motion.div>

              {/* Floating Wireframe Angle Bracket: > */}
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 text-5xl sm:text-6xl font-light font-mono text-coral-500/70 select-none pointer-events-none z-20 drop-shadow-[0_0_12px_rgba(255,94,77,0.5)]"
              >
                &gt;
              </motion.div>

              {/* Glowing Outer Halo */}
              <div className="absolute inset-0 rounded-full bg-coral-500/20 blur-2xl transform scale-110" />

              {/* Circular Avatar Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-coral-500 via-coral-400 to-amber-400 shadow-[0_0_50px_rgba(255,94,77,0.4)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-navy-900 border-4 border-white dark:border-navy-950">
                  <img
                    src="/riya_profile.png"
                    alt="Riya Dwivedi"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/projects/khelza/profile.png";
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-3 left-4 sm:-bottom-4 sm:left-6 px-4 py-2 rounded-full bg-white/95 dark:bg-navy-900/90 border border-slate-200 dark:border-coral-500/40 shadow-xl backdrop-blur-md flex items-center space-x-2 text-xs font-bold text-slate-800 dark:text-white z-20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-coral-500 animate-pulse" />
                <span>Open for Opportunities</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Tech Strip directly beneath Hero */}
      <div className="mt-16 w-full bg-white/80 dark:bg-navy-900/80 border-y border-slate-200/80 dark:border-navy-800/80 backdrop-blur-md py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-none py-2">
            {TECH_ITEMS.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className={`flex items-center space-x-2.5 text-slate-600 dark:text-slate-400 transition-colors duration-200 cursor-default shrink-0 group ${tech.color}`}
                >
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 group-hover:text-coral-600 dark:group-hover:text-white">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
