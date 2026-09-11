---
name: agentstatus-wording
description: >-
  AgentStatus product wording for charts, infographics, landing, and UI.
  Craft model: Artificial Analysis (artificialanalysis.ai + @ArtificialAnlys) —
  claim-first sentences, concrete verbs, metric packing, definitional metric
  blurbs, middle-dot chart chrome. Enforces human rhythm: compound sentences
  with and/but/because/so/though and commas or semicolons; bans staccato
  three-period status lines. AgentStatus / agentstatus.dev naming OK. Not for
  Parallax newsletter. Use when writing or reviewing AgentStatus copy, MCP Index
  graphics, share cards, methodology blurbs, status lines, or when copy sounds
  AI-generated / too punchy / needs humanizing.
---

# AgentStatus wording

Product copy only (charts, infographics, Index, landing, UI).  
**Craft model:** [Artificial Analysis](https://artificialanalysis.ai/) and [@ArtificialAnlys](https://x.com/ArtificialAnlys) — steal the machine of the prose, not their brand, palette, or index names.

Pair with `agentstatus-design` for visual rules.

## Voice

- Independent, operator-facing, measurement-serious
- Plain English over marketing abstraction
- Confidence comes from **numbers + named method**, not adjectives
- AgentStatus and agentstatus.dev are allowed; keep Carmel Labs / Fabric out of chart chrome unless asked
- Sound like an operator writing a note, not a model packing three headlines

## Steal from Artificial Analysis (locked)

### 1. Claim first, then mechanism

Lead with what changed or who leads. Put cost/score/time in the same breath.

> GPT-6 Astra ties leadership with Claude Fable 5.1 in both of our flagship Indices, at lower cost.

> DeepSeek V4.1 Flash overtakes DeepSeek V4 Pro as DeepSeek’s new flagship model with a score of 40…

**AgentStatus shape:** Subject + result verb + metric + comparison.  
Not: soft setup, then the point.

### 2. Concrete verbs

Prefer: *overtakes, ties, leads, scores, gains, costs, measures, incorporates, sits on, driven by, replaces, upgrades, compares, reports, cleared, failed, broke, stalled.*

Avoid empty verbs: *leverages, empowers, unlocks, revolutionizes, delights.*

### 3. Pack metrics tightly — inside one sentence

Same sentence holds score + cost + baseline when possible. Packing means **clauses joined by glue**, not three mini-sentences.

> …matches the score at ~40% of the cost per task ($3.26 vs $7.63).

> …gains 6 points on GPT-5.6 Sol.

Use `~` for approximations, exact `$` / `%` / `s` when measured. Name the unit every time (*per task*, *median seconds*, *pass@1*).

### 4. Chart & UI chrome formula

AA pattern for titles and axis hints:

`Metric name · Higher is better`  
`Metric name · Lower is better`

Middle dot `·` separates title crumbs and meta:

`7 servers · residential node · Sep 9, 2026`  
`Output tokens per second · Higher is better`

**AgentStatus:** use this on chart heads and footers. Do not invent cute taglines.

### 5. Definitional blurbs (one breath)

After a metric name, one sentence that says what it is and how direction works:

> Weighted average cost (USD) per Intelligence Index task · Lower is better

> Wall time from connect to the first tool result that carried data, median of five runs.

Define once. Do not restate vibe. If title and subtitle are **separate labeled fields**, two lines are fine; do not stack three unbound status sentences in one prose block.

### 6. Takeaway bullets (articles / posters)

AA uses short bold claim + evidence clause:

> Ties for first place… scores 53… level with…

> Occupies much of the cost frontier…

For AgentStatus posters: one big number, **one** plain compound sentence, optional 3–4 mini bars. No essay on the graphic. No second and third period-stopped facts after the first.

### 7. Honest limits (methodology tone)

AA states what the number is **not**:

> …not intended to represent the maximum possible performance… intended to represent the real-world performance customers experience…

AgentStatus equivalent: say residential / outside-in limits in one plain clause when relevant. No throat-clearing.

### 8. X / launch cadence

From [@ArtificialAnlys](https://x.com/ArtificialAnlys): one news beat per post; model names spelled fully; score in the first line; link to analysis; minimal emoji; no “🧵 here’s why this matters” filler.

---

## Rhythm / glue (anti-staccato) — hard rule

Metric packing must not produce **robot cadence**. Prefer conjunctions and mid-sentence punctuation over a run of short declaratives.

### Prefer

- Conjunctions: *and, but, because, so, while, though, after, when*
- Punctuation that joins: commas, colons, semicolons
- One continuous sentence (or two at most) for a status line, claim, poster line, outreach line, or evidence summary

### Avoid

- Three or more short period-stopped sentences in one UI prose block
- Stacked 5–8 word fragments for fake punch
- Antithesis blades (`X, not Y` / `It is not A. It is B.`)
- Em dashes

### Scope

| Surface | Rule |
|---------|------|
| Scorecard claim, poster line, outreach paste, evidence summary, landing body | Glue required |
| Chart title + separate definition field | Two labeled lines OK |
| Host chips / status labels (`CLEARED`) | Fragments OK |
| Meta crumbs with `·` | Not prose; keep crumbs |

### Before → after (house examples)

**Bad (Slack callout — sounds generated)**

> tool invokes succeeded on 10 Sep 2026. Median run 5.22s. Two of seven advertised tools stayed listed only.

**Good**

> Tool invokes succeeded on 10 Sep 2026, and the median run was 5.22s, though only two of seven advertised tools stayed listed.

**Bad**

> Failed tools/call on 15 Sep 2026, 15:47 UTC. Connect and discover cleared. Invoke returned 401 on scrape.

**Good**

> Failed tools/call on 15 Sep 2026, 15:47 UTC, after connect and discover cleared and invoke returned 401 on scrape.

**Bad**

> Cleared tools/call in 8 of 18 hosts. Nine never connected. Cursor broke on invoke.

**Good**

> Cleared tools/call end to end in 8 of 18 hosts on 10 Sep 2026, 13:45 UTC, while nine never connected and Cursor broke on invoke (0 of 3 calls).

**Bad**

> Firecrawl answers. Then it stalls. Handshake 0.4s. First usable result 12s later.

**Good**

> Firecrawl answers, then stalls: handshake in 0.4s, and the first usable result 12s later.

### Quick self-check

1. Count periods in the prose block. If ≥3 short sentences, join with *and / but / though / because / so* or a semicolon.  
2. Read aloud once. If it sounds like three slide titles, rewrite.  
3. Keep numbers; only change the joints.

More pairs → [rhythm-examples.md](rhythm-examples.md)

## Sentence structure

| Prefer | Avoid |
|--------|--------|
| Subject + result + number | Throat-clear (“In today’s AI landscape…”) |
| Compound clauses with *and / because / so / while / though* | Stacked 5-word fragments for fake punch |
| Named entities (Linear, Firecrawl, Cursor) | Vague “some servers” |
| Active measurement verbs | Passive hype |
| One breath for status / claim / poster | Three period-stopped facts in a row |

Keep most sentences under ~40 words on charts. Methodology can run longer if every clause earns a definition.

## Punctuation

| Use | How |
|-----|-----|
| Period | End of a finished thought; do not use to chop one status into three |
| Comma | Lists, light clauses, joining facts in one breath |
| Semicolon | Related measurement clauses when *and* would mush |
| Middle dot `·` | Meta crumbs, “Higher/Lower is better” only |
| Colon | After a tight lead-in before evidence (`stalls: handshake…`) |
| Parentheses | Units, effort levels, short asides `($3.26 vs $7.63)` / `(0 of 3 calls)` |
| `~` | Approximate multiples/percents |
| `%` `$` | Always with the number |

| Avoid | Why |
|-------|-----|
| Em dashes | House ban; AA rarely needs them for this voice |
| Exclamation marks | Not measurement tone |
| Ellipsis for drama | Not AA |
| Emoji in product/chart copy | AA X is nearly emoji-free on analysis posts |
| Antithesis blades (`X, not Y` / `It is not A. It is B.`) | Sounds generated; show two measured paths instead |

## Chart / infographic copy checklist

1. **Title** = metric claim (*Time to first result*), not poetry  
2. **Subtitle** = definition + aggregation in one breath (*Wall time…, median of five runs*)  
3. **Hint** = direction (*Lower is better*) + one threshold if it matters (*10 seconds*)  
4. **Callout** = one named failure with two numbers max, compound if two facts  
5. **Footer** = one sentence of interpretation + `agentstatus.dev`  
6. No dead tabs, no unexplained jargon (“Cycle 12”), no host rainbow legends unless color encodes something real  
7. **Rhythm** = no three-period staccato in any single prose block  

## Affiliation

- Say AgentStatus / MCP Index / agentstatus.dev  
- Do not paste Artificial Analysis index names onto our graphics  
- Do not name Carmel Labs or Fabric on share cards unless explicitly requested  

## Hard bans

- SaaS cheer and CTA sludge (“Join thousands of teams…”)  
- “In today’s rapidly evolving…”  
- Em dashes and antithesis refrain blades  
- Invented metrics without a one-line definition  
- Parallax letter voice (separate product; out of scope here)  
- Staccato status stacks (three short declaratives where one compound sentence should carry the facts)  

## Worked AgentStatus examples (AA machine, our domain)

**Good**

> Time to first result  
> Wall time from connect to the first tool result that carried data, median of five runs.  
> Lower is better · dashed line = 10 seconds.

> Firecrawl answers, then stalls: handshake in 0.4s, and the first usable result 12s later.

> 2 of 7 cross the ten-second wait line, and Firecrawl is the stall after handshake.

> Cleared tools/call end to end in 8 of 18 hosts on 10 Sep 2026, 13:45 UTC.

**Bad**

> Unlocking real-time visibility into your agent stack!!!  
> It’s not just latency — it’s trust.  
> Cycle 12 vibes · Steps cleared · Reruns  
> tool invokes succeeded on 10 Sep 2026. Median run 5.22s. Two of seven stayed listed only.

## Sources sampled (this skill)

- https://artificialanalysis.ai/ (labels, Higher/Lower is better, index blurbs)  
- https://artificialanalysis.ai/methodology (definitions, real-world vs max performance)  
- https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra (claim-first ledes, takeaways, metric packing)  
- https://x.com/ArtificialAnlys (overtakes / score-first posts)  
- Internal review (Sep 2026): prefer conjunctions and mid-sentence punctuation over short AI-cadence sentences on product UI

Deeper quote bank → [aa-craft-notes.md](aa-craft-notes.md)  
Rhythm pairs → [rhythm-examples.md](rhythm-examples.md)
