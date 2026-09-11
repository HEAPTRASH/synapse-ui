import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface TimelineItem {
  title?: ReactNode;
  description?: ReactNode;
  dot?: ReactNode;
  color?: "default" | "accent" | "success" | "warning" | "danger";
}

export interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
  pending?: ReactNode;
}

const dotColor: Record<NonNullable<TimelineItem["color"]>, string> = {
  default: "bg-label-tertiary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

export function Timeline({ items, pending, className, ...rest }: TimelineProps) {
  return (
    <ol className={cn("m-0 p-0 list-none", className)} {...rest}>
      {items.map((item, i) => (
        <li
          key={i}
          className="relative flex gap-su3 pb-su4 not-last:before:(content-[''] absolute start-[5px] top-[14px] bottom-0 w-0.5 bg-separator)"
        >
          <div
            aria-hidden="true"
            className={cn(
              "z-[1] shrink-0 size-3 mt-1 rounded-none",
              dotColor[item.color ?? "default"],
            )}
          >
            {item.dot}
          </div>
          <div className="flex-1 min-w-0">
            {item.title ? (
              <div className="text-body font-medium text-label">
                {item.title}
              </div>
            ) : null}
            {item.description ? (
              <div className="mt-su1 text-footnote text-label-secondary">
                {item.description}
              </div>
            ) : null}
          </div>
        </li>
      ))}
      {pending ? (
        <li className="relative flex gap-su3 pb-su4">
          <div
            aria-hidden="true"
            className="z-[1] shrink-0 size-3 mt-1 rounded-none bg-transparent border-2 border-dashed border-separator"
          />
          <div className="flex-1 min-w-0">{pending}</div>
        </li>
      ) : null}
    </ol>
  );
}
