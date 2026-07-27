# Website explained

A map of which file controls which part of the site. Read this before editing —
it tells you where to make a given change instead of hunting through `src/`.

## Entry points & config

| File | Controls |
|---|---|
| `index.html` | The HTML shell: page `<title>`, meta description, Google Fonts (Anton, Inter, Space Mono), and the script that fixes GitHub Pages' handling of direct/refreshed URLs. |
| `src/main.jsx` | Mounts the React app and wraps it in `BrowserRouter` (with `basename="/zhj"` matching the GitHub Pages sub-path). |
| `src/App.jsx` | **The route map.** Every URL path (`/about/zoe`, `/fun/alaska`, etc.) and which page component renders for it lives here. Add a new page by adding a `<Route>` here. |
| `vite.config.js` | Build config. `base: '/zhj/'` must match the GitHub repo name — change it here if the repo is ever renamed/moved. |
| `public/404.html` | GitHub Pages has no server-side router. This redirects unknown paths back to `index.html` so React Router can take over (the "SPA on GitHub Pages" trick). |
| `package.json` | `npm run dev` / `build` / `deploy` scripts. `deploy` publishes `dist/` to the `gh-pages` branch. |

## Design system (site-wide look)

| File | Controls |
|---|---|
| `src/styles/global.css` | **Everything about the visual style lives here**: colors (`--mint`, `--coral`, etc.), fonts, the gradient "band" sections (`.band--gradient-mint/lavender/peach`), the rounded scalloped section transitions (`.band--top/middle/bottom`), the pill buttons (`.pill`), hairline dividers (`.hairline`), the marquee animation, and the dashed content-placeholder style (`.placeholder`). Change a color or font once here and it updates everywhere. |

## Reusable components (`src/components/`)

| File | Controls |
|---|---|
| `Layout.jsx` | The wrapper every page renders inside: nav bar on top, page content in the middle, footer at the bottom. |
| `Nav.jsx` / `Nav.module.css` | The top nav bar and its dropdowns. **The menu structure (About → Zoe/CV, Algorithms Explained → its three pages, Fun → its two pages) is the `NAV_ITEMS` array at the top of `Nav.jsx`** — edit that array to add/rename/reorder menu items. |
| `Footer.jsx` / `Footer.module.css` | The black footer band: name, tagline, email/GitHub/YouTube links, copyright line. |
| `PageHero.jsx` / `PageHero.module.css` | The big gradient header used at the top of every sub-page (title, subtitle, eyebrow label, gradient tone). Used by every page except Home, which has its own hero. |
| `Placeholder.jsx` | The dashed "photo/content goes here" box. Swap these out for real `<img>` tags or text as content becomes available. |
| `Marquee.jsx` | The scrolling black band of words between sections. |
| `ScrollToTop.jsx` | Utility: scrolls to the top of the page on every route change (no visual effect, just behavior). |

## Pages (`src/pages/`)

| File | Controls |
|---|---|
| `Home.jsx` / `Home.module.css` | The landing page (`/`): hero intro, marquee, and the three teaser cards linking to About / Algorithms Explained / Fun. |
| `about/Zoe.jsx` | The `/about/zoe` page: bio, portrait placeholder, quick facts list. |
| `about/CV.jsx` | The `/about/cv` page: Experience / Education / Skills rows and the CV download pill. |
| `about/About.module.css` | Shared styles for both About pages (bio layout, CV row styling). |
| `algorithms/AlgorithmPage.jsx` | Shared template for all three "Algorithms Explained" pages (hero + GitHub/YouTube pills + write-up body + figure placeholder). |
| `algorithms/DecisionMaking.jsx`, `NeurIPS.jsx`, `Other.jsx` | Thin wrappers that just pass a title/subtitle into `AlgorithmPage.jsx`. Edit *these* for per-page copy; edit `AlgorithmPage.jsx` to change the shared layout. |
| `algorithms/Algorithms.module.css` | Shared styles for the Algorithms pages. |
| `fun/FunPage.jsx` | Shared template for both "Fun" pages (hero + story paragraph + 3-photo grid). |
| `fun/Alaska.jsx`, `Yoga.jsx` | Thin wrappers passing title/subtitle into `FunPage.jsx`. |
| `fun/Fun.module.css` | Shared styles for the Fun pages. |
| `NotFound.jsx` | Whatever renders for an unmatched URL (404 page). |

## Where to add real content

- **Text**: search for square-bracket placeholders like `[ your bio goes here ]` in the files above and replace them.
- **Photos**: put image files in `src/assets/`, `import` them in the relevant page, and replace the matching `<Placeholder />` with an `<img>`.
- **CV PDF**: drop the file in `public/`, then point the disabled pill in `about/CV.jsx` at it (`href="/your-cv.pdf"`) and remove the `pill--disabled` class.
- **GitHub/YouTube links**: same pattern — replace the `<span className="pill pill--outline pill--disabled">` placeholders in `algorithms/AlgorithmPage.jsx` with real `<a>` links once those exist.
