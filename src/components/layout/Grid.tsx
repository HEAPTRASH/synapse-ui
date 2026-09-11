import type { CSSProperties, HTMLAttributes, Ref } from "react";
import { cn } from "../../utils/cn";
import { space } from "../../utils/space";

const TOTAL_COLS = 24;

/** A number is a space-scale step; a string is used verbatim as a CSS length. */
const len = (g: number | string) => (typeof g === "number" ? space(g) : g);

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal (and vertical, when a tuple) gutter between columns.
   * A number is a SPACE-SCALE STEP, not pixels: `gutter={3}` → `--su-space-3`
   * → 12px, and `gutter={16}` → 96px. Pass a string for raw CSS units
   * (`gutter="16px"`, `gutter="var(--su-space-4)"`).
   *
   * A gutter pulls the Row half a gutter past its parent on each side (so the
   * outer edges stay flush with surrounding content) — place it inside a
   * padded container or the page gains a horizontal scrollbar.
   */
  gutter?: number | string | [number | string, number | string];
  /** React 19 forwards `ref` as an ordinary prop through `{...rest}`. */
  ref?: Ref<HTMLDivElement>;
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /** Columns spanned, out of 24. `0` hides the column (`display: none`). */
  span?: number;
  /** Columns of empty space before this one. Logical, so it flips under RTL. */
  offset?: number;
  /** React 19 forwards `ref` as an ordinary prop through `{...rest}`. */
  ref?: Ref<HTMLDivElement>;
}

export function Row({ gutter = 0, className, style, ...rest }: RowProps) {
  const [gx, gy] = Array.isArray(gutter) ? gutter : [gutter, gutter];

  return (
    <div
      // `flex-wrap` before `className` so a consumer's `flex-nowrap`,
      // `items-*`/`justify-*` (including `md:` variants) win.
      className={cn("flex flex-wrap", className)}
      style={
        {
          // Always written — even "0px" — so a nested Row resets the
          // inherited gutter instead of doubling it.
          "--su-grid-pad-x": gx ? `calc(${len(gx)} / 2)` : "0px",
          marginInline: gx ? `calc(${len(gx)} / -2)` : undefined,
          // Vertical gutter is row-gap, not padding: it applies only BETWEEN
          // wrapped lines, so the Row is never taller than its content.
          rowGap: gy ? len(gy) : undefined,
          ...style,
        } as CSSProperties
      }
      {...rest}
    />
  );
}

export function Col({
  span = TOTAL_COLS,
  offset = 0,
  className,
  style,
  ...rest
}: ColProps) {
  return (
    <div
      // Width lives in classes (not inline style) so callers can override it
      // responsively from `className`: `md:(basis-1/2 max-w-1/2)`, or
      // `grow basis-auto max-w-none` for a fluid column.
      className={cn(
        "box-border min-w-0 grow-0 shrink-0 px-[var(--su-grid-pad-x,0)]",
        "basis-[calc(var(--su-col-span)/24*100%)] max-w-[calc(var(--su-col-span)/24*100%)]",
        offset > 0 && "ms-[calc(var(--su-col-offset)/24*100%)]",
        span === 0 && "hidden",
        className,
      )}
      style={
        {
          "--su-col-span": span,
          "--su-col-offset": offset || undefined,
          ...style,
        } as CSSProperties
      }
      {...rest}
    />
  );
}

// ponytail: no `xs`/`sm`/`md`… props, no `flex`/`order`/`push`/`pull`, no
// `useBreakpoint()`. Now that nothing is locked in an inline style, all of it
// is one utility class away (`md:basis-1/2`, `order-2`, `grow`). Add the props
// only if a real caller needs them computed at runtime.
export const Grid = { Row, Col };
