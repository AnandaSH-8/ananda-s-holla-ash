# Navbar: wrap everything in a floating container

## Problem
Today only the link row sits inside a glass pill. The logo (left) and theme toggle (right) float on a transparent row, so when the page scrolls, content passes directly behind them with no surface — they read as loose text/icons over the content.

## Change
1. Wrap the whole navbar row (logo + link pill + theme toggle) in a single floating glass container: `rounded-full` (or `rounded-2xl`), `bg-card/80`, `backdrop-blur-xl`, thin `border-border`, soft shadow — same token set already used for the link pill, so no new colors.
2. Keep the inner active-link indicator (sliding gradient pill via `layoutId`) as is; drop the now-redundant separate pill background on the link row so there aren't two nested glass surfaces — links sit directly inside the outer container.
3. Scroll-aware polish: transparent/minimal at the very top, and once the user scrolls past ~20px, the container gains its full background, border, blur, and shadow with a smooth transition. This keeps the hero clean and guarantees readability over scrolled content.
4. Mobile: hamburger stays inside the same container; the dropdown panel keeps its existing glass styling and sits below it.
5. Reduced-motion users get instant state changes; scroll-spy and smooth scrolling are unchanged.

## Files
- `src/components/Navigation.tsx` — only file changed.

## Result
The navbar reads as one solid floating bar that always keeps its content legible above scrolling page content.
