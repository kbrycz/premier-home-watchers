# Premier Home Watchers

A small, fast marketing website for a local home‑watching service. Built with Next.js (App Router) and deployed on Vercel. The site is fully static, SEO‑optimized, and uses modern CSS + Tailwind utilities for a clean, lightweight experience.

- **Live site**: `https://premierhomewatchers.com` (or the Vercel preview domain)
- **Framework**: Next.js 15 (App Router)
- **UI/Styling**: Tailwind CSS 4, custom CSS variables in `src/styles/theme.css`
- **Animation/Icons**: Framer Motion, Radix Icons
- **Fonts**: Geist Sans/Mono

## Features
- **Home page** (`/`) with hero, services, founder, pricing, and contact sections
- **About page** (`/about`)
- **Ad landing page** (`/ad/facebook`) with concise selling points
- **SEO ready**: metadata, Open Graph, `robots.js`, and `sitemap.js`
- **Fast**: statically generated with the Next.js App Router

## Requirements
- Node.js 18.18+ (or 20+ recommended)
- npm 9+ (or a compatible package manager)

## Getting Started (Local Development)
1. Install dependencies:
```bash
npm install
```
2. Start the dev server (Turbopack):
```bash
npm run dev
```
3. Visit `http://localhost:3000`.

Edits to the main landing page live in `src/app/page.js`. Global layout and metadata live in `src/app/layout.js`.

## Scripts
- `npm run dev` — Start local dev server with Turbopack
- `npm run build` — Create a production build
- `npm start` — Run the production server locally after build
- `npm run lint` — Run ESLint

## Production Build + Run Locally
```bash
npm run build
npm start
```
This serves the built site at `http://localhost:3000`.

## Deployment (Vercel)
This project is designed for a zero‑config Vercel deployment.

Recommended settings:
- **Framework Preset**: Next.js
- **Root Directory**: repository root (do not point to `src/`)
- **Install Command**: `npm ci` (or leave default)
- **Build Command**: `next build` (default; do not override with custom output)
- **Output Directory**: leave empty so Vercel auto‑detects Next.js (do NOT set `out/`)

If you see a 404 on a deployment despite a successful build:
- Ensure the **Root Directory** is the repo root and the **Output Directory** is blank
- Ensure the **Framework Preset** is set to Next.js
- Re‑deploy and then check the build log’s Route table; you should see `/`, `/about`, `/ad/facebook`

## SEO and Metadata
- Global metadata and Open Graph are defined in `src/app/layout.js`
- Robots and sitemap are in `src/app/robots.js` and `src/app/sitemap.js`
- Canonical URL and social image are already configured

## Project Structure (high level)
```
src/
  app/
    page.js            # Home page
    about/page.js      # About page
    ad/facebook/page.js# Ad landing page
    layout.js          # Root layout + global metadata
    globals.css        # Base styles (includes Tailwind 4 utilities)
  components/
    Navbar.js, Footer.js, ContactSection.js, AnimatedLogo.js, etc.
  lib/
    utils.js           # Small utilities (e.g., className helper)
  styles/
    theme.css          # Design tokens (CSS variables)
public/
  images/              # Static images used by the site
```

## Conventions
- **Path alias**: Use `@/*` for imports from `src/*` (configured in `jsconfig.json`)
- **Apostrophes in JSX**: ESLint (`react/no-unescaped-entities`) requires escaping apostrophes in text nodes. Use `Let&apos;s` instead of `Let's` in JSX text to avoid build failures.

## Troubleshooting
- **Vercel 404 after a successful build**: Check that the project’s Root Directory is the repo root, the Framework preset is Next.js, and the Output Directory is blank (auto). Re‑deploy.
- **Styles not updating**: Hard refresh or clear cache; the CDN may have cached an old asset.
- **ESLint error about apostrophes**: Replace `'` with `&apos;` inside JSX text nodes.

## License
Private project. All rights reserved.
