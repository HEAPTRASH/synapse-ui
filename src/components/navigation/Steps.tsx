import type { HTMLAttributes, Key, ReactNode } from "react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import { Icon } from "../general/Icon";

export type StepStatus = "wait" | "process" | "finish" | "error";

export interface StepItem {
  title: ReactNode;
  description?: ReactNode;
  /** Overrides the status derived from `current`. */
  status?: StepStatus;
  /** Replaces the step numeral (16px glyph, same box). */
  icon?: ReactNode;
  /** Stable key; falls back to the array index. */
  key?: Key;
}

export interface StepsProps extends HTMLAttributes<HTMLElement> {
  current?: number;
  items: StepItem[];
  direction?: "horizontal" | "vertical";
  status?: StepStatus;
}

const transition =
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none";

/**
 * The marker is a hairline-over-fill square: only the live step is filled with
 * the action colour, the travelled path is settled ink, and red is reserved for
 * a real failure (which also swaps the glyph, so hue is never the only cue).
 */
const markerStatusClass: Record<StepStatus, string> = {
  wait: "text-ink-2 shadow-[inset_0_0_0_1px_var(--su-rule-strong)]",
  process:
    "bg-action text-on-action shadow-[inset_0_0_0_1px_var(--su-action-edge)]",
  finish: "bg-ink text-paper",
  error: "bg-danger-strong text-on-action",
};

const markerClass = cn(
  "inline-flex items-center justify-center shrink-0 size-[var(--su-control-sm)]",
  // Brand: indices are Martian Mono at the label spec, tabular so 1 and 8 align.
  "su-label tabular-nums",
  transition,
);

const statusLabel: Record<StepStatus, string> = {
  wait: "not started",
  process: "current",
  finish: "completed",
  error: "error",
};

/**
 * Layout is vertical-first: the stacked form is the base and the horizontal row
 * is layered on above 532px, which gives Ant's `responsive` behaviour for free
 * (a squeezed row breaks titles one letter per line) from one set of classes.
 * The rail is a single element in both forms — absolutely positioned down the
 * marker column when stacked, a flex item between the title and the next marker
 * when in a row, where its inset/width classes go inert because it is `static`.
 */
export function Steps({
  current = 0,
  items,
  direction = "horizontal",
  status = "process",
  className,
  ...rest
}: StepsProps) {
  if (items.length === 0) return null;

  const row = direction !== "vertical";
  const currentIndex = Math.trunc(current);

  return (
    <nav
      className={cn("w-full font-sans", className)}
      aria-label="Progress"
      {...rest}
    >
      <ol
        role="list"
        className={cn(
          "flex flex-col items-stretch w-full m-0 p-0 list-none",
          row && "min-[533px]:(flex-row items-start gap-su3)",
        )}
      >
        {items.map((item, index) => {
          const stepStatus =
            item.status ??
            (index < currentIndex
              ? "finish"
              : index > currentIndex
                ? "wait"
                : status);
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.key ?? index}
              className={cn(
                "relative flex items-start gap-su3 min-w-0",
                row &&
                  (isLast
                    ? "min-[533px]:flex-[0_1_auto]"
                    : "min-[533px]:flex-[1_1_auto]"),
              )}
              data-status={stepStatus}
              aria-current={index === currentIndex ? "step" : undefined}
            >
              <span
                className={cn(markerClass, markerStatusClass[stepStatus])}
                aria-hidden="true"
              >
                {item.icon ??
                  (stepStatus === "finish" ? (
                    <Icon size="sm">
                      <IconCheck />
                    </Icon>
                  ) : stepStatus === "error" ? (
                    <Icon size="sm">
                      <IconX />
                    </Icon>
                  ) : (
                    index + 1
                  ))}
              </span>
              <div
                className={cn(
                  // Optical centring against the line box the title actually renders.
                  "grow min-w-0 pt-[calc((var(--su-control-sm)-var(--su-text-subhead)*var(--su-leading-normal))/2)]",
                  row && "min-[533px]:grow-0",
                  !isLast && "pb-su6",
                  !isLast && row && "min-[533px]:pb-0",
                )}
              >
                <span className="sr-only">
                  {`Step ${index + 1} of ${items.length}, ${statusLabel[stepStatus]}: `}
                </span>
                <span
                  className={cn(
                    "block text-subhead font-medium leading-[var(--su-leading-normal)] break-words",
                    stepStatus === "wait" ? "text-ink-2" : "text-ink",
                  )}
                >
                  {item.title}
                </span>
                {item.description ? (
                  <span className="block mt-su1 text-ink-2 text-footnote leading-[var(--su-leading-normal)] break-words">
                    {item.description}
                  </span>
                ) : null}
              </div>
              {!isLast ? (
                <span
                  className={cn(
                    "absolute [inset-inline-start:calc((var(--su-control-sm)-1px)/2)] top-[calc(var(--su-control-sm)+var(--su-space-1))] bottom-0 w-px",
                    row &&
                      "min-[533px]:(static h-px w-auto flex-[1_1_0%] self-start min-w-[var(--su-space-4)] mt-[calc((var(--su-control-sm)-1px)/2)])",
                    stepStatus === "finish" ? "bg-ink" : "bg-rule-strong",
                    transition,
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
