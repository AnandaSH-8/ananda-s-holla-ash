# Navbar redesign: floating pill nav

## Current state
`src/components/Navigation.tsx` renders a full-width flat strip (`bg-card/80 backdrop-blur-md border-b`) with plain text links (Home, About, Tech Stack, Experience, Projects, Contact) and a static underline on the active link. Links are hidden on mobile (`hidden md:flex`) with no hamburger fallback.

## New design — floating pill nav
1. **Floating capsule container**: the link row becomes a centered `rounded-full` glass pill floating below the top edge — translucent `bg-card/70`, `backdrop-blur-xl`, thin `border-border` border, soft shadow. The full-width strip and bottom border go away.
2. **Sliding active indicator**: instead of the underline, the active link gets a gradient pill behind the text (saffron/orange in light, blue in dark, matching the existing section-accent convention) that slides between links using Framer Motion `layoutId` for a smooth physical transition. Active text flips to `primary-foreground`-readable contrast.
3. **Hover micro-interactions**: non-active links get a subtle lift + `muted-foreground` → `foreground` color transition; a soft radial glow follows hover. Small scale press feedback on click.
4. **Layout**: AnimatedLogo stays left, ThemeToggle right, both outside the pill on a transparent floating row (no full-width bar background), so the navbar reads as three floating pieces.
5. **Mobile**: add a hamburger button (shown below `md`) that opens a drop-down glass panel with the nav items stacked, staggered fade/slide-in, and the same active pill styling. Panel closes on selection.
6. **Consistency**: scroll-spy logic (`activeSection`) and smooth-scroll behavior stay unchanged. Colors come from existing semantic tokens + the established orange/blue theme accents only — no new palette colors. Reduced-motion users get instant state changes (respect `prefers-reduced-motion`).

## Files
- `src/components/Navigation.tsx` — full redesign of the nav markup/styles (the only file changed).
- Framer Motion is already installed (`SectionReveal` uses it) — reuse `motion`/`layoutId`, no new dependencies.

## Result
A modern floating pill navbar with a sliding gradient active indicator, glass styling, hover micro-interactions, and a working mobile menu — in both light and dark themes.
