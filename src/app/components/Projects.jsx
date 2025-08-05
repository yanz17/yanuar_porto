"use client";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section className="py-20 px-10">
      <motion.h3
        className="text-5xl font-bold text-center text-[#76ABAE]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-[#222831] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-[#76ABAE] hover:underline">View Project →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
