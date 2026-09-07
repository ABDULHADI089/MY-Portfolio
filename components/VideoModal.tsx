"use client";

import { useEffect, useRef } from "react";
import { CloseIcon } from "./icons";

type Props = {
  src: string;
  title: string;
  onClose: () => void;
};

export default function VideoModal({ src, title, onClose }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the dialog while it is open.
      const focusables = boxRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], video, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box" ref={boxRef}>
        <div className="modal-bar">
          <b>{title}</b>
          <button className="modal-x" onClick={onClose} aria-label="Close video" ref={closeRef}>
            <CloseIcon />
          </button>
        </div>
        {/* preload="none" so the clip costs nothing until someone asks for it */}
        <video src={src} controls autoPlay playsInline preload="none" />
      </div>
    </div>
  );
}
