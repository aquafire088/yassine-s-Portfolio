<!-- Copied-style concise instructions for AI coding agents. Keep this file short and actionable. -->
# Copilot / Agent Instructions for this repository

Purpose
- Help AI coding agents become immediately productive in this React + Vite portfolio.

Quick summary
- This is a small React app bootstrapped for Vite + Tailwind. Entry is `src/main.jsx` → `src/App.jsx`.
- UI is split into small components under `src/components` and data/constants in `src/constants/index.js`.
- Static assets (images/icons) live in `public/` and are referenced with absolute paths like `/images/foo.png` or `/icons/bar.svg`.

How to run (developer workflows)
- Install & run dev server: `npm install` then `npm run dev` (uses Vite).
- Build: `npm run build` then `npm run preview` to serve the production build locally.
- Lint: `npm run lint` (uses `eslint .`).

Important project patterns and conventions
- Path aliases: `vite.config.js` defines aliases used throughout the codebase:
  - `#components` → `./src/components`
  - `#constants` → `./src/constants`
  - `#store`, `#hoc` — check `vite.config.js` for targets.
  Use these aliases for imports, e.g. `import { Navbar } from '#components/Navbar'`.
- Static assets: refer to images/icons using absolute paths that resolve to `public/`. Example: `/images/logo.svg`.
- Data and config live in `src/constants/index.js` (exports `navLinks`, `dockApps`, `locations`, etc.). Components consume these objects directly — update the constants if you add new content.

Code-style and patterns to follow
- Components are functional React components with default exports or named exports (follow the existing file's pattern).
- Styling uses Tailwind utility classes (see `index.css`) and occasional custom classes like `dock-container` and `dock-icon`.
- Animations: the project uses `gsap` and `@gsap/react` hooks (see `Welcome.jsx`). Be careful to clean up event listeners returned from animation hooks.

Common pitfalls seen in this repo (explicit, actionable)
- Import casing: some files use `#components/welcome` vs `#components/Welcome`. On Windows (current dev environment) imports may work but will break on case-sensitive systems — prefer exact filename casing.
- Asset interpolation in JSX: use string templates inside JSX braces. Wrong: `src={/images/${icon}}`. Correct: `src={`/images/${icon}`}`.
- Event handler typos: `onClick={() => toggletApp({id, canOpen})}` — `toggletApp` is undefined. Search for intended `toggleApp` handler or implement it in parent/store.
- When adding new top-level aliases, update `vite.config.js` to avoid runtime import resolution errors.

Files to inspect when making UI/behavior changes
- `src/components/Dock.jsx` — dock rendering and click behavior for apps.
- `src/components/Welcome.jsx` — GSAP-driven hover weight animation; good example of DOM-manipulating animation patterns.
- `src/components/Navbar.jsx` — uses `#constants` `navLinks` / `navIcons` and `dayjs` for time.
- `src/constants/index.js` — canonical source of UI content/data.

Edit & PR guidance for agents
- Keep changes minimal and focused to the file(s) affected.
- Prefer fixing the root cause (e.g., correct import paths / handler names) rather than adding temporary workarounds.
- Run `npm run lint` before proposing changes; mention any lint rules you intentionally bypass.

If something's unclear
- Ask for clarification about intended runtime behavior (e.g., what `Dock` clicks should open). Point to `src/constants/index.js` and `App.jsx` as useful context.

Examples (copyable)
- Importing a component: `import Welcome from '#components/Welcome'`
- Referencing a public image: `<img src="/images/logo.svg" alt="logo" />`
- Run dev server: `npm install; npm run dev` (Windows PowerShell)

After you update this file
- Notify the repo owner with a short summary of changes and run `npm run dev` to sanity-check the dev server.

---
Please review these instructions and tell me if you want more detail about testing, CI, or how to handle `locations`/Finder behaviours in `src/constants/index.js`.
