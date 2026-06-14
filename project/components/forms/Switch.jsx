import React from 'react';

/** Toggle switch. Controlled via `checked` + `onChange`. */
export function Switch({ label, checked = false, onChange, disabled = false, id, style = {} }) {
  const fieldId = id || (label ? `sw-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', ...style,
    }}>
      <input id={fieldId} type="checkbox" checked={checked} disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        position: 'relative', width: 46, height: 28, flex: 'none', borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--brand)' : 'var(--stone-300)',
        transition: 'background var(--dur-base) var(--ease-out)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: 3, width: 22, height: 22, borderRadius: '50%',
          background: '#fff', boxShadow: 'var(--shadow-sm)',
          transform: checked ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-spring)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
