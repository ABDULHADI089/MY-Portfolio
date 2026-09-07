"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/lib/content";
import { asset } from "@/lib/asset";
import { CV_FILE } from "@/lib/content";
import { DownloadIcon } from "./icons";

const links = sections.filter((s) => s.id !== "top" && s.id !== "contact");

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const label = (id: string) => {
    const s = sections.find((x) => x.id === id);
    return s ? s.label.charAt(0) + s.label.slice(1).toLowerCase() : id;
  };

  return (
    <>
      <nav className={`nav${stuck ? " stuck" : ""}`} aria-label="Primary">
        <a className="logo" href="#top">
          <span className="orb" aria-hidden="true" />
          {profile.name}
        </a>

        <div className="menu">
          {links.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {label(s.id)}
            </a>
          ))}
          <a
            className="pill"
            href={asset(CV_FILE)}
            download="Abdul-Hadi-CV.pdf"
          >
            <DownloadIcon width={15} height={15} />
            Download CV
          </a>
          <a className="pill" href="#contact">
            Get in touch
          </a>
        </div>

        <button
          className={`burger${open ? " open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={`sheet${open ? " open" : ""}`} aria-hidden={!open}>
        {links.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {label(s.id)}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Contact
        </a>
        <a
          href={asset(CV_FILE)}
          download="Abdul-Hadi-CV.pdf"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          Download CV
        </a>
      </div>
    </>
  );
}
