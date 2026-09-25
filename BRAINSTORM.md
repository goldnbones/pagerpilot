# Vigil — strategy & brainstorm

**Working name:** Vigil (an AI on-call engineer that "keeps watch so your team can sleep").
Name is a placeholder — swap it in one place (`SITE.name` in `main.js` + the `<title>`/schema). Verify domain + trademark before spending on either. Alternatives: **Klaxon**, **Warden**, **Nocturne**, **Relay**, or a persona name like **Paige** ("page" → Paige).

## One-liner (this is what SEO/AEO quotes)
> Vigil is an AI on-call engineer. It takes first response on every alert, investigates across your logs, metrics, and deploys, and hands your team a root cause and a proposed fix — so 3am pages become morning summaries.

## The wedge (why this can win a crowded field)
Live competitors all cluster in the same box: **enterprise + read-only investigation + "here's a suggested fix (PR)."** The map:

| Player | Position | Where they aim |
|---|---|---|
| **Resolve.ai** | "Goes on-call on your behalf, autonomously resolves" | Enterprise (Coinbase, DoorDash, Snowflake). Most autonomous claim. Well funded. |
| **Traversal** | Causal RCA — "Production World Model," parallel hypothesis search | Fortune 100 / fintech, petabyte scale. Deep technical moat. |
| **Cleric** | Prevention + change verification + alert triage + PR fixes | SRE orgs. Gartner Cool Vendor 2025. |
| **Parity** | AI SRE for Kubernetes | K8s-native teams (YC). |
| **incident.io (Investigations / "Nexus")** | AI co-investigator, human-in-the-loop only | Existing incident-management customers. "Never acts without you." |
| Also: Datadog Bits AI SRE, PagerDuty AI, Deductive, NeuBird, Flip AI, Doctor Droid, Robusta/HolmesGPT (OSS), causely.ai | AIOps + incumbents adding AI | Mostly enterprise. |

**Three open lanes they leave:**

1. **Down-market.** Everyone is chasing Fortune-100 logos with 6-month deployments. The **Series A–C team with real on-call pain but no SRE org** is underserved and far easier to close. They feel the pain personally and can buy fast.
2. **The pain, not the metric.** Competitors sell "MTTR down 80%" (a buyer's spreadsheet metric). The felt pain is **the 3am page and on-call burnout** — which spreads bottom-up from engineers. Lead with sleep and signal, prove MTTR in the demo.
3. **The trust ladder as the product.** Rivals are either "read-only forever" (incident.io) or "trust us, it's autonomous" (Resolve). Position a **graduated autonomy ladder**: starts read-only triage, earns trust, then remediates with guardrails. The ladder itself is the pitch — it's how a nervous mid-market buyer says yes.

**Our sentence vs. theirs:** *"Built for teams without an SRE army. Vigil takes first watch tonight — read-only — and earns its way to fixing things."*

## ICP (who the landing page and survey target)
- **Company:** B2B SaaS / cloud-native, Series A–C, **15–150 engineers**.
- **Stack:** Kubernetes or cloud (AWS/GCP), observability on **Datadog or Grafana**, paging on **PagerDuty or Opsgenie**. Rotating on-call, **no dedicated SRE team**.
- **Buyer:** VP/Head of Engineering, or the first platform/infra hire.
- **Trigger:** alert fatigue, on-call burnout, a recent painful incident, or engineers threatening to quit the rotation.

## Use cases to validate (the survey should probe which one is #1)
1. **First-response triage** on every alert — kill the false-positive noise (the wedge).
2. **Root cause in minutes** — parallel hypothesis search across logs/metrics/traces/recent deploys.
3. **3am page → morning brief** — async summary with cause, blast radius, and a suggested fix/PR.
4. **Recurring-incident remediation** — runbook automation for the same page every week.
5. **Post-incident** — auto-drafted postmortem + follow-up tickets.
6. **On-call onboarding** — a new engineer's AI pair that already knows the system.

## What we're testing (this page is a smoke test, not a product)
- Does "AI on-call engineer for teams without an SRE org" pull qualified demo bookings?
- Which use case above do people select first? (survey question)
- What do they use today, and what would make them switch? (survey)
- Willingness: would they be a **founding design partner**?

**Success signal:** qualified demo bookings + design-partner interest from the ICP, not raw traffic.

## Honesty guardrails (pre-product)
No fake customer logos, no invented metrics, no "SOC 2 certified" (we're not). The page uses **founding-partner** framing and states what's real: read-only by default, security-first, early access. Industry pain is described generally, not with fabricated numbers.
