import { forwardRef } from "react";
import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { ALIGN_CLASS as ALIGN, GAP_CLASS as GAP, SIZE_PRESET, space } from "../../utils/space";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex direction. `row-reverse`/`column-reverse` reorder visually only — DOM,
   * tab and screen-reader order are unchanged (WCAG 1.3.2, 2.4.3). Reorder the
   * children instead when the sequence carries meaning.
   */
  direction?: CSSProperties["flexDirection"];
  /** Sugar for `direction="column"`. An explicit `direction` wins. */
  vertical?: boolean;
  align?: CSSProperties["alignItems"];
  /**
   * `space-between` sets the MAXIMUM separation; it collapses to zero once the
   * content fills the row, so pair it with `gap` for the minimum.
   */
  justify?: CSSProperties["justifyContent"];
  /** `true` → `wrap`, `false` → `nowrap`. `wrap-reverse` reorders visually only (WCAG 1.3.2). */
  wrap?: boolean | CSSProperties["flexWrap"];
  /**
   * Gap between items. A number is a SPACE-SCALE STEP, not pixels:
   * `gap={3}` → `--su-space-3` → 12px, and `gap={16}` → 96px.
   * `"small" | "middle" | "large"` map to steps 2/3/4, as in `Space`.
   * Pass a string for raw CSS: `gap="12px"`, `gap="4px 16px"`.
   */
  gap?: number | string;
  inline?: boolean;
  /** Render as another element for real semantics (`as="nav"`, `as="ul"`). */
  as?: ElementType;
}

// ALIGN / GAP / the size presets are shared with `Space` — see utils/space.ts.
const DIRECTION: Record<string, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};
const JUSTIFY: Record<string, string> = {
  start: "justify-start",
  "flex-start": "justify-start",
  center: "justify-center",
  end: "justify-end",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
};
const WRAP: Record<string, string> = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse",
};

/**
 * Flex container. Children default to `min-width: auto`, so add
 * `className="min-w-0"` to any child that must truncate instead of overflowing.
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  {
    direction,
    vertical,
    align,
    justify,
    wrap,
    gap,
    inline = false,
    as,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const Tag = (as ?? "div") as "div";
  const dir = direction ?? (vertical ? "column" : undefined);
  const wrapValue = wrap === true ? "wrap" : wrap === false ? "nowrap" : wrap;
  const gapStep =
    typeof gap === "number"
      ? Math.max(0, gap)
      : typeof gap === "string"
        ? SIZE_PRESET[gap]
        : undefined;
  const gapClass = gapStep === undefined ? undefined : GAP[gapStep];

  return (
    <Tag
      ref={ref}
      className={cn(
        inline ? "inline-flex" : "flex",
        dir && DIRECTION[dir],
        align && ALIGN[align],
        justify && JUSTIFY[justify],
        wrapValue && WRAP[wrapValue],
        gapClass,
        className,
      )}
      style={{
        flexDirection: dir && !DIRECTION[dir] ? dir : undefined,
        alignItems: align && !ALIGN[align] ? align : undefined,
        justifyContent: justify && !JUSTIFY[justify] ? justify : undefined,
        flexWrap: wrapValue && !WRAP[wrapValue] ? wrapValue : undefined,
        gap: gapClass
          ? undefined
          : gapStep !== undefined
            ? space(gapStep)
            : typeof gap === "string"
              ? gap
              : undefined,
        // style wins over the props above, matching Space/Grid.
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});
