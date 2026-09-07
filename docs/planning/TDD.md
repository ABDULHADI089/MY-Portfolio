# TDD — AI/CV Engineer Portfolio

## 1. Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS variables for design tokens
- **Hosting:** Vercel
- **Data (optional, if project data is externalized):** Supabase (Postgres) — only if content is meant to be editable without redeploying; otherwise projects live in a local TS/JSON file (recommended for v1 — simpler, faster, no DB needed for a static portfolio)
- **Fonts:** Space Grotesk, Inter, IBM Plex Mono via `next/font`
- **Icons:** lucide-react

**Decision:** For v1, keep it fully static (no DB). Project/skills content lives in `/lib/data.ts` as typed objects. This avoids Supabase auth/latency overhead for content that changes maybe twice a year. Revisit only if a CMS-editing workflow becomes a real need.

## 2. Rendering strategy
- Static Site Generation (SSG) for all pages — this is a portfolio, content doesn't change per-request.
- `generateMetadata` per page for SEO (title, description, OG image).
- No client components except where interaction is required (nav toggle, scroll-in animation triggers, hover card states).

## 3. Folder structure
```
/app
  layout.tsx
  page.tsx              // single-page portfolio, sections as components
  globals.css
/components
  Nav.tsx
  Hero.tsx
  About.tsx
  AICVSpotlight.tsx
  Projects.tsx
  ProjectCard.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  ui/
    GradientText.tsx
    BracketFrame.tsx     // the corner-bracket motif, reusable
    MonoTag.tsx           // "role: cv_engineer · conf: 0.97" style tag
/lib
  data.ts                // projects, skills, career history — typed content
  types.ts
/public
  /images
  resume.pdf
```

## 4. Component design

**BracketFrame** — wraps any child (hero visual, project card) in the corner-bracket motif. Props: `accentColor`, `label` (mono tag text), `active` (hover/glow state). Built once, reused everywhere the motif appears — keeps the "signature element" consistent instead of hand-coded per section.

**ProjectCard** — props: `title`, `tags[]`, `summary`, `role`, `outcome`, `image`, `href?`. Renders BracketFrame on hover only (base state calm).

**GradientText** — utility component/class for the primary gradient (`#8B5CF6 → #EC4899 → #22D3EE`) applied to headline text via `background-clip: text`.

## 5. Data model (`lib/types.ts`)
```ts
type Project = {
  id: string;
  title: string;
  category: "ai-cv" | "product";
  tags: string[];
  problem: string;
  build: string;
  role: string;
  outcome: string;
  image: string;
  featured: boolean; // true = shown in AI/CV Spotlight too
};

type SkillGroup = {
  tier: "AI / Computer Vision" | "Full-Stack / Product" | "AI Integration / Automation";
  skills: string[];
};
```

## 6. Responsive breakpoints
| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768px | 1-column, hamburger nav, bracket frames simplified (no blur/glow — perf) |
| Tablet | 768–1024px | 2-column project grid |
| Desktop | > 1024px | 3-column project grid, full hero split layout |

## 7. Performance budget
- Lighthouse Performance ≥ 90 (mobile)
- LCP < 2.5s, CLS < 0.1
- Images: `next/image`, WebP, lazy-loaded below the fold
- No heavy animation libraries — CSS transitions + `IntersectionObserver` for scroll-in reveals, gated behind `prefers-reduced-motion`
- Fonts subset + `display: swap`

## 8. Accessibility
- Semantic landmarks (`nav`, `main`, `section`, `footer`)
- Color contrast checked against `--bg` / `--text-secondary` (verify AA minimum, especially gradient-on-dark text)
- All interactive elements keyboard-navigable, visible focus states
- Alt text on all project images/gifs

## 9. Deployment
- Vercel, connected to GitHub repo, auto-deploy on `main`
- Preview deployments per PR/branch
- Environment: none required for v1 (no API keys, fully static)

## 11. Design Tokens (updated — vibrant theme)
```css
--color-bg: #0D0B2B;
--color-surface: #1A1740;
--color-surface2: #221F52;
--color-violet: #A855F7;
--color-magenta: #F472B6;
--color-cyan: #22D3EE;
--color-amber: #FCD34D;
--color-text-primary: #FFFFFF;
--color-text-secondary: #C4BFEA;
```
- Gradient btn: `linear-gradient(135deg, #A855F7, #F472B6, #22D3EE)`
- Card bg: `linear-gradient(135deg, #1A1740, #221F52)`
- Section glow line: `linear-gradient(90deg, transparent, #A855F760, #22D3EE60, transparent)`
- Hero grid overlay: `#A855F7` at 4% opacity, 60px grid

- Manual responsive QA at 375px / 414px / 768px / 1024px / 1440px
- Lighthouse CI check before merge to `main` (optional GitHub Action)
- Cross-browser: Chrome, Safari, Firefox (mobile Safari especially — iOS is a large chunk of recruiter traffic)
