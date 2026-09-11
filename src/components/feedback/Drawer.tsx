import * as Dialog from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "../general/Button";
import { iconDefaults } from "../general/Icon";
import { cn } from "../../utils/cn";

export interface DrawerProps extends ComponentPropsWithoutRef<typeof Dialog.Root> {
  title?: ReactNode;
  description?: ReactNode;
  placement?: "left" | "right";
  width?: number | string;
  /** Pinned action bar below the scroll region (Apply / Cancel). */
  footer?: ReactNode;
  children?: ReactNode;
  trigger?: ReactNode;
}

export function Drawer({
  title,
  description,
  placement = "right",
  width = 320,
  footer,
  children,
  trigger,
  ...rest
}: DrawerProps) {
  return (
    <Dialog.Root {...rest}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="su-overlay" />
        <Dialog.Content
          className={cn(
            "fixed top-0 bottom-0 z-[var(--su-z-modal)] max-w-[calc(100vw-var(--su-space-8))] flex flex-col rounded-none bg-paper shadow-none motion-reduce:animate-none",
            placement === "left"
              ? "left-0 border-r border-solid border-rule-strong animate-su-slide-in-left"
              : "right-0 border-l border-solid border-rule-strong animate-su-slide-in",
          )}
          style={{ width }}
          {...(!description ? { "aria-describedby": undefined } : {})}
        >
          <div
            className={cn(
              "flex items-start gap-su3 p-su4",
              title ? "border-b border-solid border-rule" : undefined,
            )}
          >
            {title ? (
              <Dialog.Title className="flex-1 min-w-0 m-0 pt-[6px] font-sans text-headline font-semibold text-ink text-start leading-[var(--su-leading-snug)]">
                {title}
              </Dialog.Title>
            ) : (
              <Dialog.Title className="sr-only">Drawer</Dialog.Title>
            )}
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="sm"
                className="shrink-0 ms-auto min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 text-ink-2 enabled:hover:(text-ink bg-fill-tertiary)"
                aria-label="Close drawer"
              >
                <IconX size={16} {...iconDefaults} />
              </Button>
            </Dialog.Close>
          </div>
          {description ? (
            <Dialog.Description className="sr-only">{description}</Dialog.Description>
          ) : null}
          <div className="flex-1 overflow-auto p-su4 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
            {children}
          </div>
          {footer ? (
            <div className="flex justify-end flex-wrap gap-su2 py-su3 px-su4 pb-su4 border-t border-solid border-rule">
              {footer}
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
