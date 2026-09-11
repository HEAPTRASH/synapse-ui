import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TooltipProps
  extends ComponentPropsWithoutRef<typeof RadixTooltip.Root> {
  content: ReactNode;
  side?: ComponentPropsWithoutRef<typeof RadixTooltip.Content>["side"];
  align?: ComponentPropsWithoutRef<typeof RadixTooltip.Content>["align"];
  children: ReactNode;
}

export function TooltipProvider({
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof RadixTooltip.Provider>) {
  return (
    <RadixTooltip.Provider delayDuration={200} {...rest}>
      {children}
    </RadixTooltip.Provider>
  );
}

/**
 * Requires a parent `TooltipProvider` (or `App`, which mounts one).
 * Avoids nesting a Provider per tooltip instance.
 */
export function Tooltip({
  content,
  side = "top",
  align = "center",
  children,
  ...rest
}: TooltipProps) {
  // Nothing to say: render the trigger bare rather than an empty paper box.
  // Only nullish/empty-string is suppressed, so `content={0}` still shows.
  if (content == null || content === "") return <>{children}</>;
  return (
    <RadixTooltip.Root {...rest}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          align={align}
          sideOffset={8}
          className="z-[var(--su-z-dropdown)] max-w-60 py-su2 px-su3 border border-solid border-rule-strong rounded-none bg-paper text-label text-caption-1 leading-[var(--su-leading-snug)] animate-su-tip-in motion-reduce:animate-none"
        >
          {/* No arrow: a filled triangle breaks the border-rule-strong hairline where it
              meets the box. Popover drops it for the same reason — keep the two in step. */}
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

Tooltip.Provider = TooltipProvider;
