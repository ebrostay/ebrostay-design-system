# UI Kit — Ebrostay host dashboard

The host control panel. Open `index.html`.

## Screens (sidebar nav)
- **Overview** (`Overview.jsx`) — four stat cards (earnings / occupancy / check-ins / rating), a 12-month earnings bar chart, a "Your listings" snapshot, and an upcoming-bookings table.
- **Listings** (`Views.jsx → EbrListings`) — property cards with status badge, price, rating, an occupancy bar, and Edit / Calendar actions.
- **Calendar** (`Views.jsx → EbrCalendar`) — June 2026 month grid with colour-coded booked days per listing.
- **Bookings** (`Views.jsx → EbrBookings`) — filterable reservation table (All / Confirmed / Pending / Completed) with status badges.
- **Shell** (`Shell.jsx`) — fixed sidebar (logo, nav, host profile) + glass topbar (title, search, notifications, "New listing").
- **App** (`DashApp.jsx`) — nav state + view routing. `data.js` holds sample host data (`window.EBR_DASH`).

## Composition
Uses `Card`, `Badge`, `Avatar`, `Button`, `IconButton`, `Input`, `Rating`, `Tabs` from `window.EbrostayDesignSystem_8b1b13`. Icons via Lucide. The earnings chart is built from token-coloured `div` bars (no chart lib).

## Note
Sidebar nav items intentionally use no background transition — toggling a `var()` background-color via React re-render can leave a stuck computed value, so the active highlight is applied instantly.
