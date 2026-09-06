import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div initial={false} animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.4 }}>
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </motion.div>
    </motion.button>
  );
}
