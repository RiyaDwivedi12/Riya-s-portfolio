import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 px-4 sm:px-6 lg:px-8">
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
            Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Licenses & Certifications
          </motion.h3>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-3xl glassmorphism-card text-left flex flex-col space-y-4 group relative hover:shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-violet-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-start justify-between relative z-10">
                <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl">
                  <FiAward className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                  {cert.date}
                </span>
              </div>

              <div className="space-y-1 relative z-10 flex-grow">
                <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {cert.issuer}
                </p>
              </div>

              {/* View Credentials Button */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 relative z-10">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-sky-500 dark:text-sky-400 hover:text-sky-650 dark:hover:text-sky-300 transition-colors group/btn"
                >
                  <span>Verify Credential</span>
                  <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
