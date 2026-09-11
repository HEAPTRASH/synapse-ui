import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { dismissButtonClass, toneBorderClass, toneTextClass, type FeedbackTone } from "./shared";

export type NotificationType = FeedbackTone;

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  type?: NotificationType;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
}

const defaultIcon: Record<NotificationType, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕",
};

export function Notification({
  type = "info",
  title,
  description,
  icon,
  action,
  onClose,
  className,
  children,
  ...rest
}: NotificationProps) {
  return (
    <div
      className={cn(
        "flex gap-su3 p-su4 rounded-none bg-paper shadow-none border border-solid border-rule border-t-rule-strong",
        toneBorderClass[type],
        className,
      )}
      role={type === "error" ? "alert" : "status"}
      {...rest}
    >
      <div className={cn("shrink-0", toneTextClass[type])} aria-hidden={icon ? undefined : true}>
        {icon ?? defaultIcon[type]}
      </div>
      <div className="flex-1 min-w-0">
        {title ? (
          <div className="text-subhead font-semibold text-label">{title}</div>
        ) : null}
        {description || children ? (
          <div className="mt-su1 text-footnote text-label-secondary">
            {description ?? children}
          </div>
        ) : null}
        {action ? <div className="mt-su2">{action}</div> : null}
      </div>
      {onClose ? (
        <button
          type="button"
          className={dismissButtonClass}
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

export interface NotificationStackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function NotificationStack({ className, children, ...rest }: NotificationStackProps) {
  return (
    <div
      className={cn(
        "fixed top-su4 right-su4 z-[var(--su-z-toast)] flex flex-col gap-su3 w-[min(360px,calc(100vw-var(--su-space-8)))]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Notification.Stack = NotificationStack;
