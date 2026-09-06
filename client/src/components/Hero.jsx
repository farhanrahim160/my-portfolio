import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../data/portfolioData";
import GradientBlobs from "./GradientBlobs";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden transition-colors">
      <GradientBlobs />
      <div className="relative z-10">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-blue-500 font-medium mb-4">
          Hi, I am
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          {personalInfo.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 h-10">
          <TypeAnimation sequence={["Frontend Developer", 2000, "React.js Enthusiast", 2000, "UI/UX Focused Coder", 2000]} wrapper="span" speed={50} repeat={Infinity} />
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
          {personalInfo.tagline}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">View My Work</a>
          <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-blue-500 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-colors">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
