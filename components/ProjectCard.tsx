"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import BracketFrame from "./ui/BracketFrame";
import MonoTag from "./ui/MonoTag";
import type { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  variant = "ai",
}: {
  project: Project;
  variant?: "ai" | "web";
}) {
  const isAI = variant === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <BracketFrame label={isAI ? `conf: 0.97 · ${project.tags[0]}` : undefined} className="h-full">
        <div className={`h-full rounded-xl p-5 sm:p-6 flex flex-col gap-4 bg-white transition-all duration-300 ${
          isAI
            ? "border border-[#0891B2]/20 hover:border-[#0891B2]/60 hover:shadow-[0_8px_40px_rgba(8,145,178,0.12)]"
            : "border border-[#7C3AED]/20 hover:border-[#7C3AED]/60 hover:shadow-[0_8px_40px_rgba(124,58,237,0.12)]"
        }`}>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <MonoTag key={tag} accent={isAI ? "cyan" : "violet"}>{tag}</MonoTag>
            ))}
          </div>

          {/* Title */}
          <h3 className={`text-base font-bold ${isAI ? "text-[#0891B2]" : "text-[#7C3AED]"}`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {project.title}
          </h3>

          {/* Problem / Build / Outcome */}
          <div className="space-y-3 flex-1">
            {[
              { label: "Problem", value: project.problem },
              { label: "Build",   value: project.build },
              { label: "Outcome", value: project.outcome },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                  isAI ? "text-[#0891B2]/70" : "text-[#7C3AED]/70"
                }`}>{label}</span>
                <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          {/* Role + link */}
          <div className={`flex items-center justify-between pt-3 border-t ${
            isAI ? "border-[#0891B2]/10" : "border-[#7C3AED]/10"
          }`}>
            <span className="font-mono text-[10px] text-[#4B5563]/50">role: {project.role}</span>
            {project.href && project.href !== "#" && (
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className={`transition-colors ${isAI ? "text-[#0891B2]/40 hover:text-[#0891B2]" : "text-[#7C3AED]/40 hover:text-[#7C3AED]"}`}
                aria-label={`View ${project.title}`}>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </BracketFrame>
    </motion.div>
  );
}
