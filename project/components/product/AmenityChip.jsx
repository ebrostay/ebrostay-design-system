import React from 'react';

/** Amenity row item: icon + label. Use in property detail amenity lists. */
export function AmenityChip({ icon = null, label, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', ...style,
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-md)',
        background: 'var(--brand-soft)', color: 'var(--brand)',
      }}>
        <span style={{ display: 'inline-flex', width: 20, height: 20 }}>{icon}</span>
      </span>
      {label}
    </span>
  );
}
