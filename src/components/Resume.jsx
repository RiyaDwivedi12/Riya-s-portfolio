import { motion } from 'framer-motion';
import { FiDownload, FiPrinter, FiFileText } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { personalInfo } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
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
            min-height: 297mm;
            margin: 0 !important;
            padding: 1cm 1.2cm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
            font-size: 9.5px !important;
            line-height: 1.35 !important;
            overflow: visible !important;
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
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Curriculum Vitae
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Live preview of my resume. Print, export as PDF, or view the pre-compiled document.
          </p>
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
            {/* The white paper container - Clean Academic Standard */}
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
                <div className="text-[11px] text-slate-800 space-x-3 flex justify-center items-center flex-wrap mt-2">
                  <span>{personalInfo.location}</span>
                  <span className="text-slate-400">|</span>
                  <span>{personalInfo.phone || '+91 9640835030'}</span>
                  <span className="text-slate-400">|</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 underline hover:text-blue-900">
                    {personalInfo.email}
                  </a>
                </div>
                
                {/* Links */}
                <div className="text-[11px] text-slate-800 space-x-3 flex justify-center items-center mt-1">
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    LinkedIn
                  </a>
                  <span className="text-slate-400">|</span>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    GitHub
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
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                      <span>Senior Secondary (12th) – 85%</span>
                      <span>2021–2023</span>
                    </div>
                    <div className="text-[11px] text-slate-800 italic">
                      Children Valley Senior Secondary School
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                      <span>Secondary School (10th) – 89%</span>
                      <span>2019–2021</span>
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
                
                <div className="space-y-1.5 text-[11px] text-slate-900">
                  <div><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Tailwind CSS</div>
                  <div><strong>Backend:</strong> Node.js, Express.js, REST APIs</div>
                  <div><strong>Database:</strong> MongoDB</div>
                  <div><strong>Developer Tools & Platforms:</strong> Git, GitHub, VS Code, Vercel, Render, Cloudinary</div>
                </div>
              </div>

              {/* Section: PROJECTS */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  PROJECTS
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                
                <div className="space-y-3">
                  {/* Khelza Project */}
                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                      <span>Khelza – Sports Matchmaking & Athlete Networking App</span>
                      <span>React Native • Convex</span>
                    </div>
                    <p className="text-[11px] text-slate-700 italic mb-1">
                      Devoic Skilltech Consultancy Pvt. Ltd. (Internship)
                    </p>
                    <ul className="list-disc pl-5 text-[11px] space-y-1 text-slate-900">
                      <li>Engineered multi-screen mobile sports platform connecting players and organizing matches in real time.</li>
                      <li>Integrated interactive map geolocation with Leaflet / OpenStreetMap for ground location pins and match discovery.</li>
                      <li>Built real-time match synchronization, spot reservation, attendee tracking, and athlete social networking with Convex.</li>
                    </ul>
                  </div>

                  {/* Yarn Art Store */}
                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                      <span>Yarn Art Store – Full Stack E-Commerce Platform</span>
                      <span>MERN Stack</span>
                    </div>
                    <p className="text-[11px] text-slate-700 italic mb-1">
                      Independent Project • Live at yarn-art-store.vercel.app
                    </p>
                    <ul className="list-disc pl-5 text-[11px] space-y-1 text-slate-900">
                      <li>Developed complete e-commerce website for yarn and handmade goods with search, categories, and shopping cart.</li>
                      <li>Designed secure REST APIs with Node.js and Express; modeled product, user, and order schemas in MongoDB.</li>
                      <li>Implemented Cloudinary integration for cloud-based image storage and optimization with responsive frontend.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: EXPERIENCE */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  EXPERIENCE
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                
                <div>
                  <div className="flex justify-between items-baseline text-[11px] font-bold text-slate-900">
                    <span>Software Developer Intern – Devoic Skilltech Consultancy Pvt. Ltd.</span>
                    <span>Present</span>
                  </div>
                  <ul className="list-disc pl-5 text-[11px] space-y-1 text-slate-900 mt-1">
                    <li>Actively developing the Khelza mobile sports networking application using React Native and Convex backend.</li>
                    <li>Implementing authentication, match discovery algorithms, map location services, and responsive UI.</li>
                  </ul>
                </div>
              </div>

              {/* Section: STRENGTHS & LANGUAGES */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-[#002060] uppercase tracking-wide">
                  CORE STRENGTHS & LANGUAGES
                </h3>
                <div className="border-b border-[#002060] pb-0.5 mb-2" />
                <p className="text-[11px] text-slate-900">
                  <strong>Languages:</strong> English, Hindi, Punjabi &nbsp;|&nbsp; <strong>Strengths:</strong> Problem Solving, Quick Learner, Team Player
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
                className="px-6 py-3.5 rounded-full text-xs font-bold bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/25 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer w-full"
              >
                <FiPrinter className="w-4 h-4" /> Print / Save as PDF
              </button>

              {/* PDF Resume Link */}
              <a
                href={personalInfo.resumeUrl}
                download="Riya_Dwivedi_Resume.pdf"
                className="px-6 py-3.5 rounded-full text-xs font-bold border-2 border-coral-500 text-slate-800 dark:text-white hover:bg-coral-500/10 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer w-full"
              >
                <FiDownload className="w-4 h-4" /> Download PDF Resume
              </a>

              {/* View/Preview Resume */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs font-bold bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 hover:border-coral-500/40 text-slate-700 dark:text-slate-300 hover:text-coral-600 dark:hover:text-white hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 w-full cursor-pointer shadow-sm"
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
