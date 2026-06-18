# Shreya Makeover

A single-page salon landing site, built with **Vite + React + TypeScript + Tailwind CSS v4**.
Dark plum / rose-gold theme, full-page hero, scroll-reveal & micro-animations, and a 3-step
booking flow (pay-at-salon, no backend required).

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server  → http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, …).

## Structure

```
src/
  main.tsx              app entry
  App.tsx               page composition
  index.css             Tailwind v4 theme tokens, keyframes, component styles
  types.ts              shared TypeScript interfaces
  data/content.ts       services, packages, trust, gallery, testimonials, WhatsApp number
  hooks/useScrolled.ts  header-elevation + reduced-motion helpers
  booking/              BookingContext (open modal anywhere) + BookingModal (multi-step)
  components/           Header, MobileMenu, Hero, TrustBand, Services, Bridal, Gallery,
                        About, Testimonials, Membership, Footer, BottomBar,
                        Reveal (scroll-in), CountUp, SectionHead, WaDot
```

## Editing content

All copy, services, prices, packages and the WhatsApp number live in
[`src/data/content.ts`](src/data/content.ts). Update there — no component changes needed.
