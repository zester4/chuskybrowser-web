'use client'

import Link from 'next/link'
import { useState } from 'react'

const sessions = [
  { name: 'research-agent / 00481', url: 'linear.app/issues', status: 'Live', time: '00:04:12', color: 'blue' },
  { name: 'checkout-agent / 00477', url: 'shop.example.com/cart', status: 'Paused', time: '00:02:48', color: 'purple' },
  { name: 'monitor-agent / 00465', url: 'status.example.com', status: 'Complete', time: '00:18:32', color: 'green' },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Sessions')
  const [created, setCreated] = useState(false)

  return <main className="dashboard-shell">
    <aside className="dashboard-sidebar">
      <Link href="/" className="brand dashboard-brand"><span className="brand-mark"><i /><i /><i /></span><span>chuskybrowser</span></Link>
      <div className="workspace-switcher"><span className="workspace-avatar">C</span><span><b>Chusky workspace</b><small>Developer plan</small></span><span className="chevron">⌄</span></div>
      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        {['Sessions', 'Traces', 'API keys', 'Usage'].map(item => <button key={item} className={activeNav === item ? 'active' : ''} onClick={() => setActiveNav(item)}><span className="nav-symbol">{item === 'Sessions' ? '◫' : item === 'Traces' ? '⌁' : item === 'API keys' ? '◇' : '▥'}</span>{item}<span className="nav-arrow">→</span></button>)}
      </nav>
      <div className="dashboard-sidebar-bottom"><Link href="/developers">Documentation <span>↗</span></Link><Link href="/">Back to site <span>↗</span></Link><div className="user-row"><span className="user-avatar">JS</span><span><b>Just getting started</b><small>Free workspace</small></span><span>•••</span></div></div>
    </aside>
    <section className="dashboard-main">
      <header className="dashboard-topbar"><div className="mobile-dashboard-brand"><Link href="/" className="brand"><span className="brand-mark"><i /><i /><i /></span><span>chuskybrowser</span></Link></div><div className="dashboard-breadcrumb"><span>Chusky workspace</span><b>/</b><strong>{activeNav}</strong></div><div className="dashboard-top-actions"><span className="status-dot" /> All systems operational <button>?</button><span className="top-avatar">JS</span></div></header>
      <div className="dashboard-content">
        <div className="dashboard-heading"><div><div className="eyebrow">BROWSER CONTROL PLANE</div><h1>{activeNav}</h1><p>Launch, inspect, and control the browsers your agents use.</p></div><button className="button button-dark dashboard-cta" onClick={() => setCreated(true)}>+ New session</button></div>
        {created && <div className="dashboard-toast" role="status">New browser session is ready to configure <button onClick={() => setCreated(false)}>Dismiss</button></div>}
        <div className="dashboard-metrics"><div><small>ACTIVE SESSIONS</small><strong>2</strong><span className="metric-positive">+1 this week</span></div><div><small>REQUESTS THIS MONTH</small><strong>18,420</strong><span>of 50,000 included</span></div><div><small>AVG. SESSION TIME</small><strong>04:18</strong><span>Across all sessions</span></div><div><small>SUCCESS RATE</small><strong>99.8%</strong><span className="metric-positive">All systems healthy</span></div></div>
        <div className="dashboard-section-heading"><div><h2>Recent sessions</h2><p>Your agents and their browser activity.</p></div><button className="dashboard-filter">Last 30 days <span>⌄</span></button></div>
        <div className="session-table"><div className="session-table-head"><span>SESSION</span><span>URL</span><span>STATUS</span><span>DURATION</span><span /></div>{sessions.map(session => <div className="session-row" key={session.name}><div className="session-name"><span className={`session-icon ${session.color}`}>◫</span><span><b>{session.name}</b><small>Created today at 10:42 AM</small></span></div><span className="session-url">{session.url}</span><span className={`session-status ${session.color}`}><i />{session.status}</span><span className="session-time">{session.time}</span><button className="row-menu">•••</button></div>)}</div>
        <div className="dashboard-lower"><div className="quick-start"><div className="eyebrow">QUICK START</div><h2>Give your agent a browser.</h2><p>Copy the first session call, add your API key, and start building on top of a real browser.</p><Link href="/developers" className="text-link">View the docs <span>→</span></Link></div><div className="dashboard-code"><div className="dashboard-code-head"><span>create-session.ts</span><span className="code-lang">TypeScript</span></div><pre><code><span className="code-purple">const</span> session = <span className="code-blue">await</span> chusky.<span className="code-yellow">sessions</span>.<span className="code-yellow">create</span>({'{'}{`\n`}  userId: <span className="code-green">&apos;customer-42&apos;</span>,{`\n`}  persist: <span className="code-blue">true</span>{`\n`}{'}'})</code></pre></div></div>
      </div>
    </section>
  </main>
}
