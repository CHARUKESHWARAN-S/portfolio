# Charukeshwaran S — Portfolio

A premium, single-page portfolio built with **React + Vite**, **Tailwind CSS**,
**Framer Motion**, and **React Icons**.

**Design concept:** the visual language borrows from computer-vision inference —
a dark console background, a cyan "detection" accent, and a corner-bracket
frame around the hero photo with a live "match_confidence" tag, echoing the
facial-recognition and gesture-detection projects featured below it.

## Quick start

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  assets/images/       ← profile.jpg lives here (swap with your real photo)
  components/          ← one component per section / UI piece
  context/ThemeContext.jsx   ← light/dark theme + localStorage persistence
  hooks/                ← useTypedText (hero typing effect), useScrollSpy (nav highlight)
  App.jsx               ← composes all sections
  index.css             ← Tailwind layers, design tokens, cursor & signature-motif styles
public/
  resume.pdf            ← placeholder — replace with your real resume
  favicon.svg
```

## Customizing

- **Profile photo:** replace `src/assets/images/profile.jpg` with your own image
  (any name/extension is fine — just update the import in `src/components/Hero.jsx`).
- **Resume:** replace `public/resume.pdf` with your real PDF (same filename, or
  update the `href` in `Hero.jsx`).
- **Colors/type:** all design tokens (colors, fonts, animations) live in
  `tailwind.config.js` under `theme.extend`.
- **Contact form:** `src/components/Contact.jsx` currently simulates a submit.
  Wire the `handleSubmit` function to a real backend (Formspree, EmailJS, a
  serverless function, etc.) to actually deliver messages.
- **Content:** section copy and data (skills, projects, contact links) are
  defined as simple arrays/constants at the top of each component file in
  `src/components/` — edit those directly.

## Features included

- Fully responsive layout (mobile → desktop)
- Light/dark theme toggle, persisted via `localStorage`
- Glassmorphism cards + animated gradient/grid hero background
- Smooth-scroll navigation with scroll-spy active-link highlighting
- Scroll-reveal animations throughout (Framer Motion + IntersectionObserver)
- Custom mouse cursor with hover states (auto-disabled on touch devices)
- Scroll progress bar, back-to-top button, animated loading screen
- SEO meta tags (Open Graph, Twitter Card, canonical URL) in `index.html`
- Respects `prefers-reduced-motion`; visible keyboard focus states throughout

## Deploying

The build output in `dist/` is static and can be deployed to Vercel, Netlify,
GitHub Pages, or any static host. For Vercel/Netlify, the defaults
(`npm run build`, output directory `dist`) work with no extra configuration.
