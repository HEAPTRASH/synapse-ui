/** Steps that exist in tokens.css (4px grid). */
const STEPS = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16]);

/**
 * Spacing token for a scale step: `space(3)` → 12px via `--su-space-3`.
 * On-scale steps (0–10, 12, 16) fall back to `step * 4` px if tokens.css is
 * missing; any other number is taken as raw pixels, so the function stays
 * monotonic instead of collapsing step 11 to 11px next to step 10's 48px.
 */
export const space = (step: number) =>
  STEPS.has(step) ? `var(--su-space-${step}, ${step * 4}px)` : `${step}px`;

/** The three named gaps, in scale steps. Shared by `Space` and `Flex`. */
export const SIZE_PRESET: Record<string, number> = { small: 2, middle: 3, large: 4 };

/**
 * Enumerated prop values become utility classes so `className` (and its
 * `md:`/`motion-reduce:` variants) can override them; anything missing from a
 * table falls back to inline style, since Uno only sees literal strings.
 * Steps outside `uno.config` theme.spacing use literal arbitrary classes.
 */
export const GAP_CLASS: Record<number, string> = {
  0: "gap-0",
  1: "gap-su1",
  2: "gap-su2",
  3: "gap-su3",
  4: "gap-su4",
  5: "gap-su5",
  6: "gap-su6",
  7: "gap-[var(--su-space-7)]",
  8: "gap-su8",
  9: "gap-[var(--su-space-9)]",
  10: "gap-[var(--su-space-10)]",
  12: "gap-[var(--su-space-12)]",
  16: "gap-[var(--su-space-16)]",
};

export const ALIGN_CLASS: Record<string, string> = {
  start: "items-start",
  "flex-start": "items-start",
  center: "items-center",
  end: "items-end",
  "flex-end": "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
};
