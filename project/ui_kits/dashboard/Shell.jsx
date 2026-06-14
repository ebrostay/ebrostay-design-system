// Ebrostay dashboard — Shell: sidebar + topbar (exports window.EbrShell)
function EbrShell({ active, setActive, title, children }) {
  const { Avatar, IconButton, Button, Input } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const [dark, setDark] = React.useState(() => document.documentElement.dataset.theme === 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  }, [dark]);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '248px 1fr', minHeight: '100vh', background: 'var(--surface-page)' }}>
      {/* Sidebar */}
      <aside style={{ background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '22px 22px 14px' }}>
          <img src="../../assets/logo-wordmark.svg" alt="Ebrostay" height="26" />
        </div>
        <nav style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {D.nav.map(([icon, label]) => (
            <EbrNavItem key={label} icon={icon} label={label} on={label === active} onClick={() => setActive(label)} />
          ))}
        </nav>
        <div style={{ padding: 14, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name={D.host.name} size="sm" status="online" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{D.host.name}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Superhost</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ position: 'sticky', top: 0, zIndex: 20, height: 'var(--header-h)', background: 'var(--glass-strong)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 28px' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)', flex: 1 }}>{title}</h1>
          <div style={{ width: 260 }}>
            <Input size="sm" icon={<i data-lucide="search"></i>} placeholder="Search bookings, guests…" />
          </div>
          <IconButton label={dark ? 'Light mode' : 'Dark mode'} variant="ghost" round onClick={() => setDark(d => !d)}><i data-lucide={dark ? 'sun' : 'moon'}></i></IconButton>
          <IconButton label="Notifications" variant="secondary"><i data-lucide="bell"></i></IconButton>
          <Button variant="primary" size="sm" icon={<i data-lucide="plus"></i>}>New listing</Button>
        </header>
        <main style={{ padding: 28, flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}
window.EbrShell = EbrShell;

function EbrNavItem({ icon, label, on, onClick }) {
  const [hover, setHover] = React.useState(false);
  const bg = on ? 'var(--brand-soft)' : hover ? 'var(--surface-sunken)' : 'transparent';
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', border: 'none', cursor: 'pointer',
        borderRadius: 'var(--radius-md)', textAlign: 'left', width: '100%', backgroundColor: bg,
        color: on ? 'var(--text-brand)' : 'var(--text-body)', fontWeight: on ? 700 : 500,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
      }}>
      <i data-lucide={icon} style={{ width: 19, height: 19 }}></i> {label}
    </button>
  );
}
window.EbrNavItem = EbrNavItem;
