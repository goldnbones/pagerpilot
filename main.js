/* Vigil landing — config + interactions.
   Two things to fill in after setup (see SETUP.md):
   1) BOOKING_URL  — your Google Calendar appointment-schedule link.
   2) FORM_ENDPOINT — your Formspree endpoint for the async lead form.
   Until BOOKING_URL is real, "Book a demo" scrolls to the form so nothing is dead. */

const SITE = {
  name: "Vigil",
  // TODO: paste your Google Calendar booking link here.
  BOOKING_URL: "",
  // TODO: paste your Formspree endpoint here, e.g. "https://formspree.io/f/xxxxxxxx".
  FORM_ENDPOINT: "",
  // Fallback inbox if no Formspree endpoint is set yet.
  FALLBACK_EMAIL: "johnzhou1402@gmail.com",
};

// --- Book a demo buttons ---
function wireBooking() {
  document.querySelectorAll(".js-book").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (SITE.BOOKING_URL) {
        e.preventDefault();
        window.open(SITE.BOOKING_URL, "_blank", "noopener");
      } else {
        // no booking link yet — send them to the form
        e.preventDefault();
        document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
        document.querySelector("#leadForm input[name=email]")?.focus({ preventScroll: true });
      }
    });
  });
}

// --- Lead form ---
function wireForm() {
  const form = document.getElementById("leadForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.email || !/.+@.+\..+/.test(data.email)) {
      status.textContent = "Please enter a valid work email.";
      status.className = "form-status err";
      return;
    }
    status.textContent = "Sending…";
    status.className = "form-status";

    const done = () => {
      form.reset();
      status.className = "form-status ok";
      status.textContent = SITE.BOOKING_URL
        ? "Got it — grab a time that works for you ↗"
        : "Got it — we'll be in touch shortly. Thank you!";
      if (SITE.BOOKING_URL) setTimeout(() => window.open(SITE.BOOKING_URL, "_blank", "noopener"), 400);
    };

    // Preferred path: Formspree (captures the lead, no backend of our own).
    if (SITE.FORM_ENDPOINT) {
      try {
        const res = await fetch(SITE.FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (res.ok) return done();
        throw new Error("bad status " + res.status);
      } catch (err) {
        status.className = "form-status err";
        status.textContent = "Something went wrong — email us at " + SITE.FALLBACK_EMAIL;
        return;
      }
    }

    // Fallback before Formspree is set up: open a prefilled email.
    const subject = encodeURIComponent("Vigil — demo request");
    const body = encodeURIComponent(
      `Email: ${data.email}\nCompany: ${data.company || ""}\nTeam size: ${data.team_size || ""}\n` +
      `Biggest on-call pain: ${data.pain || ""}\nStack today: ${data.stack || ""}`
    );
    window.location.href = `mailto:${SITE.FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    done();
  });
}

wireBooking();
wireForm();
