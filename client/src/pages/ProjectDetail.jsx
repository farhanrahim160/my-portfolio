import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FaArrowLeft, FaUsers } from "react-icons/fa";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-blue-500 hover:underline mb-8">
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-blue-500 font-medium mb-2">{project.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

          {project.team && (
            <div className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-8">
              <FaUsers className="mt-1 flex-shrink-0" />
              <p>{project.team}</p>
            </div>
          )}

          <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-2xl mb-8 border border-gray-200 dark:border-gray-800" />

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">{t}</span>
            ))}
          </div>

          <div className="space-y-10 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-3">The Problem</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">My Approach</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.approach}</p>
            </div>

            {project.modules && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">System Modules</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.modules.map((m, i) => (
                    <motion.div key={m} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3">
                      <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white text-xs font-bold rounded-full flex-shrink-0">{i + 1}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{m}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold mb-3">The Outcome</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {project.gallery && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Screens</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((shot, i) => (
                  <motion.div key={shot.src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img src={shot.src} alt={shot.caption} className="w-full h-56 object-cover object-top" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 p-3">{shot.caption}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {(project.link || project.repo) && (
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">Live Demo</a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-colors">View Code</a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
