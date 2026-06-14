import React from 'react';

/** Custom checkbox with label. Controlled via `checked` + `onChange`. */
export function Checkbox({ label, checked = false, onChange, disabled = false, id, style = {} }) {
  const fieldId = id || (label ? `c-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', ...style,
    }}>
      <input id={fieldId} type="checkbox" checked={checked} disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 22, height: 22, flex: 'none', borderRadius: 'var(--radius-sm)',
        border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
        background: checked ? 'var(--brand)' : 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      }}>
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
