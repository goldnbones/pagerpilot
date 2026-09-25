# PagerPilot — go-live checklist

Live now at https://goldnbones.github.io/pagerpilot/. To move onto our own domain,
get business email, and take demo calls, here's the path. **[you]** needs your
payment/accounts; **[me]** I finish the moment you unblock it.

## 1. Domain — decided: **pagerpilot.com** **[you to buy, ~$10.44/yr]**
Available and on-budget at **Cloudflare Registrar** (at-cost, no markup). Buy it,
then send me the confirmation. I cannot complete the checkout myself (no payment
method on file). Once you own it, I do the rest of this step:

- I add a `CNAME` file containing `pagerpilot.com` and push.
- You add these DNS records at Cloudflare (I'll paste them again when ready):
  - **A** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - **CNAME** `www` → `goldnbones.github.io`
- GitHub Pages then serves the site at https://pagerpilot.com over HTTPS.

(Quick trademark sanity check recommended before you print business cards, but
no obvious conflict turned up.)

## 2. Business email `you@pagerpilot.com` **[you]**
Needs the domain first. Fastest: **Google Workspace** (~$7/user/mo) — email +
Google Calendar (the booking tool below) + Meet (the calls) in one signup; verify
the domain with the DNS records Google shows you. Free alternative: **Cloudflare
Email Routing** forwards `you@pagerpilot.com` to your Gmail at no cost, plus Gmail
"Send mail as" to reply from the domain.

## 3. Booking page — how demo calls get booked **[you → me]**
Google's API can't create a booking page, so make it once by hand:
1. Google Calendar → **Create → Appointment schedule** ("PagerPilot demo",
   30-min slots, Google Meet as location).
2. **Booking form → Add a question** (this is the pre-call survey):
   Company · Team size · Observability + paging stack today · Biggest on-call
   pain · Recent incident to walk through?
3. Turn on email verification, save, copy the link → send to me → I paste it into
   `main.js` (`SITE.BOOKING_URL`).

## 4. Lead capture for the on-page form **[you → me]**
Create a free form at **formspree.io**, copy the endpoint, send it → I wire it
into `main.js` (`SITE.FORM_ENDPOINT`).

## Until then
Nothing is broken: "Book a demo" scrolls to the on-page form, and the form falls
back to emailing johnzhou1402@gmail.com so no lead is lost.
