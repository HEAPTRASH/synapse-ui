import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type ResultStatus = "success" | "error" | "info" | "warning" | "404" | "403" | "500";

export interface ResultProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  status?: ResultStatus;
  title?: ReactNode;
  subTitle?: ReactNode;
  extra?: ReactNode;
  icon?: ReactNode;
}

const statusIcon: Record<ResultStatus, string> = {
  success: "✓",
  error: "✕",
  info: "i",
  warning: "!",
  "404": "404",
  "403": "403",
  "500": "500",
};

const statusClass: Record<ResultStatus, string> = {
  success:
    "bg-[color-mix(in_srgb,var(--su-success)_15%,transparent)] text-success",
  error: "bg-[color-mix(in_srgb,var(--su-danger)_15%,transparent)] text-danger",
  info: "bg-[color-mix(in_srgb,var(--su-info)_15%,transparent)] text-info",
  warning:
    "bg-[color-mix(in_srgb,var(--su-warning)_15%,transparent)] text-warning",
  "404": "bg-fill-secondary text-label-secondary",
  "403": "bg-fill-secondary text-label-secondary",
  "500": "bg-fill-secondary text-label-secondary",
};

export function Result({
  status = "info",
  title,
  subTitle,
  extra,
  icon,
  children,
  className,
  ...rest
}: ResultProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center py-su8 px-su4",
        className,
      )}
      {...rest}
    >
      <div
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center size-[72px] rounded-none text-title-2 font-semibold",
          /^\d/.test(status) && "font-mono tabular-nums",
          statusClass[status],
        )}
      >
        {icon ?? statusIcon[status]}
      </div>
      {title ? (
        <div className="mt-su4 text-title-3 font-semibold text-label max-w-full [overflow-wrap:anywhere]">
          {title}
        </div>
      ) : null}
      {subTitle ? (
        <div className="mt-su2 max-w-[480px] text-subhead text-label-secondary [overflow-wrap:anywhere]">
          {subTitle}
        </div>
      ) : null}
      {extra ? <div className="mt-su5">{extra}</div> : null}
      {children ? <div className="mt-su4 w-full">{children}</div> : null}
    </div>
  );
}
