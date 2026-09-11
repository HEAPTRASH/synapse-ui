import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type TagColor = "default" | "accent" | "success" | "warning" | "danger";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  color?: TagColor;
  closable?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const colorClass: Record<TagColor, string | undefined> = {
  default: undefined,
  accent: "bg-accent-soft text-accent",
  success:
    "bg-[color-mix(in_srgb,var(--su-success)_15%,transparent)] text-success",
  warning:
    "bg-[color-mix(in_srgb,var(--su-warning)_15%,transparent)] text-warning",
  danger: "bg-[color-mix(in_srgb,var(--su-danger)_15%,transparent)] text-danger",
};

export function Tag({
  color = "default",
  closable = false,
  onClose,
  className,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-su1 px-su2 rounded-none text-caption-1 font-medium bg-canvas text-label",
        // A closable tag grows to the 44px hit target instead of letting the
        // close button's invisible box spill over neighbouring tags.
        closable
          ? "py-0 pr-0 min-h-[var(--su-hit-target)]"
          : "py-su1",
        colorClass[color],
        className,
      )}
      {...rest}
    >
      {children}
      {closable ? (
        <button
          type="button"
          className="inline-flex items-center justify-center shrink-0 self-stretch p-0 min-w-[var(--su-hit-target)] bg-transparent text-inherit text-[14px] leading-none cursor-pointer su-focus-ring"
          onClick={onClose}
          aria-label={
            typeof children === "string" ? `Remove ${children}` : "Remove tag"
          }
        >
          <span aria-hidden="true">×</span>
        </button>
      ) : null}
    </span>
  );
}
