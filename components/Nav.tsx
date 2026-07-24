"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about",   label: "About" },
  { href: "#ai-cv",   label: "AI / CV" },
  { href: "#web",     label: "Web" },
  { href: "#skills",  label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#7C3AED]/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-bold gradient-text text-base tracking-wide">
          Abdul Hadi
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="text-sm text-[#4B5563] hover:text-[#7C3AED] transition-colors font-medium">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download
              className="text-sm px-5 py-2 rounded-full gradient-btn text-white font-semibold">
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#4B5563] hover:text-[#7C3AED] p-1"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#7C3AED]/10 px-4 py-5 flex flex-col gap-5 shadow-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-[#4B5563] hover:text-[#7C3AED] transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download
            className="text-sm gradient-btn text-white font-semibold rounded-full px-5 py-2 text-center">
            Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}
