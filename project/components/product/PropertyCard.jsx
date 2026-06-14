import React from 'react';

/**
 * The signature Ebrostay listing card: photo with favorite heart + optional badge,
 * title, neighbourhood, inline rating, and price per night.
 */
export function PropertyCard({
  image, title, location, price, currency = '€', period = 'night',
  rating, reviews, badge, badgeTone = 'brand', favorite = false, onFavorite,
  note, onClick, style = {},
}) {
  const [fav, setFav] = React.useState(favorite);
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', gap: 12, cursor: onClick ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      onMouseEnter={(e) => { const img = e.currentTarget.querySelector('[data-ph]'); if (img) img.style.transform = 'scale(1.045)'; }}
      onMouseLeave={(e) => { const img = e.currentTarget.querySelector('[data-ph]'); if (img) img.style.transform = ''; }}
    >
      <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '20 / 17', background: 'var(--stone-200)' }}>
        <div data-ph style={{
          position: 'absolute', inset: 0,
          backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg,var(--green-200),var(--clay-200))',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'saturate(1.05) contrast(1.01)',
          transition: 'transform var(--dur-slow) var(--ease-out)',
        }} />
        {badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12, padding: '5px 11px',
            background: badgeTone === 'accent' ? 'var(--accent)' : badgeTone === 'glass' ? 'var(--glass-strong)' : 'var(--brand)',
            color: badgeTone === 'glass' ? 'var(--text-strong)' : '#fff',
            backdropFilter: badgeTone === 'glass' ? 'blur(var(--glass-blur))' : undefined,
            WebkitBackdropFilter: badgeTone === 'glass' ? 'blur(var(--glass-blur))' : undefined,
            borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-xs)', fontWeight: 600,
            letterSpacing: 'var(--tracking-snug)',
          }}>{badge}</span>
        )}
        <button
          type="button" aria-label="Save"
          onClick={(e) => { e.stopPropagation(); setFav(!fav); onFavorite && onFavorite(!fav); }}
          style={{
            position: 'absolute', top: 10, right: 10, width: 38, height: 38, border: 'none',
            borderRadius: '50%', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--glass-strong)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
            transition: 'transform var(--dur-fast) var(--ease-spring)',
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.88)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill={fav ? 'var(--accent)' : 'none'} stroke={fav ? 'var(--accent)' : 'var(--stone-700)'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.2 }}>{title}</span>
          {rating != null && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, flex: 'none' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--star)"><path d="M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.93 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95z" /></svg>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{rating}</span>
            </span>
          )}
        </div>
        {location && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{location}{reviews != null ? ` · ${reviews} reviews` : ''}</span>}
        {note && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-brand)', fontWeight: 600, marginTop: 2 }}>{note}</span>}
        <span style={{ marginTop: 6, fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>
          <b style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'var(--text-md)' }}>{currency}{price}</b>
          <span style={{ color: 'var(--text-muted)' }}> / {period}</span>
        </span>
      </div>
    </div>
  );
}
