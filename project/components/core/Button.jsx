import React from 'react';

const sizes = {
  sm: { padding: '0 14px', height: 36, fontSize: 'var(--text-sm)', gap: 7 },
  md: { padding: '0 18px', height: 44, fontSize: 'var(--text-base)', gap: 8 },
  lg: { padding: '0 24px', height: 52, fontSize: 'var(--text-md)', gap: 10 },
};

const variants = {
  primary: {
    background: 'var(--brand)', color: '#fff', border: '1px solid transparent',
  },
  accent: {
    background: 'var(--accent)', color: '#fff', border: '1px solid transparent',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
  },
  subtle: {
    background: 'var(--brand-soft)', color: 'var(--text-brand)', border: '1px solid transparent',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-strong)', border: '1px solid transparent',
  },
};

/**
 * Ebrostay primary action button. Pill-free, soft-cornered, warm.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      data-variant={variant}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: 'var(--tracking-snug)',
        borderRadius: 'var(--radius-md)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.55 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!isDisabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
      onMouseEnter={(e) => {
        if (isDisabled) return;
        if (variant === 'primary') { e.currentTarget.style.background = 'var(--brand-hover)'; e.currentTarget.style.boxShadow = 'var(--shadow-brand)'; }
        else if (variant === 'accent') { e.currentTarget.style.background = 'var(--accent-hover)'; }
        else if (variant === 'secondary') { e.currentTarget.style.background = 'var(--surface-sunken)'; }
        else if (variant === 'subtle') { e.currentTarget.style.background = 'var(--green-100)'; }
        else if (variant === 'ghost') { e.currentTarget.style.background = 'var(--surface-sunken)'; }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.transform = '';
      }}
      {...rest}
    >
      {loading && (
        <span style={{
          width: 15, height: 15, borderRadius: '50%',
          border: '2px solid currentColor', borderTopColor: 'transparent',
          display: 'inline-block', animation: 'ebr-spin 0.7s linear infinite', opacity: 0.9,
        }} />
      )}
      {!loading && icon}
      {children && <span>{children}</span>}
      {!loading && iconRight}
      <style>{`@keyframes ebr-spin{to{transform:rotate(360deg)}}`}</style>
    </button>
  );
}
