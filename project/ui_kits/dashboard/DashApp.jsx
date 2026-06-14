// Ebrostay dashboard — App (exports window.EbrDashApp)
function EbrDashApp() {
  const [active, setActive] = React.useState('Overview');
  React.useEffect(() => { const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30); return () => clearTimeout(t); });
  React.useEffect(() => { window.scrollTo(0, 0); }, [active]);

  const titles = { Overview: 'Overview', Listings: 'Your listings', Calendar: 'Calendar', Bookings: 'Bookings', Earnings: 'Earnings', Messages: 'Messages', Settings: 'Settings' };
  let view;
  if (active === 'Overview') view = <EbrOverview goBookings={() => setActive('Bookings')} />;
  else if (active === 'Listings') view = <EbrListings />;
  else if (active === 'Calendar') view = <EbrCalendar />;
  else if (active === 'Bookings') view = <EbrBookings />;
  else if (active === 'Earnings') view = <EbrOverview goBookings={() => setActive('Bookings')} />;
  else view = <EbrPlaceholder name={active} />;

  return (
    <EbrShell active={active} setActive={setActive} title={titles[active] || active}>
      {view}
    </EbrShell>
  );
}

function EbrPlaceholder({ name }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 360, color: 'var(--text-muted)', gap: 12 }}>
      <i data-lucide="construction" style={{ width: 36, height: 36 }}></i>
      <p style={{ margin: 0, fontSize: 'var(--text-md)' }}>{name} — coming soon in this kit.</p>
    </div>
  );
}
window.EbrDashApp = EbrDashApp;
window.EbrPlaceholder = EbrPlaceholder;
