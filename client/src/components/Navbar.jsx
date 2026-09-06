import { motion } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Logo />
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a href={"#" + link.toLowerCase()} className="hover:text-blue-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
