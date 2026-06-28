import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full glassmorphism text-slate-800 dark:text-slate-100 hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-sky-500/20 border border-slate-200 dark:border-slate-700/50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? (
          <FiMoon className="w-6 h-6 text-sky-600" />
        ) : (
          <FiSun className="w-6 h-6 text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
