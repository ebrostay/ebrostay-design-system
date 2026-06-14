One-line: Labeled text field with green focus ring, optional leading/trailing icons, hint and error states.

```jsx
<Input label="Where to?" icon={<i data-lucide="map-pin" />} placeholder="Zaragoza" />
<Input label="Email" type="email" error="Enter a valid email" />
```
Sizes `sm/md/lg`. Pair leading icons with Lucide and call `lucide.createIcons()`.
