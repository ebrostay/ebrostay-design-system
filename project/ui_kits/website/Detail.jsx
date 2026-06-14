// Ebrostay website — Property detail (exports window.EbrDetail)
function EbrDetail({ id, onBack, onReserve }) {
  const { Tabs, AmenityChip, Avatar, Badge, Button, Select, Rating, IconButton } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const l = D.listings.find(x => x.id === id) || D.listings[0];
  const [tab, setTab] = React.useState('amenities');
  const gallery = [0,1,2,3,4].map(n => `https://picsum.photos/seed/${l.id}-${n}/700/560`);

  return (
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '20px 28px 0' }}>
      <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-body)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, padding: '8px 0' }}>
        <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i> All stays
      </button>

      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, margin: '6px 0 16px' }}>
        <div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05 }}>{l.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <Rating value={l.rating} count={l.reviews} />
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <span style={{ color: 'var(--text-body)', fontWeight: 600, fontSize: 'var(--text-sm)' }}><i data-lucide="map-pin" style={{width:14,height:14,verticalAlign:'-2px'}}></i> {l.area}, Zaragoza</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="ghost" size="sm" icon={<i data-lucide="share"></i>}>Share</Button>
          <Button variant="ghost" size="sm" icon={<i data-lucide="heart"></i>}>Save</Button>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 8, borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 420 }}>
        {gallery.map((src, i) => (
          <div key={i} style={{ gridColumn: i === 0 ? '1' : undefined, gridRow: i === 0 ? '1 / 3' : undefined, backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            {i === 4 && <div style={{ position: 'absolute', right: 12, bottom: 12 }}><Badge tone="neutral" solid icon={<i data-lucide="image"></i>}>Show all photos</Badge></div>}
          </div>
        ))}
      </div>

      {/* Body split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, marginTop: 28, alignItems: 'start' }}>
        <div>
          {/* Host summary */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 22, borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }}>{l.type} hosted by {l.host}</h2>
              <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: 'var(--text-base)' }}>{l.guests} guests · {l.beds} bedroom{l.beds>1?'s':''} · {l.baths} bath{l.baths>1?'s':''}</p>
            </div>
            <Avatar name={l.host} size="xl" ring={l.superhost} />
          </div>

          {l.superhost && (
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '18px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <i data-lucide="shield-check" style={{ width: 26, height: 26, color: 'var(--brand)' }}></i>
              <div><b style={{ color: 'var(--text-strong)' }}>{l.host} is a Superhost</b><div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Experienced, highly rated hosts committed to great stays.</div></div>
            </div>
          )}

          <p style={{ color: 'var(--text-body)', fontSize: 'var(--text-md)', lineHeight: 1.65, margin: '22px 0' }}>{l.desc}</p>

          <Tabs value={tab} onChange={setTab} items={[{value:'amenities',label:'Amenities'},{value:'reviews',label:'Reviews'},{value:'location',label:'Location'}]} />
          <div style={{ paddingTop: 22 }}>
            {tab === 'amenities' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 24px' }}>
                {l.amenities.map(([icon, label]) => <AmenityChip key={label} icon={<i data-lucide={icon}></i>} label={label} />)}
              </div>
            )}
            {tab === 'reviews' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                {[['Carlos','A perfect base for exploring the old town. Spotless and exactly as pictured.'],['Élodie','Marta was a wonderful host — great tips for tapas in El Tubo.'],['Tom','Quiet, comfortable and walkable to everything. Would book again.'],['Núria','Lovely light in the mornings and a very easy self check-in.']].map(([n,t]) => (
                  <div key={n}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}><Avatar name={n} size="sm" /><b style={{ color: 'var(--text-strong)', fontSize: 'var(--text-sm)' }}>{n}</b></div>
                    <p style={{ margin: 0, color: 'var(--text-body)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{t}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 'location' && (
              <div style={{ height: 260, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', backgroundImage: 'url(https://picsum.photos/seed/zgz-detail-map/1000/520?grayscale)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Badge tone="brand" solid icon={<i data-lucide="map-pin"></i>}>{l.area}, Zaragoza</Badge>
              </div>
            )}
          </div>
        </div>

        {/* Booking card */}
        <div style={{ position: 'sticky', top: 'calc(var(--header-h) + 16px)' }}>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--text-strong)' }}>€{l.price}</span><span style={{ color: 'var(--text-muted)' }}> / night</span></div>
              <Rating value={l.rating} count={l.reviews} size={14} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', margin: '16px 0' }}>
              {[['Check in','12 Jun 2026'],['Check out','15 Jun 2026']].map(([k,v],i) => (
                <div key={k} style={{ padding: '10px 14px', borderRight: i===0?'1px solid var(--border-default)':'none' }}>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text-strong)' }}>{k}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
            <Select defaultValue={String(Math.min(2,l.guests))} containerStyle={{ marginBottom: 16 }}>
              {Array.from({length:l.guests}).map((_,i) => <option key={i} value={i+1}>{i+1} guest{i>0?'s':''}</option>)}
            </Select>
            <Button variant="primary" size="lg" fullWidth onClick={() => onReserve(l)}>Reserve</Button>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: '12px 0 18px' }}>You won't be charged yet</p>
            {[['€'+l.price+' × 3 nights', '€'+(l.price*3)],['Cleaning fee','€35'],['Ebrostay service fee','€'+Math.round(l.price*3*0.12)]].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: 'var(--text-body)', fontSize: 'var(--text-sm)' }}><span style={{ textDecoration: 'underline', textDecorationColor: 'var(--border-default)' }}>{k}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span></div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 0', marginTop: 8, borderTop: '1px solid var(--border-subtle)', fontWeight: 600, color: 'var(--text-strong)' }}>
              <span>Total</span><span style={{ fontFamily: 'var(--font-mono)' }}>€{l.price*3 + 35 + Math.round(l.price*3*0.12)}</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-brand)', fontWeight: 600, fontSize: 'var(--text-sm)', marginTop: 14 }}><i data-lucide="check" style={{width:14,height:14,verticalAlign:'-2px'}}></i> {l.note || 'Free cancellation up to 48h before check-in'}</p>
        </div>
      </div>
      <div style={{ height: 48 }}></div>
      <EbrFooter />
    </div>
  );
}
window.EbrDetail = EbrDetail;
