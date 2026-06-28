import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiVercel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiCpu, FiLayout, FiCloud } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

// Map icon keys to custom React Icon elements
const iconMap = {
  html: <FaHtml5 className="w-8 h-8 text-orange-500" />,
  css: <FaCss3Alt className="w-8 h-8 text-blue-500" />,
  javascript: <SiJavascript className="w-8 h-8 text-amber-400" />,
  react: <FaReact className="w-8 h-8 text-sky-400" />,
  node: <FaNodeJs className="w-8 h-8 text-emerald-500" />,
  express: <SiExpress className="w-8 h-8 text-slate-600 dark:text-slate-300" />,
  mongodb: <SiMongodb className="w-8 h-8 text-emerald-600" />,
  git: <FaGitAlt className="w-8 h-8 text-orange-600" />,
  github: <FaGithub className="w-8 h-8 text-slate-800 dark:text-slate-100" />,
  vscode: <VscVscode className="w-8 h-8 text-blue-500" />,
  vercel: <SiVercel className="w-8 h-8 text-slate-900 dark:text-white" />,
  render: <FiCloud className="w-8 h-8 text-indigo-500 animate-pulse" />,
  code: <FiCpu className="w-8 h-8 text-violet-500" />,
  responsive: <FiLayout className="w-8 h-8 text-sky-500" />,
};

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent mb-2"
          >
            My Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Core Skills & Tools
          </motion.h3>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((categoryGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-3xl glassmorphism border border-slate-200/50 dark:border-slate-800/50 shadow-xl"
            >
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200/50 dark:border-slate-800/80 text-left font-sans">
                {categoryGroup.category}
              </h4>

              {/* Skills Items List */}
              <div className="space-y-6">
                {categoryGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    {/* Skill Meta Details */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-transform group-hover:scale-115 group-hover:rotate-6 duration-300">
                          {iconMap[skill.iconKey]}
                        </div>
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-[6px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-sky-500 to-violet-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
