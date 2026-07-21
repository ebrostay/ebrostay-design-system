# Ebrostay — Design System (v2)

**Ebrostay** is a **mid-term corporate-rental marketplace** for **Zaragoza, Spain** — the city on the river **Ebro**, in Aragón. Stays are contracted in **whole months, 1 to 11** (whole-month billing; the 11-month cap and 15% commission rules live in the product spec). It serves two audiences: **companies and relocating professionals** who need a furnished home for months, and **property owners** who host them. Spanish is the product's default register; everything ships bilingual ES/EN. Tagline voice: *"Book your home in Zaragoza in minutes."*

> **This is the v2 identity: "the calm ledger of a stay."** It was established on branch `redesign/v2` of the **ebrostay-home** repo, where the production implementation lives (`app/` — Next.js, Tailwind v4, tokens in `app/app/globals.css`, components in `app/components/`). This design system mirrors that language for prototyping and brand work. The **logo was kept** from v1; the v1 visual system (warm stone, terracotta/clay, hospitality-soft radii) was retired and is preserved in this repo's **git history**.

---

## Brand at a glance

- **Name / mark** — "Ebrostay", the **bridge over the Ebro**: a minimal green arch over a soft-blue water fill. The wordmark sets "Ebrostay" as one word, two-tone (dark "Ebro" + green "stay"). The whole v2 palette derives from this mark: the green stone bridge, the blue river.
- **Concept** — *the calm ledger of a stay*. Mid-term rentals are contracts measured in whole months; the design speaks that language — disciplined ledger rules, tabular numerals, month units made tangible. Warmth comes from the photography; the UI stays cool, precise, and trustworthy.
- **Primary color** — bridge green `#1f8a57`. **Second hue** — river blue `#9cc4f0` (open / informational; it replaced v1's terracotta accent). **Neutrals** — cool limestone; ink is green-black `#15251f`.
- **Type** — Familjen Grotesk (display), Onest (body), Spline Sans Mono (data).

**Availability semantics — system-wide and non-negotiable:**

| Color | Meaning |
| --- | --- |
| river blue | open / informational ("open water") |
| bridge green | selected / yours / live |
| occupied (ink-solid) | taken / closed |

A month is rarely binary — stays start mid-month — so availability bands show a **third, split state** for partially booked months.

---

## CONTENT FUNDAMENTALS — how Ebrostay writes

**Voice** (carried over from v1 — it survived the redesign untouched): warm, plain-spoken, confident, and *local*. We sound like a helpful host who knows the city, not a booking conglomerate. Lead with the benefit; never hedge.

- **Person.** Talk to the reader as **"you"** ("Book your home", "your stay"). The brand refers to itself as **"we"** sparingly. Hosts are "hosts"; renters are "guests".
- **Tone.** Reassuring and specific. Concrete facts ("Free cancellation up to 48 hours before check-in"), never vague promises ("flexible policies may apply.*"). Vague hedging erodes trust.
- **Casing.** Sentence case everywhere. Uppercase only in small tracked-out ledger labels.
- **Bilingual.** Every user-facing string exists in Spanish **and** English; Spanish is the default register. Buttons say what they do ("Solicitar reserva", never "Enviar"). Money is **always labelled an estimate** — the owner confirms the final price.
- **Numbers.** Currency is euro, in the mono data voice with **forced digit grouping** (`1.350 €` — es-ES alone doesn't group 4-digit numbers). Counts use proper plurals in both languages. Booking references are mono uppercase (`EBR-4821-ZGZ`).
- **Local flavour.** Zaragoza specifics — El Tubo, Casco Histórico, the Basílica del Pilar, the Ebro — used naturally, never gimmicky.
- **No corporate filler.** Avoid "seamless", "leverage", "solutions", "unlock", "elevate". No exclamation-mark hype. No asterisked caveats. No emoji in product UI.

**Examples**
- ✅ "Book your home in Zaragoza in minutes." ❌ "Leverage our seamless booking solutions."
- ✅ "Free cancellation up to 48h before check-in." ❌ "Flexible cancellation policies may apply.*"
- ✅ "2 dormitorios · amueblado · disponible desde septiembre" ❌ "A Wonderful Property With Many Amazing Features!"

---

## VISUAL FOUNDATIONS

**Mode.** Light and dark are both first-class. Theme is `data-theme="dark"` on `<html>` (or any ancestor — guideline pages scope panels with it). Dark is **green-charcoal** (`#0f1713` / `#16201b`), not warm black: hairlines go translucent, brand and ring lift a step, and `--occupied` has its own dark value — it must **never** derive from `--ink`, which flips with the theme.

**Color.** One saturated green: if it's green, it's **yours** — selected months, your live stay, the primary action. The **river** is the second hue: open months, info notes, focus, selection. Neutrals are cool limestone with a trace of green; ink is green-black, never `#000`. Status hues (`--warn`, `--danger`) are reserved for review/rejection states; there is no separate info blue — `--river-deep` serves that role. `--star` is the one gold. **No terracotta/clay**: v1's warm accent was deliberately dropped; photography carries the warmth.

**Imagery.** Photography-led — real property and Zaragoza photos carry the emotion. Photos sit in `--radius-card` (14px) containers. Where text overlays a photo, use `--overlay` (ink-tinted), never black.

**Type.** Display set in **Familjen Grotesk** (chosen 2026-07-22 via side-by-side; replaced Bricolage — v1's display face — for a distinct form), tracking −0.015em, tight leading; v2 headlines may sit at **700** (unlike v1's airy 600) — Familjen carries weight without shouting. UI headings stay 600. **Onest** 400 for body. **Spline Sans Mono** is the **data voice** (class `.data`): prices, dates, month labels, section eyebrows — always with tabular numerals so ledgers align. Display sizes are **fluid** (`clamp()`, `--text-2xl`…`--text-6xl`, each with a paired line-height token) — proven v1 tuning that the v2 app adopted.

**The signature: the month-band.** An 11-cell strip — the product's whole domain (1–11 month stays) made physical. Two forms: the **stay-length selector** (cells 1–N green, rest river-wash; radiogroup semantics) and the **availability band** (a listing's next 12 months as thin bars — river = fully open, split river/occupied = partially booked, occupied-solid = taken). The band is a glanceable *summary*; day-level truth lives in the range calendar, which shares the same color language (selected span = green, booked day = occupied-solid with a diagonal slash drawn behind the number, today = river underline). **Restraint rule:** the band appears only where it carries data — hero selector, cards, calendars. It is not a decorative divider.

**Structural voice.**
- **Ledger rule** (`.ledger-rule`): hairline + small-caps mono label — the section divider. Labels are content words, never fake numbering.
- **Radii:** two working values — `--radius-control` 8px (buttons, inputs, month cells) and `--radius-card` 14px (cards, photos, dialogs) — plus the pill. Contract discipline, not hospitality soft.
- **Elevation:** two shadows only — `--shadow-card` (resting) and `--shadow-pop` (genuinely floating: menus, popovers, dialogs). Hairlines still do most separation.
- **Focus:** 2px river ring (`--ring`), offset 2px, on `:focus-visible` — never removed.
- **Selection** is open water: river background, ink text (`::selection`).

**Motion.** One flat **150ms** transition (`--dur-standard`) for hover, press and theme changes — no lifts, no springs, no scroll reveals. The design's **one orchestrated moment** is the month-band entrance: `.month-cell-enter`, a 350ms rise with a 35ms per-cell stagger (`--cell-index`). Loading uses `.skeleton` (surface-2 base, 7% ink sweep). All of it is gated on `prefers-reduced-motion`.

**States.** Hover: brand → `--brand-strong` (or a surface-2 wash on quiet controls). Selected: green — see availability semantics. Disabled *dates* are never faded: booked = occupied-solid with the slash. Focus: the river ring.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — 2px-stroke outline icons, unchanged from v1. Load `lucide.min.js`, write `<i data-lucide="name"></i>`, call `lucide.createIcons()` after render.
- **Star** is drawn inline (not Lucide) wherever ratings appear, filled with `--star`, so ratings never depend on the icon font.
- **Logo files:** `assets/logo-mark.svg` (arch mark), `assets/logo-wordmark.svg`, `assets/favicon.svg`, `assets/app-icon-dark.svg`, plus `-inverse` variants for dark backgrounds — never a CSS invert filter. `guidelines/logo-bridge-water.html` documents the mark. The same pack ships in the ebrostay-home app under `app/public/brand/`.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/colors.css` (v2 palette, both themes, + clearly-marked v1 compatibility aliases) · `tokens/typography.css` · `tokens/spacing.css` (radii, shadows, motion, layout) · `tokens/utilities.css` (ledger-rule, `.data`, skeleton, month-band entrance, focus/selection) · `tokens/fonts.css`
- `assets/` — logo pack (see Iconography).

**Specimen cards** (`guidelines/`, shown in the Design System tab)
- Colors: bridge green, river blue, limestone neutrals, surfaces, status, dark theme
- Type: display, body, data voice
- Spacing: scale, radii, shadows
- Motion: motion & interaction, loading skeleton
- Signature: **the month-band**
- Brand: logo, voice & tone (v1 pages, still canonical)

**Components** (`window.EbrostayDesignSystem_8b1b13.*`) — **LEGACY, v1 visual style.** Button, IconButton, Badge, Tag, Avatar, Rating, Card, Input, Select, Checkbox, Switch, PropertyCard, SearchBar, AmenityChip, Tabs. They render via the compatibility aliases and are fine as quick prototyping stand-ins, but the **v2 component inventory lives in ebrostay-home `app/components/`** (Button, Field/Input, Radix Select, Badge, Dialog, MonthBand, PropertyCard, site chrome).

**UI kits** (`ui_kits/`) — **LEGACY, v1 visual style** (see the banner in each kit README). `website/`, `dashboard/`, `auth/` remain valuable as **feature-coverage checklists** — which screens, states and flows the v2 rebuild must cover — never as styling sources.

**Usage in HTML:** link `styles.css`, style with the v2 tokens above. For legacy component demos, load `_ds_bundle.js` (auto-generated; never edit).

---

## CAVEATS

- **Fonts load via Google Fonts CDN** (`tokens/fonts.css` `@import`), not self-hosted `.woff2` files. For production, self-host Familjen Grotesk / Onest / Spline Sans Mono — the ebrostay-home app already does (via `next/font/google`, CSP-friendly).
- **The v1 token names** (`--stone-*`, `--clay-*`, `--text-strong`, `--surface-card`, `--radius-sm…2xl`, `--shadow-xs…xl`, …) still resolve — they are **compatibility aliases only**, kept so legacy pages and kits render. Do not use them in new work.
- **Components and UI kits are v1-styled** — feature checklists, not styling sources (see above).
- **Imagery is placeholder** (`picsum.photos`) in the legacy kits. Swap in real Zaragoza property photography.
- **v1 in full** — the previous identity (warm stone/clay, glass search bar, airy 600 headlines) is preserved in git history if it's ever needed for reference.
