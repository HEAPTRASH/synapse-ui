import type { HTMLAttributes, Ref } from "react";
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
export declare function Row({ gutter, className, style, ...rest }: RowProps): import("react").JSX.Element;
export declare function Col({ span, offset, className, style, ...rest }: ColProps): import("react").JSX.Element;
export declare const Grid: {
    Row: typeof Row;
    Col: typeof Col;
};
//# sourceMappingURL=Grid.d.ts.map