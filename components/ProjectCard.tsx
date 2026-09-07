"use client";

import { useRef, useState } from "react";
import type { Project } from "@/lib/content";
import { asset } from "@/lib/asset";
import { projectGlyphs, PlayIcon } from "./icons";
import VideoModal from "./VideoModal";

export default function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();

    if (auraRef.current) {
      auraRef.current.style.left = `${e.clientX - r.left}px`;
      auraRef.current.style.top = `${e.clientY - r.top}px`;
    }

    // Tilt only for precise pointers, and never against reduced-motion.
    if (
      window.matchMedia("(hover:hover) and (pointer:fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
    }
  };

  const reset = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <>
      <article
        ref={cardRef}
        className={`card rv up${project.wide ? " wide" : ""}`}
        style={{ "--d": `${delay}ms` } as React.CSSProperties}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
      >
        <div className="aura" ref={auraRef} aria-hidden="true" />

        <div className="card-top">
          <div>
            <div className="kind">{project.kind}</div>
            <h3>{project.title}</h3>
          </div>
          <div className="glyph" aria-hidden="true">
            {projectGlyphs[project.glyph]}
          </div>
        </div>

        <p>{project.blurb}</p>

        {project.video && (
          <div className="card-actions">
            <button className="demo-btn" onClick={() => setShowVideo(true)}>
              <PlayIcon />
              WATCH DEMO
            </button>
          </div>
        )}

        <div className="stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </article>

      {showVideo && project.video && (
        <VideoModal
          src={asset(project.video)}
          title={project.title}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
}
