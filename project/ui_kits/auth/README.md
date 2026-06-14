# UI Kit — Ebrostay auth

Sign up / log in. Open `index.html`.

## Layout
Split screen: a brand panel (full-bleed photo with green protection gradient, inverted logo, headline + trust stats) beside the form panel.

- **Auth** (`Auth.jsx`) — a pill toggle switches between **Sign up** (name + email + password + terms) and **Log in** (email + password + remember / forgot). Social buttons (Google / Apple), cross-links between modes, and a confirmation toast on submit.

## Composition
Built from `Input` (with leading icons + trailing eye), `Button`, and `Checkbox` from `window.EbrostayDesignSystem_8b1b13`. Icons via Lucide. The brand photo is a `picsum.photos` placeholder — swap for a real Zaragoza interior/exterior.
