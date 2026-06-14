import React from 'react';

/** Filter / amenity chip. Optional leading icon, selectable, and removable. */
export function Tag({
  children, icon = null, selected = false, removable = false, onRemove,
  onClick, style = {}, ...rest
}) {
  const interactive = !!onClick;
  return (
    <span
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '0 12px', height: 36,
        background: selected ? 'var(--brand-soft)' : 'var(--surface-card)',
        color: selected ? 'var(--text-brand)' : 'var(--text-body)',
        border: `1px solid ${selected ? 'var(--border-brand)' : 'var(--border-default)'}`,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500,
        borderRadius: 'var(--radius-pill)', cursor: interactive ? 'pointer' : 'default',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        userSelect: 'none', whiteSpace: 'nowrap', ...style,
      }}
      onMouseEnter={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = 'var(--border-default)'; }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', width: 15, height: 15 }}>{icon}</span>}
      {children}
      {removable && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 16, height: 16, marginRight: -2, borderRadius: '50%', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: 14, lineHeight: 1 }}
        >×</span>
      )}
    </span>
  );
}
