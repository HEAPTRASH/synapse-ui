import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";
import type { ComponentType, HTMLAttributes, ReactNode } from "react";
import { Button } from "../general/Button";
import { iconDefaults } from "../general/Icon";
import { cn } from "../../utils/cn";
import { toneBorderClass, toneTextClass, type FeedbackTone } from "./shared";

export type AlertType = FeedbackTone;

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  type?: AlertType;
  title?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  /** Show the per-type status glyph, so state isn't carried by colour alone. */
  showIcon?: boolean;
  /** Custom glyph; implies `showIcon`. */
  icon?: ReactNode;
  children?: ReactNode;
}

const GLYPHS: Record<AlertType, ComponentType<{ size?: number }>> = {
  info: IconInfoCircle,
  success: IconCircleCheck,
  warning: IconAlertTriangle,
  error: IconCircleX,
};

export function Alert({
  type = "info",
  title,
  closable = false,
  onClose,
  showIcon = false,
  icon,
  className,
  children,
  ...rest
}: AlertProps) {
  const tint = toneTextClass[type];
  const Glyph = GLYPHS[type];
  const glyph = icon ?? (showIcon ? <Glyph size={18} {...iconDefaults} /> : null);

  return (
    <div
      role="alert"
      className={cn(
        "w-full flex items-start gap-su3 py-su3 px-su4 rounded-none border border-solid border-rule bg-paper",
        toneBorderClass[type],
        className,
      )}
      {...rest}
    >
      {glyph ? (
        <span aria-hidden className={cn("shrink-0 mt-[2px] leading-none", tint)}>
          {glyph}
        </span>
      ) : null}
      <div className="flex-1 min-w-0 break-words">
        {title ? (
          <div className="text-subhead font-semibold text-label">{title}</div>
        ) : null}
        {children ? (
          <div className="mt-su1 text-footnote text-label-secondary leading-[var(--su-leading-normal)]">
            {children}
          </div>
        ) : null}
      </div>
      {closable ? (
        <Button
          variant="ghost"
          size="sm"
          className="shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 -my-su2 text-ink-2 enabled:hover:text-ink enabled:hover:bg-fill-tertiary"
          onClick={onClose}
          aria-label="Close alert"
        >
          <IconX size={16} {...iconDefaults} />
        </Button>
      ) : null}
    </div>
  );
}
