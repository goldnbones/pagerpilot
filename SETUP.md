# Vigil — go-live setup (about 10 minutes)

Two things need your accounts. Until you set them, the page still works:
"Book a demo" scrolls to the lead form, and the form falls back to opening a
prefilled email to you.

## 1) Google Calendar "Book a demo" link (the survey lives here)
Google's API can't create a booking page, so create it once by hand:

1. Open Google Calendar → **Create** → **Appointment schedule**.
2. Name it "Vigil demo", set 30-minute slots and your availability.
3. Under **Booking form → Add a question**, add these (this is the "survey beforehand"):
   - Company (short answer)
   - Team size (multiple choice: 1–15 / 15–50 / 50–150 / 150+ engineers)
   - What do you use for observability + paging today? (short answer)
   - Biggest on-call pain? (multiple choice: alert noise / slow root cause / 3am burnout / recurring incidents / no SRE team)
   - Anything about a recent incident you want to walk through? (long answer)
4. Turn on **email verification** (cuts spam), then **Save** and copy the public booking link.
5. Paste it into `main.js` → `SITE.BOOKING_URL`. Commit + push.

## 2) Lead form capture (Formspree, free)
For people who fill the on-page form instead of booking:

1. Sign up at formspree.io, create a form, copy the endpoint (looks like `https://formspree.io/f/abcwxyz`).
2. Paste it into `main.js` → `SITE.FORM_ENDPOINT`. Commit + push.
3. Add your email as the form's notification address in Formspree.

## 3) (Optional) custom domain
GitHub Pages serves this at https://goldnbones.github.io/vigil/. For a real
startup, buy a domain, add a `CNAME` file, and point DNS at GitHub Pages — then
update the absolute URLs in `index.html` (canonical, og:url, og:image),
`sitemap.xml`, `robots.txt`, and `llms.txt`.
