# Ebrostay — Design System

**Ebrostay** is a short-term home–booking platform for **Zaragoza, Spain** — the city on the river **Ebro**, in Aragón. Tagline: *"Book your home in Zaragoza in minutes."* It serves two audiences: **guests** looking for a place to stay, and **property owners / businesses** who host them.

This is a from-scratch brand (no prior codebase, Figma, or assets were provided). The visual identity below was designed for this project: a clean, light, Mediterranean-warm system — fresh **green** primary (trust, nature, the river), warm **terracotta / amber** secondary (the Aragón sun and brick), and warm **stone** neutrals, with tasteful transparency and blur.

> **Sources provided:** none (greenfield brand). Brief from the user: *"a fitting design for my website for hosting … Ebrostay — Book your home in Zaragoza in minutes … businesses and property owners … clean light with some green, you can use transparency … light-first."* If a codebase, Figma, or real photography exists, attach it via the Import menu and this system can be re-grounded against it.

---

## Brand at a glance

- **Name / mark** — "Ebrostay", with the suffix **stay** set in brand green. The mark is a rounded **arch / doorway** (a welcoming portal, echoing Zaragoza's mudéjar arches) with a small terracotta keystone dot.
- **Personality** — warm, local, direct, trustworthy. A knowledgeable neighbour, not a corporate platform.
- **Primary color** — Ebro green `#1f8a57`. **Accent** — terracotta `#d9632a` (used sparingly). **Neutrals** — warm stone.
- **Type** — Bricolage Grotesque (display), Hanken Grotesque (UI/body), JetBrains Mono (refs/prices).

---

## CONTENT FUNDAMENTALS — how Ebrostay writes

**Voice:** warm, plain-spoken, confident, and *local*. We sound like a helpful host who knows the city, not a booking conglomerate. Lead with the benefit; never hedge.

- **Person.** Talk to the reader as **"you"** ("Book your home", "your stay"). The brand refers to itself as **"we"** sparingly, mostly stays out of the way. Hosts are "hosts"; renters are "guests".
- **Tone.** Reassuring and specific. We remove doubt with concrete facts ("Free cancellation up to 48 hours before check-in") rather than vague promises ("flexible policies may apply").
- **Casing.** **Sentence case everywhere** — headings, buttons, labels. No Title Case On Buttons. Uppercase is reserved for small **eyebrow** labels (tracked-out, e.g. `FEATURED STAY`).
- **Length.** Short. Headlines are one idea. Body copy is scannable. Prices, dates and counts are concrete.
- **Local flavour.** Lean into Zaragoza specifics — neighbourhoods (El Tubo, Casco Histórico, El Pilar, Las Fuentes), landmarks (Basílica del Pilar, the Ebro), Spanish words used naturally where they read warmly. Never gimmicky.
- **No corporate filler.** Avoid "seamless", "leverage", "solutions", "unlock", "elevate". No exclamation-mark hype. No asterisked caveats — if there's a condition, state it plainly.
- **Numbers.** Currency is euro `€`, shown with mono numerals (`€128 / night`). Booking references use mono uppercase (`EBR-4821-ZGZ`).
- **Emoji.** Not used in product UI or marketing copy. Meaning is carried by words and Lucide icons.

**Examples**
- ✅ "Book your home in Zaragoza in minutes." ❌ "Leverage our seamless booking solutions."
- ✅ "Free cancellation up to 48h before check-in." ❌ "Flexible cancellation policies may apply.*"
- ✅ "2 guests · 1 bedroom · river view" ❌ "A Wonderful Property With Many Amazing Features!"

---

## VISUAL FOUNDATIONS

**Mode.** Light-first. The canvas is warm off-white (`--surface-page` `#faf9f6`); cards are pure white. A deep green (`--surface-inverse` `#0a3324`) anchors footers and occasional feature bands. No dark mode is defined yet.

**Color.** Green is the brand and the only saturated color used at scale — CTAs, links, active states, selected chips, focus rings. Terracotta/amber is a *spice*: the favorite-heart fill, a "New" badge, the keystone dot — never a second primary. Neutrals are **warm-tinted stone**, not blue-grey, which keeps the whole UI feeling sunlit. Semantic colors: success = green, warning = amber, danger = a muted brick red, info = a calm blue. All used as soft tints far more often than solid fills.

**Imagery.** Photography-led — this is a hospitality product, so real property and Zaragoza photos carry the emotion (warm, sunlit, inviting interiors; golden-hour exteriors; the Ebro and Pilar). Photos sit in **16px rounded** containers, often full-bleed in heroes. A subtle bottom **protection gradient** (transparent → `rgba(20,24,20,.42)`) is used only where text overlays a photo. *Current mocks use `picsum.photos` placeholders — replace with real Zaragoza property photography (see Caveats).* When no image exists, the fallback is a green→clay gradient block, never a broken image.

**Type.** Display set in **Bricolage Grotesque** at a lighter **weight 600** (`--weight-display`) with tight tracking (−0.02em) — big and airy, not heavy. **Hanken Grotesque** 400 for body, with a wide weight jump to headings for contrast. Display sizes are **fluid** (`clamp()`, `--text-2xl`…`--text-6xl`) so headlines scale with the viewport. **JetBrains Mono** for prices, dates and booking refs. Generous line-height (1.5) for reading; tight (1.08–1.22) for display. Use the semantic weight aliases (`--weight-display/heading/body`), not raw numbers.

**Spacing & layout.** 4px base grid. Containers max out around 1200–1360px. Generous whitespace — the brand reads "calm and uncluttered". Section rhythm uses `--space-9`/`--space-12` vertical gaps. Use flex/grid with `gap` for all groupings.

**Corner radii.** Consolidated and intentional: tags/inner elements **8px** (`--radius-sm`), inputs/buttons **12px** (`--radius-md`), the workhorse cards/photos/panels **18px** (`--radius-lg`), large surfaces/booking card **24px** (`--radius-xl`), hero/feature bands **30px** (`--radius-2xl`). Pills (`--radius-pill`) for chips, badges, the search bar, and the search button. The in-between values were dropped so the system feels deliberate.

**Shadows / elevation — FLAT system.** Separation comes from **hairline borders** (`--hairline` = 1px subtle stone), not drop-shadows. Shadows are reserved for genuinely *floating* UI and kept light: `--shadow-md` rarely, `--shadow-lg`/`--shadow-xl` for menus, popovers and the floating search bar; `--shadow-brand` (soft green) only on the primary button hover. Resting cards use a hairline + the page tint, nothing more — this is the biggest "crisp, modern" lever.

**Transparency & blur.** A signature touch. The hero **search bar** and on-photo controls (favorite heart, gallery arrows, photo badges) use a translucent white **glass** surface (`--glass-strong`, `backdrop-filter: blur(16px)`). Used only over imagery or as floating chrome — not on flat backgrounds.

**Motion.** Restrained and natural. Hover/press use `--dur-fast` (120ms) `--ease-out`. Cards **lift 3px** on hover; photos inside cards **scale 1.045** (overflow hidden). The switch thumb uses a gentle spring (`--ease-spring`). Press states **nudge down 1px** (buttons) or **scale 0.88** (icon buttons / heart). Sections **scroll-reveal** in with a soft rise + stagger (`.ebr-reveal`, IntersectionObserver). **Skeleton** shimmer (`.ebr-skeleton`) covers loading; **empty states** use a centered icon + one line. All of it is gated on `prefers-reduced-motion` — print, PDF and reduced-motion show final state.

**Dark mode.** A full dark theme ships via `[data-theme="dark"]` on `<html>` (toggle wired into the website header and dashboard topbar). It overrides only the semantic aliases — warm near-black surfaces (`#15140f`/`#1f1d17`), translucent hairlines, brighter brand green — so every component adapts with no per-component work.

**States.**
- *Hover:* primary button darkens green + gains brand shadow; secondary/ghost fill with `--surface-sunken`; chips darken their border; links/icon tiles deepen.
- *Press:* slight downward nudge / scale-down.
- *Focus:* 3px green focus ring (`--ring-focus`) plus a green border on fields.
- *Selected:* green-soft fill + green border + green text (chips, tabs underline).
- *Disabled:* 55% opacity, `not-allowed` cursor.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — clean, consistent 2px-stroke outline icons. This matches the light, friendly, modern aesthetic. *(Substitution flag: no brand icon set was provided, so Lucide is the chosen standard. If a custom set exists, swap it in and update this section.)*
- **Loading:** in HTML cards / kits, load `https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js`, write `<i data-lucide="name"></i>`, and call `lucide.createIcons()` after render. Components (`Button`, `IconButton`, `Input`, `Tag`, `AmenityChip`) accept icons as a **ReactNode** prop so any icon source works.
- **Common icons:** `search`, `map-pin`, `calendar`, `users`, `heart` (save), `star` (rating — drawn inline by `Rating`/`PropertyCard` so it always shows), `wifi`, `utensils`, `wind` (AC), `car` (parking), `bath`, `bed-double`, `chevron-right`, `share`, `shield-check`, `home`.
- **Star** is the one glyph drawn inline (not Lucide) inside `Rating` and `PropertyCard`, filled with `--star` `#e6a52a`, so ratings never depend on the icon font.
- **Emoji / unicode:** not used as iconography. The remove-"×" on `Tag` is the only unicode glyph.
- **Logo:** the **bridge over the Ebro** — a minimal green arch with a small soft-sky-blue water fill (`#9cc4f0`) sitting inside the span. The wordmark sets **"Ebrostay"** as one word, weight 600, two-tone (dark "Ebro" + green "stay"). Files: `assets/logo-mark.svg` (arch mark, vertically centred in its box), `assets/logo-wordmark.svg` (mark + wordmark), `assets/favicon.svg` (light tile), `assets/app-icon-dark.svg` (deep-green app-icon tile, arch centred). For dark backgrounds use `assets/logo-mark-inverse.svg` / `assets/logo-wordmark-inverse.svg` (white arch, pale-blue water) — never a CSS invert filter.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`
- `assets/` — `logo-mark.svg`, `logo-wordmark.svg`, `favicon.svg`, `app-icon-dark.svg`, + `-inverse` variants. `guidelines/logo-bridge-water.html` documents the logo and its colour options.

**Specimen cards** (`guidelines/`, shown in the Design System tab)
- Colors: green, clay, stone, semantic, surfaces & glass
- Type: display, body, mono & eyebrow
- Spacing: scale, radii, shadows
- Brand: logo, voice & tone

**Components** (`window.EbrostayDesignSystem_8b1b13.*`)
- `core/` — Button, IconButton, Badge, Tag, Avatar, Rating (+ RatingInline), Card
- `forms/` — Input, Select, Checkbox, Switch
- `product/` — **PropertyCard**, **SearchBar**, AmenityChip
- `navigation/` — Tabs
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each group has a `*.card.html` showcase.

**UI kits** (`ui_kits/`) — full-screen, interactive recreations built entirely from the components above
- `website/` — booking site: home + hero search, search results with map pins, property detail with booking card → reserve. (`index.html`, `Header/Home/Results/Detail/App.jsx`, `data.js`)
- `dashboard/` — host control panel: overview (stats + earnings chart), listings, calendar, bookings. (`index.html`, `Shell/Overview/Views/App.jsx`, `data.js`)
- `auth/` — split-screen sign up / log in. (`index.html`, `Auth.jsx`)

**Usage in HTML:** link `styles.css`, load `_ds_bundle.js` (auto-generated; never edit), then `const { Button, PropertyCard } = window.EbrostayDesignSystem_8b1b13;`.

---

## CAVEATS

- **Fonts load via Google Fonts CDN** (`tokens/fonts.css` `@import`), not self-hosted `.woff2` files. The compiler therefore reports 0 local fonts. For production, self-host Bricolage Grotesque / Hanken Grotesque / JetBrains Mono and add real `@font-face` rules. *Want me to do this?*
- **Imagery is placeholder** (`picsum.photos`). Swap in real Zaragoza property photography for the true brand feel.
- **Icons are Lucide** as a chosen standard (no brand set was provided).
- The logo is an original wordmark + arch mark created for this brand. Happy to explore alternative marks.
