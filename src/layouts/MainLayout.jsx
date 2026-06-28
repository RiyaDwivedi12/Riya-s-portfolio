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
    // Simulate loading for 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white"
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            <div className="flex flex-col items-center space-y-6">
              {/* Logo / Initials */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500 to-violet-600 shadow-[0_0_50px_rgba(14,165,233,0.3)]"
              >
                <span className="text-3xl font-extrabold tracking-wider font-sans select-none">RD</span>
                <span className="absolute -inset-1 rounded-2xl border border-sky-400/30 animate-ping opacity-75" />
              </motion.div>

              {/* Developer Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-xl font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Riya Dwivedi
                </h1>
                <p className="text-xs text-slate-500 tracking-[0.15em] uppercase mt-2 font-mono">
                  MERN Stack Developer
                </p>
              </motion.div>

              {/* Preloader Loading Bar */}
              <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-sky-400 to-violet-500"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950"
          >
            {/* Header / Navigation */}
            <Navbar theme={theme} />

            {/* Main Content */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Action Button */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
