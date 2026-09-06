import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <p className="text-blue-500 font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let us Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">I am open to internships, junior developer roles, and freelance projects.</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600"
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg font-medium transition-colors"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-sm text-center">Message sent successfully! I will get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
          )}
        </motion.form>

        <div className="mt-10 flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          <a href={"mailto:" + personalInfo.email} className="hover:text-blue-500 transition-colors">{personalInfo.email}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
