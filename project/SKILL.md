---
name: ebrostay-design
description: Use this skill to generate well-branded interfaces and assets for Ebrostay (a short-term home-booking platform for Zaragoza, Spain), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Ebrostay — "Book your home in Zaragoza in minutes." Warm, local, direct hospitality voice. Sentence case. No emoji, no corporate filler.
- **Tokens:** link `styles.css`. Primary green `--brand` `#1f8a57`; accent terracotta `--accent` `#d9632a`; warm stone neutrals; soft warm shadows; 10/16/22px radii; glass/blur for search + on-photo chrome.
- **Type:** Bricolage Grotesque (display), Hanken Grotesque (UI/body), JetBrains Mono (prices/refs). Loaded via Google Fonts in `tokens/fonts.css`.
- **Icons:** Lucide (`<i data-lucide="…">` + `lucide.createIcons()`).
- **Components:** `_ds_bundle.js` → `window.EbrostayDesignSystem_8b1b13.*` — Button, IconButton, Badge, Tag, Avatar, Rating, Card, Input, Select, Checkbox, Switch, PropertyCard, SearchBar, AmenityChip, Tabs. See each `*.prompt.md`.
- **UI kits:** `ui_kits/website`, `ui_kits/dashboard`, `ui_kits/auth` — full-screen recreations to copy from.
