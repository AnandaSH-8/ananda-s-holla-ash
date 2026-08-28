# Plan: Contain & make the Tech Stack stream clearly visible

## Current state (verified)
- `src/components/TechStack.tsx` renders the 11 tech orbs as a continuously flowing horizontal stream (`motion.div` animating `x: ["-50%", "0%"]` on a duplicated list, `w-max`, infinite linear loop).
- The stream row is full-width (only `px-4` padding) with left/right `from-background` fade gradients. There is no bordered container around it.
- Orbs use `bg-card/30 backdrop-blur-xl` glass over the animated `BackgroundScene` video. At this low opacity they blend into the background, so the section reads as nearly empty in the user's preview.
- The orbs ARE rendering (confirmed via Playwright screenshot), but they are too faint and uncontained.

## Changes (scoped to `src/components/TechStack.tsx` only)

1. **Wrap the flowing stream in a visible glass container.**
   - Put the fade-gradient + `motion.div` stream inside a single bordered, rounded container:
     `relative rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl px-2 py-2` (higher `bg-card` opacity than the orbs for clear separation from the background video), constrained to `mx-auto max-w-7xl`.
   - Keep `overflow-hidden` on this container so orbs clip cleanly at the rounded edges; move the fade gradients inside the container.

2. **Boost orb visibility.**
   - Raise orb background to `bg-card/70` (from `/30`) and add a slightly stronger border `border-border/70` so each tech icon reads clearly against the background scene.
   - Keep brand-color glow (`boxShadow`) and radial-gradient tint as-is.

3. **Keep all existing animation behavior.**
   - Infinite left-to-right linear loop, hover-to-slow + dim-others, `whileHover` scale spring, per-item float wave. No functional logic changes.

## What is NOT changing
- No tech list changes (same 11 technologies).
- No new components; no dependency changes.
- Background scene, headings, gradients untouched.

## Acceptance
- All 11 tech orbs are clearly visible inside a rounded bordered container over the background video, in both light and dark themes.
- The continuous flowing stream still loops seamlessly; hover still slows and highlights.
