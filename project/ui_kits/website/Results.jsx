// Ebrostay website — Search results (exports window.EbrResults)
function EbrResults({ onOpen, search, setSearch, onSearch }) {
  const { PropertyCard, Tag, Button, Switch } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const [instant, setInstant] = React.useState(false);
  const filters = ['Whole place','Private room','Free cancellation','Superhost','Parking','Wi-Fi'];
  const [active, setActive] = React.useState(['Free cancellation']);
  const toggle = (f) => setActive(a => a.includes(f) ? a.filter(x=>x!==f) : [...a, f]);

  return (
    <div>
      {/* Search summary bar */}
      <div style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {filters.map(f => <Tag key={f} selected={active.includes(f)} onClick={() => toggle(f)}>{f}</Tag>)}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
            <Switch label="Instant book" checked={instant} onChange={setInstant} />
            <Button variant="secondary" size="sm" icon={<i data-lucide="sliders-horizontal"></i>}>Filters</Button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '24px 28px', display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 32, alignItems: 'start' }}>
        {/* Results list */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)' }}>
              {D.listings.length} stays in {search.where || 'Zaragoza'}
            </h1>
            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{search.checkIn || 'Any dates'} · {search.guests || '2 guests'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 26 }}>
            {D.listings.map(l => (
              <PropertyCard key={l.id} image={l.img} title={l.title} location={l.area} rating={l.rating} reviews={l.reviews}
                badge={l.badge || undefined} badgeTone={l.badgeTone} note={l.note || undefined} price={l.price} onClick={() => onOpen(l.id)} />
            ))}
          </div>
        </div>

        {/* Map panel */}
        <div style={{ position: 'sticky', top: 'calc(var(--header-h) + 16px)', height: 'calc(100vh - var(--header-h) - 48px)', minHeight: 460,
          borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)',
          background: 'linear-gradient(135deg, #e7efe9, #eef3ea)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://picsum.photos/seed/zgz-map/900/1100?grayscale)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: .35 }}></div>
          {D.listings.slice(0,5).map((l, i) => (
            <button key={l.id} onClick={() => onOpen(l.id)} style={{
              position: 'absolute', top: `${22 + i*14}%`, left: `${18 + ((i*23)%60)}%`,
              padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
              background: 'var(--surface-card)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-mono)', fontWeight: 600,
              fontSize: 'var(--text-sm)', color: 'var(--text-strong)', transition: 'transform var(--dur-fast) var(--ease-out)' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.08)';e.currentTarget.style.background='var(--brand)';e.currentTarget.style.color='#fff';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.background='var(--surface-card)';e.currentTarget.style.color='var(--text-strong)';}}>
              €{l.price}
            </button>
          ))}
          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', background: 'var(--glass-strong)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))', padding: '8px 16px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', boxShadow: 'var(--shadow-sm)' }}>
            Map of Zaragoza · {D.listings.length} stays
          </div>
        </div>
      </div>
      <EbrFooter />
    </div>
  );
}
window.EbrResults = EbrResults;
