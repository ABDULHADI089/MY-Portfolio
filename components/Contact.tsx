"use client";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import GradientText from "./ui/GradientText";
import MonoTag from "./ui/MonoTag";

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  { icon: Mail,         label: "Email",    href: "mailto:todo@example.com",  display: "todo@example.com",          color: "text-[#DB2777] border-[#DB2777]/25 hover:border-[#DB2777] hover:bg-[#DB2777]/5" },
  { icon: GitHubIcon,   label: "GitHub",   href: "https://github.com/",      display: "github.com/abdulhadi",      color: "text-[#0F0A1E] border-[#0F0A1E]/20 hover:border-[#0F0A1E]/60 hover:bg-[#0F0A1E]/5" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/", display: "linkedin.com/in/abdulhadi", color: "text-[#0891B2] border-[#0891B2]/25 hover:border-[#0891B2] hover:bg-[#0891B2]/5" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 bg-[#FAFAFA] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full blur-[160px] opacity-8"
          style={{ background: "radial-gradient(circle, #7C3AED, #0891B2, transparent)" }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="section-glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MonoTag accent="cyan">status: open to work</MonoTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 mb-5 text-[#0F0A1E]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Let&apos;s <GradientText>build something</GradientText>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base mb-12 max-w-md mx-auto leading-relaxed">
            Whether it&apos;s a CV system, a full-stack product, or both — reach out and let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
            {links.map(({ icon: Icon, label, href, display, color }) => (
              <a key={label} href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border-2 transition-all text-sm shadow-sm ${color}`}
              >
                <Icon />
                <span className="font-mono text-xs">{display}</span>
              </a>
            ))}
          </div>

          <a href="/resume.pdf" download
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold text-white gradient-btn shadow-[0_8px_30px_rgba(124,58,237,0.3)]">
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
