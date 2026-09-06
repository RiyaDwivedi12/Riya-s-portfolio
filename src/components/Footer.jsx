import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-navy-950 border-t border-slate-200 dark:border-navy-800 py-14 relative text-slate-600 dark:text-slate-400 transition-colors duration-300">
      {/* Scroll to Top Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3.5 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 rounded-full hover:scale-110 hover:border-coral-500 shadow-lg transition-all text-coral-500 hover:text-coral-600 dark:hover:text-coral-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand/Initials */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="font-sans font-extrabold text-xl tracking-tight text-slate-900 dark:text-white select-none">
            Riya Dwivedi <span className="text-coral-500 font-black">.</span>
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm font-medium">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Projects</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Experience</a>
          <a href="#resume" onClick={(e) => handleLinkClick(e, '#resume')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Resume</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-coral-600 dark:hover:text-coral-400 transition-colors">Contact</a>
        </div>

        {/* Social Network Links */}
        <div className="flex space-x-6 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-coral-600 dark:hover:text-coral-400 transition-colors hover:scale-110 duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-coral-600 dark:hover:text-coral-400 transition-colors hover:scale-110 duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 dark:text-slate-400 hover:text-coral-600 dark:hover:text-coral-400 transition-colors hover:scale-110 duration-200"
            aria-label="Email Address"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom copyright line */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-500 font-mono border-t border-slate-200 dark:border-navy-800/80 pt-6 w-full max-w-md">
          <p>© {new Date().getFullYear()} Riya Dwivedi. All rights reserved.</p>
          <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-600">
            Crafted with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
