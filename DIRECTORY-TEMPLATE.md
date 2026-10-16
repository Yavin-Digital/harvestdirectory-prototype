# Doorstep Local directory template (PROTOTYPE ONLY)

The Harvest Directory prototype is now a template. The pages, CSS and JS in `template/` are the same Harvest layout and MARCO band system. Everything that is specific to a neighborhood lives in one file: `directories/<slug>/config.js`.

```
template/                 pages + css + js with {{tokens}} (never neighborhood text)
directories/_shared.js    platform defaults: plan price, join features + FAQ, categories, CTAs, search chips
directories/_blank/       documented empty config, copy this to start a directory
directories/harvest/      first filled config + its images (assets/)
directories/canyon-falls/ directories/pecan-square/ directories/the-ridge/
build.mjs                 renders template + config -> dist/<slug>/   (Node 18+, no npm install)
dist/                     build output (git-ignored); this is what gets published to the preview
```
The repo root (`index.html`, `js/site.js` ...) is the Harvest build (`node build.mjs harvest --out .`), so the Harvest prototype keeps working from the repo root as before.

## Spin up a new directory
1. `cp -r directories/_blank directories/<slug>` and fill in `config.js`. Every field is documented in the blank file.
2. Put the logo, favicon and hero photos in `directories/<slug>/assets/`. Real files only, at least 1.5x their display size, never upscaled (desktop hero >= 1920px wide, mobile hero >= 1280px). No photo? Leave `brand.hero: null` and the hero uses the brand gradient.
3. `node build.mjs <slug>` and open `dist/<slug>/index.html` through `python3 -m http.server`.
4. Publish `dist/<slug>/` to `Yavin-Digital/<name>directory-preview` (GitHub Pages, `CNAME` = `<name>directory-preview.clientreview.co`; the `*.clientreview.co` wildcard already points at GitHub Pages, never touch it).

`node build.mjs --all` rebuilds every directory. The build fails on any unknown `{{token}}`, so a template typo can't ship.

## Data rules
- Never invent data. Unknown = empty. Empty sections hide themselves (Right Now, featured, deals, Ask, quick links, groups).
- Resident-info sections (Who serves my street, Important contacts, guide chapters, Help, the Neighborhood info column, the guide nav link) only render once that directory's `profile` has entries.
- No HOA board roster. Name the association / management company and its official contact only.
- Every `profile` entry carries `src` (the page checked) and `verified` (date). It shows as "Source" and "Last verified".
- `source:"example"` items always show the Example tag. Example guide items only show with `?review=1`.
- Split neighborhoods: give entries a `side` and fill `sides.options` (Harvest: West/East of Harvest Way; Canyon Falls: Argyle/ETJ, Northlake, Flower Mound).

## Pipeline
Prototype only. No Phase 3 and no `@app-update` for these. Work goes feature branch -> draft PR; nothing merges to `main` without Mike.
