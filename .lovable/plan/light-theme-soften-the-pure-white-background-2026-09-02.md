# Light theme: soften the pure-white background

## Current state
In `src/index.css`, the light theme uses `--background: 0 0% 100%` (pure white) and `--card: 200 100% 97%` (the existing water-light tint `#F0F9FF`). So the page is bright white and cards are the slightly tinted surface — that's low contrast and harsh on the eyes.

## Change: invert the relationship
1. **Background** becomes a soft, cool off-white drawn from the existing water palette family: `--background: 200 60% 97%` (a very light water tint, roughly `#F1F7FA`). Calm, not white, and consistent with the water/blue light theme.
2. **Cards / surfaces** become clean white (`--card: 0 0% 100%`), so panels now lift *above* the tinted page instead of blending into white. This matches the tech-stack orbs, which are already white in light mode.
3. **Supporting tokens** get the same subtle cool tint so nothing looks patched on:
   - `--popover` -> white (matches cards)
   - `--secondary` / `--muted` / `--accent` -> a slightly deeper water tint than the background so hover/muted states remain visible
   - `--border` -> a touch cooler and marginally darker so card edges still read against the tinted page
4. **Text** stays the existing dark `0 0% 15%` — contrast against the new background remains well above WCAG AA.
5. No new hues introduced: everything stays in the existing water/blue light-theme family, and the dark theme is untouched.

## Verification
Check hero, tech stack, experience, projects, contact, and the navbar in light mode to confirm surfaces still separate cleanly from the background and no section looks washed out.

## Files
- `src/index.css` — light-theme token values only.

## Result
An eye-friendly, softly tinted light theme where white cards float above the page, still fully on-brand with the existing water palette.
