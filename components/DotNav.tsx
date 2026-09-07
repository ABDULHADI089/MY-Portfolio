"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/content";

export default function DotNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      let best: string = sections[0].id;
      let bestD = Infinity;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const d = Math.abs(el.getBoundingClientRect().top - 120);
        if (d < bestD) {
          bestD = d;
          best = s.id;
        }
      }
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="dotnav" aria-label="Section navigation">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? "act" : undefined}
          aria-current={active === s.id ? "true" : undefined}
        >
          <b aria-hidden="true">{s.label}</b>
          <span className="sr-only">{s.label}</span>
          <i aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
