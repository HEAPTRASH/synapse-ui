import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type SlotState =
  | "free"
  | "receiving"
  | "onhand"
  | "allocated"
  | "picking"
  | "counted";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Bay mono code, e.g. A-01 */
  code?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  /** Slot-state swatch beside the code */
  state?: SlotState;
  /** Dense panel: canvas ground + hairline box (still square, no shadow) */
  bordered?: boolean;
  /**
   * Paint hook only: sweeps an accent bar on hover / focus-within (interactive bay).
   * It adds no click or keyboard behaviour — put a real focusable element (link,
   * button) in `title`/`children` so keyboard users get the same signal.
   */
  interactive?: boolean;
  children?: ReactNode;
}

const stateClass: Record<SlotState, string> = {
  free: "bg-s-free",
  receiving: "bg-s-receiving",
  onhand: "bg-s-onhand",
  allocated: "bg-s-allocated",
  picking: "bg-s-picking",
  counted: "bg-s-counted",
};

export function Card({
  code,
  title,
  extra,
  state,
  bordered = false,
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  const hasHeader = code != null || title != null || extra != null || state != null;

  return (
    <div
      className={cn(
        "rounded-none",
        bordered
          ? "bg-canvas border border-solid border-rule"
          : "relative bg-transparent border-t border-solid border-rule-strong",
        interactive && !bordered && "group",
        className,
      )}
      {...rest}
    >
      {interactive && !bordered ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-0 right-full h-0.5 bg-accent transition-[right] duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] motion-reduce:transition-none [@media(hover:hover)]:group-hover:right-0 [@media(hover:hover)]:group-focus-within:right-0 [@media(hover:none)]:hidden"
        />
      ) : null}
      {hasHeader ? (
        <div className="flex items-start justify-between gap-su3 pt-su4">
          <div className="flex flex-col gap-su2 min-w-0">
            {code != null || state != null ? (
              <div className="flex items-center gap-su2">
                {code != null ? (
                  <span className="su-label text-ink-2">
                    {code}
                  </span>
                ) : null}
                {state != null ? (
                  <span
                    className={cn("block size-2.5 shrink-0", stateClass[state])}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ) : null}
            {title != null ? (
              <div className="font-sans text-title-2 font-medium tracking-[-0.01em] text-label text-balance">
                {title}
              </div>
            ) : null}
          </div>
          {extra != null ? (
            <div className="text-footnote text-label-secondary shrink-0">{extra}</div>
          ) : null}
        </div>
      ) : null}
      <div className={cn(bordered ? "p-su4" : "py-su4")}>{children}</div>
    </div>
  );
}
