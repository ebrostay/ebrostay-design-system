import React from 'react';

/** Styled native select with chevron and brand focus ring. */
export function Select({ label, hint, error, size = 'md', id, children, style = {}, containerStyle = {}, ...rest }) {
  const heights = { sm: 38, md: 46, lg: 54 };
  const h = heights[size] || 46;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--brand)' : 'var(--border-default)';
  const fieldId = id || (label ? `s-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...containerStyle }}>
      {label && <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={fieldId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%', height: h, padding: '0 40px 0 14px',
            background: 'var(--surface-card)',
            border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            boxShadow: focused ? 'var(--ring-focus)' : 'none',
            fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
            color: 'var(--text-strong)', cursor: 'pointer', outline: 'none',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
            ...style,
          }}
          {...rest}
        >
          {children}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.2"
          style={{ position: 'absolute', right: 13, pointerEvents: 'none' }}>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {(hint || error) && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
