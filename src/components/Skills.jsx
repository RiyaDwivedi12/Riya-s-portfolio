import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiVercel, SiCplusplus, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiCpu, FiLayout, FiCloud } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

// Map icon keys to custom React Icon elements
const iconMap = {
  html: <FaHtml5 className="w-7 h-7 text-[#E34F26]" />,
  css: <FaCss3Alt className="w-7 h-7 text-[#1572B6]" />,
  javascript: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
  react: <FaReact className="w-7 h-7 text-[#61DAFB]" />,
  node: <FaNodeJs className="w-7 h-7 text-[#339933]" />,
  express: <SiExpress className="w-7 h-7 text-slate-600 dark:text-slate-300" />,
  mongodb: <SiMongodb className="w-7 h-7 text-[#47A248]" />,
  git: <FaGitAlt className="w-7 h-7 text-[#F05032]" />,
  github: <FaGithub className="w-7 h-7 text-slate-900 dark:text-white" />,
  vscode: <VscVscode className="w-7 h-7 text-[#007ACC]" />,
  vercel: <SiVercel className="w-7 h-7 text-slate-900 dark:text-white" />,
  render: <FiCloud className="w-7 h-7 text-coral-500 animate-pulse" />,
  code: <FiCpu className="w-7 h-7 text-coral-500" />,
  cpp: <SiCplusplus className="w-7 h-7 text-[#00599C]" />,
  tailwind: <SiTailwindcss className="w-7 h-7 text-[#38B2AC]" />,
  responsive: <FiLayout className="w-7 h-7 text-coral-500" />,
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
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            My technical toolkit across frontend, backend, databases, and modern developer utilities.
          </p>
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
              className="p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-md hover:shadow-xl hover:border-coral-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-navy-800">
                <h4 className="font-bold text-lg text-slate-900 dark:text-white font-sans flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-coral-500" />
                  <span>{categoryGroup.category}</span>
                </h4>
                <span className="text-xs font-mono text-slate-500">
                  {categoryGroup.items.length} Technologies
                </span>
              </div>

              {/* Skills Items List */}
              <div className="space-y-5">
                {categoryGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    {/* Skill Meta Details */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-transform group-hover:scale-110 duration-200">
                          {iconMap[skill.iconKey] || <FiCpu className="w-7 h-7 text-coral-500" />}
                        </div>
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-coral-600 dark:text-coral-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-navy-950 rounded-full overflow-hidden p-[1px] border border-slate-300/60 dark:border-navy-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-coral-500 to-amber-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * sIdx, ease: "easeOut" }}
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
