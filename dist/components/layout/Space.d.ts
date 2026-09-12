import type { HTMLAttributes, ReactNode } from "react";
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
    align?: "start" | "end" | "center" | "baseline" | "stretch" | "flex-start" | "flex-end" | (string & {});
    /** Wrap items onto multiple lines. Horizontal only, as in Ant Design. */
    wrap?: boolean;
    /** Node rendered BETWEEN items (never after the last), e.g. `<Divider orientation="vertical" />`. Decorative: hidden from assistive tech. */
    separator?: ReactNode;
    /** Fill the parent (`display: flex; width: 100%`) instead of shrink-wrapping. */
    block?: boolean;
    children?: ReactNode;
}
/**
 * Spacing primitive: one flex container with a `gap`, no per-child wrappers.
 * A long unbreakable child overflows rather than shrinking — that is the
 * child's call (`min-w-0` / `truncate` on it), not the container's.
 */
export declare const Space: import("react").ForwardRefExoticComponent<SpaceProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Space.d.ts.map