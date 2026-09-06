import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import profilePhoto from "../assets/farhan.jpeg";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="flex justify-center">
          <img src={profilePhoto} alt="Farhan Rahim" className="rounded-2xl w-72 h-72 object-cover shadow-2xl shadow-blue-900/20 dark:shadow-blue-900/40 border border-gray-200 dark:border-gray-800" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <p className="text-blue-500 font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{personalInfo.bio}</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I am currently completing my BS in Software Engineering at SZABIST, Islamabad, and I love turning ideas into fast, accessible, and visually polished interfaces.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-500"><AnimatedCounter value={6} suffix="+" /></p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Months Experience</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-500"><AnimatedCounter value={3} suffix="+" /></p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Built</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
