# Abdul Hadi — Portfolio

Personal portfolio site for **Abdul Hadi**, software engineer working across
full-stack web/mobile and applied computer vision.

**Live:** https://abdulhadi089.github.io/MY-Portfolio

Single-page site: hero, about, selected work, experience, process, toolkit and
contact. Visitors can download the CV and send a message without leaving the page.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | CSS custom properties + Tailwind v4 (`app/globals.css`) |
| Fonts | Sora / Inter / JetBrains Mono via `next/font` |
| Hero visual | Hand-written 2D canvas point lattice — no 3D library |
| Icons | Local inline SVG set (`components/icons.tsx`) |
| Runtime deps | `next`, `react`, `react-dom` — nothing else |

The site ships as pure static HTML/CSS/JS. There is no server, database or
build-time API call.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export into out/
npm run typecheck  # tsc --noEmit
npm run lint
```

## Configuration

Every environment variable is optional — the site builds and works without any
of them. Copy `.env.example` to `.env.local` to set them locally.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Sub-path the site is served from. `/MY-Portfolio` on GitHub Pages; empty for Vercel or a custom domain. |
| `NEXT_PUBLIC_SITE_URL` | Absolute URL used for canonical links, Open Graph and JSON-LD. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Optional [Web3Forms](https://web3forms.com) access key. See below. |

### Contact form

The form validates in the browser, then delivers in one of two ways:

- **With `NEXT_PUBLIC_WEB3FORMS_KEY` set** — the message is POSTed to Web3Forms
  and arrives in the inbox directly. The visitor never leaves the page.
- **Without a key (default)** — the form falls back to opening the visitor's
  email client with the message pre-filled, addressed to `anhadisk11@gmail.com`.

Nothing is broken in either mode. To turn on direct delivery, get a free access
key from [web3forms.com](https://web3forms.com) and add it as a repository
secret named `WEB3FORMS_KEY` (Settings → Secrets and variables → Actions). The
next deploy picks it up.

If a Web3Forms request fails at runtime, the form automatically falls back to
the mail-client flow rather than losing the message.

## Deployment

### GitHub Pages (automatic)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
It sets the base path from the Pages configuration, writes `.nojekyll` so the
`_next/` directory survives, and deploys via `actions/deploy-pages`.

The workflow enables Pages on first run. If it is ever turned off, re-enable it
under **Settings → Pages → Source: GitHub Actions**.

### Vercel

`vercel.json` is committed and ready. Import the repository at
[vercel.com/new](https://vercel.com/new) and deploy — no build settings to
change. Leave `NEXT_PUBLIC_BASE_PATH` unset so the site serves from the domain
root, and set `NEXT_PUBLIC_SITE_URL` to the Vercel or custom domain.

## Content

All copy, projects, experience and skills live in **`lib/content.ts`**. Editing
that one file changes the whole site — no component edits needed.

The CV is served from `public/cv/`. The PDF is generated from
`scripts/cv-source.html`:

```bash
node scripts/render-cv.mjs "$PWD/scripts/cv-source.html" "$PWD/public/cv/Abdul-Hadi-CV.pdf"
```

(Requires Playwright available locally; the committed PDF is the source of truth
for the site.)

## Project layout

```
app/            layout, page composition, global styles, icon
components/     one file per section, plus client-side behaviour
lib/content.ts  all site content
lib/asset.ts    base-path-aware public asset URLs
public/cv/      downloadable CV (PDF + DOCX)
public/media/   Smart Cric demo video
docs/planning/  historical planning docs (superseded)
```
