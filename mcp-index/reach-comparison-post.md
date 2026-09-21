# MCP Index Reach post (zoom chart)

Pair with `exports/reach-comparison-zoom-light.png`.
Links: [MCP Index](https://agentstatus.dev/mcp-index) · [Methodology](https://agentstatus.dev/mcp-methodology)

Numbers are from the five dashboard cards on this graphic (30-day Reach). Do not refresh from live Index without updating the image.

---

## X / short

Agent Times leads MCP Index Reach at 100%. PubMed 96.2 · SAP 93.1 · Gateway 91.2 · Supabase 90.0.

All five production MCP URLs clear 90%. Four sit Degraded because tools/call failed after the session opened.

Reach is reachable runs / total MCP runs over 30 days. Weight 35% of Score.

https://agentstatus.dev/mcp-index
https://agentstatus.dev/mcp-methodology

---

## LinkedIn / long (use this with the image)

Agent Times leads MCP Index Reach at 100%. PubMed 96.2, SAP 93.1, Gateway 91.2, Supabase 90.0.

All five production MCP URLs in this cut clear 90% Reach on the public [MCP Index](https://agentstatus.dev/mcp-index).

Reach is the share of MCP validation runs in the last 30 days that reached the server. It is 35% of Score. A 200 on the address is one input. The Score still has to negotiate the dialect, read the catalog, complete a safe tools/call, and record whether the result looked like the job.

The Degraded rows in this set are tool-path failures, with Reach still above 90%:

- PubMed 96.2 Reach · Score 85.5 B · 27% of tool calls failed
- SAP 93.1 Reach · Score 74.7 C · 61% of tool calls failed
- Gateway 91.2 Reach · Score 88.9 B · 19% of tool calls failed
- Supabase 90.0 Reach · Score 79.9 C · 42% of tool calls failed · 10 of 20 runs (provisional on the chart)

Agent Times is the only Healthy bar, and the only 100%. P95 latency of 29s holds Score at 74.6 C. That 100% sits on 3 of 20 runs, so Rank Score shrinks the rate toward a 50% prior (n₀ = 7) before the table sorts. Displayed Reach can read 100 while the ranking math treats the rate as 65% until the sample is real.

Gateway shows the other side of the formula. It trails Agent Times on Reach and still leads this cut on Score (88.9 B) because tool success and latency sit in the remaining 65% of the weights.

How the Index measures this: distributed residential nodes execute the workload. The backend only schedules and scores. Modern 2026-07-28 first, legacy initialize/session when required. Safe read tools on the default public path. Named-host letters live on Host Compatibility. This chart is the MCP Index Reach column.

Full math, Rank Score shrinkage, and what each column does not claim: [agentstatus.dev/mcp-methodology](https://agentstatus.dev/mcp-methodology)

Live table: [agentstatus.dev/mcp-index](https://agentstatus.dev/mcp-index)

---

## Image alt text

MCP Index Reach comparison, axis 85% to 100%. Agent Times 100.0% Healthy, provisional, 3 of 20 runs. PubMed 96.2% Degraded, B, rank 988. SAP 93.1% Degraded, C, rank 1948. Gateway 91.2% Degraded, B, rank 643. Supabase 90.0% Degraded, provisional, 10 of 20 runs. Reach is the share of probes in 30 days that got a working session, weight 35% of Score. agentstatus.dev/mcp-index
