import type { HTMLAttributes, SVGAttributes } from "react";
import { cn } from "../../utils/cn";

export type IconSize = "sm" | "md" | "lg";

/** Defaults for a bare @tabler/icons-react glyph rendered outside <Icon> — instrument stroke, square joins */
export const iconDefaults = {
  stroke: 1.5,
  strokeLinejoin: "miter" as const,
  strokeLinecap: "square" as const,
};

/**
 * One table for the scale. `stroke` is a user-space value in a 24 viewBox, so the
 * rendered hairline is `stroke × px / 24` — 1.25px at every step, which is what
 * "a consistent stroke at every size" means. Class strings stay literal so the
 * UnoCSS scanner finds them.
 */
const SIZES = {
  sm: { box: "size-4", stroke: 1.875, strokeClass: "[&>svg]:[stroke-width:1.875]" },
  md: { box: "size-5", stroke: 1.5, strokeClass: "[&>svg]:[stroke-width:1.5]" },
  lg: { box: "size-6", stroke: 1.25, strokeClass: "[&>svg]:[stroke-width:1.25]" },
  inherit: { box: "size-[1em]", stroke: 1.5, strokeClass: "[&>svg]:[stroke-width:1.5]" },
} satisfies Record<IconSize | "inherit", { box: string; stroke: number; strokeClass: string }>;

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

/** Hidden unless something actually names it — `label`, or an aria prop passed through. */
function ariaFor(
  label: string | undefined,
  rest: { "aria-label"?: string; "aria-labelledby"?: string },
) {
  const named = label ?? rest["aria-label"] ?? rest["aria-labelledby"];
  return {
    role: named ? ("img" as const) : undefined,
    "aria-label": label,
    "aria-hidden": named ? undefined : (true as const),
  };
}

const ownSizeRe = /(?:^|\s)!?(?:size|w|h|min-w|min-h|max-w|max-h)-/;

/**
 * Icon box. Sizes its child SVG, normalises its stroke, and stays out of the way of colour.
 *
 * Presentational only — for a clickable icon use `<Button>`, which supplies the 44px hit
 * target, the focus ring and the keyboard path.
 */
export function Icon({ size = "md", className, children, label, ...rest }: IconProps) {
  // ponytail: a `size-*`/`w-*`/`h-*` in className drops the built-in size AND its stroke class,
  // so a custom-sized icon keeps its own stroke. Add a numeric `size` prop if that ever bites.
  const ownSize = ownSizeRe.test(className ?? "");
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center [vertical-align:-0.125em]",
        // ponytail: CSS beats SVG presentation attributes, so a child that deliberately set a
        // different stroke must use a class or style to win. Fine for Tabler/inline glyphs.
        "[&>svg]:block [&>svg]:size-full [&>svg]:[stroke-linecap:square] [&>svg]:[stroke-linejoin:miter]",
        "contrast-more:[&>svg]:[stroke-width:2]",
        !ownSize && SIZES[size].box,
        !ownSize && SIZES[size].strokeClass,
        className,
      )}
      {...ariaFor(label, rest)}
      {...rest}
    >
      {children}
    </span>
  );
}

/** Stroke SVG shell aligned with Tabler / SynapseWare instrument icons */
export function SvgIcon({ size = "md", className, children, label, ...rest }: SvgIconProps) {
  return (
    <svg
      className={cn(
        "block shrink-0 contrast-more:[stroke-width:2]",
        ownSizeRe.test(className ?? "") ? undefined : SIZES[size].box,
        className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={SIZES[size].stroke}
      strokeLinecap={iconDefaults.strokeLinecap}
      strokeLinejoin={iconDefaults.strokeLinejoin}
      {...ariaFor(label, rest)}
      {...rest}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  );
}
