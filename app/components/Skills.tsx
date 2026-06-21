"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { skillCategories } from "@/app/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{"// Skills"}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-16">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20">
          {/* Left: Terminal-style skill list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8"
            style={{ borderRadius: "2px" }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-[0.65rem] text-[var(--text-muted)] ml-2">
                srijan@dev ~ /skills
              </span>
            </div>

            {/* Skill categories */}
            <div className="space-y-6">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal size={12} className="text-[var(--accent)]" />
                    <span className="font-mono text-xs text-[var(--accent)] tracking-wider uppercase">
                      {category.name}
                    </span>
                  </div>

                  {/* Skills as inline items */}
                  <div className="flex flex-wrap gap-2 ml-5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs text-[var(--text-secondary)] bg-[var(--bg-primary)] px-3 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Terminal cursor blink */}
              <div className="flex items-center gap-1 mt-4 ml-5">
                <span className="font-mono text-xs text-[var(--text-muted)]">$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-[var(--accent)] inline-block"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Philosophy text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              I build end-to-end{" "}
              <span className="text-[var(--accent)]">systems</span>.
            </h3>

            <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
              <p>
                From crafting responsive frontends with React and Next.js to designing
                robust Django backends with RESTful APIs — I own the entire pipeline.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="text-[var(--text-primary)]">web development</span> and{" "}
                <span className="text-[var(--text-primary)]">machine learning</span>,
                building applications where CNN models, computer vision, and clean
                architecture converge into production-ready solutions.
              </p>
              <p>
                I care about code quality, system design patterns, and building things
                that actually{" "}
                <span className="text-[var(--accent)]">work at scale</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-[var(--border)]">
              {[
                { value: "5+", label: "Tech Stacks" },
                { value: "3+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-[var(--accent)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
