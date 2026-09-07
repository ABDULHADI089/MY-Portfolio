"use client";

import { useEffect, useRef } from "react";

/**
 * Background field, pointer spotlight, cursor dot and scroll progress bar.
 * Grouped because they all ride the same pointer/scroll listeners.
 */
export default function Ambient() {
  const a1 = useRef<HTMLDivElement>(null);
  const a2 = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const cur = useRef<HTMLDivElement>(null);
  const prog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const cleanups: Array<() => void> = [];

    // ── scroll progress + aurora parallax ──
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog.current) {
        prog.current.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
      }
      if (!reduce) {
        const y = window.scrollY;
        if (a1.current) a1.current.style.transform = `translateY(${(y * 0.08).toFixed(1)}px)`;
        if (a2.current) a2.current.style.transform = `translateY(${(-y * 0.05).toFixed(1)}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ── cursor dot + spotlight (pointer devices only) ──
    if (fine && !reduce) {
      let cx = 0,
        cy = 0,
        sx = 0,
        sy = 0,
        tx = 0,
        ty = 0,
        raf = 0;

      const onMove = (e: PointerEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        cur.current?.classList.add("on");
        spot.current?.classList.add("on");
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const loop = () => {
        cx += (tx - cx) * 0.22;
        cy += (ty - cy) * 0.22;
        sx += (tx - sx) * 0.06;
        sy += (ty - sy) * 0.06;
        if (cur.current) {
          cur.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        }
        if (spot.current) {
          spot.current.style.transform = `translate(${sx}px,${sy}px) translate(-50%,-50%)`;
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      const grow = () => cur.current?.classList.add("big");
      const shrink = () => cur.current?.classList.remove("big");
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("a,button,.card,.chips span,.st,input,textarea"),
      );
      targets.forEach((el) => {
        el.addEventListener("pointerenter", grow);
        el.addEventListener("pointerleave", shrink);
      });

      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        cancelAnimationFrame(raf);
        targets.forEach((el) => {
          el.removeEventListener("pointerenter", grow);
          el.removeEventListener("pointerleave", shrink);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="field" aria-hidden="true">
        <div className="dots" />
        <div className="aur a1" ref={a1} />
        <div className="aur a2" ref={a2} />
      </div>
      <div className="spot" ref={spot} aria-hidden="true" />
      <div className="cur" ref={cur} aria-hidden="true" />
      <div className="prog" ref={prog} aria-hidden="true" />
    </>
  );
}
