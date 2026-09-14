# MCP Index — share cards (team guide)

Live site (GitHub Pages):  
**https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/**

Repo: **https://github.com/evergreen-cmd/agentstatus-mcp-index**

These are AgentStatus GTM scorecards (Matrix / Threshold / Poster · navy or light).  
Teammates open the HTTPS link, toggle styles, and use **Download PNG**.

---

## For teammates (view + download)

1. Open the live links below (not `file://` on someone’s laptop).
2. Toggle **Wash** (Navy / Light) and **Style** (Matrix / Threshold / Poster).
3. Click **Download PNG**.

| Card | URL |
|------|-----|
| Semgrep | [semgrep-scorecard.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/semgrep-scorecard.html) |
| Semgrep infographic | [semgrep-infographic.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/semgrep-infographic.html) |
| Attio infographic | [attio-infographic.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/attio-infographic.html) |
| AgentMail infographic | [agentmail-infographic.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/agentmail-infographic.html) |
| AgentMail time to first result | [agentmail-time-to-first-result.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/agentmail-time-to-first-result.html) |
| Firecrawl | [server-scorecard.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/server-scorecard.html) |
| Comparison (W2) | [server-comparison.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/server-comparison.html) |
| Cycle-12 bars | [cycle-12-time-to-first-result.html](https://evergreen-cmd.github.io/agentstatus-mcp-index/mcp-index/cycle-12-time-to-first-result.html) |

Ready PNGs (when exported): `mcp-index/exports/`

**Skills for Cursor / Claude** (design + copy):  
`agentstatus-design-skill.zip` · `agentstatus-copy-skill.zip` (and legacy `agentstatus-wording-skill.zip` alias) in this folder (and under `exports/`).

---

## For editors (clone, don’t fork — if you have write access)

```bash
git clone https://github.com/evergreen-cmd/agentstatus-mcp-index.git
cd agentstatus-mcp-index
```

After you change cards:

```bash
git add mcp-index/
git commit -m "Describe the company card update."
git push
```

Pages refreshes in about 1–2 minutes. Hard-refresh the live URL if you see an old version.

If you only have read access, **fork** the repo, work there, then open a PR into `evergreen-cmd/agentstatus-mcp-index`.

---

## How to generate a new company card

### What you need
1. AgentStatus dashboard screenshots for that MCP (at least **Host Compatibility / Steps**, plus one **evidence** sample if useful).
2. Company logo (official wordmark PNG/SVG, or a clean crop from their site).
3. Cursor with `agentstatus-design` + `agentstatus-copy` skills loaded (from the zips above).

### Locked copy rules
- **Claim first:** subject + result + metric + timestamp.  
  Example: `Semgrep's MCP completed a tool invoke on 8 of 18 hosts on 10 Sep 2026, 13:45 UTC.`  
  Or: `Firecrawl's MCP failed a tool invoke in 18 of 18 hosts on 15 Sep 2026, 15:47 UTC.`
- Do **not** default to `Cleared tools/call…` / `Failed tools/call…` as the lede.
- Timestamp form: **`DD Mon YYYY, HH:MM UTC`** (or date only if time isn’t on the dash).
- **No** “MCP INDEX” eyebrow on the card.
- **No** meta crumb line like `Residential probes · connect ok · discover ok · invoke failed · run FC-…`
- Factual and timestamped. Do not say the product is “broken.” Name the measured failure in plain English.
- No em dashes. No antithesis blades (`X, not Y`). Prefer full sentences where you write prose.
- Fonts: Plus Jakarta Sans. Colors: `hsl(var(--token))` only. Flat wash backgrounds only.

### Build steps
1. Duplicate `semgrep-scorecard.html` or `server-scorecard.html` → `{company}-scorecard.html`.
2. Swap logo lockup, claim, host matrix statuses, threshold buckets, poster number + line, evidence, outreach line.
3. Open in Chrome, check Matrix / Threshold / Poster × Navy / Light.
4. Export PNGs into `exports/` (page Download button, or `node mcp-index/export-batch.cjs` from repo tooling).
5. Add the new HTML to this README table and to `index.html`.
6. Commit + push.

### Paste-ready Cursor prompt

Copy everything in [`TEAM-PROMPT.md`](TEAM-PROMPT.md) into Cursor (Agent mode), then attach the dashboard screenshots and logo.

---

## Design / wording skills

| Zip | Use for |
|-----|---------|
| `agentstatus-design-skill.zip` | Tokens, wash, chart kit, logo rules |
| `agentstatus-copy-skill.zip` | Cards / X / LinkedIn / outreach / charts; Exa warm shape; SAT pass; anti-AI bans |
| `agentstatus-wording-skill.zip` | Legacy alias → use `agentstatus-copy` |

Source folders (if working inside the Design Bible monorepo):  
`.agents/skills/agentstatus-design/` · `.agents/skills/agentstatus-copy/`
