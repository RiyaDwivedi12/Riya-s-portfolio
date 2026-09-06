import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiServer } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  const services = [
    {
      title: "Website Development",
      desc: "Architecting interactive, ultra-responsive MERN web applications with pixel-perfect layouts, modern component design, and smooth user interactions.",
      icon: FiGlobe,
    },
    {
      title: "App Development",
      desc: "Engineering full-featured mobile experiences with React Native, including the multi-screen Khelza sports community platform with map integration and instant scheduling.",
      icon: FiSmartphone,
    },
    {
      title: "Website Hosting & APIs",
      desc: "Designing resilient RESTful backend APIs in Node.js & Express, MongoDB data modeling, Cloudinary media storage, and zero-downtime deployment pipelines.",
      icon: FiServer,
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-coral-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Connected Timeline with Services */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative pl-8 sm:pl-10 space-y-10">
              {/* Vertical Coral Line */}
              <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-coral-500 via-coral-400 to-coral-600" />

              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Node Dot on vertical line */}
                    <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-navy-950 border-2 border-coral-500 flex items-center justify-center group-hover:scale-110 group-hover:border-coral-400 transition-transform shadow-[0_0_12px_rgba(255,94,77,0.4)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-coral-500 group-hover:bg-coral-400" />
                    </div>

                    <div className="p-5 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg bg-coral-500/10 text-coral-500">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: About me + Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-left"
            >
              {/* Heading with coral bar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  About me
                </h2>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                {personalInfo.bio}
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {personalInfo.objective}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
