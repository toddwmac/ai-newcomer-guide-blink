# PC Newcomers Guide to AI

An interactive, self-paced web course teaching AI basics to members of the Park City Newcomers Club. Designed with senior accessibility in mind — warm colors, large text, generous spacing, and oversized touch targets. Built by [Applied AI Labs](https://www.appliedailabs.com).

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000/ai-newcomer-guide-blink/
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

No backend or API keys required — fully static after build.

---

## Course Modules

| # | Title | Key Features |
|---|-------|-------------|
| One | What AI is and Is Not | Foundation — what AI can and cannot do |
| Two | Getting Started with Chatbots | Directory of 6 major AI tools with direct links |
| Three | What is Prompting? | Prompt examples with copy buttons |
| Four | Creating and Improving Prompts | R-A-S framework with Good/Better/Best examples |
| Five | Brainstorm, Research, & Create | Workflow patterns with copy-prompt examples |
| Six | Quick Guide to NotebookLM | Artifact types, interface mockup, scenarios, tips |
| Seven | The AI Glossary | 25 essential AI terms |

---

## Architecture

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 3.3 + CSS custom properties |
| UI Components | shadcn/ui (Radix primitives) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display (headings), Merriweather (reading), Geist (UI) |

### Project Structure

```
src/
├── App.tsx                    # Root layout, sidebar toggle, progress tracking
├── main.tsx                   # Entry point
├── index.css                  # Theme variables (warm mountain-lodge palette)
├── components/
│   ├── Header.tsx             # Fixed header with logo, title, progress bar
│   ├── Sidebar.tsx            # Module navigation with completion indicators
│   ├── ModuleView.tsx         # Content renderer with copy-button injection
│   └── ui/                    # shadcn/ui component library
├── data/
│   └── courseContent.ts       # All 7 modules (titles, descriptions, HTML content)
├── hooks/
│   └── use-mobile.tsx         # Responsive breakpoint hook
└── lib/
    └── utils.ts               # Tailwind merge utility (cn)
```

### Key Design Decisions

**Content as HTML strings** — Module content is stored as HTML template literals in `courseContent.ts` and rendered via `dangerouslySetInnerHTML`. This keeps content editing simple without needing a CMS.

**Copy buttons via DOMParser** — Example prompts are tagged with a `copy-prompt` CSS class in the HTML content. `ModuleView` preprocesses the HTML string using `useMemo` + `DOMParser` to inject copy buttons before rendering, and uses event delegation (`onClick`) for clipboard functionality. This avoids timing issues with Framer Motion's `AnimatePresence`.

**Senior-friendly theme** — The "Mountain Lodge Library" palette uses warm cream backgrounds, forest green primary, and copper/amber accents. Body text is 18px base with Merriweather serif for reading content. Touch targets are 40-64px. Module headings use written-out names (Module One, Module Two, etc.).

**Local progress tracking** — Completed modules and current position are persisted to `localStorage`.

---

## Design System

### Theme Colors

All colors are defined as CSS custom properties in `src/index.css` under `:root` and `.dark`. Key variables:

| Variable | Purpose | Light Value |
|----------|---------|-------------|
| `--background` | Page background | Warm cream `hsl(38, 30%, 96%)` |
| `--primary` | Buttons, active states, links | Forest green `hsl(150, 30%, 28%)` |
| `--accent` | Hover highlights, decorative | Copper/amber `hsl(25, 55%, 48%)` |
| `--card` | Card backgrounds | Warm white `hsl(35, 30%, 98%)` |
| `--font-serif` | Headings | Playfair Display |
| `--font-reading` | Lesson body text | Merriweather |
| `--font-sans` | UI elements | Geist |

### Accessibility Features

- 18px base font size, 20px lesson body text
- 1.8 line-height for reading content
- 40-64px touch targets on interactive elements
- High contrast deep brown on cream
- Forest green left-border on active sidebar module
- Oversized mobile menu toggle (64px)

---

## Customization

### Adding a Module

1. Add a new entry to the `modules` array in `src/data/courseContent.ts`
2. Extend the `moduleNames` array in `src/components/ModuleView.tsx` if needed
3. Tag any example prompts with `class="copy-prompt"` to get automatic copy buttons

### Adding Copy Buttons to Prompts

Any HTML element with `class="copy-prompt"` inside module content will automatically receive a clipboard copy button. The tooltip reads "Copy and then paste in favorite chat bot". Text prefixed with "Try this:" is stripped when copying.

---

## Deployment

### Static Site (Netlify)

The app builds to a static `dist/` folder deployed as a SPA. A `public/_redirects` file handles client-side routing:

```
/*    /index.html   200
```

The base path is configured in `vite.config.ts`:

```ts
base: '/ai-newcomer-guide-blink/'
```

To deploy to a different path or root, update the `base` value and rebuild.

### Build Output

```
dist/index.html       ~0.5 KB
dist/assets/*.css     ~72 KB (12 KB gzipped)
dist/assets/*.js      ~450 KB (140 KB gzipped)
```

---

## Available Scripts

```bash
npm run dev            # Start dev server on port 3000
npm run build          # Production build to dist/
npm run preview        # Preview production build locally
npm run lint           # Run all linting (types, ESLint, CSS, variable check)
npm run lint:js        # ESLint only
npm run lint:css       # Stylelint only
npm run lint:types     # TypeScript type checking only
npm run check:css-vars # Check CSS variables defined vs referenced
```

---

## CSS Variable Detection

The project includes a custom script that:

1. Parses `tailwind.config.cjs` to find all `var(--variable)` references
2. Parses `src/index.css` to find all defined CSS variables
3. Cross-references them to find missing definitions
4. Reports undefined variables with clear error messages

Run via `npm run check:css-vars` or as part of `npm run lint`.

---

## Blink Dependencies Removed

This project was originally scaffolded from a [Blink](https://blink.new) template. The following Blink-related files and references have been stripped out so the app runs as a standalone Vite project:

- `@blinkdotnew/sdk` removed from `package.json`
- `.env.local` (contained `VITE_BLINK_PROJECT_ID` and `VITE_BLINK_PUBLISHABLE_KEY`)
- `.blink-template-revision` (template version marker)
- `src/Shell.tsx`, `src/components/AppSidebarShell.tsx`, `src/layouts/shared-app-layout.tsx` (unused Blink UI components)
- Blink `<script>` tag removed from `index.html`
