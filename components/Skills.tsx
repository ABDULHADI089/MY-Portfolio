"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import MonoTag from "./ui/MonoTag";
import GradientText from "./ui/GradientText";

const tierConfig: Record<string, {
  accent: "cyan" | "violet" | "amber";
  border: string;
  heading: string;
  shadow: string;
  icon: string;
}> = {
  "AI / Computer Vision": {
    accent: "cyan",
    border: "border-[#0891B2]/25 hover:border-[#0891B2]/60",
    heading: "text-[#0891B2]",
    shadow: "hover:shadow-[0_8px_40px_rgba(8,145,178,0.12)]",
    icon: "🧠",
  },
  "Full-Stack / Product": {
    accent: "violet",
    border: "border-[#7C3AED]/25 hover:border-[#7C3AED]/60",
    heading: "text-[#7C3AED]",
    shadow: "hover:shadow-[0_8px_40px_rgba(124,58,237,0.12)]",
    icon: "⚡",
  },
  "AI Integration / Automation": {
    accent: "amber",
    border: "border-[#D97706]/25 hover:border-[#D97706]/60",
    heading: "text-[#D97706]",
    shadow: "hover:shadow-[0_8px_40px_rgba(217,119,6,0.12)]",
    icon: "🔗",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full blur-[140px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="section-glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <MonoTag accent="amber">skills · tiered</MonoTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-[#0F0A1E]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            What I <GradientText>work with</GradientText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const cfg = tierConfig[group.tier] ?? tierConfig["AI / Computer Vision"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-6 border-2 ${cfg.border} ${cfg.shadow} transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{cfg.icon}</span>
                  <h3 className={`font-mono text-xs font-bold uppercase tracking-widest ${cfg.heading}`}>
                    {group.tier}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <MonoTag key={skill} accent={cfg.accent}>{skill}</MonoTag>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
