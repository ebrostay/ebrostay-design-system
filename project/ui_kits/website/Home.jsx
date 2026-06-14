// Ebrostay website — Home screen (exports window.EbrHome)

// Shared scroll-reveal hook — adds .is-in to .ebr-reveal elements as they enter.
function useEbrReveal(deps) {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.ebr-reveal:not(.is-in)'));
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps || []);
}
window.useEbrReveal = useEbrReveal;

function EbrHome({ onOpen, search, setSearch, onSearch }) {
  const { SearchBar, PropertyCard, Tag, Button } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const [cat, setCat] = React.useState(0);
  useEbrReveal([]);

  return (
    <div>
      {/* HERO — taller, warm-graded, full-bleed imagery */}
      <section style={{ position: 'relative', padding: '0 24px' }}>
        <div style={{
          maxWidth: 'var(--container-wide)', margin: '24px auto 0', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
          position: 'relative', height: 'clamp(460px, 64vh, 580px)', display: 'flex', alignItems: 'flex-end',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://picsum.photos/seed/zaragoza-ebro/1700/1000)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'saturate(1.08) contrast(1.02) brightness(1.02)',
          }}></div>
          {/* warm + protection grade */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(74,36,20,.12) 0%, rgba(10,51,36,.10) 40%, rgba(10,51,36,.66) 100%)' }}></div>
          <div className="ebr-reveal is-in" style={{ position: 'relative', padding: 'clamp(28px, 5vw, 64px)', maxWidth: 820 }}>
            <p style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', opacity: .92 }}>Stays on the Ebro</p>
            <h1 style={{ margin: '12px 0 0', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-5xl)', lineHeight: 1.02, letterSpacing: 'var(--tracking-tight)', textWrap: 'balance' }}>
              Book your home in Zaragoza in minutes
            </h1>
            <p style={{ margin: '18px 0 0', color: '#fff', fontSize: 'var(--text-md)', maxWidth: 500, opacity: .94, lineHeight: 1.55 }}>
              Hand-picked apartments and rooms across the city — from El Tubo to the river. No surprises, free cancellation.
            </p>
          </div>
        </div>

        {/* Search bar floating over hero base */}
        <div style={{ maxWidth: 1060, margin: '-46px auto 0', position: 'relative', padding: '0 12px' }}>
          <SearchBar where={search.where} checkIn={search.checkIn} checkOut={search.checkOut} guests={search.guests}
            onSegment={(k) => setSearch({ ...search, _open: k })} onSearch={onSearch} />
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '44px 28px 0' }}>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
          {D.categories.map(([icon, label], i) => (
            <Tag key={label} icon={<i data-lucide={icon}></i>} selected={cat === i} onClick={() => setCat(i)}>{label}</Tag>
          ))}
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="ebr-reveal" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '40px 28px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>Popular stays in Zaragoza</h2>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: 'var(--text-md)' }}>Loved by recent guests this season.</p>
          </div>
          <a style={{ color: 'var(--text-brand)', fontWeight: 600, fontSize: 'var(--text-base)', cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={onSearch}>Show all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(268px, 1fr))', gap: 32 }}>
          {D.listings.map((l, i) => (
            <div key={l.id} className="ebr-reveal" style={{ '--i': i % 4 }}>
              <PropertyCard image={l.img} title={l.title} location={l.area} rating={l.rating} reviews={l.reviews}
                badge={l.badge || undefined} badgeTone={l.badgeTone} note={l.note || undefined} price={l.price}
                onClick={() => onOpen(l.id)} />
            </div>
          ))}
        </div>
      </section>

      {/* HOST CTA BAND */}
      <section className="ebr-reveal" style={{ maxWidth: 'var(--container-wide)', margin: 'var(--section-gap) auto 0', padding: '0 28px' }}>
        <div style={{
          borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'var(--green-900)', color: '#fff',
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 340,
        }}>
          <div style={{ padding: 'clamp(32px, 4.5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ margin: 0, color: 'var(--green-300)', fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)' }}>For property owners</p>
            <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-4xl)', lineHeight: 1.04, letterSpacing: 'var(--tracking-tight)' }}>Earn from your Zaragoza home</h2>
            <p style={{ margin: '16px 0 30px', color: 'rgba(255,255,255,.82)', fontSize: 'var(--text-md)', maxWidth: 440, lineHeight: 1.55 }}>List in minutes, set your own rules, and let us handle bookings, payments and guest messaging.</p>
            <div><Button variant="accent" size="lg" iconRight={<i data-lucide="arrow-right"></i>}>Start hosting</Button></div>
          </div>
          <div style={{ backgroundImage: 'url(https://picsum.photos/seed/ebro-host/900/760)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(1.06)' }}></div>
        </div>
      </section>

      <EbrFooter />
    </div>
  );
}

function EbrFooter() {
  const cols = [
    ['Explore', ['Stays in Zaragoza','El Tubo','Casco Histórico','River apartments']],
    ['Hosting', ['List your home','Host resources','Community','Responsible hosting']],
    ['Support', ['Help centre','Cancellation options','Safety','Contact us']],
  ];
  return (
    <footer style={{ marginTop: 'var(--section-gap)', borderTop: 'var(--hairline)', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '56px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <img src="../../assets/logo-wordmark.svg" alt="Ebrostay" height="28" />
          <p style={{ margin: '16px 0 0', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', maxWidth: 240, lineHeight: 1.55 }}>Homes and rooms across Zaragoza, booked in minutes.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <p style={{ margin: '0 0 14px', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{h}</p>
            {items.map(it => <div key={it} style={{ padding: '6px 0', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', cursor: 'pointer' }}>{it}</div>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: 'var(--hairline)', padding: '20px 28px', maxWidth: 'var(--container-wide)', margin: '0 auto', color: 'var(--text-subtle)', fontSize: 'var(--text-xs)' }}>© 2026 Ebrostay · Zaragoza, España · Privacy · Terms</div>
    </footer>
  );
}
window.EbrHome = EbrHome;
window.EbrFooter = EbrFooter;
