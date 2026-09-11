import * as RadixProgress from "@radix-ui/react-progress";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

export interface ProgressProps extends ComponentPropsWithoutRef<
  typeof RadixProgress.Root
> {
  type?: "line" | "circle";
  /**
   * Circle: diameter in px (default 100). Line: bar thickness in px (default 6).
   * ponytail: one raw px number for both types, so a size meant for a circle looks
   * absurd on a line; swap for a named scale ("sm" | "md" | "lg") if that bites.
   */
  size?: number;
  /** `null` = indeterminate (unknown duration). */
  value?: number | null;
  max?: number;
  showInfo?: boolean;
  status?: "normal" | "success" | "error";
}

type Status = NonNullable<ProgressProps["status"]>;

const statusColor: Record<Status, string> = {
  normal: "var(--su-accent)",
  success: "var(--su-success)",
  error: "var(--su-danger)",
};

const statusClass: Record<Status, string> = {
  normal: "bg-accent",
  success: "bg-success",
  error: "bg-danger",
};

const infoClass = "text-footnote text-label-secondary tabular-nums";

export function Progress({
  type = "line",
  size,
  value = 0,
  max = 100,
  showInfo = false,
  status = "normal",
  className,
  ...rest
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100;
  const indeterminate = value == null;
  const safeValue = indeterminate ? null : Math.min(safeMax, Math.max(0, value));
  const pct = safeValue == null ? 0 : (safeValue / safeMax) * 100;

  if (type === "circle") {
    const diameter = size ?? 100;
    return (
      <RadixProgress.Root
        className={cn("relative", className)}
        value={safeValue}
        max={safeMax}
        style={{ width: diameter, height: diameter }}
        {...rest}
      >
        <svg viewBox="0 0 100 100" width={diameter} height={diameter} aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="var(--su-fill-secondary)"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={statusColor[status]}
            strokeWidth="6"
            strokeLinecap="square"
            pathLength="100"
            strokeDasharray={indeterminate ? "25 75" : "100"}
            strokeDashoffset={indeterminate ? 0 : 100 - pct}
            transform="rotate(-90 50 50)"
            className={
              indeterminate
                ? "origin-center animate-spin motion-reduce:animate-none"
                : undefined
            }
          />
        </svg>
        {showInfo && !indeterminate && (
          <span
            aria-hidden="true"
            className={cn("absolute inset-0 grid place-items-center", infoClass)}
          >
            {Math.round(pct)}%
          </span>
        )}
      </RadixProgress.Root>
    );
  }

  return (
    <div className={cn("flex w-full items-center gap-su3", className)}>
      <RadixProgress.Root
        className="flex-1 overflow-hidden rounded-none bg-fill-secondary"
        value={safeValue}
        max={safeMax}
        style={{ height: size ?? 6 }}
        {...rest}
      >
        {indeterminate ? (
          <div className="h-full w-full su-skeleton-active" />
        ) : (
          <RadixProgress.Indicator
            className={cn(
              "h-full rounded-none transition-[width] duration-[var(--su-duration-normal)] ease-[var(--su-ease-out)]",
              statusClass[status],
            )}
            style={{ width: `${pct}%`, transform: "none" }}
          />
        )}
      </RadixProgress.Root>
      {showInfo && !indeterminate ? (
        <span aria-hidden="true" className={cn("min-w-[36px] text-right", infoClass)}>
          {Math.round(pct)}%
        </span>
      ) : null}
    </div>
  );
}
