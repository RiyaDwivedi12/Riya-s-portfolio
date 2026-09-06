import { motion } from 'framer-motion';
import { FiUsers, FiCalendar } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map specific achievements to corresponding icons
const iconMap = {
  0: <FaTrophy className="w-6 h-6 text-coral-500" />,  // Hackathon
  1: <FaTrophy className="w-6 h-6 text-amber-500" />,  // Coding competition
  2: <FiUsers className="w-6 h-6 text-coral-500" />     // leadership/GDSC
};

export default function Achievements() {
  const { achievements } = portfolioData;

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
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Achievements & Leadership
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Recognitions in competitive programming, hackathons, and technical community building.
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-7 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl border border-coral-500/20 group-hover:scale-110 transition-transform">
                    {iconMap[idx] || <FaTrophy className="w-6 h-6 text-coral-500" />}
                  </div>
                  <span className="inline-flex items-center space-x-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
