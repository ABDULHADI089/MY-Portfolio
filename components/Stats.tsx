"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<number[]>(() => stats.map(() => 0));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const settle = () => {
      setValues(stats.map((s) => s.value));
      setDone(true);
    };

    if (reduce || !("IntersectionObserver" in window)) {
      settle();
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - start) / 1100, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValues(stats.map((s) => Math.round(eased * s.value)));
          if (p < 1) raf = requestAnimationFrame(run);
          else setDone(true);
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
            {done ? s.suffix : ""}
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
