import React from 'react';

function Segment({ label, value, placeholder, onClick, first, flex = 1 }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2,
        padding: '10px 20px', border: 'none', background: hover ? 'var(--surface-sunken)' : 'transparent',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer', textAlign: 'left', minWidth: 0,
        transition: 'background var(--dur-fast) var(--ease-out)',
      }}
    >
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: value ? 'var(--text-body)' : 'var(--text-subtle)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
        {value || placeholder}
      </span>
    </button>
  );
}

const Divider = () => <span style={{ width: 1, height: 30, background: 'var(--border-subtle)', flex: 'none' }} />;

/**
 * The hero search control: Where / Check-in / Check-out / Guests segments in a
 * single glassy pill with a green search button. Segments are buttons — wire
 * `onSegment(key)` to open your own pickers.
 */
export function SearchBar({ where, checkIn, checkOut, guests, onSegment, onSearch, compact = false, style = {} }) {
  const seg = (k) => () => onSegment && onSegment(k);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 4,
      background: 'var(--glass-strong)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)', padding: 6, ...style,
    }}>
      <Segment label="Where" value={where} placeholder="Search Zaragoza" onClick={seg('where')} first flex={1.4} />
      <Divider />
      <Segment label="Check in" value={checkIn} placeholder="Add dates" onClick={seg('checkIn')} />
      {!compact && <Divider />}
      {!compact && <Segment label="Check out" value={checkOut} placeholder="Add dates" onClick={seg('checkOut')} />}
      <Divider />
      <Segment label="Guests" value={guests} placeholder="Add guests" onClick={seg('guests')} />
      <button
        type="button" onClick={onSearch} aria-label="Search"
        style={{
          flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: 4,
          height: 52, padding: '0 22px', border: 'none', borderRadius: 'var(--radius-pill)',
          background: 'var(--brand)', color: '#fff', cursor: 'pointer',
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)',
          transition: 'background var(--dur-fast) var(--ease-out)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        {!compact && <span>Search</span>}
      </button>
    </div>
  );
}
