import { forwardRef } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type SurfaceTone =
  | "system"
  | "systemSecondary"
  | "systemTertiary"
  | "grouped"
  | "groupedSecondary"
  | "groupedTertiary"
  | "fill"
  | "fillSecondary"
  | "fillTertiary"
  | "fillQuaternary";

export type SurfaceRadius = "none" | "sm" | "md" | "lg" | "xl";
export type SurfaceElevation = "none" | "1" | "2";

export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  tone?: SurfaceTone;
  /** Kept for API; brand is square (always 0). */
  radius?: SurfaceRadius;
  elevation?: SurfaceElevation;
  children?: ReactNode;
}

const toneClass: Record<SurfaceTone, string> = {
  system: "bg-[var(--su-bg)] text-label",
  systemSecondary: "bg-[var(--su-bg-secondary)] text-label",
  systemTertiary: "bg-[var(--su-bg-tertiary)] text-label",
  grouped: "bg-[var(--su-bg-grouped)] text-label",
  groupedSecondary: "bg-[var(--su-bg-grouped-secondary)] text-label",
  groupedTertiary: "bg-[var(--su-bg-grouped-tertiary)] text-label",
  fill: "bg-fill text-label",
  fillSecondary: "bg-fill-secondary text-label",
  fillTertiary: "bg-fill-tertiary text-label",
  fillQuaternary: "bg-fill-quaternary text-label",
};

/** Depth is hairline rules, never shadow: 1 = rule, 2 = rule-strong. */
const elevationClass: Record<Exclude<SurfaceElevation, "none">, string> = {
  "1": "border border-rule",
  "2": "border border-rule-strong",
};

/** Content-layer surface. Prefer this over Glass for page content. */
export const Surface = forwardRef<HTMLElement, SurfaceProps>(function Surface(
  {
    as: Comp = "div",
    tone = "system",
    radius: _radius = "none",
    elevation = "none",
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <Comp
      ref={ref}
      // Native <button>/<input> would otherwise submit and round on iOS.
      type={Comp === "button" ? "button" : undefined}
      className={cn(
        "rounded-none",
        toneClass[tone],
        elevation !== "none" && elevationClass[elevation],
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
});
