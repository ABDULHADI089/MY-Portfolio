"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import MonoTag from "./ui/MonoTag";
import GradientText from "./ui/GradientText";

export default function AICVWork() {
  const aiProjects = projects.filter((p) => p.category === "ai-cv");

  return (
    <section id="ai-cv" className="py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div aria-hidden className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0891B2, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="section-glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <MonoTag accent="cyan">model: active · tracking: on</MonoTag>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0F0A1E]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <GradientText>AI / Computer Vision</GradientText> Work
          </h2>
          <p className="text-[#4B5563] max-w-xl text-sm sm:text-base">
            Real-time CV systems trained, tuned, and deployed — not academic experiments.
          </p>
        </motion.div>

        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-12 border border-[#0891B2]/20 shadow-[0_8px_40px_rgba(8,145,178,0.12)]"
        >
          <Image
            src="/images/ai-matrix.jpg"
            alt="AI and computer vision visualization"
            width={1200}
            height={340}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p className="font-mono text-xs text-[#0891B2] mb-2">// detection pipeline</p>
              <p className="text-[#0F0A1E] font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Real-time · Accurate · Deployed
              </p>
            </div>
          </div>
          {["top-3 left-3 border-t-2 border-l-2","top-3 right-3 border-t-2 border-r-2",
            "bottom-3 left-3 border-b-2 border-l-2","bottom-3 right-3 border-b-2 border-r-2"
          ].map((cls, i) => (
            <span key={i} className={`absolute w-5 h-5 border-[#0891B2] ${cls}`} />
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {aiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="ai" />
          ))}
        </div>
      </div>
    </section>
  );
}
