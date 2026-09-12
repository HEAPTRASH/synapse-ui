/**
 * Spacing token for a scale step: `space(3)` → 12px via `--su-space-3`.
 * On-scale steps (0–10, 12, 16) fall back to `step * 4` px if tokens.css is
 * missing; any other number is taken as raw pixels, so the function stays
 * monotonic instead of collapsing step 11 to 11px next to step 10's 48px.
 */
export declare const space: (step: number) => string;
/** The three named gaps, in scale steps. Shared by `Space` and `Flex`. */
export declare const SIZE_PRESET: Record<string, number>;
/**
 * Enumerated prop values become utility classes so `className` (and its
 * `md:`/`motion-reduce:` variants) can override them; anything missing from a
 * table falls back to inline style, since Uno only sees literal strings.
 * Steps outside `uno.config` theme.spacing use literal arbitrary classes.
 */
export declare const GAP_CLASS: Record<number, string>;
export declare const ALIGN_CLASS: Record<string, string>;
//# sourceMappingURL=space.d.ts.map