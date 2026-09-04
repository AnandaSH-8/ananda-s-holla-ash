# About Me — "Glassmorphic Split" redesign

Building the direction you picked (v2), adapted to the existing light/dark theming (blue/cyan in light, saffron/orange in dark) and the current About content.

## Layout
Two-column split inside the existing section, keeping the centered gradient "About Me" heading + animated underline bar for consistency with Tech Stack / Experience / Featured Projects.

- **Left column (5/12):**
  - "Crafting the **invisible architecture**" headline with the accent on the second half (blue gradient light / orange gradient dark).
  - The two existing intro paragraphs, unchanged.
  - A compact glass stat card: large `3.6+` numeral (accent color) + "YEARS EXPERIENCE" label, a thin vertical divider, and the existing one-line experience summary. This is the **only** number in the section.

- **Right column (7/12):**
  - 2×2 grid of focus-area cards, each a glass surface with: a small accent-tinted icon tile, the focus name, and a one-line description.
  - Keep the four existing focus areas: Scalable Systems, Interactive Frontend, Cloud Architecture, API & Data Design.
  - **No index numbers** (01–04 removed).

## Theming & tokens
- No hardcoded slate/zinc/hex. Use semantic tokens (`bg-card`, `border`, `text-foreground`, `text-muted-foreground`) and the existing blue light / saffron dark accents (`text-blue-600 dark:text-orange-400`, `bg-blue-50 dark:bg-orange-500/10`, etc.).
- Glass surfaces: `bg-card/70 backdrop-blur-xl border border-border` with consistent `rounded-3xl` radii.

## Interaction & motion
- Cards lift subtly on hover (border accent + shadow).
- Staggered fade-and-rise reveal via Framer Motion `whileInView`; reduced-motion users get static state (reuse the existing `useReducedMotion` pattern).

## Files
- `src/components/About.tsx` — rebuilt (icons via `lucide-react`, already a dependency)

## Verification
- `npx tsgo --noEmit` passes.
- Playwright screenshots of About in light and dark at desktop + mobile widths; confirm no numbers except `3.6+`, text is cohesive, and hover lift works.
