import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  width?: number | string;
  height?: number | string;
  /** 1:1 block sized from `height`. Corners stay square — the brand guide has no radius token. */
  circle?: boolean;
  rows?: number;
  /** When explicitly `false`, render `children` instead of the placeholder. */
  loading?: boolean;
  children?: ReactNode;
}

export function Skeleton({
  active = true,
  width,
  height = 16,
  circle = false,
  rows,
  loading,
  children,
  className,
  style,
  ...rest
}: SkeletonProps) {
  if (loading === false) return <>{children}</>;

  const block = cn(
    "rounded-none bg-fill-secondary",
    active && "su-skeleton-active",
  );
  const label = <span className="sr-only">Loading</span>;

  if (rows && rows > 1) {
    return (
      <div
        className={cn("w-full flex flex-col gap-su2", className)}
        style={style}
        role="status"
        aria-busy="true"
        {...rest}
      >
        {label}
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={block}
            // ponytail: last row at 70% stands in for per-row widths; take a width array only if a caller needs it
            style={{ width: i === rows - 1 ? "70%" : "100%", height }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(block, className)}
      style={{ width: circle ? height : width, height, ...style }}
      role="status"
      aria-busy="true"
      {...rest}
    >
      {label}
    </div>
  );
}
