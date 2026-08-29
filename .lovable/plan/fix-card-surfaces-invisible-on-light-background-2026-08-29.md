# Fix: card surfaces invisible on light background

## Problem
In light theme, `--card` is pure white (`0 0% 100%`) and the page background is also near-white, so the TechStack stream container, Experience timeline cards, and Project cards blend into the page with no visible edge.

## Fix (one token change + border polish)
1. **`src/index.css` — light theme `--card`**: change from pure white to a soft warm tint matching the saffron theme, e.g. `--card: 32 60% 97%` (warm cream). All components using `bg-card/60`-`bg-card/70` automatically gain visible contrast without touching component code.
2. **Strengthen borders** in light mode on the three affected surfaces (slightly darker/more opaque `border-border` tone) so each card has a defined edge:
   - `TechStack.tsx` marquee container + orb elements
   - `Experience.tsx` timeline cards
   - `Projects.tsx` project cards (check they use `bg-card`)
3. **Optional soft shadow** on these cards in light mode (subtle `shadow-md`/elevated token) to lift them off the background.
4. Dark theme: verify unchanged — dark `--card` already contrasts with dark background.

## Result
Cards read clearly against the white page in light mode, themed to the saffron palette; dark mode untouched.
