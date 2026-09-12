import type { CSSProperties, ElementType, HTMLAttributes } from "react";
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
/**
 * Flex container. Children default to `min-width: auto`, so add
 * `className="min-w-0"` to any child that must truncate instead of overflowing.
 */
export declare const Flex: import("react").ForwardRefExoticComponent<FlexProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Flex.d.ts.map