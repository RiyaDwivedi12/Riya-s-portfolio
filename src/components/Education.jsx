import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="text-left w-full">
      {/* Title with Behance coral bar */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
            Education
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono pl-11">
          Academic Track & Qualifications
        </p>
      </div>

      {/* Timeline track */}
      <div className="relative pl-7 border-l-2 border-slate-200 dark:border-navy-800 space-y-10 py-2">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node with coral ring */}
            <div className="absolute -left-[38px] top-1.5 p-2 rounded-full bg-white dark:bg-navy-950 border-2 border-coral-500 text-coral-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_12px_rgba(255,94,77,0.4)]">
              <FiBookOpen className="w-3.5 h-3.5" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 space-y-3">
              
              {/* Header details */}
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-coral-600 dark:text-coral-400 font-mono">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{edu.duration}</span>
                </span>
                
                <h5 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">
                  {edu.degree}
                </h5>
                
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider font-mono">
                  {edu.institution}
                </p>
              </div>

              {/* CGPA / Marks badge */}
              <div className="pt-2">
                <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold font-mono bg-coral-500/10 text-coral-600 dark:text-coral-400 border border-coral-500/20">
                  {edu.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
