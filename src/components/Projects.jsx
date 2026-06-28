import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaApple, FaStickyNote, FaFutbol } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map project IDs to custom illustrative SVG graphics for premium visual feel
const ProjectVisual = ({ id }) => {
  if (id === 'yarn-art-store') {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-rose-500/20 via-pink-500/10 to-violet-500/20 flex flex-col items-center justify-center relative p-6">
        {/* Floating background dots */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec4899_0.5px,transparent_0.5px)] [background-size:16px_16px]" />
        
        {/* Animated Yarn Visual */}
        <div className="relative z-10 flex flex-col items-center space-y-2">
          {/* Custom SVG Yarn Art Ball with Knitting Needles */}
          <svg className="w-16 h-16 text-pink-500 animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Knitting Needle 1 */}
            <line x1="15" y1="85" x2="85" y2="15" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            <circle cx="85" cy="15" r="4" fill="#db2777" />
            
            {/* Knitting Needle 2 */}
            <line x1="85" y1="85" x2="15" y2="15" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            <circle cx="15" cy="15" r="4" fill="#e11d48" />

            {/* Yarn Ball Core Spherical Grooves */}
            <circle cx="50" cy="50" r="28" fill="#fbcfe8" stroke="#ec4899" strokeWidth="3" />
            <path d="M 32 38 C 40 45, 60 45, 68 38" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 28 50 C 38 60, 62 60, 72 50" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 32 62 C 40 55, 60 55, 68 62" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 22 C 42 35, 42 65, 50 78" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 60 25 C 55 35, 55 65, 60 75" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono text-pink-650 dark:text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full font-bold">YARN CRAFTS</span>
            <span className="text-[9px] font-mono text-slate-400 mt-1">E-Commerce & E-Learning</span>
          </div>
        </div>
      </div>
    );
  }
  if (id === 'fruit-freshness') {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-sky-500/20 flex flex-col items-center justify-center relative p-6">
        {/* Floating background grids */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Abstract CNN classification visual */}
        <div className="relative z-10 flex flex-col items-center space-y-3">
          <div className="flex space-x-2">
            <FaApple className="w-10 h-10 text-emerald-500 animate-pulse" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">FRESH: 98.6%</span>
              <span className="text-[9px] font-mono text-slate-400">Classifying...</span>
            </div>
          </div>
          {/* Mock Node Connections */}
          <svg className="w-24 h-8 text-emerald-500/40" viewBox="0 0 100 30">
            <circle cx="15" cy="15" r="3" fill="currentColor" />
            <circle cx="50" cy="5" r="3" fill="currentColor" />
            <circle cx="50" cy="15" r="3" fill="currentColor" />
            <circle cx="50" cy="25" r="3" fill="currentColor" />
            <circle cx="85" cy="15" r="3" fill="currentColor" />
            <line x1="15" y1="15" x2="50" y2="5" stroke="currentColor" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="50" y2="15" stroke="currentColor" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="5" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="15" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="25" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    );
  }
  if (id === 'notes-app') {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-rose-500/20 flex items-center justify-center relative p-6">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative z-10 flex flex-col items-center space-y-3">
          <FaStickyNote className="w-12 h-12 text-orange-500" />
          {/* Note representation lines */}
          <div className="w-24 space-y-1">
            <div className="h-1.5 w-full bg-orange-400/20 rounded" />
            <div className="h-1.5 w-3/4 bg-orange-400/20 rounded" />
            <div className="h-1.5 w-5/6 bg-orange-400/20 rounded" />
          </div>
        </div>
      </div>
    );
  }
  if (id === 'sports-finder') {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-violet-500/20 flex items-center justify-center relative p-6">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative z-10 flex flex-col items-center space-y-3">
          <div className="flex space-x-2 items-center">
            <FaFutbol className="w-12 h-12 text-sky-500 animate-spin-slow" />
            <div className="text-left font-mono">
              <div className="h-2 w-16 bg-sky-500/20 rounded mb-1" />
              <div className="h-1.5 w-12 bg-sky-500/10 rounded" />
            </div>
          </div>
          {/* Radar map concentric rings */}
          <div className="w-20 h-6 border border-sky-500/20 rounded-full relative flex items-center justify-center">
            <div className="w-10 h-3 border border-sky-500/20 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-sky-500 absolute animate-ping" />
          </div>
        </div>
      </div>
    );
  }
  return <div className="w-full h-full bg-slate-200 dark:bg-slate-800" />;
};

const CATEGORIES = ["All", "MERN Stack"];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent mb-2"
          >
            My Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Featured Engineering Projects
          </motion.h3>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col rounded-3xl overflow-hidden glassmorphism border border-slate-200/50 dark:border-slate-800/50 shadow-xl group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Top Area */}
                <div className="h-48 overflow-hidden relative border-b border-slate-200/50 dark:border-slate-800/80 bg-slate-900/10">
                  <ProjectVisual id={project.id} />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Details Content Area */}
                <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Call-to-actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <FiGithub className="w-4 h-4" /> Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-650 text-white shadow-md hover:shadow-sky-500/15 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
