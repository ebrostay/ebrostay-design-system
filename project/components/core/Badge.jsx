import React from 'react';

const tones = {
  brand:   { soft: ['var(--green-50)', 'var(--green-700)'],  solid: ['var(--brand)', '#fff'] },
  accent:  { soft: ['var(--clay-50)', 'var(--clay-700)'],    solid: ['var(--accent)', '#fff'] },
  neutral: { soft: ['var(--stone-100)', 'var(--stone-700)'], solid: ['var(--stone-700)', '#fff'] },
  success: { soft: ['var(--green-50)', 'var(--green-700)'],  solid: ['var(--success)', '#fff'] },
  warning: { soft: ['var(--warning-soft)', '#7a5410'],       solid: ['var(--warning)', '#fff'] },
  danger:  { soft: ['var(--danger-soft)', '#8f2a2a'],        solid: ['var(--danger)', '#fff'] },
  info:    { soft: ['var(--info-soft)', '#1d5396'],          solid: ['var(--info)', '#fff'] },
};

/** Small status/label pill. `dot` adds a leading status dot. */
export function Badge({ children, tone = 'neutral', solid = false, dot = false, icon = null, style = {} }) {
  const t = tones[tone] || tones.neutral;
  const [bg, fg] = solid ? t.solid : t.soft;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 10px', height: 24,
      background: bg, color: fg,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 600,
      letterSpacing: 'var(--tracking-snug)',
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {icon && <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{icon}</span>}
      {children}
    </span>
  );
}
