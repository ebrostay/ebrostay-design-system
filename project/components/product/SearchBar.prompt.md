One-line: The hero search pill — Where / Check-in / Check-out / Guests segments + green search button, on a glassy translucent surface.

```jsx
<SearchBar
  where="Zaragoza" checkIn="12 Jun" checkOut="15 Jun" guests="2 guests"
  onSegment={(k) => openPicker(k)}
  onSearch={runSearch}
/>
```

Use `compact` in the header (hides labels/check-out, icon-only button). Segments are buttons; open your own date/guest pickers from `onSegment`.
