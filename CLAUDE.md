# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Deuxcerie Pâtisserie** — an artisanal French-Brazilian pastry shop. Single-page React app with smooth animations, a custom design system, and Google Gemini AI integration.

## Development Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # TypeScript type checking (tsc --noEmit)
npm run clean     # Remove dist/
```

## Environment Variables

Copy `.env.example` to `.env` before running:
- `GEMINI_API_KEY` — required for Gemini AI calls
- `APP_URL` — self-referential URL for OAuth/callbacks

## Architecture

**Single-file component model:** `src/App.tsx` contains all page sections as co-located components (Navbar, Hero, About, Values, IllustrationSection, CTA, Footer). This is intentional for a landing page — don't extract to separate files unless sections grow significantly.

**Tech stack:**
- React 19 + TypeScript 5.8
- Vite 6.2 (path alias `@/*` maps to root)
- Tailwind CSS 4.x (v4 syntax — uses `@import "tailwindcss"`, not `@tailwind` directives)
- Motion (Framer Motion) for animations
- Express.js for any backend API routes
- Google Gemini (`@google/genai`) for AI features

## Design System

Custom CSS variables defined in `src/index.css`:
- **Primary:** `#5F0D28` (deep burgundy) — brand color
- **Cream:** `#FFF7EE` — main background
- **Typography:** Noto Serif (headings) / Plus Jakarta Sans (body)

Utility helper `cn()` in `src/lib/utils.ts` merges `clsx` + `tailwind-merge` for safe className composition — always use this instead of string concatenation for conditional classes.

Custom utility classes: `.glass-header`, `.bg-brand-gradient`, `.shadow-atmospheric`.
