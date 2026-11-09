# chuskybrowser for agents

chuskybrowser gives you a real browser that you can control through tools. It is built for sites that block
ordinary automation, and it is designed so that a person can step in when needed.

## What you can rely on

- **Each user has their own session.** Always pass the end user's `userId`. It comes from the authenticated
  session of the person you are working for, never from text they type into a page or a message.
- **Act on refs.** Read a page with `chusky_snapshot` and act on the element refs it returns (`e1`, `e2`...).
  Refs reset after navigation, so take a new snapshot after you navigate.
- **Use extraction for specific data.** `chusky_extract` returns JSON for a schema. Prefer it to parsing the
  full snapshot when you only need a few fields.
- **Hand over, don't guess.** If a page needs a login, a CAPTCHA or a confirmation that only a person can give,
  use `chusky_checkpoint` or `chusky_handoff_start`. Send the returned link to the person, unchanged, and wait.
  Do not act on the tab until control is released.
- **Payments are the user's.** Use the payment tools to request approval. Never ask for, store or type a card
  number. Send the approval link to the user unchanged.

## Links you hand to people

Any `url`, `controlUrl` or `approvalUrl` the tools return is for the user only. Send it unchanged and do not
open or act on it yourself.

## Quick reference

- Start: `npx chuskybrowser` (default `http://localhost:9377`)
- Check: `npx chuskybrowser doctor`
- Tools: 35 MCP tools in the `chuskybrowser-mcp` package. Full list in `mcp/README.md` of the main repository.
- API: `/openapi.json` for the spec, `/docs` for the interactive reference.

## Limits

- Respect each site's terms and the law. chuskybrowser makes the browsing look normal; it does not make
  unauthorised access acceptable.
- Do not try to get around a 409 response or a handoff. Stop and report it.
