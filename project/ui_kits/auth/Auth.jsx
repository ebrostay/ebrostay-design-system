// Ebrostay auth — sign up / log in (exports window.EbrAuthApp)
function EbrAuthApp() {
  const { Input, Button, Checkbox } = window.EbrostayDesignSystem_8b1b13;
  const [mode, setMode] = React.useState('signup'); // signup | login
  const [done, setDone] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30); return () => clearTimeout(t); });

  const signup = mode === 'signup';
  const submit = (e) => { e.preventDefault(); setDone(true); setTimeout(() => setDone(false), 3200); };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', background: 'var(--surface-page)' }}>
      {/* Brand panel */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(28px,4vw,56px)', overflow: 'hidden',
        backgroundImage: 'linear-gradient(180deg, rgba(10,51,36,.35), rgba(10,51,36,.78)), url(https://picsum.photos/seed/zaragoza-stay/1100/1400)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="../../assets/logo-wordmark-inverse.svg" alt="Ebrostay" height="32" />
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px,3.2vw,44px)', lineHeight: 1.08, letterSpacing: 'var(--tracking-tight)', maxWidth: 460 }}>
            Your home in Zaragoza is a few taps away
          </h2>
          <p style={{ margin: '16px 0 0', color: 'rgba(255,255,255,.86)', fontSize: 'var(--text-md)', maxWidth: 420 }}>
            Join thousands of guests and hosts on the Ebro. Free cancellation, local support, no surprises.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 28, color: 'rgba(255,255,255,.9)', fontSize: 'var(--text-sm)' }}>
          <span><b style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', display: 'block' }}>1,200+</b>stays in the city</span>
          <span><b style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', display: 'block' }}>4.9★</b>average rating</span>
        </div>
      </div>

      {/* Form panel */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(28px,4vw,56px)' }}>
        <form onSubmit={submit} style={{ width: '100%', maxWidth: 380 }}>
          {/* mode toggle */}
          <div style={{ display: 'inline-flex', padding: 4, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', marginBottom: 28 }}>
            {[['signup','Sign up'],['login','Log in']].map(([m,label]) => (
              <button key={m} type="button" onClick={() => setMode(m)} style={{
                padding: '8px 20px', border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)',
                background: mode === m ? 'var(--surface-card)' : 'transparent', boxShadow: mode === m ? 'var(--shadow-xs)' : 'none',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)',
                color: mode === m ? 'var(--text-strong)' : 'var(--text-muted)' }}>{label}</button>
            ))}
          </div>

          <h1 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>
            {signup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p style={{ margin: '0 0 24px', color: 'var(--text-muted)', fontSize: 'var(--text-base)' }}>
            {signup ? 'Book in minutes or start hosting your home.' : 'Log in to manage your trips and listings.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {signup && <Input label="Full name" icon={<i data-lucide="user"></i>} placeholder="Marta Gil" />}
            <Input label="Email" type="email" icon={<i data-lucide="mail"></i>} placeholder="hola@ebrostay.es" />
            <Input label="Password" type="password" icon={<i data-lucide="lock"></i>} placeholder="••••••••"
              trailing={<i data-lucide="eye" style={{width:18,height:18,cursor:'pointer'}}></i>} />

            {signup
              ? <Checkbox label={<span>I agree to the <a style={{color:'var(--text-brand)',fontWeight:600}}>Terms</a> and <a style={{color:'var(--text-brand)',fontWeight:600}}>Privacy Policy</a></span>} checked={agree} onChange={setAgree} />
              : <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><Checkbox label="Remember me" checked={agree} onChange={setAgree} /><a style={{color:'var(--text-brand)',fontWeight:600,fontSize:'var(--text-sm)',cursor:'pointer'}}>Forgot password?</a></div>}

            <Button type="submit" variant="primary" size="lg" fullWidth>{signup ? 'Create account' : 'Log in'}</Button>
          </div>

          {/* divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '22px 0' }}>
            <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }}></span>
            <span style={{ color: 'var(--text-subtle)', fontSize: 'var(--text-sm)' }}>or continue with</span>
            <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }}></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Button variant="secondary" icon={<i data-lucide="globe"></i>}>Google</Button>
            <Button variant="secondary" icon={<i data-lucide="apple"></i>}>Apple</Button>
          </div>

          <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
            {signup ? 'Already have an account? ' : "New to Ebrostay? "}
            <a onClick={() => setMode(signup ? 'login' : 'signup')} style={{ color: 'var(--text-brand)', fontWeight: 600, cursor: 'pointer' }}>{signup ? 'Log in' : 'Sign up'}</a>
          </p>
        </form>
      </div>

      {done && (
        <div style={{ position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 60, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-inverse)', color: '#fff', padding: '14px 20px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-xl)', fontSize: 'var(--text-sm)' }}>
          <i data-lucide="check-circle-2" style={{ width: 20, height: 20, color: 'var(--green-300)' }}></i>
          {signup ? 'Account created — welcome to Ebrostay!' : 'Logged in — welcome back!'}
        </div>
      )}
    </div>
  );
}
window.EbrAuthApp = EbrAuthApp;
