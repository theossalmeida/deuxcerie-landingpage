# Deuxcerie Pâtisserie — Landing Page

Landing page for **Deuxcerie**, an artisanal French-Brazilian pastry shop. A single-page React application featuring smooth scroll animations, a custom design system, and Google Gemini AI integration.

## Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite 6.2** — build tool with `@/*` path alias
- **Tailwind CSS 4.x** — v4 syntax (`@import "tailwindcss"`)
- **Motion (Framer Motion)** — scroll-triggered animations
- **Express.js** — backend API routes
- **Google Gemini** (`@google/genai`) — AI features

## Getting Started

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then fill in your values (see [Environment Variables](#environment-variables)).

3. Start the dev server:
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript type checking (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

## Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Required for Gemini AI API calls |
| `APP_URL` | App's hosted URL — used for OAuth callbacks and self-referential links |

## Architecture

All page sections live in a single file (`src/App.tsx`) as co-located components:

- `Navbar` — fixed header with smooth-scroll navigation and active section highlighting
- `Hero` — full-viewport hero with brand gradient and animated entrance
- `About` — brand story section with scroll-triggered animations
- `Values` — three-pillar grid (Meticulousness, Brazilian Terroir, Legacy)
- `FAQ` — animated accordion for frequently asked questions
- `CTA` — call-to-action section linking to WhatsApp ordering
- `Footer` — social links (Instagram, WhatsApp) and copyright

## Design System

Defined in `src/index.css`:

| Token | Value | Usage |
|---|---|---|
| Primary | `#5F0D28` | Deep burgundy — brand color |
| Cream | `#FFF7EE` | Main background |
| Headline font | Noto Serif | Headings |
| Body font | Plus Jakarta Sans | Body text |

Custom utility classes: `.glass-header`, `.bg-brand-gradient`, `.shadow-atmospheric`.

Use the `cn()` helper from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for all conditional className composition.
