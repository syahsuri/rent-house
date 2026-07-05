# Claude Code Prompt — Rental House Website

Copy everything below the line into Claude Code. Fill the `[...]` placeholders first (or leave them — it will use sensible dummy content you can swap later).

---

Build a single-property rental house website. This is for MY house that I'm renting out — not a marketplace, not a listing platform. One house, one page, one goal: make someone message me on WhatsApp to book a viewing.

## Property details
- Name/address: [e.g. "Rumah Sewa Jl. Merdeka, Lhokseumawe"]
- Type: [e.g. 2-bedroom house, 1 bathroom, carport, 90m² land]
- Price: [e.g. Rp 15jt/tahun or Rp 1.5jt/bulan]
- Key selling points: [e.g. dekat kampus, sumur bor, listrik 1300W, perabotan]
- WhatsApp number: [62xxxxxxxxxx]
- Photos: use `/public/photos/` — I'll drop real images there. Use elegant placeholder blocks (solid tone + label) until then, NOT stock photos or unsplash links.

## Stack
- Next.js 14 (App Router), static export (`output: 'export'`) so I can host it anywhere free
- Tailwind CSS
- Framer Motion — but restrained, see motion rules below
- No CMS, no database, no auth. All content lives in one `content.ts` config file so I can edit details without touching components.

## Design direction — read carefully, this matters most
The vibe: **architectural editorial**. Think a page from a printed architecture magazine profiling one house — quiet confidence, big photography, generous whitespace, typography doing the heavy lifting. Warm and grounded, not corporate, not startup-y.

Concrete rules:
- **Palette:** warm off-white paper background, deep ink (near-black warm brown) for text, ONE accent pulled from the house itself (e.g. muted terracotta roof-tile red or teak brown). Max 4 colors total. No gradients anywhere.
- **Typography:** a characterful serif or condensed display face for headlines (e.g. Fraunces, Instrument Serif, or Bricolage Grotesque), a clean grotesque for body. Big type scale contrast — hero headline should be huge (clamp up to ~8rem on desktop), body stays modest. Use Indonesian copy naturally, not translated-English tone.
- **Layout signature:** the hero is NOT a centered headline over a full-bleed image. Instead: an asymmetric split — oversized typographic lockup on one side ("Rumah 2 kamar. Siap huni." style — short, declarative), with a tall portrait-crop photo offset to the other side, slightly overlapping the text column. Facts (harga, luas, kamar) run as a thin spec strip like a technical drawing legend.
- **Sections:** hero → photo gallery (irregular grid, mixed crops, not uniform cards) → spec/detail table styled like an architect's data sheet (thin rules, monospace numbers) → location (embedded map or static map image + "5 menit ke X" proximity list) → single strong CTA block with WhatsApp deep link (`https://wa.me/62xxx?text=Halo,%20saya%20tertarik%20dengan%20rumahnya`).
- **Motion:** one orchestrated page-load reveal on the hero (text mask-up, image fade), subtle scroll reveals elsewhere. Respect `prefers-reduced-motion`. Nothing floats, nothing pulses, no parallax soup.

## Explicitly forbidden (anti-slop list)
- No glassmorphism cards, no purple/blue gradients, no glow effects
- No emoji as icons, no icon grid of "features" with generic lucide icons in rounded squares
- No "Trusted by / testimonials" section, no fake stats counters
- No centered-everything layout, no uniform 3-column card grids
- No footer stuffed with fake nav links — footer is one line: name, WhatsApp, year
- No lorem ipsum — write real Indonesian copy in a natural, direct voice

## Quality floor
- Fully responsive, mobile-first (most visitors will come from a WhatsApp/Facebook link on a phone)
- Lighthouse 90+ perf, lazy-load gallery images, `next/image` with static export config
- Sticky/floating WhatsApp button on mobile only, small and quiet, not a green blob bouncing
- Visible keyboard focus states, semantic HTML, proper meta + OG tags so the link preview looks good when shared in WhatsApp

Before writing code: show me a short design plan (palette hex values, font pairing, one-line layout concept per section). Wait for my OK, then build.
