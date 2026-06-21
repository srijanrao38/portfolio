export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Srijan S Rao. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Built with{" "}
          <span className="text-[var(--accent)]">Next.js</span>
          {" "}+{" "}
          <span className="text-[var(--accent)]">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
