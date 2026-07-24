"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import MonoTag from "./ui/MonoTag";
import GradientText from "./ui/GradientText";

export default function WebWork() {
  const webProjects = projects.filter((p) => p.category === "product");

  return (
    <section id="web" className="py-28 px-4 sm:px-6 bg-[#FAFAFA] relative overflow-hidden">
      <div aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-8 pointer-events-none"
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
          <div className="flex items-center gap-3 mb-4">
            <MonoTag accent="violet">stack: full · shipped: true</MonoTag>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0F0A1E]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <GradientText>Web / Full-Stack</GradientText> Work
          </h2>
          <p className="text-[#4B5563] max-w-xl text-sm sm:text-base">
            End-to-end products — from database schema to deployed UI. The layer that makes the AI work usable.
          </p>
        </motion.div>

        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-12 border border-[#7C3AED]/20 shadow-[0_8px_40px_rgba(124,58,237,0.10)]"
        >
          <Image
            src="/images/code-screen.jpg"
            alt="Full-stack code on screen"
            width={1200}
            height={340}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p className="font-mono text-xs text-[#7C3AED] mb-2">// full-stack pipeline</p>
              <p className="text-[#0F0A1E] font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Designed · Built · Shipped
              </p>
            </div>
          </div>
          {["top-3 left-3 border-t-2 border-l-2","top-3 right-3 border-t-2 border-r-2",
            "bottom-3 left-3 border-b-2 border-l-2","bottom-3 right-3 border-b-2 border-r-2"
          ].map((cls, i) => (
            <span key={i} className={`absolute w-5 h-5 border-[#7C3AED] ${cls}`} />
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="web" />
          ))}
        </div>
      </div>
    </section>
  );
}
