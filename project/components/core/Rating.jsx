import React from 'react';

const Star = ({ fill, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
    <path
      d="M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.93 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95z"
      fill={fill} stroke={fill} strokeWidth="0.5" strokeLinejoin="round"
    />
  </svg>
);

/** Star rating. `value` 0–5; shows numeric value and optional review count. */
export function Rating({ value = 0, count = null, size = 16, showValue = true, style = {} }) {
  const full = Math.round(value);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ display: 'inline-flex', gap: 2 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={size} fill={i < full ? 'var(--star)' : 'var(--stone-300)'} />
        ))}
      </span>
      {showValue && (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>
          {value.toFixed(1)}
        </span>
      )}
      {count != null && (
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          ({count})
        </span>
      )}
    </span>
  );
}

/** Compact single-star + number, for dense list rows. */
export function RatingInline({ value = 0, count = null, size = 15, style = {} }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)', ...style }}>
      <Star size={size} fill="var(--star)" />
      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{value.toFixed(2)}</span>
      {count != null && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>· {count} reviews</span>}
    </span>
  );
}
