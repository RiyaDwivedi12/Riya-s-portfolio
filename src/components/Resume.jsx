import { motion } from 'framer-motion';
import { FiDownload, FiPrinter, FiFileText } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { personalInfo } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 px-4 sm:px-6 lg:px-8">
      {/* Inject print-specific styles locally */}
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          /* Hide all page components except the print sheet */
          body * {
            visibility: hidden;
          }
          #resume-print-area, #resume-print-area * {
            visibility: visible;
          }
          #resume-print-area {
            position: fixed;
            left: 0;
            top: 0;
            width: 210mm;
            height: 297mm;
            margin: 0 !important;
            padding: 1cm 1.2cm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
            font-size: 9.5px !important;
            line-height: 1.35 !important;
            overflow: hidden !important;
          }
          #resume-print-area h1 {
            font-size: 20px !important;
            margin-bottom: 2px !important;
          }
          #resume-print-area h3 {
            font-size: 8.5px !important;
            margin-bottom: 1px !important;
          }
          #resume-print-area .mb-5 {
            margin-bottom: 6px !important;
          }
          #resume-print-area .mb-6 {
            margin-bottom: 8px !important;
          }
          #resume-print-area .space-y-3 > * + * {
            margin-top: 4px !important;
          }
          #resume-print-area .space-y-1 > * + * {
            margin-top: 2px !important;
          }
          #resume-print-area ul {
            margin-top: 3px !important;
          }
          #resume-print-area li {
            margin-bottom: 1px !important;
          }
        }
      `}} />

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
            Curriculum Vitae
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Academic Style Resume Preview
          </motion.h3>
        </div>

        {/* Content split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Hand: Academic Resume Sheet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 w-full overflow-x-auto"
          >
            {/* The white paper container - Styled to look exactly like the user's uploaded image */}
            <div 
              id="resume-print-area"
              className="mx-auto min-w-[700px] max-w-[800px] bg-white text-black text-left shadow-2xl border border-slate-200 p-12 sm:p-16 font-serif relative"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              {/* Header Info */}
              <div className="text-center space-y-2 mb-6">
                <h1 className="text-3xl font-bold text-[#002060] tracking-wide uppercase">
                  {personalInfo.name}
                </h1>
                <p className="text-sm text-slate-700 font-semibold tracking-wide">
                  {personalInfo.title}
                </p>
                
                {/* Contact row */}
                <div className="text-[11px] text-slate-800 space-x-4 flex justify-center items-center flex-wrap mt-2">
                  <span>{personalInfo.location}</span>
                  <span className="text-slate-400">•</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 underline hover:text-blue-900">
                    {personalInfo.email}
                  </a>
                </div>
                
                {/* LinkedIn Link */}
                <div className="text-[11px] text-slate-800 flex justify-center items-center mt-1">
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    linkedin.com/in/riya-dwivedi-120a87350
                  </a>
                </div>
              </div>

              {/* Section: SUMMARY */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  SUMMARY
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                <p className="text-[11px] leading-relaxed text-slate-900">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Section: EDUCATION */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  EDUCATION
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                      <span>B.Tech – Computer Science Engineering</span>
                      <span>2023–2027</span>
                    </div>
                    <div className="text-[11px] text-slate-800 italic">
                      PCTE Group of Institutes, Ludhiana
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-900">
                      Class 12th – 85% (Senior Secondary)
                    </div>
                    <div className="text-[11px] text-slate-800 italic">
                      Children Valley Senior Secondary School
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-900">
                      Class 10th – 89% (Secondary)
                    </div>
                    <div className="text-[11px] text-slate-800 italic">
                      Sunrise Convent Senior Secondary School
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: TECHNICAL SKILLS */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  TECHNICAL SKILLS
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                
                <ul className="text-[11px] space-y-1 text-slate-900">
                  <li>
                    <span className="font-bold">Languages & Core:</span> HTML, CSS, JavaScript
                  </li>
                  <li>
                    <span className="font-bold">MERN Stack:</span> React.js, Node.js, Express.js, MongoDB
                  </li>
                  <li>
                    <span className="font-bold">Tools:</span> Git & GitHub, Vercel, Render
                  </li>
                  <li>
                    <span className="font-bold">Specializations:</span> Full Stack Development, Responsive Design
                  </li>
                </ul>
              </div>

              {/* Section: PROJECTS */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  PROJECTS
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                
                <div>
                  <div className="text-[11px] font-bold text-slate-900">
                    Yarn Art Store – Handmade Crafts & Learning Platform
                  </div>
                  <div className="text-[11px] text-slate-900 mb-1">
                    <span className="font-bold">Live Demo:</span>{' '}
                    <a 
                      href="https://yarn-art-store.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-700 underline hover:text-blue-900"
                    >
                      https://yarn-art-store.vercel.app
                    </a>
                  </div>
                  
                  <ul className="list-disc pl-5 text-[11px] space-y-1 text-slate-900">
                    <li>
                      Built a full-stack MERN application combining an e-commerce platform and an e-learning system for yarn art and DIY crafts.
                    </li>
                    <li>
                      Developed features including user authentication, product management, shopping cart, course enrollment, and admin dashboard using React.js, Node.js, Express.js, and MongoDB.
                    </li>
                    <li>
                      Implemented secure JWT authentication and deployed the project using Vercel and Render.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section: STRENGTHS */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  STRENGTHS
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                <p className="text-[11px] text-slate-900">
                  Quick Learner &nbsp;•&nbsp; Creative Thinking &nbsp;•&nbsp; Positive Attitude
                </p>
              </div>

              {/* Section: LANGUAGES */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  LANGUAGES
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                <p className="text-[11px] text-slate-900">
                  English &nbsp;•&nbsp; Hindi &nbsp;•&nbsp; Punjabi
                </p>
              </div>

              {/* Section: CAREER GOAL */}
              <div>
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  CAREER GOAL
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                <p className="text-[11px] text-slate-900">
                  Seeking internship opportunities in Frontend Development, MERN Stack Development, and Software Development.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Hand: Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-left space-y-6 lg:sticky lg:top-24"
          >
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              Looking for a physical copy?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              You can print this resume directly from your browser, save it as a PDF, or download the pre-compiled PDF document.
            </p>

            <div className="flex flex-col gap-3">
              {/* Native Print Action */}
              <button
                onClick={handlePrint}
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg hover:shadow-sky-500/20 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer w-full"
              >
                <FiPrinter className="w-4 h-4" /> Print / Save as PDF
              </button>

              {/* PDF Resume Link */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-6 py-3.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer w-full"
              >
                <FiDownload className="w-4 h-4" /> Download PDF Resume
              </a>

              {/* View/Preview Resume */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
                }}
                className="px-6 py-3.5 rounded-xl text-xs font-bold border border-sky-500/20 hover:border-sky-500/50 bg-sky-500/5 hover:bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                <FiFileText className="w-4 h-4" /> Open Original PDF
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
