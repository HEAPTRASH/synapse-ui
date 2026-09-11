# Synapse UI Design Language

SynapseWare brand language for product UI. Source of truth: `synapseware-web/DESIGN.md` (edition 2.1) and `docs/brand-guide.html`. Values are exact.

A technical surface with light moving through it: statement type in Geist, warehouse codes in Martian Mono, square corners, hairline rules, and one deep-blue action colour.

## Principles

1. **Content first** — Words and data carry the screen. Chrome recedes.
2. **Colour is scarce** — Deep blue (`#1D4ED8`) is the one action on a screen: primary button fill, links, and focus. Nothing else borrows it.
3. **Square everywhere** — Buttons, panels, frames, focus rings. There is no radius token that rounds.
4. **Depth from rules, not shadows** — Hairlines and the nav material. No elevation shadows.

## Layer model

| Layer | Role | Materials |
| --- | --- | --- |
| **Content** | Pages, lists, forms, data | Paper / canvas (`Surface`), bay rules |
| **Functional (material)** | Nav, sticky chrome | `Glass` → brand `material` blur only |

**Rules**

- Do not put material blur in the content layer.
- Do not stack translucent panels.
- Prefer hairline top rules (bays) over filled cards.

## Colour

Design to **semantic roles**, not raw hex. Tokens use the `--su-*` prefix.

### Brand ramp

| Token | Hex | Use |
| --- | --- | --- |
| `--su-navy` | `#0F2971` | Depth; on-hand on light |
| `--su-blue-deep` / `--su-action` | `#1D4ED8` | Primary action fill; links/focus on light |
| `--su-blue` | `#3B82F6` | Links/focus on dark; action edge on dark |
| `--su-cyan` / `--su-teal` / `--su-mint` | brand | Fields, beam, slot states — not body text on light |

### Light / dark roles

- Paper / canvas / ink / ink-2 / ink-3 / rule / rule-strong
- Accent, action, action-edge, on-action, beam, material
- Slot states: free → receiving → on hand → allocated → picking → counted

## Typography

- **Geist** for UI copy. Weights 400, 500, 600. Tracking tightens as size grows (−0.035em display, −0.02em headings).
- **Martian Mono** for codes, labels, specs. Labels use wide stretch (`112.5%`) and ~0.04em tracking; dense data uses the narrow cut.
- Self-host both as woff2 (`font-display: swap`). Do not load from Google Fonts servers.
- Scale (px): 11 · 13 · 15 · 17 · 22 · 32 · 48 · 72 · 104.

## Layout

- Spacing scale: 4px base (`--su-space-*`), prefer 8px multiples.
- Minimum hit target: **44×44**. Buttons are **48px** tall (`--su-control-lg` / `--su-button-height`).
- Corners: square. Corner ticks (8px L) mark an edge without a box when needed.
- Shadow: none.

## Controls

- **Primary (scan):** action fill, inset action-edge, end cell with slot; beam sweep + stepped slot fill on hover/focus. One per view when possible. On `(hover: none)`, drop the cell and rely on press colour.
- **Secondary (frame):** canvas ground, ink label; hover/focus invert to ink/paper. Press uses action. On touch, start inverted.
- **Ghost:** quiet product control — ink-2 label, soft fill on hover. No arrow.
- **Text:** accent link style for inline actions; underline on hover; `arrow` opt-in for marketing CTAs.
- **Bay (Card default):** no fill, no box, no shadow — `rule-strong` top hairline, mono header, optional slot swatch.

## Materials

Web v1 = CSS:

1. `material` tint at 72%
2. `backdrop-filter: saturate(180%) blur(20px)`
3. Hairline `rule` border

No specular chrome rims. `prefers-reduced-transparency` → opaque paper/canvas fallback.

## Motion

Short and exact. Expo-out for entrances; scan easing for the beam; `steps(4)` for slot fills. Honor `prefers-reduced-motion` (durations collapse to 0).

## Do / Don’t

**Do**

- Keep material for sticky/floating chrome only.
- Use the brand ramp; one action colour per view.
- Maintain 44px targets and square focus (2px accent, 3px offset).
- Test light, dark, reduced transparency, high contrast, and `(hover: none)`.

**Don’t**

- Round corners or add drop shadows.
- Glass everything.
- Treat Apple system blue or SF as the brand.
- Put status greens/ambers/reds on marketing-style chrome unless they encode real product state.

## Token prefix

All CSS variables use `--su-*`. Consumers import `tokens.css` once and optionally override via `ConfigProvider` / `data-theme`.
