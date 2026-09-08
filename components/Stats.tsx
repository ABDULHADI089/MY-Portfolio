"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  // Start at the real figures so the prerendered HTML carries them. If the
  // JavaScript never runs, the tiles still read correctly instead of "0".
  const [values, setValues] = useState<number[]>(() => stats.map((s) => s.value));
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Nothing to do without motion or an observer: the values are already right.
    if (reduce || !("IntersectionObserver" in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();

        setCounting(true);
        const start = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - start) / 1100, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValues(stats.map((s) => Math.round(eased * s.value)));
          if (p < 1) {
            raf = requestAnimationFrame(run);
          } else {
            setCounting(false);
          }
        };
        raf = requestAnimationFrame(run);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stats rv up" ref={ref}>
      {stats.map((s, i) => (
        <div className="st" key={s.label}>
          <b>
            {values[i]}
            {counting ? "" : s.suffix}
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
