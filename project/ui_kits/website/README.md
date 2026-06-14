# UI Kit — Ebrostay booking website

Interactive, high-fidelity recreation of the public Ebrostay site. Open `index.html`.

## Flow
`Home` → search / category browse → `Results` (list + map) → `Detail` (gallery, amenities, reviews, booking card) → **Reserve** (confirmation toast).

- **Home** (`Home.jsx`) — full-bleed hero with the brand headline, a floating glassy `SearchBar`, category `Tag` row, a `PropertyCard` grid, and a deep-green host CTA band. Clicking the search bar segments opens a picker popover (areas / dates / guests stepper).
- **Results** (`Results.jsx`) — filter chips + Instant-book switch, a two-column listing grid, and a sticky map panel with price pins.
- **Detail** (`Detail.jsx`) — gallery mosaic, host summary, Superhost note, `Tabs` (amenities / reviews / location), and a sticky booking card with price breakdown.
- **Header** (`Header.jsx`) — sticky glass header; collapses the search into a compact pill on inner pages; account menu.
- **App** (`SiteApp.jsx`) — screen state machine, search popover, reserve toast.
- **data.js** — sample Zaragoza listings (`window.EBR_DATA`).

## Composition
Built entirely from the design-system components: `SearchBar`, `PropertyCard`, `Tag`, `Tabs`, `AmenityChip`, `Avatar`, `Badge`, `Rating`, `Button`, `Select`, `Switch` from `window.EbrostayDesignSystem_8b1b13`. Icons via Lucide. Photos are `picsum.photos` placeholders — swap for real Zaragoza property photography.

## Notes
Each screen file attaches its component to `window` (e.g. `window.EbrHome`) so the Babel scripts can share scope. Requires the generated `_ds_bundle.js` at the project root.
