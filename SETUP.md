# Vigil — go-live checklist

The site is live at https://goldnbones.github.io/vigil/. To put it on our own
domain, get business email, and start taking demo calls, here's the path. Steps
marked **[you]** need your accounts/payment; **[me]** I finish once you unblock them.

## 1. Domain **[you]** — everything else hangs off this
Bare `vigil.com` and several `*vigil*` domains are taken by other companies (a
naming/trademark flag — worth a rename decision). Available as of the last check:
- **vigilhq.com**, vigilops.com, usevigil.com, onvigil.com, vigiloncall.com

Buy one at **Cloudflare Registrar** (at-cost, ~$10/yr, best for DNS + free email
routing) or Namecheap. Send me the domain and I'll do step 5.

## 2. Business email **[you]**
Recommended: **Google Workspace** (~$7/user/mo) — gives `you@yourdomain.com`
plus Google Calendar (the booking tool in step 3) and Meet (the demo calls) in
one place. Sign up, verify the domain (add the DNS records Google shows you).

Free alternative: **Cloudflare Email Routing** (forward `you@yourdomain.com` to
your Gmail for free) + Gmail "Send mail as" to reply from the domain. This gives
a professional address but not the integrated calendar/Meet.

## 3. Booking page — how demo calls get booked **[you]**
Google's API can't create a booking page, so make it once by hand:
1. Google Calendar → **Create → Appointment schedule**. Name it "Vigil demo",
   30-min slots, your availability, Google Meet as the location.
2. **Booking form → Add a question** (this is the pre-call survey):
   - Company · Team size (1–15 / 15–50 / 50–150 / 150+ engineers)
   - What do you use for observability + paging today?
   - Biggest on-call pain? · Anything about a recent incident to walk through?
3. Turn on email verification, save, copy the public link.
4. Send me the link → **[me]** I paste it into `main.js` (`SITE.BOOKING_URL`).

## 4. Lead capture for the on-page form **[you → me]**
Create a free form at **formspree.io**, copy the endpoint (`https://formspree.io/f/xxxx`),
send it to me → **[me]** I wire it into `main.js` (`SITE.FORM_ENDPOINT`).

## 5. Point the domain at the site **[me, once you own it]**
Send me the domain + either registrar access or a willingness to paste 4 DNS
records I'll give you. I'll add a `CNAME` file, update every absolute URL
(canonical, OG, sitemap, robots, llms.txt), and the site serves at your domain
over HTTPS — which also strengthens SEO/AEO and email deliverability.

## Until then
Nothing is broken: "Book a demo" scrolls to the on-page form, and the form falls
back to emailing johnzhou1402@gmail.com so no lead is lost.
