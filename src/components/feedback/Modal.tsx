import * as Dialog from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "../general/Button";
import { iconDefaults } from "../general/Icon";

export interface ModalProps
  extends ComponentPropsWithoutRef<typeof Dialog.Root>,
    Pick<
      ComponentPropsWithoutRef<typeof Dialog.Content>,
      | "onEscapeKeyDown"
      | "onPointerDownOutside"
      | "onInteractOutside"
      | "onOpenAutoFocus"
      | "onCloseAutoFocus"
    > {
  title?: ReactNode;
  /** Accessible (and optionally visible) description for the dialog. */
  description?: ReactNode;
  /** When true, show `description` in the body instead of sr-only. */
  showDescription?: boolean;
  footer?: ReactNode;
  width?: number | string;
  children?: ReactNode;
  trigger?: ReactNode;
  /** Set false to hide the close icon (mandatory-choice dialogs). */
  closable?: boolean;
}

export function Modal({
  title,
  description,
  showDescription = false,
  footer,
  width,
  children,
  trigger,
  closable = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  onInteractOutside,
  onOpenAutoFocus,
  onCloseAutoFocus,
  ...rest
}: ModalProps) {
  return (
    <Dialog.Root {...rest}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="su-overlay" />
        <Dialog.Content
          className="fixed inset-0 z-[var(--su-z-modal)] m-auto w-[min(420px,calc(100vw-var(--su-space-8)))] max-w-[calc(100vw-var(--su-space-8))] max-h-[calc(100vh-var(--su-space-8))] h-fit flex flex-col border border-solid border-rule-strong rounded-none bg-paper shadow-none animate-su-rise-in motion-reduce:animate-none"
          style={width !== undefined ? { width } : undefined}
          onEscapeKeyDown={onEscapeKeyDown}
          onPointerDownOutside={onPointerDownOutside}
          onInteractOutside={onInteractOutside}
          onOpenAutoFocus={onOpenAutoFocus}
          onCloseAutoFocus={onCloseAutoFocus}
          {...(!description ? { "aria-describedby": undefined } : {})}
        >
          <div className="flex items-start justify-end gap-su3 pt-su4 px-su4 pb-0">
            {title ? (
              <Dialog.Title className="flex-1 min-w-0 m-0 pt-[6px] pb-0 font-sans text-title-3 font-semibold tracking-[var(--su-tracking-tight)] text-ink text-start leading-[var(--su-leading-snug)]">
                {title}
              </Dialog.Title>
            ) : (
              <Dialog.Title className="sr-only">Dialog</Dialog.Title>
            )}
            {closable ? (
              <Dialog.Close asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 text-ink-2 enabled:hover:text-ink enabled:hover:bg-fill-tertiary"
                  aria-label="Close"
                >
                  <IconX size={16} {...iconDefaults} />
                </Button>
              </Dialog.Close>
            ) : null}
          </div>
          {description ? (
            <Dialog.Description
              className={
                showDescription
                  ? "m-0 px-su4 text-ink-2 text-body"
                  : "sr-only"
              }
            >
              {description}
            </Dialog.Description>
          ) : null}
          <div className="py-su3 px-su4 pb-su4 overflow-auto text-ink-2 text-body text-start [&>:first-child]:mt-0 [&>:last-child]:mb-0">
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
