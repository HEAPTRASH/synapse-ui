import {
  Children,
  forwardRef,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import { space } from "../../utils/space";

export interface MasonryProps extends HTMLAttributes<HTMLDivElement> {
  /** Column count. Clamped to a whole number >= 1. */
  columns?: number;
  /**
   * Floor for a column's width. Below it the grid drops columns instead of
   * squeezing them, so `columns` becomes a maximum rather than a fixed count.
   * A number is pixels; a string is any CSS length. Container-driven — no
   * media query, so it works in a sidebar as well as at full width.
   */
  minColumnWidth?: number | string;
  /** Spacing token step (0–10, 12, 16); any other number is used as pixels. `[x, y]` for separate gutters. */
  gap?: number | [number, number];
  /** Extra classes for the measured wrapper around each child. */
  itemClassName?: string;
  children?: ReactNode;
}

const px = (v: number | string) => (typeof v === "number" ? `${v}px` : v);

/**
 * Real masonry: items run in reading order and each one packs against whatever
 * sits above it. CSS multi-column looks similar but orders items *down* each
 * column, and native `grid-lanes` isn't in any stable browser yet — so the grid
 * is given 0px rows and each item spans as many of them as it is tall.
 *
 * Consequences of the technique, all load-bearing:
 * - `row-gap` is pinned to 1px (it *is* the measurement unit) and `grid-auto-rows`
 *   to 0px. Set spacing with the `gap` prop, never a `gap-*` class or `style`;
 *   both are marked important / applied after `style` so a stray utility can't win.
 * - Each child is wrapped in a measured `div`, so `Masonry` can't be the direct
 *   parent of `li` elements and `> *` selectors see the wrapper, not the child.
 *   Use `itemClassName` to reach it.
 */
export const Masonry = forwardRef<HTMLDivElement, MasonryProps>(function Masonry(
  { columns = 3, minColumnWidth, gap = 3, className, itemClassName, style, children, ...rest },
  ref,
) {
  const root = useRef<HTMLDivElement | null>(null);
  const cols = Math.max(1, Math.trunc(columns) || 1);
  const [gapX, gapY] = Array.isArray(gap) ? gap : [gap, gap];
  const items = Children.toArray(children);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const layout = () => {
      const rowGap = parseFloat(getComputedStyle(el).getPropertyValue("--su-masonry-rg")) || 0;
      // Read every height first, then write every span: interleaving the two
      // forces one synchronous reflow per item.
      const kids = [...el.children] as HTMLElement[];
      // A span of N puts the next item N px lower (N × 0px rows + N × 1px gaps), so N = height + gap.
      const spans = kids.map((item) => Math.max(1, item.offsetHeight + Math.round(rowGap)));
      kids.forEach((item, i) => {
        item.style.gridRowEnd = `span ${spans[i]}`;
      });
    };

    layout();
    // Re-pack when the container *width* changes or any item's own content
    // changes height (late-loading images, expanding text). Height is this
    // component's own output, so watching it would feed the observer itself.
    let lastWidth = el.getBoundingClientRect().width;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target !== el) continue;
        if (entry.contentRect.width === lastWidth) return;
        lastWidth = entry.contentRect.width;
      }
      layout();
    });
    observer.observe(el);
    // The wrapper is `align-self: start`, so it hugs its content and its own
    // height is a fixed point — safe to observe even though we write its span.
    for (const item of el.children) observer.observe(item);
    return () => observer.disconnect();
  }, [items.length, cols, gapX, gapY, minColumnWidth]);

  return (
    <div
      {...rest}
      ref={(node) => {
        root.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className={cn(
        // 0px rows + 1px row-gap: span from measured height packs under neighbour.
        "grid w-full items-start !auto-rows-[0px] !gap-y-px",
        className,
      )}
      style={
        {
          ...style,
          gridTemplateColumns: minColumnWidth
            ? `repeat(auto-fill, minmax(max(${px(minColumnWidth)}, calc((100% - ${cols - 1} * ${space(gapX)}) / ${cols})), 1fr))`
            : `repeat(${cols}, minmax(0, 1fr))`,
          columnGap: space(gapX),
          "--su-masonry-rg": space(gapY),
          // Every item's span includes a trailing gap, so the grid ends one gap
          // below its last item. Pull that phantom row back off.
          marginBottom: items.length ? `calc(${space(gapY)} * -1)` : undefined,
        } as CSSProperties
      }
    >
      {items.map((child, i) => (
        <div key={(child as { key?: string | null }).key ?? i} className={cn("min-w-0", itemClassName)}>
          {child}
        </div>
      ))}
    </div>
  );
});
