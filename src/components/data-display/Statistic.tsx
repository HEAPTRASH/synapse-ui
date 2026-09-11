import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface StatisticProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "prefix"> {
  title?: ReactNode;
  value?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  description?: ReactNode;
}

const affixClass = "text-subhead text-label-secondary shrink-0";

export function Statistic({
  title,
  value,
  prefix,
  suffix,
  description,
  className,
  ...rest
}: StatisticProps) {
  return (
    <div className={cn("flex flex-col gap-su1", className)} {...rest}>
      {title ? (
        <div className="text-footnote text-label-secondary">{title}</div>
      ) : null}
      <div className="flex items-baseline gap-su1 min-w-0">
        {prefix ? <span className={affixClass}>{prefix}</span> : null}
        <span className="min-w-0 break-words text-title-2 leading-[var(--su-leading-tight)] font-semibold text-label tabular-nums">
          {value}
        </span>
        {suffix ? <span className={affixClass}>{suffix}</span> : null}
      </div>
      {description ? (
        <div className="text-caption-1 text-label-tertiary">{description}</div>
      ) : null}
    </div>
  );
}
