import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const TYPING_WORDS = [
  "MERN Stack Specialist",
  "React & Node.js Architect",
  "UI/UX Enthusiast",
  "Problem Solver"
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
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
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
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      {/* Dynamic Floating SVG Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating abstract decorative objects */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 opacity-20 blur-[2px] pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-16 h-16 rounded-full bg-gradient-to-tr from-violet-400 to-fuchsia-500 opacity-20 blur-[2px] pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Left Hand: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <span>Available for Opportunities</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 h-10 flex items-center"
            >
              <span className="text-slate-500 dark:text-slate-400 mr-2 font-light">a</span>
              <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent font-sans">
                {subText}
              </span>
              <span className="w-[3px] h-6 bg-sky-500 ml-1 animate-pulse" />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {personalInfo.tagline} Specialize in designing, writing, and deploying resilient backends alongside premium, pixel-perfect frontend experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg hover:shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              View Projects <FiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold glassmorphism border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              Contact Me <FiMessageSquare className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3.5 rounded-xl text-sm font-semibold border border-sky-500/30 hover:border-sky-500 text-sky-600 dark:text-sky-400 bg-sky-500/5 hover:bg-sky-500/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Resume <FiDownload className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Hand: Interactive Code Mockup Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="w-full relative select-none">
            {/* Glowing borders */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
            
            {/* Main Mockup Dashboard */}
            <div className="relative glassmorphism rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-6 overflow-hidden">
              {/* Window controls */}
              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs text-slate-400 font-mono">riya_dwivedi.js</div>
              </div>

              {/* IDE Code Content */}
              <div className="text-left font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="text-violet-500 dark:text-violet-400">const</span> developer = &#123;
                <div className="pl-4">
                  name: <span className="text-emerald-500">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-emerald-500">"{personalInfo.title}"</span>,
                </div>
                <div className="pl-4">
                  stack: [
                  <div className="pl-4 text-sky-500 dark:text-sky-400">
                    "MongoDB", "Express", "React", "Node.js"
                  </div>
                  ],
                </div>
                <div className="pl-4">
                  passion: <span className="text-emerald-500">"Sleek UI/UX & Clean APIs"</span>,
                </div>
                <div className="pl-4">
                  solvingProblems: <span className="text-amber-500">true</span>,
                </div>
                &#125;;
                
                <div className="mt-4 text-slate-400">
                  // Function demonstrating action
                </div>
                <span className="text-violet-500 dark:text-violet-400">function</span> <span className="text-blue-500">createImpact</span>() &#123;
                <div className="pl-4">
                  <span className="text-violet-500 dark:text-violet-400">return</span> developer.stack.map(tech =&gt; &#123;
                  <div className="pl-4">
                    deployAwesomeCode(tech);
                  </div>
                  &#125;);
                </div>
                &#125;
              </div>
            </div>

            {/* Float Badge overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 p-3 rounded-xl glassmorphism border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-2"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <span className="text-xs font-bold">95%</span>
              </div>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Fast Performance</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
