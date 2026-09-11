import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant = "default" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  count?: number;
  dot?: boolean;
  max?: number;
  showZero?: boolean;
  variant?: BadgeVariant;
  children?: ReactNode;
}

// Status fills are theme-invariant, so they are darkened once (not per theme) to
// clear 7:1 against the fixed white numeral. `default` is neutral ink — the
// brand keeps status colour for real product state only.
const variantClass: Record<BadgeVariant, string> = {
  default: "bg-ink text-paper",
  success: "bg-[color-mix(in_srgb,var(--su-success)_45%,black)] text-on-action",
  warning: "bg-[color-mix(in_srgb,var(--su-warning)_45%,black)] text-on-action",
  danger: "bg-[color-mix(in_srgb,var(--su-danger)_45%,black)] text-on-action",
};

// A dot carries no text, so it keeps the full-strength status hue.
const dotClass: Record<BadgeVariant, string> = {
  default: "bg-ink",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

const chipClass =
  "inline-flex items-center justify-center min-w-[18px] h-[18px] px-[5px] font-mono text-[11px] leading-none font-semibold tracking-[var(--su-tracking-label)]";

export function Badge({
  count,
  dot = false,
  max = 99,
  showZero = false,
  variant = "default",
  className,
  children,
  title,
  ...rest
}: BadgeProps) {
  const show = dot || (count !== undefined && (showZero || count > 0));
  const label = count !== undefined && count > max ? `${max}+` : count;

  const chip = show ? (
    <span
      className={cn(
        chipClass,
        dot ? cn("min-w-2 w-2 h-2 p-0", dotClass[variant]) : variantClass[variant],
        children
          ? "absolute top-0 right-0 translate-x-[40%] -translate-y-[40%]"
          : undefined,
      )}
      aria-hidden={dot}
      title={dot ? undefined : (title ?? (label === undefined ? undefined : String(label)))}
    >
      {!dot && label}
    </span>
  ) : null;

  // No children: nothing to overlay, so the chip sits in normal flow.
  if (!children) {
    return (
      <span className={cn("inline-flex", className)} {...rest}>
        {chip}
      </span>
    );
  }

  return (
    <span className={cn("relative inline-flex", className)} {...rest}>
      {children}
      {chip}
    </span>
  );
}
