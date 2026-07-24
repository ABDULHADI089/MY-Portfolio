# Architecture — AI/CV Engineer Portfolio

## 1. System overview
A single-page, statically-generated Next.js site. No backend, no database, no auth. All content is compiled at build time and served as static assets via Vercel's CDN — the entire "system" is: build once → serve globally → redeploy on content change.

```
┌─────────────────────────────────────────────┐
│                 Vercel (CDN)                  │
│  ┌─────────────────────────────────────────┐ │
│  │        Next.js 14 (App Router, SSG)      │ │
│  │                                           │ │
│  │  /app/page.tsx  ─── composes sections ── │ │
│  │       │                                  │ │
│  │       ├── Hero                           │ │
│  │       ├── About                          │ │
│  │       ├── AICVSpotlight                  │ │
│  │       ├── Projects  ← reads /lib/data.ts │ │
│  │       ├── Skills    ← reads /lib/data.ts │ │
│  │       └── Contact                        │ │
│  │                                           │ │
│  │  Static assets: /public/images, resume.pdf│ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
              ▲
              │ push to main → auto-build
              │
        GitHub repo
```

## 2. Why static, no DB
Content (projects, skills, career history) changes a handful of times a year. Introducing Supabase/a CMS adds auth, latency, and a query layer for content that's essentially fixed at deploy time. Content lives as typed TypeScript objects in `/lib/data.ts` — editing it is a git commit, which is also simpler to review/version than a database row.

**When this changes:** if a future version needs a blog, an admin-editable case-study builder, or dynamic project ordering by visitor analytics — that's the trigger to introduce Supabase + an API layer. Not before.

## 3. Request flow
1. Visitor requests the URL.
2. Vercel CDN serves the pre-built static HTML/CSS/JS (no server compute per request).
3. Client hydrates only the components that need interactivity (nav toggle, scroll-reveal observer, project card hover state).
4. Resume download / mailto / social links are direct static/anchor links — no server round-trip.

## 4. Deployment pipeline
```
git push → GitHub → Vercel webhook → build (next build) → deploy to CDN
                                    ↳ preview deploy for PRs/branches
                                    ↳ production deploy on main
```

## 5. Third-party dependencies
- **Vercel** — hosting, CDN, preview deployments, (optional) Analytics
- **next/font** — Space Grotesk, Inter, IBM Plex Mono, self-hosted via Next (no external font CDN request)
- No auth provider, no database, no external API calls at runtime for v1

## 6. Scaling / future considerations
- If a contact form (vs. mailto) is added later: a lightweight serverless function (Vercel Function) posting to an email service (Resend/SendGrid) — still no persistent DB needed.
- If case studies grow long-form (blog-style): consider MDX for content authoring before reaching for a full CMS.
- Analytics: Vercel Analytics is the lowest-friction add — no separate account, privacy-friendly, drop-in.
