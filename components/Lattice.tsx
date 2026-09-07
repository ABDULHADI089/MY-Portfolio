"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  z: number;
  // per-node drift phase, so the cloud breathes instead of moving as a block
  pa: number;
  pb: number;
  sp: number;
};

/**
 * Rotating point-lattice behind the hero.
 *
 * Projected by hand onto a 2D canvas rather than pulled in through a 3D
 * library — same look, no extra bytes on the wire.
 */
export default function Lattice() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let edges: Array<[number, number]> = [];
    let raf = 0;
    let visible = true;
    let running = true;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const seed = () => {
      const mobile = window.innerWidth < 760;
      const count = mobile ? 46 : 88;
      const radius = 7.2;
      const linkDist = mobile ? 3.6 : 3.0;

      nodes = [];
      for (let i = 0; i < count; i++) {
        // Fibonacci sphere, then jittered inward so it reads as a cloud.
        const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const r = radius * (0.5 + 0.5 * Math.random());
        nodes.push({
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta) * 0.72,
          z: r * Math.cos(phi) * 0.85,
          pa: Math.random() * Math.PI * 2,
          pb: Math.random() * Math.PI * 2,
          sp: 0.35 + Math.random() * 0.55,
        });
      }

      edges = [];
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const dz = nodes[a].z - nodes[b].z;
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < linkDist) edges.push([a, b]);
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const start = performance.now();

    const draw = () => {
      const t = reduce ? 0 : (performance.now() - start) / 1000;

      pointer.x += (target.x - pointer.x) * 0.04;
      pointer.y += (target.y - pointer.y) * 0.04;

      const rotY = t * 0.055 + pointer.x * 0.4;
      const rotX = pointer.y * 0.24;

      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);

      // Camera distance in world units, matched to a ~50deg vertical FOV.
      const camZ = 16;
      const focal = height / (2 * Math.tan((50 * Math.PI) / 360));
      const ox = width / 2;
      const oy = height / 2;

      const px: number[] = new Array(nodes.length);
      const py: number[] = new Array(nodes.length);
      const scale: number[] = new Array(nodes.length);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const wobble = reduce ? 0 : 0.3;
        let x = n.x + Math.sin(t * n.sp + n.pa) * wobble;
        let y = n.y + Math.cos(t * n.sp + n.pb) * wobble;
        let z = n.z + Math.sin(t * n.sp * 0.7 + n.pa) * (wobble * 0.8);

        // rotate Y then X
        const rx = x * cy + z * sy;
        const rz = -x * sy + z * cy;
        x = rx;
        z = rz;
        const ry = y * cx - z * sx;
        z = y * sx + z * cx;
        y = ry;

        const depth = camZ - z;
        const k = focal / Math.max(depth, 0.1);
        px[i] = ox + x * k;
        py[i] = oy - y * k;
        scale[i] = k / focal;
      }

      ctx.clearRect(0, 0, width, height);

      // edges
      ctx.lineWidth = 1;
      for (let e = 0; e < edges.length; e++) {
        const [a, b] = edges[e];
        const alpha = 0.16 * Math.min(scale[a], scale[b]) * 16;
        ctx.strokeStyle = `rgba(111,227,196,${Math.min(alpha, 0.22).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(px[a], py[a]);
        ctx.lineTo(px[b], py[b]);
        ctx.stroke();
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const r = Math.max(0.6, 1.5 * scale[i] * 16);
        ctx.fillStyle = `rgba(159,176,255,${Math.min(0.95 * scale[i] * 16, 0.95).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px[i], py[i], r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      draw();
    };

    const onResize = () => {
      resize();
      seed();
      draw();
    };

    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    seed();

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(tick);
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    }
    window.addEventListener("resize", onResize);

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
      });
      io.observe(canvas);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      io?.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
