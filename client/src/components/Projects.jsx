import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -8 }}>
              <Link to={"/projects/" + project.slug} className="block bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600 transition-colors">
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-blue-500 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
