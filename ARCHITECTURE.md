# Architecture

## Overview

A single-page, statically exported Next.js site. No backend, no database, no
authentication, no runtime data fetching. `next build` emits plain HTML, CSS and
JS into `out/`, which any static host can serve.

```
lib/content.ts ──► server components ──► next build (output: "export") ──► out/
                                                                            │
                                              ┌─────────────────────────────┴───┐
                                              │                                 │
                                     GitHub Pages                           Vercel
                                  (/MY-Portfolio)                            (root)
```

The only network call the site ever makes at runtime is the optional contact
form POST to Web3Forms.

## Rendering strategy

Everything is prerendered at build time. Client components are used only where
behaviour genuinely requires the browser:

| Component | Why it is a client component |
|---|---|
| `Preloader` | Progress animation; releases `body.loading` |
| `Reveals` | One `IntersectionObserver` for every `.rv` element on the page |
| `Ambient` | Pointer spotlight, cursor dot, scroll progress, aurora parallax |
| `Lattice` | Canvas render loop for the hero visual |
| `Nav` | Sticky state and the mobile sheet |
| `DotNav` | Scroll-position tracking |
| `Stats` | Count-up animation on first view |
| `ProjectCard` | Pointer-tracked aura and tilt |
| `VideoModal` | Focus trap, Escape handling, scroll lock |
| `ContactForm` / `ContactChannels` | Form state, submission, clipboard |

Every section body (`About`, `Work`, `Experience`, `Process`, `Toolkit`,
`Contact`) is a server component. `Reveals` deliberately observes elements by
class from a single mounted component, so adding a scroll animation to a section
does not force it across the client boundary.

## Content

`lib/content.ts` is the single source of truth — profile, projects, experience,
process, toolkit, section list, CV path. Components read from it and render; no
content is hard-coded in a component.

Education/university is intentionally excluded from the site.

## Base path handling

The same build targets two hosts with different roots. `NEXT_PUBLIC_BASE_PATH`
is read in `next.config.ts` (for `basePath`/`assetPrefix`) and re-exported
through `lib/asset.ts`.

`next/link` and `next/image` apply the base path themselves. Anything handed
straight to the DOM — the CV download link, the demo video `src` — must go
through `asset()`. That is the one rule to remember when adding a public asset.

## Styling

A single stylesheet, `app/globals.css`, holding CSS custom properties for the
palette, type and spacing, then component classes. Tailwind v4 is imported and
available, but the design system is expressed in plain CSS because it was ported
from a hand-authored design.

Reduced motion is respected globally: a `prefers-reduced-motion` block disables
animation and forces reveal states visible, and the JS render loops (lattice,
counters, tilt) each check the same media query before animating.

## Performance notes

- The hero lattice is a hand-written 2D canvas projection rather than a 3D
  library, which keeps roughly 600 KB off the wire.
- The lattice pauses when the hero scrolls out of view and when the tab is hidden.
- The Smart Cric demo video is `preload="none"` inside a modal, so its ~25 MB
  costs nothing until a visitor asks to watch it.
- Icons are inline SVG, so there is no icon-library dependency.

## Accessibility

- Skip link to main content.
- The video modal is a labelled `role="dialog"` with a focus trap, Escape to
  close, and focus restored to the trigger on close.
- Form fields carry labels, `aria-invalid` and `aria-describedby` error wiring,
  with a polite live region for submission status.
- The decorative canvas, background field, cursor and ticker are `aria-hidden`.
- Section dots expose text labels to screen readers.
- A `.no-js` fallback keeps content visible if JavaScript never runs.
