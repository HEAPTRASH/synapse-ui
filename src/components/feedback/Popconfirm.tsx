import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Button } from "../general/Button";

export interface PopconfirmProps
  extends ComponentPropsWithoutRef<typeof AlertDialog.Root> {
  title?: ReactNode;
  description?: ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode;
  /**
   * Confirm handler. Return a promise to keep the dialog open (confirm button
   * spinning) until it settles; a rejection leaves the dialog open.
   */
  onConfirm?: () => void | Promise<unknown>;
  /** Fired when the user dismisses via Cancel. */
  onCancel?: () => void;
  /** Block the trigger from opening (e.g. the row is already being deleted). */
  disabled?: boolean;
  /** Style the confirm action as destructive (Ant Design `okButtonProps.danger`). */
  okDanger?: boolean;
  /** Alias for `okDanger`. */
  danger?: boolean;
  children: ReactNode;
}

/* Edge-to-edge alert button bar: each button owns half the footer, so the
   48px min-height and the hairline seam come from the buttons themselves.
   `[&>span:first-child]` / `[&>span:nth-child(2)]` reach into Button's primary
   (scan) chrome to centre the label and drop the page-level scan end cell,
   which reads as a stray square at this width. See sharedRequests. */
const footerButtonClass =
  "flex-1 min-w-0 overflow-hidden !rounded-none min-h-[48px] " +
  // The buttons sit flush with the dialog edge, so the 3px outset ring would be
  // clipped by the Content's overflow — draw it inset instead, same 2px square.
  "focus-visible:!outline-offset-[-3px]";
const confirmButtonClass =
  footerButtonClass +
  " [&>span:nth-child(2)]:hidden [&>span:first-child]:(flex-1 justify-center)";

/**
 * Modal confirmation before a consequential action. Uses Radix Alert Dialog
 * (focus trap, inert backdrop) instead of a floating popover.
 */
export function Popconfirm({
  title = "Are you sure?",
  description,
  okText = "OK",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  disabled,
  okDanger,
  danger,
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...rest
}: PopconfirmProps) {
  const confirmDanger = okDanger ?? danger ?? false;
  const [openState, setOpenState] = useState(defaultOpen ?? false);
  const [pending, setPending] = useState(false);
  const open = openProp ?? openState;

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setOpenState(next);
    onOpenChange?.(next);
  };

  // AlertDialog.Action is Radix's Close, so the confirm button is a plain
  // Button and we own the close — otherwise an async onConfirm can never
  // hold the dialog open.
  const confirm = () => {
    const result = onConfirm?.();
    if (!result || typeof (result as Promise<unknown>).then !== "function") {
      setOpen(false);
      return;
    }
    setPending(true);
    Promise.resolve(result)
      .then(
        () => setOpen(false),
        () => undefined, // rejection: stay open, caller surfaces the error
      )
      .finally(() => setPending(false));
  };

  return (
    <AlertDialog.Root
      {...rest}
      open={disabled ? false : open}
      onOpenChange={setOpen}
    >
      <AlertDialog.Trigger asChild disabled={disabled}>
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="su-overlay" />
        <AlertDialog.Content
          onEscapeKeyDown={(event) => {
            if (pending) event.preventDefault();
          }}
          className="fixed inset-0 z-[var(--su-z-modal)] m-auto w-[min(280px,calc(100vw-var(--su-space-8)))] h-fit flex flex-col overflow-hidden border border-solid border-rule-strong rounded-none bg-paper shadow-none animate-su-pop-in motion-reduce:animate-none"
        >
          <AlertDialog.Title className="pt-su5 px-su5 pb-0 font-sans text-title-3 font-semibold tracking-[var(--su-tracking-tight)] text-ink text-center">
            {title}
          </AlertDialog.Title>
          {description ? (
            <AlertDialog.Description className="m-0 pt-su3 px-su5 pb-su4 text-body text-ink-2 text-center">
              {description}
            </AlertDialog.Description>
          ) : (
            <VisuallyHidden.Root asChild>
              <AlertDialog.Description>{title}</AlertDialog.Description>
            </VisuallyHidden.Root>
          )}
          <div className="flex justify-stretch">
            <AlertDialog.Cancel asChild>
              <Button
                variant="ghost"
                size="sm"
                disabled={pending}
                onClick={onCancel}
                className={
                  footerButtonClass +
                  " [border-inline-end:0.5px_solid_var(--su-separator)]"
                }
              >
                {cancelText}
              </Button>
            </AlertDialog.Cancel>
            <Button
              variant="primary"
              size="sm"
              className={confirmButtonClass}
              danger={confirmDanger}
              loading={pending}
              onClick={confirm}
            >
              {okText}
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
