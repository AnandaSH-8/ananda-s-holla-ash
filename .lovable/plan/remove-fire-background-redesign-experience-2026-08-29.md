# Remove Fire Background + Redesign Experience

## 1. Remove the fire background (light theme)

- `BackgroundScene.tsx`: drop the light-theme fire video, poster and imports; keep only the sea clip for dark mode.
- Light theme falls back to the plain themed background (`bg-background`), so sections stay readable without a scrim fighting the content.
- Delete the now-unused fire asset pointer and poster from `src/assets`.

## 2. New Experience section

Replace the current two-column card layout ("Professional Journey" + "Project Experience") with a **vertical timeline** of the two real roles from the resume, at one company.

```text
   Sheshi Pvt. Ltd.  ·  Bengaluru, India  ·  3.6 yrs
   |
   ●  Software Development Engineer - 2      Apr 2025 - Apr 2026
   |    - Backend for Admin & Organization modules, hierarchical data flows
   |    - 40+ REST APIs with NestJS + PostgreSQL, contract-first with product
   |    - 30+ PostgreSQL databases: schema evolution, migration, sync
   |    - Automated template migration via backend services + AWS Lambda
   |    - Redis caching, SQL query tuning, DB indexing, DTO validation
   |    [NestJS] [PostgreSQL] [Redis] [AWS Lambda]
   |
   ●  Software Development Engineer          Sep 2022 - Mar 2025
   |    - Responsive UIs in Vue.js, Vuetify, Vuex, Bootstrap
   |    - APIs with NestJS, Express, Node.js, PostgreSQL
   |    - Complex multi-table SQL joins, transactions, reporting aggregation
   |    - Redis caching cut response times on data-intensive APIs
        [Vue.js] [Vuex] [Node.js] [Express] [NestJS]
```

Only the highest-signal bullets are kept (metrics and named tech first); filler lines like generic "collaborated with teams" are dropped or folded into one line.

### Style

- Glassmorphism panels (`bg-card/60 backdrop-blur-xl`) matching the tech-stack treatment, no hard borders.
- A gradient spine running down the timeline: blue-purple in light, orange-red in dark — same tokens as the section headings.
- Role dots glow in the theme accent; the active/hovered entry brightens its dot.

### Animation (Framer Motion)

- Spine draws downward (`scaleY` 0 -> 1) as the section enters view.
- Each role card slides in from the left with a stagger; bullets fade in one by one after their card.
- Bullet markers are small animated flame/droplet dots per theme.
- Tech chips scale slightly on hover; card lifts a few px with a soft accent shadow.
- All motion respects `prefers-reduced-motion` via the existing `SectionReveal` pattern.

## Technical notes

- Changes limited to `src/components/Experience.tsx` and `src/components/BackgroundScene.tsx` (plus asset cleanup).
- Experience data moves into a typed array of roles with `bullets` and `tech` fields so it is easy to edit later.
- The `#experience` id and section-TOC anchor stay unchanged.
