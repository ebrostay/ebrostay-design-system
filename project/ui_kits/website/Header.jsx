// Ebrostay website — Header (exports window.EbrHeader)
function EbrHeader({ onHome, compact, search, onSearchSegment }) {
  const { SearchBar, Button, Avatar, IconButton } = window.EbrostayDesignSystem_8b1b13;
  const [menu, setMenu] = React.useState(false);
  const [dark, setDark] = React.useState(() => document.documentElement.dataset.theme === 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  }, [dark]);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30, background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
      borderBottom: 'var(--hairline)',
    }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 28px', height: 'var(--header-h)', display: 'flex', alignItems: 'center', gap: 20 }}>
        <a onClick={onHome} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flex: 'none' }}>
          <img src={dark ? '../../assets/logo-wordmark-inverse.svg' : '../../assets/logo-wordmark.svg'} alt="Ebrostay" height="30" />
        </a>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {compact && (
            <div style={{ width: 'min(520px, 100%)' }}>
              <SearchBar compact where={search?.where} checkIn={search?.checkIn} guests={search?.guests}
                onSegment={onSearchSegment} onSearch={() => onSearchSegment && onSearchSegment('where')} />
            </div>
          )}
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>
          <IconButton label={dark ? 'Light mode' : 'Dark mode'} variant="ghost" round onClick={() => setDark(d => !d)}>
            <i data-lucide={dark ? 'sun' : 'moon'}></i>
          </IconButton>
          <Button variant="ghost" size="sm">Become a host</Button>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setMenu(!menu)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '5px 6px 5px 14px', height: 44,
              background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)',
              cursor: 'pointer', boxShadow: 'var(--shadow-xs)',
            }}>
              <i data-lucide="menu" style={{ width: 18, height: 18, color: 'var(--text-body)' }}></i>
              <Avatar name="You" size="sm" />
            </button>
            {menu && (
              <div style={{ position: 'absolute', right: 0, top: 52, width: 220, background: 'var(--surface-card)', border: 'var(--hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 8 }}>
                {['Sign up','Log in','—','Host your home','Help centre'].map((t,i) => t === '—'
                  ? <div key={i} style={{ height: 1, background: 'var(--border-subtle)', margin: '8px 0' }} />
                  : <div key={i} style={{ padding: '10px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}
                      onMouseEnter={e=>e.currentTarget.style.background='var(--surface-sunken)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>{t}</div>)}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
window.EbrHeader = EbrHeader;
