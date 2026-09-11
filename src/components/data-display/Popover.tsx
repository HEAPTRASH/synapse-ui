import * as RadixPopover from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface PopoverProps
  extends Omit<ComponentPropsWithoutRef<typeof RadixPopover.Root>, "children"> {
  trigger: ReactNode;
  content: ReactNode;
  side?: ComponentPropsWithoutRef<typeof RadixPopover.Content>["side"];
  align?: ComponentPropsWithoutRef<typeof RadixPopover.Content>["align"];
  contentClassName?: string;
  /** Portal target; defaults to document.body. For shadow DOM / iframe hosts. */
  container?: HTMLElement | null;
}

export function Popover({
  trigger,
  content,
  side = "bottom",
  align = "center",
  contentClassName,
  container,
  ...rest
}: PopoverProps) {
  return (
    <RadixPopover.Root {...rest}>
      <RadixPopover.Trigger asChild>
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Portal container={container}>
        <RadixPopover.Content
          side={side}
          align={align}
          sideOffset={8}
          className={cn(
            "z-[var(--su-z-dropdown)] p-su3 border border-solid border-rule-strong rounded-none bg-paper text-label text-subhead su-focus-ring animate-su-pop-in motion-reduce:animate-none",
            contentClassName,
          )}
        >
          {/* No arrow: a filled triangle breaks the border-rule-strong hairline where it
              meets the box. Tooltip drops it for the same reason — keep the two in step. */}
          <div className="max-h-[calc(var(--radix-popover-content-available-height)-2*var(--su-space-3))] overflow-y-auto">
            {content}
          </div>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
