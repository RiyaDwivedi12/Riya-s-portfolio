import { motion } from 'framer-motion';
import { FiUsers, FiCalendar } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map specific achievements to corresponding icons
const iconMap = {
  0: <FaTrophy className="w-6 h-6 text-amber-500" />,  // Hackathon
  1: <FaTrophy className="w-6 h-6 text-yellow-400" />, // Coding competition
  2: <FiUsers className="w-6 h-6 text-indigo-500" />    // leadership/GDSC
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
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
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
            Honors
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Achievements & Student Leadership
          </motion.h3>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-3xl glassmorphism-card text-left flex flex-col space-y-4 group relative hover:shadow-2xl"
            >
              {/* Top Details */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform">
                  {iconMap[idx] || <FaTrophy className="w-6 h-6 text-sky-500" />}
                </div>
                <span className="flex items-center space-x-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                  <FiCalendar className="w-3 h-3" />
                  <span>{ach.date}</span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-grow">
                <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {ach.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
