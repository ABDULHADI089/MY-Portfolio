import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Selected work</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              Things running in the <span className="g">real world</span>
            </span>
          </h2>
          <p className="lead up" style={{ "--d": "140ms" } as React.CSSProperties}>
            Some of these are used daily inside businesses. One is trying to settle arguments on a
            cricket pitch.
          </p>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
