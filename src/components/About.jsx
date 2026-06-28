import { motion } from 'framer-motion';
import { FiUser, FiCode, FiCpu, FiAward } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const coreFocus = [
    {
      icon: <FiCode className="w-6 h-6 text-sky-500" />,
      title: "Frontend Engineering",
      desc: "Creating pixel-perfect, highly responsive interfaces using React, styled with Tailwind CSS, and optimized for maximum speed."
    },
    {
      icon: <FiCpu className="w-6 h-6 text-violet-500" />,
      title: "Robust Backends",
      desc: "Architecting scalable backend logic with Node.js and Express, supporting clean, modular, and REST-compliant endpoints."
    },
    {
      icon: <FiAward className="w-6 h-6 text-emerald-500" />,
      title: "Performance First",
      desc: "Ensuring lighting fast loads, seamless API structures, and optimized queries utilizing MongoDB database clusters."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
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
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            My Coding Journey & Objective
          </motion.h3>
        </div>

        {/* 2-Column Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Hand: Descriptive Details & Career Objective */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-900 dark:text-white">
                <FiUser className="w-5 h-5 text-sky-500" />
                <h4 className="font-bold text-lg">Who is Riya Dwivedi?</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Career Objective Box */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 rounded-2xl bg-gradient-to-r from-sky-500/5 to-violet-500/5 dark:from-sky-500/10 dark:to-violet-500/10 border-l-4 border-sky-500 dark:border-sky-400"
            >
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wider font-mono">
                Career Objective
              </h4>
              <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
                "{personalInfo.objective}"
              </p>
            </motion.div>
          </div>

          {/* Right Hand: Interactive Profile/Avatar Mockup Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-violet-500 rounded-3xl blur opacity-25 group-hover:opacity-45 transition duration-500" />
            
            {/* Visual Glassmorphic Profile Box */}
            <div className="relative glassmorphism-card rounded-3xl p-8 flex flex-col items-center text-center space-y-6">
              {/* Profile Pic Placeholder Wrapper */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-sky-500 to-violet-600 p-[3px] shadow-xl relative overflow-hidden">
                <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-2xl flex items-center justify-center">
                  <FiUser className="w-16 h-16 text-sky-400/80" />
                </div>
                {/* Visual Accent ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/10 dark:border-slate-800/20" />
              </div>

              {/* Tag Details */}
              <div className="space-y-2">
                <h4 className="font-bold text-xl text-slate-900 dark:text-white">{personalInfo.name}</h4>
                <p className="text-xs text-sky-500 dark:text-sky-400 font-mono tracking-wider">{personalInfo.title}</p>
                <p className="text-xs text-slate-400">Based in India • Open to Remote</p>
              </div>

              {/* Short stats strip */}
              <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/50 dark:border-slate-800/85">
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">B.Tech</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Degree</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-violet-500">2027</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Grad Year</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3-Card Value Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {coreFocus.map((focus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glassmorphism-card text-left flex flex-col space-y-4 group hover:-translate-y-2"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl w-fit transition-transform group-hover:scale-110">
                {focus.icon}
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {focus.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {focus.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
