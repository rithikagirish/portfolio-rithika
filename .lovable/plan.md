# Rebrand: Docs Template → Personal Portfolio

## Goal
Transform the Compass documentation/knowledge hub template into a single-page personal portfolio for G. Rithika, a CS/AI engineering student. Keep the React + Tailwind + Motion stack; replace content, navigation, and visual identity.

## Design Direction
- **Palette**: Midnight Indigo — deep navy (#0a0a1a) background, electric indigo (#4f46e5) accent, layered surface tones (#141432, #1e1e5a).
- **Typography**: JetBrains Mono for headings/UI, Work Sans for body text.
- **Layout**: Hero Grid — bold hero section + responsive card grid for featured projects.
- **Motion**: Keep existing Framer Motion blur-in + stagger patterns, retimed to portfolio content.

## Sections to Build
1. **Navigation** — replace Docs/API/Changelog with About, Projects, Experience, Contact anchors.
2. **Hero** — name, role/tagline, brief summary, CTA buttons (Resume / View Projects), keep cinematic background but retone to indigo.
3. **About / Skills** — concise professional summary + categorized skill chips (Languages, Web/Frameworks, AI/ML, Databases/Tools).
4. **Featured Projects** — three project cards (DeepShield, AI Mental Wellness Chatbot, Deadlock/Banker's Simulator) with descriptions, tags, and GitHub links.
5. **Experience** — XDigics SDE/AI internship and Epiroc Python internship as timeline cards.
6. **Education & Leadership** — degree, CGPA, certifications, and roles.
7. **Contact** — email, LinkedIn, GitHub links + simple CTA.
8. **Footer** — updated copyright and brand name.

## Technical Changes
1. Install fonts: `@fontsource/jetbrains-mono` and `@fontsource/work-sans`.
2. Import fonts in `src/main.tsx` and update `tailwind.config.ts` font family.
3. Update `src/index.css` color tokens to Midnight Indigo HSL values.
4. Update `index.html` title, meta description, and remove Compass-specific favicon/OG tags.
5. Update `src/components/Seo.tsx` base URL and site name.
6. Replace `src/components/navbar/Logo.tsx` with personal brand mark.
7. Rewrite `src/pages/Index.tsx` to render the new portfolio sections.
8. Replace `src/components/hero/Hero.tsx` content; keep background structure.
9. Replace `src/components/categories/Categories.tsx` with a `Projects` grid.
10. Replace `src/components/support/Support.tsx` with `Skills` / `Experience` section.
11. Replace `src/components/ai-assistant/AIAssistant.tsx` with a `Contact` section.
12. Update `src/components/footer/Footer.tsx` copy.

## Out of Scope
- No backend changes; contact form remains link-based (mailto / LinkedIn / GitHub).
- Keep existing documentation/API/changelog routes alive but not actively redesigned; navigation will no longer surface them.
- Do not add a new router or new pages.

## Success Check
- Build passes with `bun run build`.
- Home page reads as Rithika's portfolio with correct typography, colors, and sections.
- Mobile viewport has no horizontal overflow and sections stack cleanly.