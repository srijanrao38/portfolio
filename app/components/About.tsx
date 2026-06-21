"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{"// About"}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-16">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 font-body text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                I&apos;m a final-year Computer Science student at{" "}
                <span className="text-[var(--text-primary)]">
                  Sahyadri College of Engineering and Management
                </span>
                , Mangalore. I build full-stack applications where AI meets clean
                architecture.
              </p>
              <p>
                My focus is on creating{" "}
                <span className="text-[var(--accent)]">AI-powered web applications</span>{" "}
                and RESTful systems — from training computer vision models to deploying
                them within production-grade Django and Next.js stacks.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new tech, contributing to
                open source, or diving deeper into system design patterns.
              </p>
            </div>

            {/* Status Indicators */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                { icon: MapPin, text: "Mangalore, Karnataka", color: "text-[var(--accent)]" },
                { icon: GraduationCap, text: "Final Year", color: "text-[var(--accent)]" },
                { icon: Briefcase, text: "Open to Internships", color: "text-[var(--accent)]" },
              ].map((status) => (
                <div
                  key={status.text}
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] bg-[var(--bg-card)]"
                  style={{ borderRadius: "2px" }}
                >
                  <status.icon size={14} className={status.color} />
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {status.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Quick facts */}
            <div className="mt-6 border border-[var(--border)] bg-[var(--bg-card)] p-6" style={{ borderRadius: "2px" }}>
              <p className="font-mono text-[0.65rem] text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
                Specializations
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "AI / Machine Learning",
                  "REST API Design",
                  "Computer Vision",
                  "System Architecture",
                ].map((spec) => (
                  <span key={spec} className="tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
