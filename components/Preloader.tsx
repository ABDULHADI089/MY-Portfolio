"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

/**
 * Brief progress screen, then hands the page over by swapping
 * body.loading for body.ready (which is what releases the hero animations).
 */
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : 1200;
    let start: number | null = null;

    const finish = () => {
      document.body.classList.remove("loading");
      document.body.classList.add("ready");
      setDone(true);
      window.setTimeout(() => setGone(true), 900);
    };

    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        window.setTimeout(finish, 180);
      }
    };
    raf.current = requestAnimationFrame(step);

    // Failsafe: never leave the page locked behind the loader.
    const bail = window.setTimeout(() => {
      if (!document.body.classList.contains("ready")) finish();
    }, 4000);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.clearTimeout(bail);
      document.body.classList.remove("loading");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`loader${done ? " done" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-in">
        <div className="loader-mark">
          {profile.name.toUpperCase()} — {profile.location.toUpperCase()}
        </div>
        <div className="loader-bar">
          <i style={{ width: `${pct}%` }} />
        </div>
        <div className="loader-pct">
          <span>{pct}</span>%
        </div>
      </div>
    </div>
  );
}
