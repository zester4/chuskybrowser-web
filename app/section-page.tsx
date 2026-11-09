'use client'

import Link from 'next/link'

const pages = {
  product: ['PRODUCT', 'The browser layer for', 'agent work.', 'Give every agent a capable, observable browser for research, automation, and the web tasks that make your product useful.', [['Sessions', 'Launch isolated browser sessions with persisted state.', 'ACTIVE SESSIONS', '248'], ['Actions', 'Navigate, click, type, and extract through one predictable API.', 'ACTIONS / MIN', '18.4k'], ['Traces', 'Replay every step when an agent needs a second look.', 'TRACE STATUS', 'READY']]],
  platform: ['PLATFORM', 'Primitives that make agents', 'dependable.', 'Compose browser sessions, actions, identity, and observability into an infrastructure layer your team can trust.', [['Runtime', 'Fast Chromium sessions with network controls and clean isolation.', 'RUNTIME', '99.98%'], ['State', 'Keep auth, cookies, and storage alive across multi-step workflows.', 'PERSISTENCE', 'ENABLED'], ['Control plane', 'Watch live sessions and stream events back to your product.', 'EVENTS / SEC', '1,240']]],
  developers: ['DEVELOPERS', 'Ship browser agents', 'without the seams.', 'A small TypeScript surface, clear primitives, and the control you need to move from prototype to production.', [['Launch a session', 'Create a browser in one call, then hand it to your agent.', 'const session = await', 'browser.create()'], ['Give it a goal', 'Let your agent choose the actions while you keep the guardrails.', 'await agent.run', '({ session })'], ['Ship the outcome', 'Stream structured results, screenshots, and trace data to your app.', 'return session', '.result()']]],
  company: ['COMPANY', 'The infrastructure behind', 'useful agents.', 'We are building the missing layer between AI and the web: a browser that is ready whenever your product needs it.', [['Built for teams', 'From the first experiment to thousands of concurrent sessions.', 'CUSTOMERS', '42'], ['Made for trust', 'Secure isolation and complete traces by default.', 'INCIDENTS', '0'], ['Here to help', 'Work with people who understand the hard parts of browser automation.', 'RESPONSE TIME', '< 1 hr']]],
} as const

export default function SectionPage({ kind }: { kind: keyof typeof pages }) {
  const [eyebrow, title, accent, intro, cards] = pages[kind]
  return <main className="subpage">
    <div className="announcement">The browser runtime for AI agents <span>→</span></div>
    <nav className="nav wrap"><Link href="/" className="brand"><span className="brand-mark"><i /><i /><i /></span><span>chuskybrowser</span></Link><div className="nav-links"><Link href="/product">Product</Link><Link href="/platform">Platform</Link><Link href="/developers">Developers</Link><Link href="/company">Company</Link></div><div className="nav-actions"><Link href="/" className="login">Home</Link><Link href="/#contact" className="button button-dark small">Start building <span>↗</span></Link></div></nav>
    <section className="sub-hero wrap"><div className="eyebrow">{eyebrow}</div><h1>{title} <span>{accent}</span></h1><p>{intro}</p><div className="hero-actions"><Link href="/#contact" className="button button-dark">Start building <span>↗</span></Link><Link href="/developers" className="button button-light">Read the docs <span>→</span></Link></div></section>
    <section className="sub-gallery wrap"><div className="sub-gallery-head"><div><div className="eyebrow">ONE LAYER, MANY USE CASES</div><h2>Built for the work <span>agents do.</span></h2></div><p>Small primitives. Clear outcomes. Everything your product needs to make the web actionable.</p></div><div className="sub-grid">{cards.map(([cardTitle, text, label, value]) => <article className="sub-card" key={cardTitle}><h3>{cardTitle}</h3><p>{text}</p><div className="sub-preview"><small>{label}</small><strong>{value}</strong><div className="preview-lines"><i /><i /><i /></div></div></article>)}</div></section>
    <section className="sub-bottom"><div className="wrap"><div className="eyebrow">READY WHEN YOU ARE</div><h2>Put your agents to <span>work.</span></h2><Link href="/#contact" className="button button-dark">Start building <span>↗</span></Link></div></section>
  </main>
}
