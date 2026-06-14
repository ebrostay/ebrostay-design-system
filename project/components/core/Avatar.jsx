import React from 'react';

const sizes = { xs: 28, sm: 36, md: 44, lg: 56, xl: 72 };

function initialsOf(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '·';
}

/** User/host avatar — image with initials fallback, optional online dot. */
export function Avatar({ src, name = '', size = 'md', status = null, ring = false, style = {} }) {
  const d = sizes[size] || sizes.md;
  const dot = Math.max(8, Math.round(d * 0.26));
  return (
    <span style={{ position: 'relative', display: 'inline-flex', width: d, height: d, flex: 'none', ...style }}>
      <span style={{
        width: d, height: d, borderRadius: '50%', overflow: 'hidden',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--green-100)', color: 'var(--green-700)',
        fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: d * 0.38,
        boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand)' : 'none',
      }}>
        {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initialsOf(name)}
      </span>
      {status && (
        <span style={{
          position: 'absolute', right: -1, bottom: -1, width: dot, height: dot,
          borderRadius: '50%', border: '2px solid var(--surface-card)',
          background: status === 'online' ? 'var(--success)' : 'var(--stone-400)',
        }} />
      )}
    </span>
  );
}
