# Vigilante — AI On-Call Engineer (landing / smoke test)

A validation landing page for an AI on-call/SRE product. Goal: measure demand
(qualified demo bookings + founding-partner interest) before building the product.

- Static site, no build step. Deploy via GitHub Pages.
- `BRAINSTORM.md` — positioning, ICP, competitor map, use cases to validate.
- `SETUP.md` — how to wire the "Book a demo" link and the lead form (10 min).

## Local preview
    python3 -m http.server 8123
    # open http://localhost:8123

## Files
- `index.html` — the page (SEO + AEO: OG/Twitter, JSON-LD Org/Software/FAQ).
- `styles.css` — dark, technical design system.
- `main.js` — booking buttons + lead form (config at top: BOOKING_URL, FORM_ENDPOINT).
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler + answer-engine files.
- `assets/` — favicon + social (OG) image.
