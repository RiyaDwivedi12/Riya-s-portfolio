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
    <footer className="bg-slate-100 dark:bg-slate-950/60 border-t border-slate-200/50 dark:border-slate-800/50 py-12 relative">
      {/* Scroll to Top Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:scale-110 hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-lg transition-all text-slate-500 hover:text-sky-500 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand/Initials */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-violet-600 text-white flex items-center justify-center font-extrabold text-sm select-none">
            RD
          </span>
          <span className="font-sans font-bold text-lg tracking-wider text-slate-800 dark:text-slate-100">
            Riya Dwivedi
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Projects</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Timeline</a>
          {portfolioData.certifications && portfolioData.certifications.length > 0 && (
            <a href="#certifications" onClick={(e) => handleLinkClick(e, '#certifications')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Certifications</a>
          )}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-slate-500 hover:text-sky-500 text-sm font-medium transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-sky-500 hover:border-sky-500 transition-all text-slate-600 dark:text-slate-400"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-sky-500 hover:border-sky-500 transition-all text-slate-600 dark:text-slate-400"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-sky-500 hover:border-sky-500 transition-all text-slate-600 dark:text-slate-400"
            aria-label="Send email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-slate-400 dark:text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Riya Dwivedi. All rights reserved. Designed with premium UX principles.
        </p>
      </div>
    </footer>
  );
}
