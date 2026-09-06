import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiTarget, FiCheck } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Attributes() {
  const { strengths, languages, careerGoal } = portfolioData;

  return (
    <section id="attributes" className="text-left w-full">
      {/* Title */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
            Personal Attributes & Goals
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono pl-11">
          Core Competencies & Vision
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Career Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="p-7 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col"
        >
          <div className="flex items-start space-x-4 relative z-10 flex-grow">
            <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl flex-shrink-0 border border-coral-500/20">
              <FiTarget className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-base text-slate-900 dark:text-white">
                Career Goal
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{careerGoal}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Strengths Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-7 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col"
        >
          <div className="flex items-start space-x-4 relative z-10 w-full flex-grow">
            <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl flex-shrink-0 border border-coral-500/20">
              <FiAward className="w-5 h-5" />
            </div>
            <div className="space-y-2 w-full">
              <h5 className="font-bold text-base text-slate-900 dark:text-white">
                Core Strengths
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {strengths.map((str, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800"
                  >
                    <FiCheck className="w-3.5 h-3.5 text-coral-500" />
                    <span>{str}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-7 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col"
        >
          <div className="flex items-start space-x-4 relative z-10 w-full flex-grow">
            <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl flex-shrink-0 border border-coral-500/20">
              <FiGlobe className="w-5 h-5" />
            </div>
            <div className="space-y-2 w-full">
              <h5 className="font-bold text-base text-slate-900 dark:text-white">
                Languages Spoken
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-500 animate-pulse" />
                    <span>{lang}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
