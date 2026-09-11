# Cursor prompt — new MCP Index company scorecard

Copy all of the following into Cursor in **Agent mode**. Attach AgentStatus dashboard screenshots (Host Compatibility + evidence) and a company logo if you have one.

---

Using `mcp-index/semgrep-scorecard.html` (or `server-scorecard.html` if closer) as the template, and the `agentstatus-design` + `agentstatus-copy` skills:

Build a full GTM scorecard pack for **{COMPANY_NAME}** from the attached AgentStatus dashboard screenshots.

### Extract from the dashboards
- Company / MCP server name and endpoint URL if shown
- All hosts (aim for 18) with status: cleared end-to-end, partial / broke partway, or never connected / failed
- Run timestamp → format as `DD Mon YYYY, HH:MM UTC` when time is available
- One evidence sample (which host, what failed or passed, key codes)

### Output files
1. `mcp-index/{company-slug}-scorecard.html` with:
   - Real logo lockup (official mark; navy + light variants). Do not invent a fake logo if a real one can be cropped or fetched.
   - Claim-first line only under the logo (no MCP INDEX eyebrow; no residential/connect/discover/run-id meta crumbs)
   - Matrix · Threshold · Poster toggles
   - Navy · Light (Abstract) wash toggles
   - Threshold buckets that match the data (e.g. cleared / partway / never connected)
   - Poster big number + one plain sentence + host chips
   - Evidence block for one sample host
   - Outreach first-line paste at the bottom
   - `export-png.js` wired so Download PNG works on HTTPS
2. Re-export PNGs into `mcp-index/exports/` for matrix/threshold/poster × navy (and light if quick).
3. Add links on `mcp-index/index.html` and the table in `mcp-index/README.md`.
4. Open the HTML in Google Chrome so I can review.

### Hard bans
- No `Residential probes · connect ok · discover ok · invoke failed · run …` lines
- No “broken” marketing; stay factual and measured
- No em dashes; no `X, not Y` antithesis blades
- No staccato status stacks; glue with *and / but / though / because / so*
- SAT transition fit: list worked + invoke failed → *but*, not *then*
- No Fabric / mystery-diner metaphors; use Exa warm shape for social (`agentstatus-copy`)
- No Tailwind palette classes; no hardcoded random hex for UI chrome (use design tokens / existing card CSS)
- No Parallax newsletter voice

### Claim shape examples
- `Semgrep's MCP completed a tool invoke on 8 of 18 hosts on 10 Sep 2026, 13:45 UTC.`
- `Firecrawl's MCP failed a tool invoke in 18 of 18 hosts on 15 Sep 2026, 15:47 UTC, after connect and discover cleared but invoke returned 401 on scrape.`
- Bad: `Cleared tools/call in 8 of 18 hosts…` (no subject; dashboard jargon) → use *completed a tool invoke* with `[Company]'s MCP`.
- Bad: `…succeeded on 10 Sep. Median 5.22s. Two of seven stayed listed only.` → join into one compound sentence.

Replace `{COMPANY_NAME}` / `{company-slug}` with the real company before sending.
