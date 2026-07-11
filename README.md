# Draw Near — The Remembering Room

A quiet, scrollable welcome guide for The Remembering Room — a guided gathering
to create, remember, and honor a life together.

The site is a single static page built from the print welcome guide, following
the **Linen Hours** design philosophy (see [design-philosophy.md](design-philosophy.md)):
warm ivory grounds, muted sage and dusty clay, hairline rules, botanical line
drawings, and generous unhurried space.

## Structure

- `index.html` / `styles.css` / `script.js` — the site (no build step, no dependencies)
- `fonts/` — Cormorant Garamond and Montserrat, subset to Latin and served as woff2
- `photos/` — photography from the print photo edition, converted to WebP
- `assets/remembering-room-welcome-guide.pdf` — the printable guide, linked from the footer
- `source/` — the original print-layout HTML master and full font files
- `design-philosophy.md` — the Linen Hours design language

## Development

It's a static site — open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

Appending `?static` to the URL renders the page without scroll animations
(useful for reviewing the full layout at once).

## Deployment

Hosted on Vercel as a static site; every push to `main` deploys automatically
once the GitHub repo is connected in Vercel.
