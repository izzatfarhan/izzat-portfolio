# DESIGN SYSTEM — Electrical & Automation Portfolio
### Codename: **CIRCUIT BLUEPRINT**

> A design language inspired by engineering schematics, PCB trace patterns, and industrial control panels — crisp, precise, and quietly electric. Not dark. Not generic. Distinctly *engineered*.

---

## 🎨 Aesthetic Direction

**Concept**: The interface feels like a living technical schematic — clean off-white backgrounds reminiscent of engineering blueprint paper, with amber and electric teal accents that pulse with controlled energy. Grid lines, trace routes, and terminal-style typography ground the UI in a world of precision instruments.

**Tone**: Industrial-refined. Like a beautifully annotated circuit diagram meets a modern industrial design studio portfolio.

**What makes it unforgettable**: Circuit-trace decorative elements used as dividers and section markers. A warm "blueprint paper" base instead of cold white or dark backgrounds. Amber highlights that evoke indicator lights and copper PCB traces.

---

## 🖍️ Color Palette

```css
:root {
  /* === BASE — Blueprint Paper === */
  --color-base:         #F4F1EA;   /* Warm off-white, like drafting paper */
  --color-surface:      #FDFCF8;   /* Lightest surface, cards/panels */
  --color-surface-2:    #EDE9DE;   /* Slightly deeper, section backgrounds */
  --color-border:       #D4CCBA;   /* Subtle grid lines */

  /* === INK — Schematic Lines === */
  --color-ink:          #1A1C1E;   /* Near-black for primary text */
  --color-ink-muted:    #5A5E65;   /* Secondary text, captions */
  --color-ink-faint:    #9DA3AB;   /* Placeholder, disabled */

  /* === ACCENT 1 — Amber / Copper (Primary) === */
  --color-amber:        #D97B2B;   /* Main accent: copper traces, CTAs */
  --color-amber-light:  #F2A94E;   /* Hover states, highlights */
  --color-amber-pale:   #FDE9CC;   /* Soft tint backgrounds */

  /* === ACCENT 2 — Electric Teal (Secondary) === */
  --color-teal:         #0B8B8F;   /* Links, active states, tags */
  --color-teal-light:   #3AB5B9;   /* Hover, icons */
  --color-teal-pale:    #D0F0F1;   /* Badge backgrounds, subtle fills */

  /* === SIGNAL COLORS — Status Indicators === */
  --color-signal-on:    #3CBF6A;   /* Power ON / success */
  --color-signal-warn:  #E8A020;   /* Warning / in progress */
  --color-signal-fault: #D94040;   /* Fault / error */
  --color-signal-idle:  #8FA3B1;   /* Idle / disabled */

  /* === ELEVATION — Shadows === */
  --shadow-sm:   0 1px 3px rgba(26,28,30,0.08), 0 1px 2px rgba(26,28,30,0.04);
  --shadow-md:   0 4px 12px rgba(26,28,30,0.10), 0 2px 4px rgba(26,28,30,0.06);
  --shadow-lg:   0 10px 30px rgba(26,28,30,0.12), 0 4px 8px rgba(26,28,30,0.06);
  --shadow-card: 0 2px 8px rgba(217,123,43,0.08), 0 1px 3px rgba(26,28,30,0.06);
}
```

## 🔤 Typography

```css
:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-display-xl: clamp(3.5rem, 8vw, 7rem);
  --text-display-lg: clamp(2.5rem, 5vw, 4.5rem);
  --text-display-md: clamp(1.75rem, 3vw, 2.75rem);
  --text-xl: 1.25rem;
  --text-lg: 1.125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-tight: 1.1;
  --leading-snug: 1.35;
  --leading-normal: 1.6;
  --leading-loose: 1.8;
  --tracking-tight: -0.03em;
  --tracking-normal: 0em;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.12em;
}
```

## 📐 Spacing & Layout

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --container-max: 1280px;
  --container-narrow: 760px;
  --container-wide: 1440px;
  --grid-gutter: var(--space-6);
  --section-gap: var(--space-24);
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

## 🧩 Components

Use copper primary CTAs, outlined secondary buttons, mono uppercase tags, signal dots, and project cards with copper/teal top traces. Cards should feel like clean instrument panels rather than generic dark glass panels.

## ✨ Motion & Animation

Motion should be subtle: fade-up entrances, small hover elevation, trace-style link underlines, and a soft signal pulse for status indicators.

## 🏗️ Background Patterns

Use warm engineering grid backgrounds, PCB dot matrix sections, and subtle blueprint stripes. The grid should whisper, not shout.

## 🔌 Iconography

Use Lucide icons: `Zap`, `Cpu`, `CircuitBoard`, `Settings2`, `Workflow`, `Layers`, `FolderOpen`, `Wrench`, `FlaskConical`, `Mail`, `ArrowRight`, `ExternalLink`, and status icons.

## 🚦 Do's & Don'ts

### ✅ Do
- Use `JetBrains Mono` for technical data, specs, measurements, and tags
- Apply amber accents sparingly
- Use signal dots to indicate availability or project status
- Include circuit-trace dividers between major sections
- Keep the grid visible but faint
- Animate on scroll with subtle `fade-up` stagger
- Write section headings in `BARLOW CONDENSED ALL CAPS`

### ❌ Don't
- Use pure `#FFFFFF` or `#000000`
- Use purple gradients, glassmorphism, or neon glow effects
- Use `Inter`, `Roboto`, or `Arial`
- Overload with animations
- Use rounded blobs or soft organic shapes
- Make the grid too prominent

## 🔗 Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

*Design System v1.0 — CIRCUIT BLUEPRINT — Electrical & Automation Portfolio*
