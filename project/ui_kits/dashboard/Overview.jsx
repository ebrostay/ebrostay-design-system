// Ebrostay dashboard — Overview (exports window.EbrOverview)
function EbrOverview({ goBookings }) {
  const { Card, Badge, Avatar, Button } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const max = Math.max(...D.earnings);
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const statusTone = { Confirmed: 'success', Pending: 'warning', Completed: 'neutral' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {D.stats.map(s => (
          <Card key={s.key} padding="md">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', color: 'var(--brand)' }}>
                <i data-lucide={s.icon} style={{ width: 19, height: 19 }}></i>
              </span>
              {s.up !== null
                ? <Badge tone={s.up ? 'success' : 'danger'}>{s.delta}</Badge>
                : <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.delta}</span>}
            </div>
            <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--text-strong)' }}>{s.value}</div>
            <div style={{ marginTop: 2, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{s.label}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18, alignItems: 'start' }}>
        {/* Earnings chart */}
        <Card padding="lg">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>Earnings</h2>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', whiteSpace: 'nowrap', flex: 'none' }}>Last 12 months</span>
          </div>
          <EbrEarningsChart data={D.earnings} months={months} max={max} highlight={8} />
        </Card>

        {/* Listings snapshot */}
        <Card padding="lg">
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>Your listings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {D.listings.map(l => (
              <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundImage: `url(${l.img})`, backgroundSize: 'cover', backgroundPosition: 'center', flex: 'none' }}></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.title}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{l.status === 'Listed' ? `${l.occ}% booked` : 'Snoozed'}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>€{l.price}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Upcoming bookings */}
      <Card padding="lg">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>Upcoming bookings</h2>
          <a onClick={goBookings} style={{ color: 'var(--text-brand)', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: 'pointer' }}>View all</a>
        </div>
        <EbrBookingTable rows={D.bookings.slice(0, 4)} tones={statusTone} />
      </Card>
    </div>
  );
}

function EbrBookingTable({ rows, tones }) {
  const { Badge, Avatar } = window.EbrostayDesignSystem_8b1b13;
  const th = { textAlign: 'left', padding: '12px 12px', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text-subtle)', borderBottom: '1px solid var(--border-subtle)' };
  const td = { padding: '14px 12px', fontSize: 'var(--text-sm)', color: 'var(--text-body)', borderBottom: '1px solid var(--border-subtle)' };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead><tr><th style={th}>Guest</th><th style={th}>Listing</th><th style={th}>Dates</th><th style={th}>Ref</th><th style={{...th, textAlign:'right'}}>Total</th><th style={{...th, textAlign:'right'}}>Status</th></tr></thead>
      <tbody>
        {rows.map(b => (
          <tr key={b.ref}>
            <td style={td}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><Avatar name={b.guest} size="xs" /> <b style={{ color: 'var(--text-strong)' }}>{b.guest}</b></span></td>
            <td style={td}>{b.listing}</td>
            <td style={td}>{b.inDate} – {b.outDate} <span style={{ color: 'var(--text-subtle)' }}>· {b.nights}n</span></td>
            <td style={{...td, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{b.ref}</td>
            <td style={{...td, textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>€{b.total}</td>
            <td style={{...td, textAlign: 'right' }}><Badge tone={tones[b.status] || 'neutral'} dot={b.status==='Confirmed'}>{b.status}</Badge></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
window.EbrOverview = EbrOverview;
window.EbrBookingTable = EbrBookingTable;

// Refined earnings chart — gridlines, axis, rounded gradient bars, hover tooltip.
function EbrEarningsChart({ data, months, max, highlight }) {
  const [hover, setHover] = React.useState(null);
  const H = 188;
  const top = Math.ceil(max / 1000) * 1000;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(top * f));
  return (
    <div style={{ position: 'relative', marginTop: 10 }}>
      <div style={{ display: 'flex', gap: 14 }}>
        {/* Y axis */}
        <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', height: H, paddingBottom: 22 }}>
          {ticks.map((t) => (
            <span key={t} style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', lineHeight: 1 }}>
              €{t >= 1000 ? (t / 1000) + 'k' : t}
            </span>
          ))}
        </div>
        {/* Plot */}
        <div style={{ position: 'relative', flex: 1 }}>
          {/* gridlines */}
          <div style={{ position: 'absolute', inset: `0 0 22px 0`, display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between' }}>
            {ticks.map((t, i) => <div key={i} style={{ height: 1, background: 'var(--border-subtle)', opacity: i === 0 ? 1 : 0.6 }}></div>)}
          </div>
          {/* bars */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '4%', height: H, paddingBottom: 22 }}>
            {data.map((v, i) => {
              const on = hover === i || (hover === null && i === highlight);
              return (
                <div key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{
                    width: '100%', maxWidth: 30, height: `${(v / top) * (H - 22)}px`, borderRadius: '7px 7px 3px 3px',
                    background: on ? 'linear-gradient(180deg, var(--green-400), var(--brand))' : 'var(--green-200)',
                    boxShadow: on ? '0 6px 14px rgba(31,138,87,.28)' : 'none',
                    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
                  }}></div>
                  <span style={{ fontSize: 10, color: on ? 'var(--text-body)' : 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontWeight: on ? 600 : 400 }}>{months[i]}</span>
                </div>
              );
            })}
          </div>
          {/* tooltip */}
          {hover !== null && (
            <div style={{
              position: 'absolute', top: -6, left: `calc(${(hover + 0.5) / data.length * 100}% )`, transform: 'translate(-50%, -100%)',
              background: 'var(--surface-inverse)', color: '#fff', padding: '6px 11px', borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600, whiteSpace: 'nowrap', boxShadow: 'var(--shadow-lg)', pointerEvents: 'none', zIndex: 2,
            }}>€{data[hover].toLocaleString()}</div>
          )}
        </div>
      </div>
    </div>
  );
}
window.EbrEarningsChart = EbrEarningsChart;
