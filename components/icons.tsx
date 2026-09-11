import type { SVGProps } from "react";

/**
 * Local icon set. Small enough not to warrant a dependency, and it keeps the
 * brand marks (GitHub, LinkedIn) that icon libraries have dropped.
 */
type P = SVGProps<SVGSVGElement>;

/**
 * width/height are intrinsic fallbacks, not the final size: CSS rules win over
 * presentation attributes, so the stylesheet still controls sizing per context.
 * Without them, an SVG that only has a viewBox expands to fill its container if
 * the stylesheet ever fails to load.
 */
const base = {
  viewBox: "0 0 24 24",
  width: 18,
  height: 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const MailIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M6.2 3.5h3l1.5 3.7-1.9 1.4a12 12 0 0 0 5.6 5.6l1.4-1.9 3.7 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const GithubIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p} aria-hidden="true">
    <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.6.51-3.28-.56-3.5-1.08-.12-.3-.63-1.23-1.08-1.48-.37-.2-.9-.68-.02-.7.83-.01 1.42.76 1.62 1.08.95 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.3-.26-4.71-1.15-4.71-5.11 0-1.13.4-2.06 1.06-2.78-.1-.26-.46-1.32.1-2.75 0 0 .87-.27 2.85 1.06a9.6 9.6 0 0 1 5.18 0c1.98-1.34 2.85-1.06 2.85-1.06.57 1.43.21 2.49.1 2.75.67.72 1.06 1.64 1.06 2.78 0 3.97-2.42 4.85-4.72 5.1.38.33.7.95.7 1.92l-.01 2.85c0 .27.19.6.7.5A10.2 10.2 0 0 0 12 1.8Z" />
  </svg>
);

export const LinkedinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p} aria-hidden="true">
    <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.34V21H3.3V8.9Zm5.47 0h3.2v1.65h.05a3.5 3.5 0 0 1 3.16-1.74c3.38 0 4 2.22 4 5.11V21h-3.34v-5.4c0-1.28-.02-2.94-1.79-2.94-1.79 0-2.06 1.4-2.06 2.85V21H8.77V8.9Z" />
  </svg>
);

export const DownloadIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M12 3.5v11" />
    <path d="m7.8 10.6 4.2 4.2 4.2-4.2" />
    <path d="M4 16.5v2.2a1.8 1.8 0 0 0 1.8 1.8h12.4a1.8 1.8 0 0 0 1.8-1.8v-2.2" />
  </svg>
);

export const CopyIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <rect x="9" y="9" width="11.5" height="11.5" rx="2" />
    <path d="M15 6.2V5.3A1.8 1.8 0 0 0 13.2 3.5H5.3A1.8 1.8 0 0 0 3.5 5.3v7.9A1.8 1.8 0 0 0 5.3 15h.9" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const PlayIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p} aria-hidden="true">
    <path d="M8 5.2a1 1 0 0 1 1.53-.85l9 6.8a1 1 0 0 1 0 1.7l-9 6.8A1 1 0 0 1 8 18.8V5.2Z" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const AwardIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="m8.3 13.2-1.6 7.3 5.3-2.9 5.3 2.9-1.6-7.3" />
  </svg>
);

export const FileIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M7 3.5h7.5L18 7v13.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
    <path d="M14.5 3.5V7H18" />
  </svg>
);

export const SendIcon = (p: P) => (
  <svg {...base} {...p} aria-hidden="true">
    <path d="M20.5 3.5 11 13" />
    <path d="M20.5 3.5 14.4 20.5a.7.7 0 0 1-1.3.05L10.4 14 3.9 11.3a.7.7 0 0 1 .05-1.3L20.5 3.5Z" />
  </svg>
);

/** Per-project marks used in the work grid. */
export const projectGlyphs = {
  orbit: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="24" cy="24" r="15" />
      <ellipse cx="24" cy="24" rx="15" ry="6" />
      <ellipse cx="24" cy="24" rx="6" ry="15" />
    </svg>
  ),
  scan: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="10" y="10" width="28" height="28" rx="3" />
      <circle cx="24" cy="24" r="9" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
    </svg>
  ),
  rail: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="14" y="8" width="20" height="26" rx="5" />
      <path d="M14 22h20M18 40l-4 6M30 40l4 6M20 40h8" />
      <circle cx="19" cy="29" r="1.6" />
      <circle cx="29" cy="29" r="1.6" />
    </svg>
  ),
  pos: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="9" y="12" width="30" height="24" rx="3" />
      <path d="M9 20h30M15 28h8M29 28h4" />
    </svg>
  ),
  house: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M24 8 8 20v20h32V20z" />
      <rect x="19" y="27" width="10" height="13" />
    </svg>
  ),
  face: (
    <svg viewBox="0 0 48 48" width={44} height={44} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="24" cy="24" r="15" />
      <circle cx="19" cy="20" r="1.8" />
      <circle cx="29" cy="20" r="1.8" />
      <path d="M17 29c4 4 10 4 14 0" />
    </svg>
  ),
} as const;
