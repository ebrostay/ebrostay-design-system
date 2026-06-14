import React from 'react';

const sizes = {
  sm: { height: 38, fontSize: 'var(--text-sm)', pad: 12 },
  md: { height: 46, fontSize: 'var(--text-base)', pad: 14 },
  lg: { height: 54, fontSize: 'var(--text-md)', pad: 16 },
};

/** Text field with label, hint/error, and optional leading/trailing icons. */
export function Input({
  label, hint, error, icon = null, trailing = null, size = 'md',
  id, style = {}, containerStyle = {}, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--brand)' : 'var(--border-default)';
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...containerStyle }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: s.height, padding: `0 ${s.pad}px`,
        background: 'var(--surface-card)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? 'var(--ring-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {icon && <span style={{ display: 'inline-flex', width: 18, height: 18, color: 'var(--text-muted)', flex: 'none' }}>{icon}</span>}
        <input
          id={fieldId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: s.fontSize, color: 'var(--text-strong)',
            minWidth: 0, ...style,
          }}
          {...rest}
        />
        {trailing && <span style={{ display: 'inline-flex', color: 'var(--text-muted)', flex: 'none' }}>{trailing}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
