# Hero polish + About cleanup

## Hero
- **ASH color**: drop the near-black `text-foreground` wordmark. The whole `ASH` gets the theme accent — blue/cyan gradient in light, saffron/orange gradient in dark — with the middle `S` in the contrasting accent so it still has a highlight.
- **Remove the "3.6 YEARS EXP" badge** under the photo. Photo keeps its glass ring and hover ring.
- **Full name on hover, not click**: remove the "Tap to reveal full name" caption and the click toggle. Hovering (or keyboard focus) the `ASH` wordmark floats "Ananda S Holla" in — soft rise + fade with a gentle floating drift, accent colored. It sits in reserved space so nothing below jumps. On touch devices a tap still reveals it.
- Reduced-motion users get a plain fade.

## About — simpler, cleaner
Replace the four-card bento (which reads busy: two loud gradient blocks, mixed radii, tech tiles) with a calm layout:
- Section heading stays as is (gradient "About Me" + `01 — Who I am` label).
- **One wide intro panel**: "Crafting the invisible architecture" heading with accent on the second half, plus the two existing paragraphs. Single subtle glass card, no gradient fill, no corner glow blobs.
- **Below it, a light row of four focus items** (Scalable Systems, Interactive Frontend, Cloud Architecture, API & Data Design) as minimal entries — small numeral `01–04`, label, thin divider. No colored gradient card.
- **A slim stat line** carrying `3.6+ years` and the one-line experience summary, plus the collaboration sentence — presented as quiet text, not a filled block.
- Consistent radii, consistent border/`bg-card` surface, generous whitespace, one accent color per theme. Reveal with a light stagger; reduced motion static.

## Files
- `src/components/Hero.tsx`
- `src/components/About.tsx`

## Verification
Screenshots of Hero and About in light and dark at desktop and mobile, plus a hover check that the full name floats in.
