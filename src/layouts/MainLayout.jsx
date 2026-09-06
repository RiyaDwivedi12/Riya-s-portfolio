import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../hooks/useTheme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ui/ThemeToggle';

export default function MainLayout({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fast initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-clip bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950 text-white"
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            <div className="flex flex-col items-center space-y-6">
              {/* Logo / Initials */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-tr from-coral-500 to-amber-400 shadow-[0_0_50px_rgba(255,94,77,0.4)]"
              >
                <span className="text-3xl font-black tracking-wider font-sans select-none text-white">RD</span>
                <span className="absolute -inset-1.5 rounded-2xl border border-coral-400/40 animate-ping opacity-75" />
              </motion.div>

              {/* Developer Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center justify-center">
                  Riya Dwivedi <span className="text-coral-500 font-black text-2xl ml-0.5">.</span>
                </h1>
                <p className="text-xs text-slate-400 tracking-[0.2em] uppercase mt-2 font-mono">
                  Software Developer
                </p>
              </motion.div>

              {/* Preloader Loading Bar */}
              <div className="w-48 h-[3px] bg-navy-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-coral-500 to-amber-400"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-navy-950 transition-colors duration-300"
          >
            {/* Header / Navigation */}
            <Navbar theme={theme} />

            {/* Main Content */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Theme Toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
