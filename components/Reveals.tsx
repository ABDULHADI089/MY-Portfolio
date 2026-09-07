"use client";

import { useEffect } from "react";

/**
 * One observer for every `.rv` element on the page, so the sections
 * themselves can stay server components.
 */
export default function Reveals() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    nodes.forEach((n) => io.observe(n));

    // Anything already on screen after hydration should never stay hidden.
    const sweep = window.setTimeout(() => {
      nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("in");
      });
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(sweep);
    };
  }, []);

  return null;
}
