"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "./ui/GradientText";
import MonoTag from "./ui/MonoTag";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
      {/* Soft background blobs */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
          style={{ background: "radial-gradient(circle, #0891B2, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #DB2777, transparent 70%)" }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-2 flex-wrap mb-7"
            >
              <MonoTag accent="cyan">AI · CV Engineer</MonoTag>
              <MonoTag accent="violet">Full-Stack Dev</MonoTag>
              <MonoTag accent="amber">Open to Work</MonoTag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-[#0F0A1E]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              I build the{" "}
              <GradientText>intelligence</GradientText>
              <br />
              and the{" "}
              <GradientText>product</GradientText>
              <br />
              it lives in.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#4B5563] text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            >
              From training real-time CV models to shipping the full-stack app around them —
              one engineer, end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#ai-cv"
                className="gradient-btn px-8 py-3.5 rounded-full text-sm font-bold text-white text-center">
                See My Work →
              </a>
              <a href="/resume.pdf" download
                className="px-8 py-3.5 rounded-full text-sm font-bold text-[#7C3AED] border-2 border-[#7C3AED]/40 hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all text-center">
                Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-[#7C3AED]/15"
            >
              {[
                { val: "5+", label: "Projects Shipped" },
                { val: "2+", label: "Years Experience" },
                { val: "3",  label: "Companies" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold gradient-text">{s.val}</p>
                  <p className="text-xs text-[#4B5563] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: coding image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Soft glow behind image */}
            <div className="absolute inset-4 rounded-2xl blur-2xl opacity-30"
              style={{ background: "linear-gradient(135deg, #7C3AED, #0891B2)" }} />

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#7C3AED]/20 shadow-[0_20px_60px_rgba(124,58,237,0.15)]">
              <Image
                src="/images/coding-hero.jpg"
                alt="Code on screen — Abdul Hadi's workspace"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Light overlay to keep it bright */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-[#7C3AED]/10" />

              {/* Corner brackets */}
              {["top-3 left-3 border-t-2 border-l-2","top-3 right-3 border-t-2 border-r-2",
                "bottom-3 left-3 border-b-2 border-l-2","bottom-3 right-3 border-b-2 border-r-2"
              ].map((cls, i) => (
                <span key={i} className={`absolute w-5 h-5 border-[#0891B2] ${cls}`} />
              ))}

              {/* Detection label */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-[#0891B2] bg-white/90 px-2 py-1 rounded border border-[#0891B2]/30 shadow-sm">
                engineer: active · conf: 1.00
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 bg-white border border-[#DB2777]/30 rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(219,39,119,0.15)]"
            >
              <p className="font-mono text-[10px] text-[#DB2777] mb-0.5">stack</p>
              <p className="text-xs font-bold text-[#0F0A1E]">CV + Full-Stack</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-5 -right-5 bg-white border border-[#0891B2]/30 rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(8,145,178,0.15)]"
            >
              <p className="font-mono text-[10px] text-[#0891B2] mb-0.5">models</p>
              <p className="text-xs font-bold text-[#0F0A1E]">YOLO · MediaPipe</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#4B5563]/50 font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#7C3AED] to-transparent"
        />
      </motion.div>
    </section>
  );
}
