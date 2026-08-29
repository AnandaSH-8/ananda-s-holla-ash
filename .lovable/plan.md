# Tech Stack — enlarge cards & container, white card backgrounds

## Goal
Make the tech-stack orbs slightly bigger, grow the stream container, and give the orb cards a white background in light theme (keep the existing dark card surface in dark theme).

## Changes (all in `src/components/TechStack.tsx`)

1. **Enlarge orb cards**
   - `h-24 w-24 md:h-28 md:w-28` → `h-28 w-28 md:h-32 md:w-32`
   - Icon `h-10 w-10 md:h-12 md:w-12` → `h-12 w-12 md:h-14 md:w-14`

2. **Grow container**
   - Stream box: `py-10` → `py-12`, `max-w-7xl` stays (already the widest token); increase side fade widths from `w-24 md:w-40` → `w-28 md:w-48` so the larger orbs don't clip.
   - Orb item padding `px-6 md:px-9` → `px-8 md:px-12` to space the bigger orbs.

3. **White card backgrounds**
   - Orb card class `bg-card/80` → `bg-white dark:bg-card/90` so light theme shows a clean white circle; dark theme keeps the current dark glass surface.
   - Side fade gradients reference `from-card` — switch to `from-white dark:from-card` so the fade matches the new white card bg.

## Verification
- `tsgo` typecheck after edit.
- Screenshot the section in light and dark themes to confirm bigger orbs, larger container, white circles in light.
