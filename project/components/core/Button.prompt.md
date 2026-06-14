One-line: Ebrostay's primary action button — green primary, terracotta accent, plus secondary/subtle/ghost; soft 10px corners and a warm hover shadow.

```jsx
<Button variant="primary" size="lg" icon={<i data-lucide="search" />}>
  Search stays
</Button>

<Button variant="secondary">Save for later</Button>
<Button variant="accent">Reserve now</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (green, the default CTA), `accent` (terracotta — use sparingly), `secondary` (white + border), `subtle` (green-soft fill), `ghost` (transparent).
Sizes: `sm` 36 · `md` 44 · `lg` 52. Props: `icon` / `iconRight` (ReactNode), `fullWidth`, `loading`, `disabled`.
Pass Lucide icons as `<i data-lucide="name" />` and call `lucide.createIcons()` after render.
