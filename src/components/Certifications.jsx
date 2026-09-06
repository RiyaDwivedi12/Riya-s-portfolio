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
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Licenses & Certifications
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Verified credentials and coursework across computer science and full-stack development.
          </p>
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
              className="p-7 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl border border-coral-500/20 group-hover:scale-110 transition-transform">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="pt-6 mt-4 border-t border-slate-200 dark:border-navy-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-coral-600 dark:text-coral-400 hover:text-coral-700 dark:hover:text-coral-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
