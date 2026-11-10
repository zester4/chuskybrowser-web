'use client'

import Link from 'next/link'
import { ArrowLeft, Bell, Check, KeyRound, LockKeyhole, Settings, UserRound } from 'lucide-react'
import { useState } from 'react'

export default function DashboardSettings() {
  const [saved, setSaved] = useState(false)
  const [name, setName] = useState('Chusky')
  return <main className="settings-shell"><header className="settings-header"><Link href="/dashboard" className="settings-back"><ArrowLeft /> Back to dashboard</Link><div className="brand"><span className="brand-mark"><i /><i /><i /></span>chuskybrowser</div><div className="settings-header-title"><Settings /> Settings</div></header><div className="settings-layout"><aside className="settings-nav"><div className="eyebrow">ACCOUNT</div><a className="active"><UserRound /> Profile</a><a><Bell /> Notifications</a><div className="eyebrow">DEVELOPER</div><a><KeyRound /> API keys</a><a><LockKeyhole /> Security</a></aside><section className="settings-panel"><div className="settings-intro"><div className="eyebrow">YOUR ACCOUNT</div><h1>Settings</h1><p>Manage the details and access for your chuskybrowser account.</p></div><div className="settings-card"><div><h2>Profile</h2><p>This is how your account appears in the dashboard.</p></div><label>Company or personal name<input value={name} onChange={event => setName(event.target.value)} /></label><label>Email address<input value="you@example.com" readOnly /></label><button className="button button-dark" onClick={() => { setSaved(true); window.setTimeout(() => setSaved(false), 2000) }}>{saved ? <Check /> : null}{saved ? 'Saved' : 'Save changes'}</button></div><div className="settings-card api-settings-card"><div><h2>API access</h2><p>Your secret keys stay hidden in the browser. Rotate them from your server when needed.</p></div><div className="settings-key"><code>cb_live_demo_7f3b9c2a</code><span>Active</span></div><Link href="/developers" className="text-link">Read the API docs <ArrowLeft /></Link></div></section></div></main>
}
