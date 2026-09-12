import { type HTMLAttributes, type ReactNode } from "react";
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
export declare const Masonry: import("react").ForwardRefExoticComponent<MasonryProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Masonry.d.ts.map