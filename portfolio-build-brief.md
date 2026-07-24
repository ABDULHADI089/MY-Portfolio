# Portfolio Build Brief — AI/CV Engineer Portfolio

Positioning: **AI & Computer Vision Engineer | Full-Stack Developer**
Stack: Next.js + Tailwind + Vercel

---

## 1. Design Tokens (vibrant, mobile-first)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0A1F` | Page background (deep indigo, not flat black) |
| `--surface` | `#15132B` | Cards, panels |
| `--text-primary` | `#F5F3FF` | Headings, body |
| `--text-secondary` | `#A5A0C2` | Captions, meta |
| `--gradient-primary` | `linear-gradient(135deg, #8B5CF6, #EC4899, #22D3EE)` | Hero name, buttons, hover glows |
| `--cv-accent` | `#22D3EE` | Bounding-box brackets, detection tags |
| `--confidence-accent` | `#FBBF24` | Small "confidence score" style tags |

**Type:** Space Grotesk (display) · Inter (body) · IBM Plex Mono (tags/labels)

**Signature motif:** corner-bracket "bounding box" frames on hero visual and project cards, rendered in the gradient/cyan, with mono confidence-tags (`role: cv_engineer · conf: 0.97`). Gradient/glow reserved for hero + hover states only — keep the rest of the page calm so it doesn't get busy on small screens.

**Mobile rules:** single-column stack below 768px, bracket frames shrink/simplify (no glow blur on mobile — perf), sticky bottom nav or hamburger, hero visual collapses above text, tap targets ≥44px.

---

## 2. Site Structure

1. **Hero** — Name, "AI & Computer Vision Engineer · Full-Stack Developer", gradient headline, CTA → Projects/Resume, bracket-framed visual (Smart Cric footage/gif if available)
2. **About** — DevNodes → Heapware (AI Engineer) → Intermarket Knit (Python ERP + facial attendance) career arc, 2-3 short paragraphs
3. **AI/CV Spotlight** (dedicated section, not buried in projects)
   - Smart Cric — real-time CV ball tracking, live scoreboard
   - Facial Attendance System — deployed CV at Intermarket Knit
   - Heapware AI work
4. **Projects** (case-study style, 150-200 words each: problem → build → role → outcome)
   - Smart Cric
   - Facial Attendance System
   - TrekTrain (Supabase + graph route inference)
   - Pakistan Electric POS (10-module cloud EPOS)
   - Household Staff Work Manager (Turborepo, Next.js + Expo)
5. **Skills**
6. **Contact** — Email, LinkedIn, GitHub, resume download

---

## 3. Skills — Proper Tech Structure

**AI / Computer Vision**
- Languages: Python
- Classical CV: OpenCV
- Deep Learning: PyTorch, TensorFlow
- Detection/Tracking: YOLO, MediaPipe
- Concepts: object detection, real-time tracking, pose estimation, image segmentation

**Full-Stack / Product**
- Frontend: Next.js, React, React Native (Expo), Tailwind CSS
- Backend: Node.js, NestJS, Express
- Data: Supabase, PostgreSQL, Drizzle ORM
- Tooling/DevOps: Vercel, Turborepo, Git

**AI Integration / Automation**
- n8n, agentic workflows, API integration

*(Fill in any model names/frameworks I don't have yet — e.g. exact YOLO version, any custom-trained models — before handing this to the agent, so it doesn't guess.)*

---

## 4. Agent Command Sequence (Claude Code)

Run these **in order**, one per turn, in a Claude Code session inside an empty project folder. Each builds on the last — don't skip ahead.

### Phase 1 — Scaffold
```
Initialize a new Next.js 14 app (App Router, TypeScript, Tailwind CSS) called "portfolio" in this directory. Set up ESLint and a clean folder structure: /app, /components, /lib, /public. Add Space Grotesk, Inter, and IBM Plex Mono via next/font. Commit as "chore: scaffold project".
```

### Phase 2 — Design tokens
```
Add my design tokens to tailwind.config.ts and globals.css as CSS variables: background #0A0A1F, surface #15132B, text-primary #F5F3FF, text-secondary #A5A0C2, a primary gradient from #8B5CF6 to #EC4899 to #22D3EE, cv-accent #22D3EE, confidence-accent #FBBF24. Create a reusable gradient-text utility class and a glow-on-hover utility class. Build a small style-guide page at /style-guide showing all tokens, type scale, and the two utilities so I can review before we build real pages.
```

### Phase 3 — Layout + Hero
```
Build the site layout (nav, footer) and the Hero section. Nav: logo/name left, links right, collapses to a hamburger menu below 768px. Hero: headline "AI & Computer Vision Engineer" in gradient-text, subheading "Full-Stack Developer", CTA buttons to #projects and resume PDF, and a bracket-framed visual placeholder on the right (stacks below the text on mobile). Use the corner-bracket bounding-box motif in cv-accent color, with a small mono tag near it reading "role: cv_engineer + full_stack · conf: 0.97". Make it fully responsive and test at 375px, 768px, and 1440px widths.
```

### Phase 4 — About + AI/CV Spotlight
```
Build the About section (career arc: DevNodes → Heapware AI Engineer → Intermarket Knit) and a dedicated AI/CV Spotlight section highlighting Smart Cric and the facial attendance system, using the same bracket-frame + mono-tag motif on each spotlight card. Keep gradient/glow only on hover states here — base state should be calm, not busy.
```

### Phase 5 — Projects grid
```
Build a Projects section with case-study style cards for: Smart Cric, Facial Attendance System, TrekTrain, Pakistan Electric POS, Household Staff Work Manager. Each card: title, one-line tech tags in mono font, short problem→build→outcome copy (I'll fill in final copy), and the bracket-frame on hover. Grid should be 1 column on mobile, 2 on tablet, 3 on desktop.
```

### Phase 6 — Skills + Contact
```
Build the Skills section using two tiers — "AI / Computer Vision" and "Full-Stack / Product" — as grouped tag lists, not a flat cloud. Then build the Contact section with email, LinkedIn, GitHub, and a resume download button. Make both sections responsive.
```

### Phase 7 — Polish + Performance + Deploy
```
Audit the whole site for: mobile responsiveness at 375px/414px/768px, Lighthouse performance/accessibility score, reduce any gradient/blur effects that hurt mobile perf, add subtle scroll-in animations to sections (respecting prefers-reduced-motion), and confirm all images use next/image. Then set up a vercel.json if needed and give me the exact commands to deploy to Vercel.
```

---

**Before you start:** drop in your real resume PDF, project screenshots/gifs (especially Smart Cric footage), and finalized project copy — the agent will placeholder these otherwise, and you'll want the real assets in before Phase 5.
