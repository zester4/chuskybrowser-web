# chuskybrowser

**The browser your AI agent can actually use on the real web.**

Most agent browsers get blocked the moment a site looks at them twice. chuskybrowser is built for the
sites that matter: it looks like a normal person's browser, keeps each of your users in their own isolated
session, and lets a real person step in the moment a login or a check needs them.

## Why teams pick it

- **Built to blend in.** Runs on a hardened Firefox engine (Camoufox) with anti-detection built in, not a
  stock headless Chrome that sites recognise in seconds.
- **Every user, fully separated.** Cookies, storage and tabs are isolated per user ID, so one customer's
  session can never leak into another's.
- **Agents act on what they see.** Each page comes back as an accessibility snapshot with stable element
  references (`e1`, `e2`...), so the agent clicks and types on exactly the thing it read.
- **A person is never locked out.** Watch any tab live, and hand it over for a login, a CAPTCHA or a
  confirmation. The agent waits until the person gives control back.
- **Payments without handing over the card.** Your user approves a purchase on their own device with a
  passkey. The agent never sees the card number.
- **Works with the tools you already use.** A REST API with a full OpenAPI spec and interactive docs, an MCP
  server with 35 tools, and an OpenClaw plugin.
- **Yours to run.** Self-hosted, MIT licensed, and no telemetry unless you switch it on.

## What you get

- Open tabs, navigate, click, type, scroll, and read pages as structured snapshots
- Extract JSON from a page with a schema you define
- Upload files, pick dropdown options, dismiss pop-ups, and wait for content
- Live view links you can send to a person, with optional control
- Downloads, session traces, and cookie import
- Health checks and a setup doctor (`npx chuskybrowser doctor`)

## Be honest about the trade-offs

- **Node.js 22 or newer** is required.
- **The first start downloads the browser engine** (about 300 MB). After that it's cached.
- **It doesn't solve CAPTCHAs for you.** It hands them to a person through the live view, which keeps your
  agent on the right side of the rules.
- **You run the server.** It's a self-hosted service, so you own its uptime, scaling and security settings.
- **Still early.** The public release is new, and some features are still being hardened. Read the changelog
  before you rely on one in production.

## Get started

```
npx chuskybrowser doctor      # check your setup
npx chuskybrowser             # start the server on http://localhost:9377
```

Then point your AI tool at it. Setup guides for Claude Code, Cursor, Codex, Hermes and Grok are in
[platforms/](platforms/README.md) of the main repository.

## Links

- Browser server and MCP package: [github.com/zester4/chuskybrowser](https://github.com/zester4/chuskybrowser)
- npm: `chuskybrowser` and `chuskybrowser-mcp`

## License

MIT
