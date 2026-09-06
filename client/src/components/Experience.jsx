import { motion } from "framer-motion";
import { experience, education, certifications } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience & Education</h2>
        </motion.div>
        {experience.map((job, i) => (
          <motion.div key={job.role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="mb-8 border-l-2 border-blue-600 pl-6 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></span>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg">{job.role}</h3>
            <p className="text-blue-500 text-sm mb-3">{job.company} - {job.duration}</p>
            <ul className="space-y-2">
              {job.points.map((point) => (
                <li key={point} className="text-gray-600 dark:text-gray-400 text-sm">- {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-8 border-l-2 border-blue-600 pl-6 relative">
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></span>
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg">{education.degree}</h3>
          <p className="text-blue-500 text-sm">{education.school} - {education.duration}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="border-l-2 border-blue-600 pl-6 relative">
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></span>
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg">Certifications</h3>
          {certifications.map((cert) => (
            <p key={cert} className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cert}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
