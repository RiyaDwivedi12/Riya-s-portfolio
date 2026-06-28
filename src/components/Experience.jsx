import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="text-left w-full">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent mb-2">
          Career Path
        </h3>
        <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
          Work Experience
        </h4>
      </div>

      {/* Timeline track */}
      <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-12 py-2">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[37px] top-1 p-2 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-400 group-hover:text-sky-500 group-hover:border-sky-500 transition-all duration-300 shadow-md">
              <FiBriefcase className="w-4 h-4" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4">
              
              {/* Header details */}
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 font-mono">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{job.duration}</span>
                </span>
                
                <h5 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {job.role}
                </h5>
                
                <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-wider font-mono">
                  {job.company}
                </p>
              </div>

              {/* Bullet list of achievements/duties */}
              <ul className="space-y-2">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="mr-2 text-sky-500 dark:text-sky-400 font-bold">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
