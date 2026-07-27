# zhj — Zoe Hickey's personal site

Vite + React, styled after the [Atlas Studio](https://atlas-studio.framer.website/) Framer
template: diagonal pastel gradients, condensed display type, coral accents, hairline
dividers, and a marquee band between sections.

## Structure

- `/` — landing page
- `/about/zoe`, `/about/cv`
- `/algorithms/decision-making`, `/algorithms/neurips`, `/algorithms/other`
- `/fun/alaska`, `/fun/yoga`

Nav dropdowns and routes are defined in `src/components/Nav.jsx` and `src/App.jsx`.

## Adding real content

Search the codebase for square-bracket placeholders like `[ your bio goes here ]` and
dashed `Placeholder` blocks (photo/figure slots) — replace them with real copy and
images. Drop image files in `src/assets/` and `import` them into the relevant page.

The GitHub/YouTube links on the Algorithms pages and the CV download button are
disabled placeholders — wire them up once those exist.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build     # production build to dist/
npm run deploy    # publish dist/ to the gh-pages branch (GitHub Pages)
```

This site is configured to deploy to `https://zahickey.github.io/zhj/` (see `base` in
`vite.config.js`). If you rename or move the repo, update that path too.
