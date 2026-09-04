# Sunshine Background (Light Theme) + Torch Theme Toggle

## 1. Light-theme animated background

Today the light theme shows a plain flat background while dark theme plays the sea clip. Add a matching warm "sunshine" scene for light mode.

Format: a short looping MP4 (same approach as the sea clip), not a GIF — GIFs at full-screen size are 5-15 MB and grainy; the MP4 is ~1 MB and smoother. It gets a still poster frame so reduced-motion users and slow connections see a clean image.

Visual direction (pick one, default is the first):
- Soft sun rays drifting through a pale sky with slow light haze and gentle lens flare
- Sunrise over calm water — warm horizon glow, slow shimmer (pairs with the dark sea scene)
- Abstract warm gradient with slowly moving golden light blooms (most subtle, least distracting)

Kept deliberately subtle: a strong light scrim (~85%) over it so text and glass cards stay fully readable, exactly like the dark scene's treatment.

## 2. Torch theme toggle

Replace the sun/moon icons in the navbar toggle with a torch (flashlight) symbol:
- Light theme = torch ON: torch icon with a warm glowing beam/halo
- Dark theme = torch OFF: same torch, dimmed, no beam
- Click animates the switch (quick flicker/glow fade), respecting reduced motion
- Accessible label updates to "Turn torch off / on (toggle theme)"

Note the mapping is intentionally inverted from "dark = light needed": you asked for a torch on/off metaphor, and torch-on reads naturally as the bright theme. Say the word if you'd rather have torch-on in dark mode.

## Technical notes

- Generate the clip + poster, compress with ffmpeg (`scale=1280:-2`, crf 30, no audio, faststart), store in `public/` like `bg-sea.mp4` so it works on non-Lovable hosting too.
- `src/components/BackgroundScene.tsx`: light branch gets its own `<video>` layer with the same force-muted autoplay retry logic and a light scrim; dark branch unchanged.
- `src/components/ThemeToggle.tsx`: swap Sun/Moon for lucide `Flashlight` / `FlashlightOff` with a CSS glow layer driven by the theme class; no change to theme persistence logic.
