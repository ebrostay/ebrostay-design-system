import React from 'react';

const sizes = { sm: 34, md: 42, lg: 50 };
const variants = {
  solid:   { background: 'var(--brand)', color: '#fff', border: '1px solid transparent' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)' },
  ghost:   { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
  glass:   { background: 'var(--glass-strong)', color: 'var(--text-strong)', border: '1px solid rgba(255,255,255,.6)' },
};

/** Square icon-only button. Pass a single icon node as children. */
export function IconButton({
  children, label, variant = 'secondary', size = 'md', round = false,
  disabled = false, onClick, style = {}, ...rest
}) {
  const d = sizes[size] || sizes.md;
  const v = variants[variant] || variants.secondary;
  return (
    <button
      type="button" aria-label={label} title={label} onClick={onClick} disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: d, height: d, padding: 0,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        backdropFilter: variant === 'glass' ? 'blur(var(--glass-blur))' : undefined,
        WebkitBackdropFilter: variant === 'glass' ? 'blur(var(--glass-blur))' : undefined,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'solid') e.currentTarget.style.background = 'var(--brand-hover)';
        else if (variant === 'glass') e.currentTarget.style.background = '#fff';
        else e.currentTarget.style.background = 'var(--surface-sunken)';
      }}
      onMouseLeave={(e) => { e.currentTarget.style.background = v.background; }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', width: size === 'sm' ? 17 : 19, height: size === 'sm' ? 17 : 19 }}>{children}</span>
    </button>
  );
}
