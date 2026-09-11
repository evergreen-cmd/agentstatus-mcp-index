# SAT R&W pass (AgentStatus)

Required before shipping any draft from `agentstatus-copy`.

College Board digital SAT Reading and Writing measures (among other things) **Expression of Ideas** and **Standard English Conventions**. We steal the editing logic, not test prep tone.

Official refs:
- https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing
- https://satsuite.collegeboard.org/media/pdf/skills-insight-digital-sat-suite.pdf
- https://satsuite.collegeboard.org/media/pdf/assessment-framework-for-digital-sat-suite.pdf

House overlay: **never use em dashes**, even when SAT would allow them.

---

## 1. Expression of Ideas — transition fit

Pick the word that matches the **logical relationship**. Wrong transition = fail.

| Relationship | Prefer | Avoid when wrong |
|--------------|--------|------------------|
| Contrast (success then failure; expected vs actual) | *but*, *though*, *however* (sparingly) | *then* (only means sequence) |
| Sequence / next step | *then*, *after*, *and then* | *but* (if no contrast) |
| Addition of peer facts | *and* | fake contrast |
| Cause / result | *because*, *so* | vague *and* |

**Scorecard turn (locked):** catalog/list worked and invoke failed → **but**

> On Cursor the tools listed, **but** 0 of 3 invokes completed.

Not: `listed, then 0 of 3 invokes` (underplays the turn).

---

## 2. Standard English Conventions

Checklist:

- [ ] Subject–verb and tense agreement  
- [ ] No comma splice; no fused sentences  
- [ ] Commas mark real boundaries (clause / nonessential)  
- [ ] Semicolon only between two related independent clauses  
- [ ] Modifiers attach to the right subject  
- [ ] Pronouns have clear antecedents  
- [ ] Possessives vs plurals correct  

---

## 3. Concision (Expression of Ideas)

- Cut words that do not carry a measured fact  
- One idea per sentence unless packing metrics on purpose  
- Prefer concrete verbs: reach, list, call, clear, fail, complete  

---

## 4. Ship gate

Fail the draft if any of:

1. Em dash present  
2. Transition does not match the relationship  
3. Three+ punchy fragments in a row where one compound sentence should carry the facts  
4. Agreement or boundary error that a careful editor would catch  

Pass → anti-AI bans in `SKILL.md` → ship.
