// Ebrostay website — App shell (exports window.EbrApp)
function EbrApp() {
  const { Button } = window.EbrostayDesignSystem_8b1b13;
  const [screen, setScreen] = React.useState('home'); // home | results | detail
  const [openId, setOpenId] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [search, setSearch] = React.useState({ where: 'Zaragoza', checkIn: '12 Jun', checkOut: '15 Jun', guests: '2 guests', _open: null });

  React.useEffect(() => { window.scrollTo(0, 0); }, [screen, openId]);
  React.useEffect(() => { const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30); return () => clearTimeout(t); });

  const goResults = () => { setSearch(s => ({ ...s, _open: null })); setScreen('results'); };
  const openListing = (id) => { setOpenId(id); setScreen('detail'); };
  const reserve = (l) => { setToast(`Reservation requested — ${l.title}. ${l.host} will confirm shortly.`); setTimeout(() => setToast(null), 4200); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)' }}>
      <EbrHeader compact={screen !== 'home'} search={search} onHome={() => setScreen('home')}
        onSearchSegment={() => setScreen('results')} />

      {screen === 'home' && <EbrHome onOpen={openListing} search={search} setSearch={setSearch} onSearch={goResults} />}
      {screen === 'results' && <EbrResults onOpen={openListing} search={search} setSearch={setSearch} onSearch={goResults} />}
      {screen === 'detail' && <EbrDetail id={openId} onBack={() => setScreen('results')} onReserve={reserve} />}

      {/* Search picker popover (home) */}
      {search._open && screen === 'home' && (
        <SearchPopover search={search} setSearch={setSearch} onDone={goResults} />
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 60,
          display: 'flex', alignItems: 'center', gap: 12, background: 'var(--green-900)', color: '#fff',
          padding: '14px 20px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-xl)', fontSize: 'var(--text-sm)', maxWidth: 460 }}>
          <i data-lucide="check-circle-2" style={{ width: 20, height: 20, color: 'var(--green-300)', flex: 'none' }}></i>
          {toast}
        </div>
      )}
    </div>
  );
}

function SearchPopover({ search, setSearch, onDone }) {
  const { Button } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const open = search._open;
  const close = () => setSearch(s => ({ ...s, _open: null }));
  const setGuests = (n) => setSearch(s => ({ ...s, guests: `${n} guest${n>1?'s':''}`, _guestN: n }));
  const n = search._guestN || 2;
  return (
    <>
      <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 40 }}></div>
      <div style={{ position: 'fixed', zIndex: 41, top: 360, left: '50%', transform: 'translateX(-50%)', width: 'min(420px, 92vw)',
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', padding: 20 }}>
        {open === 'where' && (
          <div>
            <p style={{ margin: '0 0 12px', fontWeight: 600, color: 'var(--text-strong)' }}>Search by area</p>
            {['Zaragoza (all)','Casco Histórico','El Pilar','Centro','Las Fuentes','Delicias'].map(a => (
              <div key={a} onClick={() => { setSearch(s => ({ ...s, where: a.replace(' (all)',''), _open: null })); }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--text-body)' }}
                onMouseEnter={e=>e.currentTarget.style.background='var(--surface-sunken)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                <i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--brand)' }}></i> {a}
              </div>
            ))}
          </div>
        )}
        {(open === 'checkIn' || open === 'checkOut') && (
          <div>
            <p style={{ margin: '0 0 12px', fontWeight: 600, color: 'var(--text-strong)' }}>Choose dates</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
              {Array.from({length:21}).map((_,i) => { const day = 9+i; const sel = day>=12 && day<=15;
                return <button key={i} onClick={() => setSearch(s => ({ ...s, checkIn: '12 Jun', checkOut: '15 Jun', _open: null }))}
                  style={{ aspectRatio:'1', border:'none', borderRadius:'var(--radius-sm)', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:'var(--text-sm)',
                    background: sel?'var(--brand-soft)':'transparent', color: sel?'var(--text-brand)':'var(--text-body)', fontWeight: sel?700:400 }}>{day}</button>; })}
            </div>
          </div>
        )}
        {open === 'guests' && (
          <div>
            <p style={{ margin: '0 0 16px', fontWeight: 600, color: 'var(--text-strong)' }}>Guests</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-body)' }}>Guests</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button onClick={() => setGuests(Math.max(1,n-1))} style={stepBtn}>−</button>
                <span style={{ minWidth: 20, textAlign: 'center', fontWeight: 600, color: 'var(--text-strong)' }}>{n}</span>
                <button onClick={() => setGuests(Math.min(8,n+1))} style={stepBtn}>+</button>
              </div>
            </div>
            <div style={{ marginTop: 20 }}><Button fullWidth onClick={onDone}>Search</Button></div>
          </div>
        )}
      </div>
    </>
  );
}
const stepBtn = { width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)', cursor: 'pointer', fontSize: 18, color: 'var(--text-body)', lineHeight: 1 };
window.EbrApp = EbrApp;
