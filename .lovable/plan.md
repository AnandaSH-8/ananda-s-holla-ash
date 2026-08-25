# Animated Background: Beach (Dark) & Fire (Light)

## What you'll get

A full-screen animated background behind the entire site:

- **Dark mode:** sea and beach scene, gently moving waves
- **Light mode:** warm fire / flames scene

The background stays fixed while you scroll, sits behind all content, and swaps automatically with the theme toggle.

Note on the mapping: you asked for sea in dark mode and fire in light mode. That's what the plan implements — say the word if you'd rather flip it (fire suits dark, water suits light, matching the current hero effects).

## Format: looping video instead of GIF

GIFs at full-screen size are heavy (often 5-15 MB) and look grainy. Instead we generate short looping MP4 clips (same visual result, far smaller, smoother) and render them muted/looping/autoplay as the background layer. Each clip also gets a still poster frame so there is no blank flash before playback and reduced-motion users see only the still.

## Implementation

1. Generate two 5s looping clips plus matching still frames:
   - beach/sea at dusk, slow waves (dark theme)
   - close-up campfire flames on dark warm backdrop (light theme)
   Upload all four via the asset pipeline so the repo stays light.
2. New `src/components/BackgroundScene.tsx`:
   - `fixed inset-0 -z-10 pointer-events-none` container
   - two `<video autoplay muted loop playsinline preload="metadata">` layers, one shown via `dark:hidden`, the other via `hidden dark:block`
   - poster image on each; `prefers-reduced-motion` renders the poster image only
   - a readability overlay above the video: light theme white/cream scrim, dark theme deep navy scrim, so text contrast stays accessible
3. Mount it once in `src/pages/Index.tsx` (and `NotFound`) above the existing content.
4. Make existing section backgrounds translucent so the scene shows through — Hero's solid gradient and the other sections' opaque backgrounds become semi-transparent (`bg-background/70` style tokens with backdrop blur), keeping current glassmorphism cards readable.

## Technical notes

- Videos are `object-cover` so they fill any viewport without distortion.
- Background layer is non-interactive and outside the scroll flow, so scroll progress, TOC rail, and reveal animations are unaffected.
- Overlay opacity tuned per theme to keep body text at accessible contrast.
