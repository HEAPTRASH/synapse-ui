import type { HTMLAttributes, SVGAttributes } from "react";
export type IconSize = "sm" | "md" | "lg";
/** Defaults for a bare @tabler/icons-react glyph rendered outside <Icon> — instrument stroke, square joins */
export declare const iconDefaults: {
    stroke: number;
    strokeLinejoin: "miter";
    strokeLinecap: "square";
};
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * `sm` 16 / `md` 20 / `lg` 24, or `inherit` to track the surrounding font-size (1em).
     * A `size-*` / `w-*` / `h-*` class in `className` wins instead (the built-in class is
     * dropped), because `cn()` does not resolve conflicts and UnoCSS decides the order.
     */
    size?: IconSize | "inherit";
    /** Accessible name. Omit for decorative icons — they are `aria-hidden` by default. */
    label?: string;
}
export interface SvgIconProps extends SVGAttributes<SVGElement> {
    size?: IconSize | "inherit";
    /** Accessible name. Omit for decorative icons — they are `aria-hidden` by default. */
    label?: string;
}
/**
 * Icon box. Sizes its child SVG, normalises its stroke, and stays out of the way of colour.
 *
 * Presentational only — for a clickable icon use `<Button>`, which supplies the 44px hit
 * target, the focus ring and the keyboard path.
 */
export declare function Icon({ size, className, children, label, ...rest }: IconProps): import("react").JSX.Element;
/** Stroke SVG shell aligned with Tabler / SynapseWare instrument icons */
export declare function SvgIcon({ size, className, children, label, ...rest }: SvgIconProps): import("react").JSX.Element;
//# sourceMappingURL=Icon.d.ts.map