import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Skills & Tools</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, i) => (
            <motion.div key={skill.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 dark:text-white font-medium">{skill.category}</span>
                <span className="text-blue-500 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: skill.level + "%" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-blue-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
