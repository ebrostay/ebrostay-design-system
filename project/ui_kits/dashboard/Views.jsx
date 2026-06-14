// Ebrostay dashboard — Listings, Calendar, Bookings (exports window.EbrListings/EbrCalendar/EbrBookings)

function EbrListings({ onOpen }) {
  const { Card, Badge, Button, IconButton, Rating } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
      {D.listings.map(l => (
        <Card key={l.id} padding="md">
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ width: 132, height: 112, borderRadius: 'var(--radius-md)', backgroundImage: `url(${l.img})`, backgroundSize: 'cover', backgroundPosition: 'center', flex: 'none' }}></div>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', color: 'var(--text-strong)', lineHeight: 1.15 }}>{l.title}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{l.area}</div>
                </div>
                <Badge tone={l.status === 'Listed' ? 'success' : 'neutral'} dot>{l.status}</Badge>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>€{l.price}<span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> / night</span></span>
                <Rating value={l.rating} size={13} showValue />
              </div>
              {/* occupancy bar */}
              <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 5 }}><span>Occupancy</span><span>{l.occ}%</span></div>
                <div style={{ height: 7, borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', overflow: 'hidden' }}>
                  <div style={{ width: `${l.occ}%`, height: '100%', background: l.occ ? 'var(--brand)' : 'transparent', borderRadius: 'var(--radius-pill)' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <Button variant="secondary" size="sm" icon={<i data-lucide="pencil"></i>} onClick={() => onOpen && onOpen(l)}>Edit</Button>
            <Button variant="ghost" size="sm" icon={<i data-lucide="calendar-days"></i>}>Calendar</Button>
            <div style={{ marginLeft: 'auto' }}><IconButton label="More" variant="ghost" size="sm"><i data-lucide="more-horizontal"></i></IconButton></div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function EbrCalendar() {
  const { Card, Badge } = window.EbrostayDesignSystem_8b1b13;
  // June 2026 starts on Monday. Booked ranges highlighted.
  const booked = { '12':1,'13':2,'14':2,'15':1,'16':3,'17':3,'18':2,'20':1,'21':1,'22':1 };
  const dows = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cells = [];
  for (let d = 1; d <= 30; d++) cells.push(d);
  const tones = { 1: 'var(--green-100)', 2: 'var(--clay-100)', 3: 'var(--blue-50)' };
  return (
    <Card padding="lg">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }}>June 2026</h2>
        <div style={{ display: 'flex', gap: 16, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--green-100)' }}></span>Sunny loft</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--clay-100)' }}></span>River-view</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--blue-50)' }}></span>Independencia</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
        {dows.map(d => <div key={d} style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text-subtle)', padding: '0 0 6px' }}>{d}</div>)}
        {cells.map(d => {
          const b = booked[String(d)];
          return (
            <div key={d} style={{ aspectRatio: '1 / 0.82', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
              background: b ? tones[b] : 'var(--surface-card)', padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: b ? 700 : 500, color: b ? 'var(--text-strong)' : 'var(--text-muted)' }}>{d}</span>
              {b && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-body)' }}>Booked</span>}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function EbrBookings() {
  const { Card, Tabs } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const [tab, setTab] = React.useState('all');
  const tones = { Confirmed: 'success', Pending: 'warning', Completed: 'neutral' };
  const rows = tab === 'all' ? D.bookings : D.bookings.filter(b => b.status.toLowerCase() === tab);
  return (
    <Card padding="lg">
      <div style={{ marginBottom: 18 }}>
        <Tabs value={tab} onChange={setTab} items={[{value:'all',label:'All'},{value:'confirmed',label:'Confirmed'},{value:'pending',label:'Pending'},{value:'completed',label:'Completed'}]} />
      </div>
      <EbrBookingTable rows={rows} tones={tones} />
    </Card>
  );
}

window.EbrListings = EbrListings;
window.EbrCalendar = EbrCalendar;
window.EbrBookings = EbrBookings;
