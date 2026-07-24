"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const sections = [
  { id: "top",     message: "Hey! I'm Abdul's AI companion. Scroll to explore 👇" },
  { id: "about",   message: "Both disciplines, one person. That's the whole point." },
  { id: "ai-cv",   message: "Here's where I train and ship CV models. Real-time, production-grade." },
  { id: "web",     message: "Here's where I turn that intelligence into a real product." },
  { id: "skills",  message: "Two skill tracks, one engineer. AI + Full-Stack." },
  { id: "contact", message: "Like what you see? Let's build something together! 🚀" },
];

export default function Mascot() {
  const prefersReduced = useReducedMotion();
  const [message, setMessage] = useState(sections[0].message);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.slice(1).forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setMessage(section.message);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!visible) return null;

  if (prefersReduced) {
    return (
      <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2">
        <div className="bg-white border border-[#7C3AED]/30 rounded-xl px-3 py-2 max-w-[180px] text-xs text-[#4B5563] shadow-md">
          {message}
        </div>
        <div className="w-11 h-11 rounded-full bg-white border-2 border-[#7C3AED]/40 flex items-center justify-center text-xl select-none shadow-md">
          🤖
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Speech bubble */}
      <motion.div
        key={message}
        initial={{ opacity: 0, y: 8, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
        className="relative bg-white border-2 border-[#7C3AED]/25 rounded-2xl px-4 py-3 max-w-[200px] sm:max-w-[230px] text-xs text-[#4B5563] shadow-[0_8px_30px_rgba(124,58,237,0.15)] pointer-events-auto"
      >
        {message}
        <span className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r-2 border-b-2 border-[#7C3AED]/25 rotate-45" />
      </motion.div>

      {/* Bot with bob + glow pulse */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className="relative w-12 h-12 rounded-full bg-white border-2 border-[#7C3AED]/40 flex items-center justify-center text-2xl select-none shadow-[0_8px_24px_rgba(124,58,237,0.2)] pointer-events-auto"
      >
        🤖
        <motion.span
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#7C3AED]/15"
        />
      </motion.div>
    </div>
  );
}
