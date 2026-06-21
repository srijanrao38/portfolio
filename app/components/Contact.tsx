"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
/* eslint-disable @typescript-eslint/no-explicit-any */

/* ─── Inline brand icons (lucide-react doesn't ship brand marks) ─── */
const GitHubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Contact data ─── */
interface ContactLink {
  icon: any;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "srijanrao38@gmail.com",
    href: "mailto:srijanrao38@gmail.com",
    external: false,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/srijanrao38",
    href: "https://github.com/srijanrao38",
    external: true,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/srijan-s-rao",
    href: "https://linkedin.com/in/srijan-s-rao/",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8123162838",
    href: "tel:+918123162838",
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">{"// Contact"}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="font-body text-[var(--text-secondary)] max-w-lg">
            Open to internships, collaborations, and interesting conversations
            about tech. Reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-1">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center justify-between py-6 px-4 md:px-6 border-b border-[var(--border)] hover:bg-[var(--bg-card)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <link.icon
                  size={20}
                  className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300"
                />
                <div>
                  <p className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">
                    {link.label}
                  </p>
                  <p className="font-body text-lg md:text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {link.value}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
