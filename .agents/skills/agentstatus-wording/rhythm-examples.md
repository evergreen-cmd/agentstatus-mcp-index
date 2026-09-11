# AgentStatus wording — rhythm before/after

Use with `SKILL.md` → **Rhythm / glue**. Keep every number; only change how facts join.

## Status / evidence blurbs

| Bad | Good |
|-----|------|
| tool invokes succeeded on 10 Sep 2026. Median run 5.22s. Two of seven advertised tools stayed listed only. | Tool invokes succeeded on 10 Sep 2026, and the median run was 5.22s, though only two of seven advertised tools stayed listed. |
| Handshake cleared. List returned seven tools. Call failed with 401. | Handshake cleared and list returned seven tools, but call failed with 401. |
| Nine hosts never connected. Cursor broke on invoke. Copilot cleared. | Nine hosts never connected, Cursor broke on invoke, and Copilot cleared. |
| Residential node. Five runs. Median 12.4s. | Residential node, five runs, median 12.4s. |

## Scorecard claim / poster / outreach

| Bad | Good |
|-----|------|
| Failed tools/call in 18 of 18 hosts. Connect ok. Discover ok. Invoke 401. | Failed tools/call in 18 of 18 hosts on 15 Sep 2026, 15:47 UTC, after connect and discover cleared and invoke returned 401 on scrape. |
| Cleared tools/call in 8 of 18 hosts. Nine never connected. Cursor broke. | Cleared tools/call end to end in 8 of 18 hosts on 10 Sep 2026, 13:45 UTC, while nine never connected and Cursor broke on invoke (0 of 3 calls). |
| Firecrawl stalls after handshake. Salesforce never clears. Two of seven cross ten seconds. | 2 of 7 cross the ten-second wait line, because Firecrawl stalls after handshake and Salesforce never clears the path. |

## Chart callouts

| Bad | Good |
|-----|------|
| Firecrawl answers. Then it stalls. Handshake 0.4s. Result 12s later. | Firecrawl answers, then stalls: handshake in 0.4s, and the first usable result 12s later. |
| Linear is fast. Notion is slow. Gap is 9s. | Linear is fast and Notion is slow, with a 9s gap to first usable result. |

## Still allowed as fragments

- Host chip labels: `CLEARED` / `PARTIAL` / `NO CONNECT`
- Axis hints: `Lower is better`
- Meta crumbs: `7 servers · residential node · Sep 9, 2026`
- Separate labeled fields (title on one line, definition on the next)

## Rewrite checklist

1. Periods in the prose block ≥ 3 short sentences → join.  
2. Prefer *and / but / though / because / so / while / after*.  
3. Semicolon only when two clauses are peers and *and* would mush.  
4. Do not add hype adjectives while fixing rhythm.  
5. Do not invent metrics; only re-glue what was measured.
