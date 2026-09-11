---
name: agentstatus-design
description: >-
  AgentStatus (Carmel Labs) visual design system — fonts, CSS tokens, brand
  accents, navy/cream wash surfaces, chart color kit, logo lockups, and hard
  bans. Use when building or reviewing AgentStatus UI, MCP Index charts, share
  cards, landing sections, or any branded graphic. Shareable with teammates
  (Cursor or Claude). Not for Parallax newsletter voice or unaffiliated pubs.
---

# AgentStatus design

Follow these rules for every AgentStatus-branded surface. If unsure about a
color, font, or spacing value, **ask before inventing one**.

Aesthetic target: clean, professional — match [agentstatus.dev](https://agentstatus.dev).

## Fonts

| Role | Font | Notes |
|------|------|--------|
| Primary | **Plus Jakarta Sans** | Always import from Google Fonts |
| Secondary | **DM Sans** | Specific UI components only |
| Forbidden | Inter, Roboto, Arial, system stacks as brand type | Never |

## Color rules

1. Prefer `hsl(var(--token-name))` for product UI.
2. **Never** use Tailwind palette classes (`bg-blue-500`, `text-gray-700`, etc.).
3. **Never** invent off-system hues for core UI (no purple/pink/neon green AA-style rainbows).
4. Logo orange and hero yellow are **accents only** (highlights, logo, alerts) — not page fills.

Full token tables → [palette.md](palette.md).

### Core tokens (light)

```css
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--card: 0 0% 100%;
--card-foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96%;
--secondary-foreground: 222.2 84% 4.9%;
--muted: 210 40% 96%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96%;
--accent-foreground: 222.2 84% 4.9%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 221.2 83.2% 53.3%;
--radius: 0.5rem;
--brand-navy: 214 39% 17%;
--brand-navy-deep: 220 38% 10%;
--ink-cream: 40 24% 97.5%;
--logo-orange: 24.6 95% 53.1%;
```

### Brand accents (sparingly)

| Name | Value | Use |
|------|--------|-----|
| Logo orange | `hsl(var(--logo-orange))` ≈ `#f97316` | Logo, alerts, CTA accent line |
| Hero yellow | `#facc15` | Hero highlight only when explicitly needed |

### Buttons

- Primary CTA: `background hsl(var(--primary))`, `color hsl(var(--primary-foreground))`
- Do not invent other button color pairs

### Radius

- Default: `var(--radius)` → `0.5rem`
- Exception: Fabric product theme → `1.5rem`

## Backgrounds

**Default (product UI):** flat `hsl(var(--token))` only. No decorative textures, watercolor fills, or invented gradients.

**Allowed brand washes** (marketing / Index / chart exports — only with real assets):

| Wash | Asset | Stack |
|------|--------|--------|
| Navy | `aoi-index/hero-wash.jpg` (or local copy) | Navy base + soft-light + overlay + navy edge veils → cream type |
| Cream | `mcp-index/hero-wash.jpg` | Cream base + multiply + cream veils → navy type |

Do not fake washes with CSS noise. Do not cover a wash with an opaque white card that hides it.

## Chart color kit (locked — 10 distinct)

Use for multi-series bars when you need clear separation. Prefer these over host rainbows.

| # | Name | HSL |
|---|------|-----|
| 1 | Cream | `40 24% 97.5%` |
| 2 | Mist blue | `214 20% 72%` |
| 3 | Primary blue | `221.2 83.2% 53.3%` |
| 4 | Teal | `188 38% 38%` |
| 5 | Slate | `214 16% 42%` |
| 6 | Brand navy | `214 39% 17%` |
| 7 | Warm stone | `30 12% 55%` |
| 8 | Rust | `18 48% 38%` |
| 9 | Logo orange | `24.6 95% 53.1%` |
| 10 | Soft gold | `45 70% 58%` |

Rules:

- Need **≥10** distinguishable fills → use this kit (or a clear subset).
- Do **not** use near-twin ladders alone (cream/sand, three navies, orange/rust as equals).
- On navy wash: outline #6 (navy) with a light hairline. On cream: outline #1 (cream).
- #9 orange = alert / threshold / emphasis, not every bar.

## Logo

- Use the real wordmark asset: `agentstatus-wordmark-white.svg` (on navy) or `agentstatus-wordmark.svg` (on light).
- **Never** fake it with an orange CSS square + typed “agentstatus”.
- Prefer the waveform wordmark lockup over inventing a mark.

## Charts & share graphics (lessons learned)

Strip anything a viewer cannot decode in one glance:

- No dead tabs (“Steps cleared” with no view)
- No unexplained step dashes / glyph rows under labels
- No internal jargon as chrome (“Cycle 12”) unless defined
- Prefer fewer series that tell the story over a full cohort dump
- Title + one subtitle + chart + short footer is enough

## Hard bans

- Tailwind default color classes
- Off-brand fonts
- Invented brand colors without asking
- Artificial Analysis–style primary crayon sets (neon green / purple / pink packs)
- Opaque sheets that erase the wash on wash-based exports
- Fake logos

## Ask first

Spacing scales, new radii, new accent hues, dark-mode token sets, and non-wash decorative backgrounds — ask before shipping.

## Related files in this repo

- Root `.cursorrules` — product UI baseline
- `mcp-index/chart-color-kit.html` — visual swatches for the 10
- `mcp-index/cycle-12-time-to-first-result.html` — navy-wash chart example
- Site: `NavyWashCard`, `aoi-index/hero-wash.jpg`, `mcp-index/hero-wash.jpg`
