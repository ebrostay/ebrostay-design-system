---
name: ebrostay-design
description: Use this skill to generate well-branded interfaces and assets for Ebrostay (a mid-term, 1–11 month corporate-rental marketplace in Zaragoza, Spain), either for production or throwaway prototypes/mocks/etc. Contains the v2 design language ("the calm ledger of a stay"), colors, type, fonts, assets, and legacy UI-kit feature checklists.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, note that the production v2 components live in the **ebrostay-home** repo (branch `redesign/v2`, `app/`) — this skill teaches the design language; that repo owns the implementation.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Ebrostay — a **mid-term (1–11 whole months) corporate-rental marketplace** for Zaragoza, Spain. Spanish-first product, bilingual ES/EN. v2 identity: **"the calm ledger of a stay"** — disciplined ledger rules, tabular numerals, month units made tangible; warmth comes from photography, the UI stays cool and precise.
- **Availability semantics (system-wide, non-negotiable):** river blue = open / informational ("open water") · bridge green = selected / yours / live · occupied-solid = taken. Partial months render as a split river/occupied cell. See `guidelines/month-band.html` — the signature 1–11 month-band.
- **Tokens:** link `styles.css`. Brand green `--brand` `#1f8a57` (the logo's bridge); river `--river` `#9cc4f0` (the logo's Ebro — it replaced v1's clay accent); cool limestone neutrals; ink `#15251f`; radii control 8 / card 14; two shadows (`--shadow-card` / `--shadow-pop`); dark via `[data-theme="dark"]`.
- **Type:** Familjen Grotesk (display, 600–700; chosen 2026-07-22 over Bricolage, which was v1's face), Onest (body), Spline Sans Mono (the data voice — prices/dates/month labels via class `.data`, tabular numerals). Loaded via Google Fonts in `tokens/fonts.css`.
- **Voice (carried over from v1 — still canonical):** "Book your home in Zaragoza in minutes." Plain, confident, local; lead with the benefit, never platform-speak ("seamless booking solutions"); be specific and unhedged ("Free cancellation up to 48h before check-in", never "policies may apply.*"). Sentence case. No emoji, no corporate filler. Money is always labelled an estimate.
- **Icons:** Lucide (`<i data-lucide="…">` + `lucide.createIcons()`).
- **Components / UI kits are LEGACY (v1 visual style):** `_ds_bundle.js` → `window.EbrostayDesignSystem_8b1b13.*` and `ui_kits/website|dashboard|auth` still render the v1 look via compatibility aliases. Use them only as **feature-coverage checklists** — never as styling sources. v2 components: ebrostay-home `app/components/`.
- **v1:** the previous warm stone/clay identity is preserved in this repo's git history.
