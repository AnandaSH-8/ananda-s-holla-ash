# Fix: use existing theme color for surfaces + visible navbar

## Problem
- The previous fix introduced a new cream `--card` color; user wants to reuse an already-defined theme color instead.
- The navbar (`Navigation.tsx`) is `bg-background/80` (near-white) on a white page, so it's indistinguishable from the background — same issue as the cards.

## Fix
1. **`src/index.css` — light theme `--card`**: replace the new custom cream (`32 60% 96%`) with the existing water-theme surface color **`--water-light: 200 100% 97%` (#F0F9FF, soft blue)** — matches the light/water theme. Change `--card` to `200 100% 97%`. This flows automatically into Tech Stack container/orbs, Experience cards, and Project cards (all use `bg-card`).
2. **`src/components/Navigation.tsx`**: change navbar surface from `bg-background/80` to `bg-card/80` (light: soft water blue; dark: existing dark card color) with the existing bottom border, so the bar reads as a distinct strip against the white page in light mode and stays unchanged-looking in dark mode.
3. No new colors introduced — everything comes from existing tokens.

## Result
Cards and navbar use the existing water-light surface in light mode; dark mode unaffected.
