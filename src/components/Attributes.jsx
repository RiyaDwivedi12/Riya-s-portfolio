import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiTarget, FiCheck } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Attributes() {
  const { strengths, languages, careerGoal } = portfolioData;

  return (
    <section id="attributes" className="text-left w-full">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent mb-2">
          Personal Attributes
        </h3>
        <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
          Strengths & Goals
        </h4>
      </div>

      <div className="space-y-6">
        {/* Career Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="flex items-start space-x-4 relative z-10">
            <div className="p-3 bg-violet-500/10 text-violet-500 rounded-xl">
              <FiTarget className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-base text-slate-900 dark:text-white">
                Career Goal
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-350 leading-relaxed italic">
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
          className="p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="flex items-start space-x-4 relative z-10">
            <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl">
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
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono bg-sky-500/10 text-sky-650 dark:text-sky-400 border border-sky-500/10"
                  >
                    <FiCheck className="w-3.5 h-3.5 text-sky-500" />
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
          className="p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="flex items-start space-x-4 relative z-10">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
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
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono bg-emerald-500/10 text-emerald-650 dark:text-emerald-400 border border-emerald-500/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
