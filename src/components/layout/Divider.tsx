import * as Separator from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type DividerSpacing = "none" | "compact" | "default";

export interface DividerProps
  extends Omit<ComponentPropsWithoutRef<typeof Separator.Root>, "children"> {
  orientation?: "horizontal" | "vertical";
  /** `false` when the rule separates genuinely distinct groups; leave `true` for visual rhythm. */
  decorative?: boolean;
  /** Hairline (10%/12%) by default; `"strong"` is the brand's bay-top / table-head rule (22%/24%). */
  strength?: "hairline" | "strong";
  /** Block margin on a horizontal rule, inline margin on a vertical one. */
  spacing?: DividerSpacing;
  /** Mono eyebrow sitting on the rule. Ignored when `orientation="vertical"` (as in Ant).
   *  Note: `asChild` is ignored while `children` is set — the labelled rule is a plain row. */
  children?: ReactNode;
  labelPlacement?: "start" | "center" | "end";
}

const blockSpacing: Record<DividerSpacing, string> = {
  none: "",
  compact: "my-su2",
  default: "my-su6",
};

const inlineSpacing: Record<DividerSpacing, string> = {
  none: "",
  compact: "mx-su1",
  default: "mx-su2",
};

/**
 * Anything the component already sets (colour, size, margin) loses to its own
 * utilities regardless of class order — UnoCSS decides by stylesheet order, not
 * attribute order. Use the props above, or the important prefix: `className="bg-rule-strong!"`.
 */
export function Divider({
  orientation = "horizontal",
  decorative = true,
  strength = "hairline",
  spacing = "default",
  labelPlacement = "center",
  children,
  className,
  asChild,
  ...rest
}: DividerProps) {
  const rule = cn(
    "shrink-0 forced-colors:bg-[CanvasText]",
    strength === "strong" ? "bg-rule-strong" : "bg-separator",
  );

  if (children != null && children !== false && orientation === "horizontal") {
    // Not a Separator.Root: ARIA skips the contents of role="separator", so the
    // label would go unannounced. A plain row with aria-hidden rails reads correctly.
    return (
      <div
        className={cn(
          "flex items-center gap-su3",
          blockSpacing[spacing],
          className,
        )}
        {...rest}
      >
        <span
          aria-hidden
          className={cn(
            rule,
            "h-px",
            labelPlacement === "start" ? "w-[var(--su-space-2)]" : "flex-1",
          )}
        />
        <span className="su-label text-ink-2 whitespace-nowrap">
          {children}
        </span>
        <span
          aria-hidden
          className={cn(rule, "h-px", labelPlacement === "end" ? "w-[var(--su-space-2)]" : "flex-1")}
        />
      </div>
    );
  }

  return (
    <Separator.Root
      asChild={asChild}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        rule,
        orientation === "vertical"
          ? cn(
              "w-px self-stretch inline-block align-middle min-h-[0.9em]",
              inlineSpacing[spacing],
            )
          : cn("h-px w-full", blockSpacing[spacing]),
        className,
      )}
      {...rest}
    />
  );
}
