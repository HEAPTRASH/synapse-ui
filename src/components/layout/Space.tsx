import { Children, forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import {
  ALIGN_CLASS as ALIGN,
  GAP_CLASS as GAP,
  SIZE_PRESET as SIZE,
  space as spacing,
} from "../../utils/space";

/**
 * A gap: a space-scale STEP as a number (`3` → `--su-space-3` → 12px), one of
 * the three presets, or a raw CSS length string (`"1.5rem"`, `"clamp(…)"`).
 */
export type SpaceSize = number | "small" | "middle" | "large" | (string & {});

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between items. `[horizontal, vertical]` gives a wrapped row a different
   * row gap than column gap (axis order matches Ant Design).
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /** Legacy spelling of `orientation` — collides with ConfigProvider's ltr/rtl `direction`. */
  direction?: "horizontal" | "vertical";
  /** Main axis. Wins over `direction`. */
  orientation?: "horizontal" | "vertical";
  /** Sugar for `orientation="vertical"`. Wins over both spellings. */
  vertical?: boolean;
  align?:
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | (string & {});
  /** Wrap items onto multiple lines. Horizontal only, as in Ant Design. */
  wrap?: boolean;
  /** Node rendered BETWEEN items (never after the last), e.g. `<Divider orientation="vertical" />`. Decorative: hidden from assistive tech. */
  separator?: ReactNode;
  /** Fill the parent (`display: flex; width: 100%`) instead of shrink-wrapping. */
  block?: boolean;
  children?: ReactNode;
}

/** Preset → step, raw string → itself, number → step. */
const resolve = (s: SpaceSize): number | string =>
  typeof s === "number" ? s : (SIZE[s] ?? s);
const toCss = (s: number | string) => (typeof s === "number" ? spacing(s) : s);

/**
 * Spacing primitive: one flex container with a `gap`, no per-child wrappers.
 * A long unbreakable child overflows rather than shrinking — that is the
 * child's call (`min-w-0` / `truncate` on it), not the container's.
 */
export const Space = forwardRef<HTMLDivElement, SpaceProps>(function Space(
  {
    size = "middle",
    direction = "horizontal",
    orientation,
    vertical,
    align,
    wrap = false,
    separator,
    block = false,
    className,
    children,
    style,
    ...rest
  },
  ref,
) {
  const isVertical = vertical ?? (orientation ?? direction) === "vertical";
  const [x, y] = Array.isArray(size) ? size : [size, size];
  const gapX = resolve(x);
  const gapY = resolve(y);
  const uniform = gapX === gapY;
  // A single on-scale step becomes a utility so `className` can override it.
  const gapClass = uniform && typeof gapX === "number" ? GAP[gapX] : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        block ? "flex w-full" : "inline-flex",
        isVertical && "flex-col",
        align ? ALIGN[align] : isVertical ? "items-start" : "items-center",
        wrap && !isVertical && "flex-wrap",
        gapClass,
        className,
      )}
      style={{
        gap: gapClass || !uniform ? undefined : toCss(gapX),
        columnGap: uniform ? undefined : toCss(gapX),
        rowGap: uniform ? undefined : toCss(gapY),
        alignItems: align && !ALIGN[align] ? align : undefined,
        // style wins over the props above, matching Flex/Grid.
        ...style,
      }}
      {...rest}
    >
      {separator == null
        ? children
        : Children.toArray(children).flatMap((child, i) =>
            i === 0
              ? [child]
              : [
                  // `contents` keeps the separator itself the flex item, so a
                  // `<Divider orientation="vertical">` still self-stretches.
                  <span key={`sep-${i}`} aria-hidden="true" className="contents">
                    {separator}
                  </span>,
                  child,
                ],
          )}
    </div>
  );
});
