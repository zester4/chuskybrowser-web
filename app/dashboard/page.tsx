'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Activity, ArrowUpRight, BarChart3, BookOpen, ChevronDown, ChevronRight, CircleHelp, Cloud, Code2, Command, Copy, CreditCard, Gauge, KeyRound, LayoutDashboard, LifeBuoy, Menu, MoreHorizontal, PanelLeftClose, PanelLeftOpen, Play, Plus, Settings, ShieldCheck, Terminal, Timer, Waypoints, X } from 'lucide-react'

const sessions = [
  { name: 'research-agent / 00481', url: 'linear.app/issues', status: 'Live', time: '00:04:12', color: 'blue' },
  { name: 'checkout-agent / 00477', url: 'shop.example.com/cart', status: 'Paused', time: '00:02:48', color: 'purple' },
  { name: 'monitor-agent / 00465', url: 'status.example.com', status: 'Complete', time: '00:18:32', color: 'green' },
]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Sessions', icon: Cloud },
  { label: 'Traces', icon: Waypoints },
  { label: 'API keys', icon: KeyRound },
  { label: 'Usage', icon: BarChart3 },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [created, setCreated] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [copied, setCopied] = useState(false)
  const [apiKey, setApiKey] = useState('cb_live_••••••••••••••••')

  const copyKey = async () => {
    await navigator.clipboard?.writeText('cb_live_demo_7f3b9c2a')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <main className={`dashboard-shell ${collapsed ? 'sidebar-collapsed' : ''}`}>
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-top"><Link href="/" className="brand dashboard-brand"><span className="brand-mark"><i /><i /><i /></span><span className="brand-word">chuskybrowser</span></Link><button className="collapse-button" aria-label="Toggle sidebar" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}</button></div>
      <button className="workspace-switcher"><span className="workspace-avatar">C</span><span className="workspace-copy"><b>Chusky</b><small>Developer plan</small></span><ChevronDown className="switcher-chevron" /></button>
      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        {navItems.map(({ label, icon: Icon }) => <button key={label} className={activeNav === label ? 'active' : ''} onClick={() => setActiveNav(label)} title={label}><Icon /><span className="nav-label">{label}</span><ChevronRight className="nav-arrow" /></button>)}
      </nav>
      <div className="dashboard-sidebar-bottom"><div className="sidebar-label">BUILD WITH CHUSKY</div><Link href="/developers"><BookOpen /><span className="nav-label">Documentation</span><ArrowUpRight className="sidebar-link-arrow" /></Link><Link href="/company"><LifeBuoy /><span className="nav-label">Support</span><ArrowUpRight className="sidebar-link-arrow" /></Link><div className="user-row"><span className="user-avatar">JS</span><span className="nav-label user-copy"><b>Just getting started</b><small>Free plan</small></span><MoreHorizontal /></div></div>
    </aside>
    <section className="dashboard-main">
      <header className="dashboard-topbar"><button className="mobile-menu" aria-label="Open sidebar" onClick={() => setCollapsed(!collapsed)}><Menu /></button><div className="dashboard-breadcrumb"><span>Chusky</span><b>/</b><strong>{activeNav}</strong></div><div className="dashboard-top-actions"><span className="status-dot" /> All systems operational <button aria-label="Help"><CircleHelp /></button><Link href="/dashboard/settings" className="top-settings" aria-label="Settings"><Settings /></Link><span className="top-avatar">JS</span></div></header>
      <div className="dashboard-content">
        <div className="dashboard-heading"><div><div className="eyebrow">BROWSER CONTROL PLANE</div><h1>{activeNav}</h1><p>Launch, inspect, and control the browsers your agents use.</p></div><button className="button button-dark dashboard-cta" onClick={() => setCreated(true)}><Plus /> New session</button></div>
        {created && <div className="dashboard-toast" role="status"><ShieldCheck /> New browser session is ready to configure <button onClick={() => setCreated(false)}><X /></button></div>}
        <div className="dashboard-metrics"><div><small>ACTIVE SESSIONS</small><strong>2</strong><span className="metric-positive">+1 this week</span></div><div><small>REQUESTS THIS MONTH</small><strong>18,420</strong><span>of 50,000 included</span></div><div><small>AVG. SESSION TIME</small><strong>04:18</strong><span>Across all sessions</span></div><div><small>SUCCESS RATE</small><strong>99.8%</strong><span className="metric-positive">All systems healthy</span></div></div>
        <div className="dashboard-section-heading"><div><h2>Recent sessions</h2><p>Your agents and their browser activity.</p></div><button className="dashboard-filter"><Timer /> Last 30 days <ChevronDown /></button></div>
        <div className="session-table"><div className="session-table-head"><span>SESSION</span><span>URL</span><span>STATUS</span><span>DURATION</span><span /></div>{sessions.map(session => <div className="session-row" key={session.name}><div className="session-name"><span className={`session-icon ${session.color}`}><Activity /></span><span><b>{session.name}</b><small>Created today at 10:42 AM</small></span></div><span className="session-url">{session.url}</span><span className={`session-status ${session.color}`}><i />{session.status}</span><span className="session-time">{session.time}</span><button className="row-menu" aria-label={`More options for ${session.name}`}><MoreHorizontal /></button></div>)}</div>
        <div className="dashboard-lower"><div className="quick-start"><div className="eyebrow">QUICK START</div><h2>Give your agent a browser.</h2><p>Copy the first session call, add your API key, and start building on top of a real browser.</p><Link href="/developers" className="text-link">View the docs <ArrowUpRight /></Link><div className="quick-start-actions"><button className="button button-dark" onClick={() => setCreated(true)}><Play /> Run a session</button><Link href="/dashboard/settings" className="button button-light"><Settings /> Settings</Link></div></div><div className="dashboard-code"><div className="dashboard-code-head"><span><Code2 /> create-session.ts</span><span className="code-lang">TypeScript</span></div><pre><code><span className="code-purple">const</span> session = <span className="code-blue">await</span> chusky.<span className="code-yellow">sessions</span>.<span className="code-yellow">create</span>({'{'}{`\n`}  userId: <span className="code-green">&apos;customer-42&apos;</span>,{`\n`}  persist: <span className="code-blue">true</span>{`\n`}{'}'})</code></pre></div></div>
        <div className="api-key-card"><div className="api-key-icon"><KeyRound /></div><div><div className="eyebrow">YOUR API KEY</div><h3>Connect your first agent</h3><p>Use this key in your server environment. You can rotate it any time.</p></div><div className="api-key-control"><code>{apiKey}</code><button onClick={() => { setApiKey('cb_live_demo_7f3b9c2a'); copyKey() }}><Copy /> {copied ? 'Copied' : 'Copy key'}</button></div></div>
      </div>
    </section>
  </main>
}
