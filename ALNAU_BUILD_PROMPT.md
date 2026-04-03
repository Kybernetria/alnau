# alnau.com — Personal Site Builder Prompt

## Role

You are a world-class frontend engineer and editorial systems designer. You build personal sites for technically rigorous, intellectually serious people — sites that feel like precision instruments. Not portfolios. Not showcases. Instruments. Your work is typographically exact, architecturally unambiguous, and restrained in a way that signals confidence rather than emptiness. You understand the difference between minimalism as aesthetic laziness and minimalism as disciplined restraint. You build the latter.

**You are building alnau.com** — the personal site of a cybernetician, systems engineer, anthropologist, and coder. The aesthetic is: editorial rigour meets warm restraint. Think: a well-designed academic monograph crossed with a systems engineering notebook. Structured. Purposeful. No decoration without function. No function without clarity.

**Avoid without exception:** purple hues, terminal green, vaporwave or cyberpunk aesthetics, neon anything, flat gradient hero fills, card grids with drop shadows, stock photography, icon libraries used decoratively.

---

## The Brief

**Site:** alnau.com  
**Owner:** `[YOUR NAME]` — placeholder throughout. Replace all instances before deploy.  
**Nature:** Personal site — engineering hire surface, project index, writing space.  
**Domain of work:** Cybernetics, systems engineering, anthropology, marxist materialism, open-source code.  
**Linked properties:** Kybernetria.com (secondary project), GitHub profile, LinkedIn profile.  
**Tone:** Warm but rigorous. Minimal but with human weight. Serious without being cold. Confident without being loud.  
**Placeholder convention:** All copy, headlines, and body text must be wrapped in `<!-- PLACEHOLDER: suggested content -->` comments so the owner can replace them cleanly. Generate structurally complete, realistic dummy content for layout purposes only.

---

## Tech Stack — FIXED, DO NOT DEVIATE

| Tool | Choice |
|---|---|
| Framework | Astro (latest stable via `npm create astro@latest`) |
| Styling | Tailwind CSS v4 via `@astrojs/tailwind` |
| Animations | GSAP 3 + ScrollTrigger (npm). Hero FX in vanilla JS canvas. |
| Icons | Inline SVG or `lucide-astro` only |
| Fonts | Google Fonts via `<link>` in `<head>` |
| Content | Astro content collections for articles |
| CMS | Sveltia CMS via `public/admin/` |
| Git backend | GitHub |
| Component model | `.astro` components + vanilla JS in `<script>` tags — no React, no Vue |

### File Structure

```
/
├── public/
│   ├── favicon.svg
│   └── admin/
│       ├── index.html
│       └── config.yml
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── AttractorCanvas.astro
│   │   ├── ProjectsList.astro
│   │   ├── ArticlesList.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── articles/
│   │       └── article-1.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── articles/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── site-config.json
```

---

## Design System — FIXED

### Palette — "Prussian Warmth"

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Ink | `#0C0C0C` | Primary page background — near-black with warmth |
| Surface | Carbon | `#141414` | Slightly lifted surfaces |
| Paper | Bone | `#F0EBE3` | Articles section background — warm off-white |
| Text (dark bg) | Chalk | `#E6E0D9` | Primary text on dark backgrounds |
| Text (light bg) | Graphite | `#1C1C1C` | Primary text on light backgrounds |
| Muted | Ash | `#7A7672` | Secondary text, metadata, rules |
| Accent | Prussian | `#1B4F7A` | The single accent — navy/steel blue |
| Accent hover | Steel | `#3C7DB8` | Hover states, highlights |
| Rule dark | Slate | `#252525` | Borders and rules on dark backgrounds |
| Rule light | Linen | `#D8D2CB` | Borders and rules on light backgrounds |

> No pure black (`#000`). No pure white (`#FFF`). The near-black has warmth. The off-white reads like paper.

> **One accent only.** Prussian blue appears in exactly three places: the primary CTA button, link hover arrows, and article title hover underlines. Nowhere else. This restraint is the point — every instance of it means something.

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | **Instrument Serif** | 400 italic | Hero headline, article titles, section display text |
| Body | **DM Sans** | 300, 400, 500 | Prose, nav links, descriptions, CTAs |
| Metadata | **DM Mono** | 400 | Dates, index numbers, domain tags, footer credits |

Import via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=DM+Sans:wght@300;400;500&family=DM+Mono&display=swap" rel="stylesheet">
```

> No decorative fonts. No serif at small sizes. DM Mono is a precision tool for annotation — not a personality.

### Shape Language — "Editorial Grid"

- **No border-radius on major structural elements.** Sharp corners throughout. The softness in this design comes from spacing, weight contrast, and typography — not rounded shapes.
- **Micro-radius only:** `border-radius: 2px` on small domain tag pills — barely perceptible.
- **Ruled lines** replace all decorative dividers. Every section transition is a `1px solid` horizontal rule.
- **8px base grid.** All spacing in multiples of 8. Generous vertical breathing room — section padding minimum `5rem 0`.
- **No drop shadows.** Depth through contrast and layering only.
- **No gradient fills** anywhere.

---

## Page Architecture

### 1. NAVBAR — "The Ruled Strip"

**Spec:**
- Fixed, full-width. Height: 56px exactly.
- Background: `rgba(12,12,12,0.95)` + `backdrop-filter: blur(12px)`.
- Bottom edge: `border-bottom: 1px solid #252525`.
- Container: `max-width: 1100px`, centered, full gutter padding.

**Left:** `[YOUR NAME]` in Instrument Serif italic, `1rem`, Chalk. No logo, no icon, no tagline.

**Right:** Three links — `Work` · `Articles` · `Contact` — in DM Sans 400, `0.8rem`, Ash color. Separated by `·` in Ash. On hover: color transitions to Chalk over 150ms. No underline, no background change.

**Scroll behavior:**
- At page load: name visible.
- After scrolling past `80px`: name fades to `opacity: 0` over 300ms CSS transition.
- On scroll back to top: name returns.
- Links stay visible at all times.
- Implementation: vanilla JS scroll listener, class toggle on `<nav>`.

**Mobile (< 768px):**
- Left: `[YOUR NAME]` in Instrument Serif italic.
- Right: The text `Menu` in DM Sans 400, `0.8rem`, Ash. No hamburger icon — the word is the trigger.
- Tap `Menu` → full-screen overlay: `background: #0C0C0C`, links stacked vertically in Instrument Serif italic `2.5rem`, Chalk, centered. A `✕` (close) text button in DM Sans `0.8rem` Ash at top right.
- Overlay entrance: fade in over 250ms.

---

### 2. HERO — "Signal + Attractor"

**Layout:**
- Height: `100dvh`. Background: `#0C0C0C`.
- Two z-indexed layers: AttractorCanvas behind, text content in front.
- Text anchored to vertical center-left. `padding-left: clamp(1.5rem, 6vw, 7rem)`.
- Bottom edge: `border-bottom: 1px solid #252525`.

---

#### HERO LAYER 1: AttractorCanvas

A Lorenz attractor drawn in real time on a `<canvas>`. This is the site's single FX element. Treat it as a conceptual instrument — a dynamical system making itself visible — not as decoration.

**Full implementation:**

```astro
---
// AttractorCanvas.astro — no props needed
---
<canvas id="attractor" aria-hidden="true"></canvas>
<svg id="attractor-static" aria-hidden="true" style="display:none">
  <!-- Static SVG fallback for prefers-reduced-motion: a pre-computed Lorenz outline -->
</svg>

<style>
  #attractor {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.85;
  }
  #attractor-static {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.15;
  }
  @media (prefers-reduced-motion: reduce) {
    #attractor { display: none; }
    #attractor-static { display: block; }
  }
</style>

<script>
  const canvas = document.getElementById('attractor');
  const ctx = canvas.getContext('2d');

  // Lorenz parameters
  const sigma = 10, rho = 28, beta = 8 / 3;
  const dt = 0.005;

  let x = 0.1, y = 0, z = 0;
  let width, height, scale, cx, cy;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    scale = Math.min(width, height) / 52;
    cx = width * 0.52;   // slightly off-center
    cy = height * 0.45;  // slightly above vertical center
    ctx.clearRect(0, 0, width, height);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let frame = 0;

  function draw() {
    // Fade trail — low alpha fill creates dissolving tail
    ctx.fillStyle = 'rgba(12, 12, 12, 0.018)';
    ctx.fillRect(0, 0, width, height);

    // Step Lorenz equations
    const dx = sigma * (y - x) * dt;
    const dy = (x * (rho - z) - y) * dt;
    const dz = (x * y - beta * z) * dt;
    x += dx; y += dy; z += dz;

    // Map to canvas — use x,z plane (the classic butterfly view)
    const px = cx + x * scale;
    const py = cy - z * scale + 12 * scale; // offset z to center vertically

    // Draw point — hairline dot
    ctx.beginPath();
    ctx.arc(px, py, 0.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(59, 123, 184, 0.7)'; // Steel blue
    ctx.fill();

    frame++;
    requestAnimationFrame(draw);
  }

  draw();
</script>
```

**Aesthetic intent:** After ~20 seconds the familiar butterfly form begins to emerge. After ~60 seconds it is unmistakable. The site rewards attention — those who stay long enough understand what they are looking at. Those who don't still experience something precise and quiet.

---

#### HERO LAYER 2: Text — Kinetic Resolve

**Copy structure:**

```
[DOMAIN LABEL — DM Mono 0.7rem, Ash, letter-spacing: 0.12em, uppercase]
CYBERNETICIAN · ENGINEER · RESEARCHER
<!-- PLACEHOLDER: adjust domain labels to match owner's primary disciplines -->

[HEADLINE — Instrument Serif italic, clamp(2.8rem, 6vw, 5.5rem), Chalk, line-height: 1.05]
Building systems
at the edge of
code and society.
<!-- PLACEHOLDER: replace with owner's actual positioning statement -->

[SUBHEAD — DM Sans 300, 1rem, Ash, max-width: 38ch, line-height: 1.6]
Available for engineering roles.
Open to research collaborations.
<!-- PLACEHOLDER: adjust availability and collaboration preferences -->

[CTA ROW — margin-top: 2.5rem, gap: 1rem]
[ Get in touch ]     [ See my work ↓ ]
```

**CTA button specs:**

Primary — `Get in touch`:
- `background: #1B4F7A`, `color: #E6E0D9`
- `padding: 0.65rem 1.5rem`, `border-radius: 2px`
- Font: DM Sans 500, `0.85rem`, `letter-spacing: 0.03em`
- `border: 1px solid #1B4F7A`
- Hover: `background: #3C7DB8`, `border-color: #3C7DB8`, transition 150ms

Secondary — `See my work ↓`:
- `background: transparent`, `color: #7A7672`
- `padding: 0.65rem 1.5rem`, `border-radius: 2px`
- Font: DM Sans 400, `0.85rem`
- `border: 1px solid #252525`
- Hover: `color: #E6E0D9`, `border-color: #7A7672`, transition 150ms

**Kinetic reveal — vanilla JS, no GSAP:**

The headline uses a character-resolve effect. Each character begins as a middle dot `·` and resolves to its correct character over 60ms, staggered by 25ms per character per word, and 180ms per line.

```javascript
function resolveText(el, delay = 0) {
  const text = el.dataset.text;
  const chars = text.split('');
  let revealed = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent = chars.map((c, i) => {
        if (c === ' ') return ' ';
        return i <= revealed ? c : '·';
      }).join('');
      if (revealed >= chars.length) clearInterval(interval);
      revealed++;
    }, 25);
  }, delay);
}

// On DOMContentLoaded:
// Domain label: fade in at 200ms
// Line 1: resolveText at 400ms
// Line 2: resolveText at 700ms
// Line 3: resolveText at 1000ms
// Subhead: fade in at 1400ms
// CTAs: translateY(8px)→0 + opacity 0→1 at 1800ms
```

---

### 3. PROJECTS — "The Index"

**Section layout:**
- Continues on `#0C0C0C` background — no visual break from Hero.
- Section top: `border-top: 1px solid #252525`.
- Padding: `5rem 0`.
- Section label above list: `WORK` in DM Mono `0.7rem`, Ash, uppercase, `letter-spacing: 0.1em`. Left-aligned.

**Each project entry — full-width ruled row:**

```
──────────────────────────────────────────────────────────────
01    Project Title                        [DOMAIN]    →
      One-line description of the project.
      2024
──────────────────────────────────────────────────────────────
```

**Entry anatomy:**

| Element | Style |
|---|---|
| Rule | `border-top: 1px solid #252525`, full width |
| Index | DM Mono `0.75rem`, Ash. Fixed `3ch` width column. |
| Title | DM Sans 400, `1.05rem`, Chalk. Grows to fill row. |
| Domain tag | DM Mono `0.65rem`, Ash uppercase. `border: 1px solid #252525`, `border-radius: 2px`, `padding: 0.2rem 0.5rem`. Right-aligned. |
| Arrow `→` | `1rem`, Chalk. Far right. |
| Description | DM Sans 300, `0.875rem`, Ash. Second row, indented to title column. |
| Year | DM Mono `0.7rem`, Ash. Same second row, right-aligned. |

**Hover state:** Full row background transitions to `#141414` (Carbon) over 150ms. Title shifts to Steel `#3C7DB8`. Arrow shifts to Steel and moves `4px` right.

**Click:** External link to project URL. `target="_blank" rel="noopener noreferrer"`.

**Section footer:**
```
──────────────────────────────────────────────────────────────
All repositories →                           [links to GitHub]
```
DM Mono `0.75rem`, Ash. Arrow shifts to Steel on hover.

**Data source:** Projects read from `site-config.json` `projects` array. Fields: `title`, `url`, `description`, `domain`, `year`, `featured`.

---

### 4. ARTICLES — "The Contents"

**Section layout:**
- Background: `#F0EBE3` (Bone) — the single light section on the page.
- All text shifts to dark palette: Graphite, Ash-dark.
- Section top: `border-top: 1px solid #D8D2CB`.
- Padding: `5rem 0`.
- Section label: `WRITING` in DM Mono `0.7rem`, muted dark, uppercase.

**Each article entry:**

```
──────────────────────────────────────────────────────────────
12 Jan 2025                                     Cybernetics
On Feedback Loops and Social Systems                        →
A short exploration of second-order cybernetics applied
to contemporary institutional analysis.
──────────────────────────────────────────────────────────────
```

| Element | Style |
|---|---|
| Rule | `border-top: 1px solid #D8D2CB` |
| Date | DM Mono `0.7rem`, Ash-dark |
| Tag | DM Mono `0.65rem`, Ash-dark. Right-aligned, same row as date. |
| Title | Instrument Serif italic, `1.35rem`, Graphite. Full width row. |
| Excerpt | DM Sans 300, `0.85rem`, Ash-dark. Max 2 lines. |
| Arrow `→` | Far right of title row. |

**Hover:** Title underlines with `text-decoration: underline`, `text-decoration-color: #1B4F7A`, `text-underline-offset: 3px`. Arrow shifts to Prussian.

**Section footer:** `View all articles →` as plain DM Sans `0.85rem` text link, Graphite, no button. Navigates to `/articles`.

**Homepage shows:** 3 most recent articles. Full list at `/articles`.

---

### 5. FOOTER — "The Closing Rule"

**Layout:**
- Background: `#0C0C0C`.
- `border-top: 1px solid #252525`.
- Two-column grid, desktop. Single column, mobile.
- Padding: `4rem 0 2rem`.

**Left column:**
```
[YOUR NAME]
<!-- PLACEHOLDER: owner name in Instrument Serif italic, 1.1rem, Chalk -->

[Tagline — one line]
<!-- PLACEHOLDER: e.g. "Cybernetician. Engineer. Researcher." -->
DM Sans 300, 0.9rem, Ash

[ Get in touch → ]
<!-- Same Prussian CTA button as Hero — links to mailto or contact page -->
```

**Right column:**
```
Kybernetria.com   ↗
GitHub            ↗
LinkedIn          ↗
```
DM Sans 400, `0.875rem`, Ash. Each link on its own line. Hover: color → Chalk, 150ms. `↗` signals external. All links `target="_blank" rel="noopener"`.

**Bottom strip — full width, below both columns:**
```
border-top: 1px solid #252525
© [YEAR] [YOUR NAME]          alnau.com          Built with Astro
```
DM Mono `0.7rem`, Ash. Left · center · right.

---

### 6. ARTICLES PAGE — `/articles`

**Same Navbar + Footer.**

**Page header:**
- `padding: 7rem 0 3rem`.
- `border-bottom: 1px solid #252525`.
- Title: `Writing` in Instrument Serif italic, `clamp(2rem, 5vw, 4rem)`, Chalk.
- Subhead: DM Sans 300, `1rem`, Ash.
- `<!-- PLACEHOLDER: tagline for the writing page — e.g. "Notes on systems, society, and code." -->`

**Content:** Full list of all articles using the same `ArticlesList` component, all entries, sorted date descending. No pagination needed until > 20 articles.

**Background:** `#0C0C0C` throughout — no light section.

---

## Sveltia CMS

### `public/admin/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[YOUR NAME] — CMS</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
  </body>
</html>
```

### `public/admin/config.yml`

```yaml
backend:
  name: github
  repo: [YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME]   # replace before deploy
  branch: main

media_folder: public/images
public_folder: /images

collections:
  - name: articles
    label: Articles
    folder: src/content/articles
    create: true
    slug: "{{slug}}"
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Date, name: date, widget: datetime }
      - { label: Tag, name: tag, widget: string }
      - { label: Excerpt, name: excerpt, widget: text }
      - { label: Draft, name: draft, widget: boolean, default: false }
      - { label: Body, name: body, widget: markdown }

  - name: config
    label: Site Settings
    files:
      - name: general
        label: General Settings
        file: site-config.json
        fields:
          - { label: Owner Name, name: name, widget: string }
          - { label: Tagline, name: tagline, widget: string }
          - { label: Email, name: email, widget: string }
          - label: Projects
            name: projects
            widget: list
            fields:
              - { label: Title, name: title, widget: string }
              - { label: URL, name: url, widget: string }
              - { label: Description, name: description, widget: string }
              - { label: Domain Tag, name: domain, widget: string }
              - { label: Year, name: year, widget: string }
              - { label: Featured, name: featured, widget: boolean, default: true }
          - label: Social Links
            name: socials
            widget: object
            fields:
              - { label: GitHub URL, name: github, widget: string }
              - { label: LinkedIn URL, name: linkedin, widget: string }
              - { label: Kybernetria URL, name: kybernetria, widget: string }
```

---

## Global CSS

```css
/* ─── Design tokens ─────────────────────────────────────── */
:root {
  --ink:       #0C0C0C;
  --carbon:    #141414;
  --bone:      #F0EBE3;
  --chalk:     #E6E0D9;
  --graphite:  #1C1C1C;
  --ash:       #7A7672;
  --prussian:  #1B4F7A;
  --steel:     #3C7DB8;
  --rule:      #252525;
  --linen:     #D8D2CB;
}

/* ─── Reset ─────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  background-color: var(--ink);
  color: var(--chalk);
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  line-height: 1.65;
}

/* ─── Layout utilities ───────────────────────────────────── */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
}

.section {
  padding: 5rem 0;
}

/* ─── Typography utilities ───────────────────────────────── */
.serif-italic {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}

.mono {
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.04em;
}

.label {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ash);
}

/* ─── Rule utility ───────────────────────────────────────── */
.rule { border-top: 1px solid var(--rule); }
.rule--light { border-top: 1px solid var(--linen); }

/* ─── Button styles ──────────────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  background: var(--prussian);
  color: var(--chalk);
  border: 1px solid var(--prussian);
  border-radius: 2px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: background 150ms ease, border-color 150ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--steel);
  border-color: var(--steel);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  background: transparent;
  color: var(--ash);
  border: 1px solid var(--rule);
  border-radius: 2px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 150ms ease, border-color 150ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  color: var(--chalk);
  border-color: var(--ash);
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  #attractor { display: none; }
  #attractor-static { display: block; }
}
```

---

## Tailwind Config Extension

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink:       '#0C0C0C',
        carbon:    '#141414',
        bone:      '#F0EBE3',
        chalk:     '#E6E0D9',
        graphite:  '#1C1C1C',
        ash:       '#7A7672',
        prussian:  '#1B4F7A',
        steel:     '#3C7DB8',
        rule:      '#252525',
        linen:     '#D8D2CB',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
      },
    },
  },
};
```

---

## Build Sequence

Execute in this order without skipping steps:

1. `npm create astro@latest alnau -- --template minimal`
2. Install dependencies: `npx astro add tailwind`, `npm i gsap lucide-astro`
3. Configure `astro.config.mjs` — output: `'static'`, site: `'https://alnau.com'`
4. Extend Tailwind config with palette and fonts (see above)
5. Add font `<link>` to `BaseLayout.astro` head
6. Write `global.css` — tokens, reset, layout, button, rule utilities
7. Create `site-config.json` — seed with placeholder owner info, 4 sample projects, social URLs
8. Build `BaseLayout.astro` — meta tags, font imports, grain overlay pseudo-element, `<slot />`
9. Build `AttractorCanvas.astro` — canvas + Lorenz JS (see full implementation in Hero section)
10. Build `Navbar.astro` — ruled strip, scroll-aware name fade, mobile overlay
11. Build `Hero.astro` — compose AttractorCanvas layer + text layer + kinetic resolve JS
12. Build `ProjectsList.astro` — reads from `site-config.json`, renders ruled index list
13. Build `ArticlesList.astro` — reads from content collection, renders journal contents list
14. Build `Footer.astro` — two-column, ruled bottom strip
15. Build `ArticleLayout.astro` — Instrument Serif body, `max-width: 65ch`, generous leading
16. Create content collection schema in `src/content.config.ts`
17. Write 3 sample articles with placeholder content and frontmatter
18. Build pages: `index.astro`, `articles/index.astro`, `articles/[...slug].astro`
19. Add GSAP ScrollTrigger reveals — Projects entries and Articles entries fade up `20px` + opacity `0→1`, stagger `80ms` per item. **Only these two.** No other GSAP usage.
20. Set up Sveltia CMS — `public/admin/index.html` and `config.yml` with GitHub backend
21. Final pass: test at 320px, 768px, 1280px, 1440px. Check all hover states, reduced-motion fallback, placeholder markers, external link `rel` attributes.

---

## Typography Safety Rules

- All display headings: `overflow-wrap: break-word`, `min-width: 0`
- Instrument Serif display: `line-height: 1.05`, `letter-spacing: -0.01em`
- Body prose: `line-height: 1.65`, `max-width: 65ch`
- Scale all display with `clamp()`: `font-size: clamp(min, preferred-vw, max)`
- Minimum supported viewport: 320px — test all text at this width

---

## Directives

> **Do not build a portfolio. Build a precision instrument.**

> The attractor is not decoration — it is the site's conceptual foundation made visible. A dynamical system drawing itself in real time on a page about systems. Every visitor who recognises what it is understands something about who built this site.

> The one accent color — Prussian blue — is a commitment. It appears where something demands attention. Not for emphasis. For meaning. If you are tempted to use it in a fourth place, remove one of the three.

> Warmth in this design comes from Instrument Serif's italic weight, from the bone-white of the articles section, from generous spacing that lets content breathe. Not from color temperature. Not from texture overlays.

> Every ruled line is a structural decision, not a visual habit. Every piece of DM Mono text is annotation — functional, not decorative.

> Avoid without exception: drop shadows, gradient fills, card containers with backgrounds, hover effects that scale elements, icon packs used decoratively, any color not in the palette, any font not in the stack.
