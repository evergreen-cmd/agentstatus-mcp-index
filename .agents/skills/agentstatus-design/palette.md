# AgentStatus palette reference

Copy-paste tokens and chart kit. Prefer `hsl(var(--token))` in product UI.

## CSS custom properties

```css
:root {
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

  /* Chart kit */
  --chart-1: 40 24% 97.5%;      /* cream */
  --chart-2: 214 20% 72%;       /* mist blue */
  --chart-3: 221.2 83.2% 53.3%; /* primary blue */
  --chart-4: 188 38% 38%;       /* teal */
  --chart-5: 214 16% 42%;       /* slate */
  --chart-6: 214 39% 17%;       /* brand navy */
  --chart-7: 30 12% 55%;        /* warm stone */
  --chart-8: 18 48% 38%;        /* rust */
  --chart-9: 24.6 95% 53.1%;    /* logo orange */
  --chart-10: 45 70% 58%;       /* soft gold */
}
```

## Approximate hex (exports / design tools only)

| Token | ≈ Hex |
|-------|--------|
| Brand navy | `#1B2A3D` |
| Brand navy deep | `#0f1623` |
| Ink cream | `#FAF8F4` |
| Logo orange | `#f97316` (site sometimes `#f47c20`) |
| Primary | `#3B82F6` range — use HSL token, not Tailwind `blue-500` |
| Hero yellow | `#facc15` |

When tooling forces hex, prefer the table above. In CSS for AgentStatus UI, still prefer tokens.

## Navy wash stack (reference)

```
base:     hsl(var(--brand-navy))
img 1:    soft-light, opacity ~0.92, scale 1.08, rotate -2deg
img 2:    overlay, opacity ~0.45, scale 1.12, rotate 1.5deg
veils:    navy edge gradients top/bottom + sides
type:     hsl(var(--ink-cream))
```

## Cream wash stack (reference)

```
base:     hsl(var(--ink-cream))
img:      multiply, opacity ~0.92, scale 1.08, rotate -2deg
veils:    cream edge gradients
type:     hsl(var(--brand-navy))
```
