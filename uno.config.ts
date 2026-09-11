import {
  defineConfig,
  presetWind3,
  transformerVariantGroup,
} from "unocss";

/**
 * Synapse UI — UnoCSS theme mirrors `src/styles/tokens.css` (`--su-*`).
 * Prefer semantic utilities (`bg-paper`, `text-ink`, `border-rule`) over raw hex.
 *
 * Things that bite (found the hard way during the component sweep):
 * - `transformerVariantGroup` expands `hover:(a b)` in source files only — shortcut values below
 *   must be written flat. It also silently drops nested groups (`a:(b:(c d))`) and groups whose
 *   members carry brackets (`group-active:(bg-beam duration-[40ms])`): the raw string lands in the
 *   DOM and generates nothing. Write those flat too.
 * - `cn()` is a plain join: a caller's `className` never beats a component's own utility for the
 *   same property. Emit conditional classes as ternaries, not as overrides.
 * - The border reset lives in `src/styles/reset.css` (Tailwind-style `border-width: 0`), so a
 *   single-side `border-t border-rule` is exactly one hairline. `border-none` below is a shortcut
 *   because presetWind3 does not emit a rule for it.
 * - `aria-invalid:` needs the `theme.aria` entry below; without it the variant is inert.
 */

// 4px scale, mirrored from tokens.css. Sizing rules read their own theme keys, not `spacing`,
// so the same map is handed to width/height/min/max as well (`w-su2`, `min-h-su6`…).
const spacing = {
  su0: "var(--su-space-0)",
  su1: "var(--su-space-1)",
  su2: "var(--su-space-2)",
  su3: "var(--su-space-3)",
  su4: "var(--su-space-4)",
  su5: "var(--su-space-5)",
  su6: "var(--su-space-6)",
  su7: "var(--su-space-7)",
  su8: "var(--su-space-8)",
  su9: "var(--su-space-9)",
  su10: "var(--su-space-10)",
  su11: "var(--su-space-11)",
  su12: "var(--su-space-12)",
  su16: "var(--su-space-16)",
};

export default defineConfig({
  presets: [presetWind3()],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      paper: "var(--su-paper)",
      canvas: "var(--su-canvas)",
      ink: "var(--su-ink)",
      "ink-2": "var(--su-ink-2)",
      "ink-3": "var(--su-ink-3)",
      "ink-secondary": "var(--su-ink-2)",
      "ink-muted": "var(--su-ink-3)",
      label: "var(--su-label)",
      "label-secondary": "var(--su-label-secondary)",
      "label-tertiary": "var(--su-label-tertiary)",
      "label-quaternary": "var(--su-label-quaternary)",
      action: "var(--su-action)",
      "action-press": "var(--su-action-press)",
      "on-action": "var(--su-on-action)",
      accent: "var(--su-accent)",
      "accent-soft": "var(--su-accent-soft)",
      beam: "var(--su-beam)",
      rule: "var(--su-rule)",
      "rule-strong": "var(--su-rule-strong)",
      separator: "var(--su-separator)",
      danger: "var(--su-danger)",
      "danger-text": "var(--su-danger-text)",
      "danger-strong": "var(--su-danger-strong)",
      success: "var(--su-success)",
      "success-strong": "var(--su-success-strong)",
      warning: "var(--su-warning)",
      "warning-strong": "var(--su-warning-strong)",
      info: "var(--su-info)",
      fill: "var(--su-fill)",
      "fill-secondary": "var(--su-fill-secondary)",
      "fill-tertiary": "var(--su-fill-tertiary)",
      "fill-quaternary": "var(--su-fill-quaternary)",
      // Slot states — the brand's one motif (bay swatches, sequence steps, the spinner).
      "s-free": "var(--su-s-free)",
      "s-receiving": "var(--su-s-receiving)",
      "s-onhand": "var(--su-s-onhand)",
      "s-allocated": "var(--su-s-allocated)",
      "s-picking": "var(--su-s-picking)",
      "s-counted": "var(--su-s-counted)",
    },
    spacing,
    width: spacing,
    height: spacing,
    minWidth: spacing,
    minHeight: spacing,
    maxWidth: spacing,
    maxHeight: spacing,
    // The brand scale (11 · 13 · 15 · 17 · 19 · 22 · 32 · 48) with its own leading and tracking.
    // `text-label` is the colour role; the 11px mono size is `text-label-type`.
    fontSize: {
      "large-title": [
        "var(--su-text-large-title)",
        { "line-height": "var(--su-leading-snug)", "letter-spacing": "var(--su-tracking-tight)" },
      ],
      "title-1": [
        "var(--su-text-title-1)",
        { "line-height": "var(--su-leading-snug)", "letter-spacing": "var(--su-tracking-tight)" },
      ],
      "title-2": [
        "var(--su-text-title-2)",
        { "line-height": "var(--su-leading-normal)", "letter-spacing": "-0.01em" },
      ],
      "title-3": ["var(--su-text-title-3)", { "line-height": "var(--su-leading-normal)" }],
      headline: ["var(--su-text-headline)", { "line-height": "var(--su-leading-small)" }],
      body: ["var(--su-text-body)", { "line-height": "var(--su-leading-relaxed)" }],
      callout: ["var(--su-text-callout)", { "line-height": "var(--su-leading-small)" }],
      subhead: ["var(--su-text-subhead)", { "line-height": "var(--su-leading-small)" }],
      footnote: ["var(--su-text-footnote)", { "line-height": "var(--su-leading-small)" }],
      "caption-1": ["var(--su-text-caption-1)", { "line-height": "var(--su-leading-small)" }],
      "caption-2": ["var(--su-text-caption-2)", { "line-height": "var(--su-leading-label)" }],
      control: ["var(--su-text-control)", { "line-height": "1" }],
      "label-type": ["var(--su-text-label)", { "line-height": "var(--su-leading-label)" }],
    },
    // Square everywhere: every built-in radius step, `rounded-full` included, resolves to 0.
    borderRadius: {
      DEFAULT: "0",
      none: "0",
      sm: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
      su: "0",
    },
    fontFamily: {
      sans: "var(--su-font-sans)",
      mono: "var(--su-font-mono)",
      display: "var(--su-font-display)",
    },
    aria: {
      invalid: 'invalid="true"',
    },
    animation: {
      keyframes: {
        shimmer:
          "{0%{background-position:100% 0}100%{background-position:0 0}}",
        "su-fade-in": "{from{opacity:0}to{opacity:1}}",
        "su-rise-in":
          "{from{opacity:0;translate:0 8px}to{opacity:1;translate:0 0}}",
        "su-dropdown-in":
          "{from{opacity:0;transform:translateY(-4px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}",
        "su-slide-in":
          "{from{transform:translateX(16px)}to{transform:translateX(0)}}",
        "su-slide-in-left":
          "{from{transform:translateX(-16px)}to{transform:translateX(0)}}",
        "su-scale-in":
          "{from{opacity:0;transform:translate(-50%,-48%) scale(0.96)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}",
        // Radix Accordion sets --radix-accordion-content-height; Collapsible sets its own variable.
        "su-slide-down":
          "{from{height:0}to{height:var(--radix-accordion-content-height)}}",
        "su-slide-up":
          "{from{height:var(--radix-accordion-content-height)}to{height:0}}",
        "su-collapse-down":
          "{from{height:0}to{height:var(--radix-collapsible-content-height)}}",
        "su-collapse-up":
          "{from{height:var(--radix-collapsible-content-height)}to{height:0}}",
        "su-pop-in":
          "{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}",
        "su-tip-in":
          "{from{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}",
        // The scan button's beam: sweeps start → end, fades over the last quarter.
        "su-scan-beam":
          "{from{inset-inline-start:0;opacity:1}75%{opacity:1}to{inset-inline-start:calc(100% - 2px);opacity:0}}",
        // One lit cell walking a rack of eight: each cell is on for 1/8 of the loop, offset by animation-delay.
        "su-slot-walk": "{0%,12.5%{opacity:1}12.51%,100%{opacity:0}}",
      },
      durations: {
        shimmer: "1.4s",
        "su-fade-in": "var(--su-duration-base)",
        "su-rise-in": "var(--su-duration-base)",
        "su-dropdown-in": "var(--su-duration-fast)",
        "su-slide-in": "var(--su-duration-base)",
        "su-slide-in-left": "var(--su-duration-base)",
        "su-scale-in": "var(--su-duration-base)",
        "su-slide-down": "var(--su-duration-normal)",
        "su-slide-up": "var(--su-duration-normal)",
        "su-collapse-down": "var(--su-duration-normal)",
        "su-collapse-up": "var(--su-duration-normal)",
        "su-pop-in": "var(--su-duration-base)",
        "su-tip-in": "var(--su-duration-fast)",
        "su-scan-beam": "var(--su-duration-scan)",
        "su-slot-walk": "1120ms",
      },
      timingFns: {
        shimmer: "ease",
        "su-fade-in": "var(--su-ease-out)",
        "su-rise-in": "var(--su-ease-out)",
        "su-dropdown-in": "var(--su-ease-out)",
        "su-slide-in": "var(--su-ease-out)",
        "su-slide-in-left": "var(--su-ease-out)",
        "su-scale-in": "var(--su-ease-out)",
        "su-slide-down": "var(--su-ease-out)",
        "su-slide-up": "var(--su-ease-out)",
        "su-collapse-down": "var(--su-ease-out)",
        "su-collapse-up": "var(--su-ease-out)",
        "su-pop-in": "var(--su-ease-out)",
        "su-tip-in": "var(--su-ease-out)",
        "su-scan-beam": "var(--su-ease-scan)",
        "su-slot-walk": "var(--su-ease-step)",
      },
      counts: {
        shimmer: "infinite",
        "su-slot-walk": "infinite",
      },
    },
  },
  variants: [
    // transparency-reduce:  → @media (prefers-reduced-transparency: reduce)
    (matcher) => {
      if (!matcher.startsWith("transparency-reduce:")) return matcher;
      return {
        matcher: matcher.slice("transparency-reduce:".length),
        parent: "@media (prefers-reduced-transparency: reduce)",
      };
    },
    // forced-colors:  → @media (forced-colors: active)  (Windows High Contrast)
    (matcher) => {
      if (!matcher.startsWith("forced-colors:")) return matcher;
      return {
        matcher: matcher.slice("forced-colors:".length),
        parent: "@media (forced-colors: active)",
      };
    },
    // rtl:  → [dir="rtl"] &   (ConfigProvider sets `dir`)
    (matcher) => {
      if (!matcher.startsWith("rtl:")) return matcher;
      return {
        matcher: matcher.slice("rtl:".length),
        selector: (s) => `[dir="rtl"] ${s}`,
      };
    },
  ],
  // Shortcut values are NOT run through the variant-group transformer: keep them flat.
  shortcuts: {
    "su-hairline": "border border-rule border-solid forced-colors:border-[CanvasText]",
    "su-rule": "bg-separator forced-colors:bg-[CanvasText]",
    "su-frame": "bg-paper text-ink border border-rule border-solid rounded-none",
    // The square focus ring: 2px accent, 3px offset. Put it on anything that sets outline-none.
    "su-focus-ring":
      "outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-[var(--su-focus-ring-offset)]",
    // Mono label: 11px, wide cut, 0.04em, uppercase. Colour is the caller's (text-ink-2 for codes).
    "su-label":
      "font-mono text-label-type font-medium [font-stretch:112.5%] tracking-[var(--su-tracking-label)] uppercase",
    // Floating surface for menus, listboxes and popovers.
    "su-popover":
      "z-[var(--su-z-dropdown)] p-su1 font-sans rounded-none border border-solid border-rule-strong bg-paper shadow-none",
    // 32px visible, 44px to press: a centred pseudo-element carries the hit slop.
    "su-hit-44":
      "relative [&::after]:content-empty [&::after]:absolute [&::after]:left-1/2 [&::after]:top-1/2 [&::after]:-translate-x-1/2 [&::after]:-translate-y-1/2 [&::after]:w-[var(--su-hit-target)] [&::after]:h-[var(--su-hit-target)]",
    "su-no-spinner":
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0",
    "border-none": "[border-style:none]",
    "su-skeleton-active":
      "bg-[linear-gradient(90deg,var(--su-fill-secondary)_25%,var(--su-fill-quaternary)_37%,var(--su-fill-secondary)_63%)] bg-[length:400%_100%] animate-shimmer motion-reduce:animate-none",
    "su-overlay":
      "fixed inset-0 z-[var(--su-z-overlay)] bg-[rgba(10,12,18,0.45)] animate-su-fade-in motion-reduce:animate-none",
    // Lightbox strength: content behind is suppressed so white-on-scrim copy keeps contrast.
    "su-overlay-strong":
      "fixed inset-0 z-[var(--su-z-overlay)] bg-[rgba(10,12,18,0.88)] animate-su-fade-in motion-reduce:animate-none",
    // Hairline rim for the nav material; the tokens already lift it under prefers-contrast.
    "su-chrome": "shadow-[0_0_0_1px_var(--su-chrome-border)]",
    "su-chrome-strong": "shadow-[0_0_0_1px_var(--su-chrome-border-outer)]",
  },
  // Scan library + playground for class generation during dev/build
  content: {
    filesystem: [
      "src/**/*.{ts,tsx}",
      "playground/**/*.{ts,tsx}",
    ],
  },
});
