import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="work-experience" className="text-left w-full">
      {/* Title with Behance coral bar */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
            Work Experience
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono pl-11">
          Career Trajectory & Internships
        </p>
      </div>

      {/* Timeline track */}
      <div className="relative pl-7 border-l-2 border-slate-200 dark:border-navy-800 space-y-10 py-2">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node with coral ring */}
            <div className="absolute -left-[38px] top-1.5 p-2 rounded-full bg-white dark:bg-navy-950 border-2 border-coral-500 text-coral-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_12px_rgba(255,94,77,0.4)]">
              <FiBriefcase className="w-3.5 h-3.5" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              
              {/* Header details */}
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-coral-600 dark:text-coral-400 font-mono">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{job.duration}</span>
                </span>
                
                <h5 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">
                  {job.role}
                </h5>
                
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider font-mono">
                  {job.company}
                </p>
              </div>

              {/* Bullet list of achievements/duties */}
              <ul className="space-y-2">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="mr-2 text-coral-500 font-bold">•</span>
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
