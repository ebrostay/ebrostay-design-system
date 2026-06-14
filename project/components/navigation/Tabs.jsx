import React from 'react';

/** Underline tabs. Controlled via `value` + `onChange`. `items`: [{value,label}]. */
export function Tabs({ items = [], value, onChange, style = {} }) {
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 28, borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value} role="tab" aria-selected={active}
            onClick={() => onChange && onChange(it.value)}
            style={{
              position: 'relative', border: 'none', background: 'transparent', cursor: 'pointer',
              padding: '0 0 14px', marginBottom: -1,
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--text-strong)' : 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-body)'; }}
            onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            {it.label}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, borderRadius: '3px 3px 0 0',
              background: active ? 'var(--brand)' : 'transparent',
            }} />
          </button>
        );
      })}
    </div>
  );
}
