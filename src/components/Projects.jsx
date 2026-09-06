import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiSmartphone, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight, 
  FiLayers, 
  FiCheckCircle,
  FiGlobe
} from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

// Map project IDs to custom illustrative or screenshot-based visuals
const ProjectVisual = ({ project, id, onOpenGallery }) => {
  // Mobile app with real screenshots (Khelza)
  if (id === 'khelza-sports' || id === 'sports-finder' || project.screenshots) {
    const screens = project.screenshots || [];
    const previewImage = screens[0]?.src || '/projects/khelza/home.png';

    return (
      <div 
        onClick={() => onOpenGallery && onOpenGallery(project)}
        className="w-full h-full bg-gradient-to-tr from-slate-900 via-navy-900 to-coral-950/30 flex items-center justify-center relative p-4 overflow-hidden group cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`View screenshots for ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onOpenGallery && onOpenGallery(project);
          }
        }}
      >
        {/* Dynamic ambient background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ff5e4d_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-coral-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Smartphone Mockup Preview */}
        <div className="relative w-32 sm:w-36 h-48 sm:h-52 rounded-[22px] p-1.5 bg-gradient-to-b from-slate-700 via-navy-800 to-navy-950 shadow-2xl border border-navy-700/80 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 flex flex-col">
          {/* Dynamic Island / Speaker */}
          <div className="h-2 w-full flex items-center justify-center py-0.5">
            <div className="w-9 h-1 bg-navy-900 rounded-full" />
          </div>

          {/* Screen Display */}
          <div className="relative flex-1 rounded-[14px] overflow-hidden bg-navy-950">
            <img
              src={previewImage}
              alt="Khelza Sports App Preview"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            
            {/* Hover overlay prompt */}
            <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-2 text-center">
              <FiSmartphone className="w-6 h-6 text-coral-400 mb-1 animate-bounce" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-300">Click to Explore</span>
              <span className="text-[9px] text-slate-300">10+ App Screens</span>
            </div>
          </div>

          {/* Bottom Home Bar */}
          <div className="h-1.5 w-full flex items-center justify-center">
            <div className="w-8 h-0.5 bg-slate-600 rounded-full" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex items-center space-x-1.5 bg-navy-900/90 border border-coral-500/40 text-coral-400 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold shadow-lg backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-coral-400 animate-pulse" />
          <span>10+ Screens</span>
        </div>

        <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 bg-navy-950/90 border border-navy-700/80 text-white px-3 py-1 rounded-xl text-[11px] font-mono font-bold shadow-md backdrop-blur-md">
          <span className="text-coral-400">⚡</span>
          <span>Khelza</span>
        </div>
      </div>
    );
  }

  // E-Commerce Web App (Yarn Art Store) - Live First Page & Click to Visit Website
  if (id === 'yarn-art-store') {
    const handleOpenWebsite = () => {
      window.open("https://yarn-art-store.vercel.app", "_blank", "noopener,noreferrer");
    };

    return (
      <div 
        onClick={handleOpenWebsite}
        className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden group cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Visit Yarn Art Store live website"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpenWebsite();
        }}
      >
        {/* Browser Top Bar Mockup */}
        <div className="w-full bg-slate-950 border-b border-slate-800 px-3 py-2 flex items-center space-x-2 z-10 select-none">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 max-w-[200px] mx-auto bg-slate-900 rounded-md px-2 py-0.5 text-[10px] font-mono text-slate-400 truncate flex items-center justify-center space-x-1">
            <span className="text-coral-400">🔒</span>
            <span>yarn-art-store.vercel.app</span>
          </div>
        </div>

        {/* Live Website Homepage Screenshot */}
        <div className="relative flex-1 w-full overflow-hidden bg-slate-950">
          <img 
            src="/yarn_art.png" 
            alt="Yarn Art Store Live Website" 
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/projects/khelza/home.png";
            }}
          />

          {/* Interactive Click Overlay */}
          <div className="absolute inset-0 bg-navy-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
            <FiGlobe className="w-8 h-8 text-coral-400 mb-2 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-white">Visit Live Store</span>
            <span className="text-[10px] text-coral-300 font-mono mt-0.5">yarn-art-store.vercel.app ↗</span>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-10 right-3 flex items-center space-x-1.5 bg-navy-950/90 border border-coral-500/40 text-coral-400 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold shadow-lg backdrop-blur-md z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-coral-400 animate-pulse" />
          <span>Live Store</span>
        </div>
      </div>
    );
  }

  return <div className="w-full h-full bg-slate-200 dark:bg-navy-900" />;
};

const CATEGORIES = ["All", "React Native", "MERN Stack"];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState("All");
  const [selectedGalleryProject, setSelectedGalleryProject] = useState(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(project => project.category === activeTab);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedGalleryProject) return;

      if (e.key === 'Escape') {
        setSelectedGalleryProject(null);
      } else if (e.key === 'ArrowRight') {
        setActiveScreenIndex((prev) => 
          (prev + 1) % (selectedGalleryProject.screenshots?.length || 1)
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveScreenIndex((prev) => 
          prev === 0 ? (selectedGalleryProject.screenshots?.length || 1) - 1 : prev - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryProject]);

  const openGallery = (project, screenIndex = 0) => {
    setSelectedGalleryProject(project);
    setActiveScreenIndex(screenIndex);
  };

  const closeGallery = () => {
    setSelectedGalleryProject(null);
  };

  const currentScreens = selectedGalleryProject?.screenshots || [];
  const currentScreen = currentScreens[activeScreenIndex] || null;

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Real-world applications spanning cross-platform mobile systems and full-stack web platforms.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-coral-500 text-white shadow-lg shadow-coral-500/30 scale-105"
                  : "bg-white/80 dark:bg-navy-900/70 border border-slate-200 dark:border-navy-800 text-slate-600 dark:text-slate-400 hover:text-coral-500 dark:hover:text-white hover:border-coral-500/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col rounded-3xl overflow-hidden bg-white/90 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-lg group hover:border-coral-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left"
              >
                {/* Visual Top Area */}
                <div className="h-64 overflow-hidden relative border-b border-slate-200 dark:border-navy-800 bg-slate-900">
                  <ProjectVisual 
                    project={project} 
                    id={project.id} 
                    onOpenGallery={openGallery}
                  />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 dark:bg-navy-950/90 border border-slate-200 dark:border-navy-800 text-slate-800 dark:text-white px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.badge && (
                    <span className="absolute bottom-4 right-4 text-[10px] font-mono font-semibold uppercase tracking-wider bg-coral-500 text-white px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Details Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">
                      {project.title}
                    </h4>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-coral-600 dark:text-coral-400/90 mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.features && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400">
                        Key Features:
                      </p>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                            <span className="text-coral-500 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-950 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-navy-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Call-to-actions */}
                  <div className="flex items-center flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-navy-800">
                    {/* View Screenshots Gallery Button for Khelza */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        onClick={() => openGallery(project, 0)}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <FiSmartphone className="w-4 h-4" /> Explore App Screens (10+ Screens)
                      </button>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-800 dark:text-white border border-slate-300 dark:border-navy-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                      >
                        <FiGithub className="w-4 h-4" /> Code
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                      >
                        <FiExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}

                    {!project.github && !project.live && (
                      <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-navy-800 ml-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral-500 animate-pulse" />
                        <span>Private Client Repo</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Mobile Device Showcase Modal (No duplicate time!) */}
      <AnimatePresence>
        {selectedGalleryProject && currentScreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-navy-900 border border-navy-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 sm:px-8 border-b border-navy-800 bg-navy-950">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-coral-500/10 text-coral-400 rounded-xl border border-coral-500/20">
                    <FiSmartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-lg text-white font-sans">
                        {selectedGalleryProject.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold bg-coral-500/20 text-coral-400 px-2.5 py-0.5 rounded-full border border-coral-500/30">
                        Screen {activeScreenIndex + 1} of {currentScreens.length}+
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Devoic Skilltech Consultancy Pvt. Ltd. • React Native & Convex • 10+ Screen Architecture
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeGallery}
                  className="p-2.5 rounded-full bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 gap-8 items-center bg-navy-900">
                
                {/* Left: Device Mockup Phone Frame */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-[270px] sm:w-[290px] h-[540px] sm:h-[580px] bg-navy-950 rounded-[44px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-[4px] border-navy-700/80 ring-1 ring-coral-500/30 flex flex-col relative group">
                    
                    {/* Minimal Top Speaker / Camera Notch (Removed duplicate time bar) */}
                    <div className="w-full flex justify-center items-center pt-1 pb-2 select-none">
                      <div className="w-12 h-1 bg-navy-800 rounded-full" />
                    </div>

                    {/* Screenshot Image Container */}
                    <div className="relative flex-1 w-full rounded-[28px] overflow-hidden bg-navy-950 border border-navy-800">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentScreen.src}
                          src={currentScreen.src}
                          alt={currentScreen.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full object-cover object-top"
                        />
                      </AnimatePresence>

                      {/* Screen Navigation Arrows (over phone screen) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveScreenIndex((prev) => 
                            prev === 0 ? currentScreens.length - 1 : prev - 1
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-950/80 hover:bg-navy-900 text-white border border-navy-700 shadow-lg backdrop-blur-sm cursor-pointer transition-all hover:scale-110 active:scale-95"
                        aria-label="Previous screen"
                      >
                        <FiChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveScreenIndex((prev) => 
                            (prev + 1) % currentScreens.length
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-950/80 hover:bg-navy-900 text-white border border-navy-700 shadow-lg backdrop-blur-sm cursor-pointer transition-all hover:scale-110 active:scale-95"
                        aria-label="Next screen"
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="h-3 w-full flex items-center justify-center pt-1">
                      <div className="w-24 h-1 bg-slate-600 rounded-full" />
                    </div>
                  </div>

                  {/* Micro hint */}
                  <span className="text-[11px] text-slate-500 font-mono mt-3">
                    Use ← and → arrow keys to flip screens
                  </span>
                </div>

                {/* Right: Screen Details & Thumbnail Selector */}
                <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                  {/* Active Screen Information */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-coral-500/20 text-coral-400 border border-coral-500/30">
                        {currentScreen.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Screen {activeScreenIndex + 1} of {currentScreens.length}+
                      </span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                      {currentScreen.title}
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {currentScreen.caption}
                    </p>
                  </div>

                  {/* Architecture & Implementation Highlights */}
                  <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2.5">
                    <h5 className="text-xs font-bold font-mono text-coral-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FiLayers className="text-coral-400" />
                      Key Development Contributions
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-coral-400 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span><strong>Interactive Map Geolocation:</strong> Integrated Leaflet / OpenStreetMap for live venue location pin selection and nearby player radius match finder.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-coral-400 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span><strong>Convex Real-Time Backend:</strong> Instant match synchronization, spot reservation counters, and attendee lists without manual polling.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle className="text-coral-400 w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span><strong>Athlete Profiles & Social Networking:</strong> Match history, sports categorization (Football, Cricket, Basketball, Badminton), follower system, and dark mode UI.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thumbnails Navigation Strip */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-mono font-bold uppercase text-slate-400">
                      Jump to Screen:
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {currentScreens.map((screen, idx) => (
                        <button
                          key={screen.id}
                          onClick={() => setActiveScreenIndex(idx)}
                          className={`flex flex-col items-center p-1 rounded-xl transition-all cursor-pointer border ${
                            activeScreenIndex === idx
                              ? "border-coral-500 bg-coral-500/10 ring-2 ring-coral-500/50 scale-105"
                              : "border-navy-800 bg-navy-950 hover:border-navy-700 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <div className="w-full h-16 rounded-lg overflow-hidden bg-navy-900 mb-1">
                            <img
                              src={screen.src}
                              alt={screen.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <span className="text-[9px] font-mono truncate w-full text-center text-slate-300">
                            {screen.title.split(' ')[0]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                    <button
                      onClick={() => setActiveScreenIndex((prev) => 
                        prev === 0 ? currentScreens.length - 1 : prev - 1
                      )}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 text-white flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
                    >
                      <FiChevronLeft className="w-4 h-4" /> Previous Screen
                    </button>

                    <button
                      onClick={() => setActiveScreenIndex((prev) => 
                        (prev + 1) % currentScreens.length
                      )}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-coral-500 hover:bg-coral-600 text-white flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
                    >
                      Next Screen <FiChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
