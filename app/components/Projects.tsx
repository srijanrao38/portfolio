"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{"// Work"}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Selected Projects
          </h2>
          <p className="font-body text-[var(--text-secondary)] max-w-lg mb-16">
            End-to-end systems built with modern frameworks, clean architecture, and a focus on solving real problems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.005 }}
              className="project-card group"
            >
              {/* Large faint index */}
              <span className="project-index">{project.index}</span>

              <div className="relative z-10 grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
                {/* Left: Meta */}
                <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  {/* Highlight */}
                  <p className="font-mono text-xs text-[var(--accent)] tracking-wide mb-3 uppercase">
                    {project.highlight}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Description + Link */}
                <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* GitHub Link — reveal on hover */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    View on GitHub
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
