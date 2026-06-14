One-line: The signature Ebrostay listing card — photo with favorite heart + optional badge, title, neighbourhood, inline rating and price/night. Building block of search grids.

```jsx
<PropertyCard
  image="/lofts/tubo.jpg"
  badge="Superhost"
  title="Sunny loft in El Tubo"
  location="Casco Histórico"
  rating={4.92} reviews={88}
  note="Free cancellation"
  price={118}
/>
```

`badgeTone`: brand · accent · glass. The heart self-toggles; `onFavorite(next)` reports changes. Falls back to a green→clay gradient when `image` is omitted.
