# PRD — AI/CV Engineer Portfolio

## 1. Overview
A personal portfolio site for Abdul, positioned as an **AI & Computer Vision Engineer | Full-Stack Developer**. The site's job is to get recruiters/clients to (a) understand his CV/AI depth is real and deployed, not academic, and (b) see that he can ship the full product around it.

## 2. Goals
- Primary: convert a visitor into a contact/resume-download within one scroll session.
- Secondary: the site itself functions as a live "project" — proof of full-stack + design capability.
- Tertiary: SEO-discoverable for "AI engineer," "computer vision engineer," "full-stack developer" searches tied to his name.

## 3. Target audience
- Technical recruiters / hiring managers (fast skim, need proof of shipped work in <30 sec)
- Engineering peers / potential collaborators (want technical depth, stack details)
- Freelance/contract clients (want case studies with outcomes, not just tech lists)

## 4. Non-goals (out of scope v1)
- Blog/CMS functionality
- Multi-language support
- User accounts/auth
- Dark/light theme toggle (single, intentional theme only)

## 5. User stories
- As a recruiter, I can see in the first screen what Abdul does and one proof point, without scrolling.
- As a recruiter on mobile, the site is fully usable one-handed — no horizontal scroll, no tiny tap targets.
- As a peer engineer, I can find the specific frameworks/models used per project (not just "AI").
- As any visitor, I can download a resume and find contact/LinkedIn/GitHub in under 2 clicks.

## 6. Features / Requirements

| Feature | Priority | Notes |
|---|---|---|
| Hero with clear positioning + CTA | P0 | Gradient headline, resume + projects CTA |
| About (career arc) | P0 | DevNodes → Heapware → Intermarket Knit |
| AI/CV Spotlight section | P0 | Differentiator — Smart Cric, facial attendance |
| Projects (case-study cards) | P0 | Problem → build → role → outcome, 5 projects |
| Skills (tiered, not flat cloud) | P0 | AI/CV tier + Full-Stack tier |
| Contact section | P0 | Email, LinkedIn, GitHub, resume download |
| Mobile responsiveness | P0 | 375px–1440px, tested breakpoints |
| Scroll-in animations | P1 | Respect `prefers-reduced-motion` |
| Resume PDF download | P0 | Static asset, tracked click (optional analytics) |
| Contact form (vs. mailto) | P2 | Deferred — mailto link is fine for v1 |
| Analytics | P2 | Vercel Analytics, optional |

## 7. Success metrics
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95 (mobile)
- Time-to-first-CTA-visible < 1.5s on 4G
- Resume download / contact click-through tracked post-launch

## 8. Content dependencies (blocking before launch)
- Final project case-study copy (5 projects)
- Smart Cric demo footage/gif
- Facial attendance system screenshots (non-identifying, or synthetic/demo footage)
- Final resume PDF
- Real skills list finalized (exact frameworks/model versions)

## 9. Milestones
1. Design tokens + style guide approved
2. Static structural build (all sections, placeholder content)
3. Real content + assets swapped in
4. Responsiveness + performance pass
5. Deploy to Vercel + custom domain (if applicable)
