# Hero + About redesign — "Future Kinetic Glass"

Building the direction you picked, adapted to the existing light/dark theming (blue water in light, saffron in dark) instead of the prototype's fixed dark palette.

## Typography
- Swap the Inter font link in `index.html` for **Space Grotesk** (headings) + **DM Sans** (body).
- Add `font-display` (Space Grotesk) and `font-sans` (DM Sans) to `tailwind.config.ts`; set DM Sans as the body font in `src/index.css`.

## Hero
- Two-column layout with generous spacing. Left column:
  - Small eyebrow: a short accent rule plus `FULL-STACK ENGINEER` in wide-tracked uppercase, accent colored (blue light / orange dark).
  - Giant `ASH` wordmark in Space Grotesk at `clamp(5rem, 15vw, 10rem)`, tight leading, with the middle `S` in the opposite accent. A thin corner bracket sits behind the top-left.
  - Keep the existing click-to-expand behavior: clicking `ASH` springs open "Ananda S Holla" underneath (Framer Motion height + fade), instead of the current hover-only version.
  - One-line positioning statement in muted body text.
  - Pill CTAs: filled accent "Let's Work Together" with an arrow that slides in on hover, plus outlined "Get Resume" and "View Projects".
  - Social links as understated uppercase text links (GitHub, LinkedIn, Email, X) that pick up the cyan accent on hover.
- Right column: the circular photo kept, now nested in a glass ring (blurred translucent shell, thin border) over a large soft blue-to-saffron radial glow. A rotated accent badge — "3.6 YEARS EXP" — tucks under the circle. Photo desaturates slightly at rest and comes to full color on hover; the existing animated hover ring stays.
- Existing bubble/ember ambience is retained but toned down so it reads as atmosphere.

## About — bento grid
Replace the current two-column card layout with a 12-column bento:
- **Intro (8 cols)** — glass card, "Crafting the invisible architecture" heading with the accent on the second half, plus the existing intro copy. Soft accent glow bleeding from a corner.
- **Focus Areas (4 cols)** — solid accent-gradient card with a numbered 01–04 list (Scalable Systems, Interactive Frontend, Cloud Architecture, API & Data Design).
- **Experience (4 cols)** — saffron card with a big `3.6+` numeral and a one-line summary.
- **Collaboration (8 cols)** — glass card with the collaboration copy beside four small tech tiles (React, Next.js, Node, More).
- Cards reveal with a stagger and lift subtly on hover; reduced-motion users get static states.

## Theming rules
- No hardcoded hex. Light theme uses the existing water blues on the soft off-white background with white glass surfaces; dark theme uses the saffron/orange accents over the sea background. All accents come from the current palette.

## Files
- `index.html` — font links
- `tailwind.config.ts` — font families
- `src/index.css` — body font, any new keyframes
- `src/components/Hero.tsx` — rebuilt
- `src/components/About.tsx` — rebuilt

## Verification
Screenshot both sections in light and dark at desktop and mobile widths, and confirm the ASH click interaction still works.
