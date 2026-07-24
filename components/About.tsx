"use client";
import { motion } from "framer-motion";
import { career } from "@/lib/data";
import MonoTag from "./ui/MonoTag";
import GradientText from "./ui/GradientText";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 bg-[#FAFAFA] relative overflow-hidden">
      <div aria-hidden className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #DB2777, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="section-glow-line mb-16" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-14 lg:gap-24 items-start"
        >
          {/* Left — narrative */}
          <div>
            <motion.div variants={fadeUp} className="mb-3">
              <MonoTag accent="violet">about</MonoTag>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-7 leading-tight text-[#0F0A1E]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Both disciplines.{" "}
              <GradientText>One person.</GradientText>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[#4B5563] text-sm sm:text-base leading-relaxed">
              <p>
                Most engineers pick a lane — model work or product work. I never did.
                My path started in full-stack development, building real products end-to-end,
                then deepened into AI and Computer Vision when I realised the most interesting
                problems sit at the intersection of both.
              </p>
              <p>
                That means I can train a real-time object detection model{" "}
                <span className="text-[#0891B2] font-semibold">and</span> ship the web app,
                API, and dashboard around it — without handing off to another team.
              </p>
              <p className="text-[#4B5563]/70">
                {/* TODO: replace with real personal detail */}
                Currently open to roles and contracts where both sides of that equation matter.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
              {["Real-time CV", "Full-Stack Apps", "End-to-End Delivery", "Open to Work"].map((chip) => (
                <span key={chip}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED]">
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — career timeline */}
          <div>
            <motion.div variants={fadeUp} className="mb-7">
              <MonoTag accent="cyan">career arc</MonoTag>
            </motion.div>
            <div className="relative pl-5 border-l-2 border-[#7C3AED]/20 space-y-9">
              {career.map((entry, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#0891B2] shadow-[0_0_8px_rgba(124,58,237,0.4)]" />
                  <p className="font-mono text-xs text-[#0891B2] mb-1 tracking-wide">{entry.period}</p>
                  <p className="font-bold text-[#0F0A1E] text-sm mb-0.5">{entry.role}</p>
                  <p className="text-xs text-[#7C3AED] mb-2 font-mono">{entry.company}</p>
                  <p className="text-xs text-[#4B5563] leading-relaxed">{entry.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
