"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

export default function Hero() {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div className="dot-grid" />

      {/* Faint code snippet background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="font-mono text-[0.6rem] md:text-xs text-[var(--text-primary)] leading-relaxed whitespace-pre max-w-2xl"
        >
{`const developer = {
  name: "Srijan S Rao",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Django", "Python"],
  ai: ["CNN", "YOLOv8", "EfficientNet"],
  status: "Building the future",
};

export default developer;`}
        </motion.pre>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Monospaced label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-6"
        >
          Full Stack Developer · AI Engineer
        </motion.p>

        {/* Name — grid-breaking display type */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-extrabold leading-[0.85] tracking-tighter"
          >
            <span className="block text-[clamp(3rem,10vw,8rem)] text-[var(--text-primary)]">
              SRIJAN
            </span>
            <span className="block text-[clamp(1rem,4vw,4rem)] text-[var(--text-secondary)] mt-1">
              S RAO
            </span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-base md:text-lg text-[var(--text-secondary)] max-w-xl mt-8 leading-relaxed"
        >
          Building full-stack systems where{" "}
          <span className="text-[var(--accent)]">AI meets clean architecture</span>.
          Final-year CS student crafting intelligent web experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-mono text-sm font-semibold tracking-wide hover:bg-[#00cc8e] transition-colors duration-300"
          >
            View Work
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-mono text-sm tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Download Resume
            <FileText size={14} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-[var(--text-muted)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
