import React from 'react';

const pads = { sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };

/** Generic surface container with soft corners and warm shadow. */
export function Card({
  children, padding = 'md', interactive = false, elevation = 'sm',
  as = 'div', style = {}, onClick, ...rest
}) {
  const Tag = as;
  const shadow = { none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' }[elevation] || 'var(--shadow-sm)';
  return (
    <Tag
      onClick={onClick}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: shadow,
        padding: pads[padding] ?? padding,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = shadow; } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
