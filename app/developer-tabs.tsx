'use client'

import { useState } from 'react'

type Tab = { title: string; description: string; code: string }

const tabs: Tab[] = [
  { title: 'Open a page and read it', description: 'Open a tab for one of your users and get back a snapshot with element refs your agent can act on.', code: `import { forUser } from './chusky-client.mjs';

const browser = forUser('customer-42');

const { tabId } = await browser.openTab({
  url: 'https://shop.example.com',
  sessionKey: 'order-1187',
});

const page = await browser.snapshot(tabId);
console.log(page);` },
  { title: 'Act on what it reads', description: 'Click and type using the refs from the snapshot. No brittle CSS selectors to maintain.', code: `await browser.type(tabId, {
  ref: 'e2',
  text: 'running shoes',
  pressEnter: true,
});

await browser.click(tabId, { ref: 'e5' });` },
  { title: 'Extract structured data', description: 'Pull prices, tables and listings as JSON, or describe exactly the fields you want with a schema.', code: `const prices = await browser.extract(tabId, {
  kinds: ['prices', 'tables'],
});

const order = await browser.extract(tabId, {
  schema: {
    type: 'object',
    properties: {
      total: { type: 'string' },
      deliveryDate: { type: 'string' },
    },
  },
});` },
  { title: 'Hand over to a person', description: 'Pause the agent for a login or a CAPTCHA. Your user takes control in a live view, then hands it back.', code: `await browser.startHandoff(tabId, {
  reason: 'Please sign in to your bank',
  idleMs: 120000,
});

const link = await browser.controlLink(tabId);
await browser.release(tabId);` },
  { title: 'Watch a session live', description: 'Share a view only link so your user can follow the agent as it works.', code: `const { url } = await browser.createLiveView({
  userId: 'customer-42',
  tabId,
  control: false,
  ttlSeconds: 900,
});` },
  { title: 'Pay with the users own card', description: 'The user approves each purchase on their device. The agent never sees the card number.', code: `const approval = await browser.requestPayment(tabId, {
  userId: 'customer-42',
  merchant: 'Shop Example',
  amount: 2306,
  currency: 'usd',
});

await browser.waitForApproval(approval.id);` },
  { title: 'Connect any AI tool', description: 'Add the MCP server to your agent and it gets the browser tools it needs.', code: `{
  "mcpServers": {
    "chuskybrowser": {
      "command": "npx",
      "args": ["-y", "chuskybrowser-mcp"],
      "env": {
        "CHUSKY_PORT": "9377",
        "CHUSKY_ACCESS_KEY": "\${CHUSKY_ACCESS_KEY}"
      }
    }
  }
}` },
]

export default function DeveloperTabs() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const current = tabs[active]

  async function copyCode() {
    await navigator.clipboard.writeText(current.code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return <div className="developer-tabs">
    <div className="developer-tabs-list" role="tablist" aria-label="chuskybrowser capabilities">
      {tabs.map((tab, index) => <button key={tab.title} role="tab" aria-selected={index === active} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)}>
        <strong>{tab.title}</strong>
        <span>{tab.description}</span>
      </button>)}
    </div>
    <div className="developer-code-frame">
      <div className="developer-code-bar"><span>{current.title}</span><button onClick={copyCode}>{copied ? 'Copied' : 'Copy code'}</button></div>
      <pre><code>{current.code}</code></pre>
    </div>
  </div>
}
