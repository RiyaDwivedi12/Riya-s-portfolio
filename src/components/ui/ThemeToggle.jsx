import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-white/90 dark:bg-navy-900/90 border border-slate-300 dark:border-navy-800 hover:border-coral-500 text-slate-800 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-coral-500/20 backdrop-blur-md cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? (
            <FiMoon className="w-5 h-5 text-coral-600" />
          ) : (
            <FiSun className="w-5 h-5 text-amber-400" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
