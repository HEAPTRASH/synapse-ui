import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../general/Button";

export interface TourStep {
  target: string;
  title?: ReactNode;
  description?: ReactNode;
}
export interface TourProps {
  open?: boolean;
  steps: TourStep[];
  current?: number;
  defaultCurrent?: number;
  onChange?: (index: number) => void;
  onClose?: () => void;
}

/* Scrim tone is the `su-overlay` shortcut's rgba(10,12,18,0.45); the shortcut itself
   can't be used here because the cutout needs it as a spread shadow and the z-index
   is raised to --su-z-max. Written out literally so Uno's scanner sees the classes. */

// ponytail: the card is a fixed bottom sheet, not anchored to the spotlight
// (no placement/arrow/collision detection like Ant Design). Upgrade path: derive
// top/bottom from the `rect` already measured below if targets near the fold
// prove hard to follow.
export function Tour({
  open = false,
  steps,
  current,
  defaultCurrent = 0,
  onChange,
  onClose,
}: TourProps) {
  const [internal, setInternal] = useState(defaultCurrent);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const index = current ?? internal;
  const step = steps[index];
  useEffect(() => {
    if (open && current === undefined) setInternal(defaultCurrent);
  }, [open, current, defaultCurrent]);
  useEffect(() => {
    if (!open || !step) return;
    const target = document.querySelector(step.target);
    target?.scrollIntoView({ block: "center", behavior: "instant" });
    const update = () => setRect(target?.getBoundingClientRect() ?? null);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, step?.target]);
  const go = (next: number) => {
    if (next < 0 || next > steps.length - 1) return;
    if (current === undefined) setInternal(next);
    onChange?.(next);
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") go(index + 1);
    else if (event.key === "ArrowLeft") go(index - 1);
    else return;
    event.preventDefault();
  };
  return (
    <Dialog.Root
      open={open && !!step}
      onOpenChange={(next) => {
        if (!next) onClose?.();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[var(--su-z-max)] animate-su-fade-in motion-reduce:animate-none">
          {rect ? (
            <div
              className="fixed rounded-none pointer-events-none shadow-[0_0_0_9999px_rgba(10,12,18,0.45)]"
              style={{
                top: rect.top - 4,
                left: rect.left - 4,
                width: rect.width + 8,
                height: rect.height + 8,
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-[rgba(10,12,18,0.45)]" />
          )}
        </Dialog.Overlay>
        <Dialog.Content
          onKeyDown={onKeyDown}
          className="fixed bottom-su8 left-1/2 z-[var(--su-z-max)] -translate-x-1/2 w-[min(360px,calc(100%-var(--su-space-8)))] max-h-[70vh] overflow-y-auto p-su4 rounded-none border border-solid border-rule-strong bg-paper animate-su-rise-in motion-reduce:animate-none"
        >
          <Dialog.Title className="text-headline font-semibold text-label">
            {step?.title ?? "Take a tour"}
          </Dialog.Title>
          <Dialog.Description className="mt-su2 text-subhead text-label-secondary">
            {step?.description}
          </Dialog.Description>
          <div className="flex items-center justify-between flex-wrap gap-su2 mt-su4">
            <span className="text-caption-1 text-label-tertiary">
              {index + 1} / {steps.length}
            </span>
            <div className="flex gap-su2">
              <Dialog.Close asChild>
                <Button size="sm">Close</Button>
              </Dialog.Close>
              {index > 0 && (
                <Button size="sm" onClick={() => go(index - 1)}>
                  Back
                </Button>
              )}
              {index < steps.length - 1 ? (
                <Button variant="primary" size="sm" hideEndCell onClick={() => go(index + 1)}>
                  Next
                </Button>
              ) : (
                <Dialog.Close asChild>
                  <Button variant="primary" size="sm" hideEndCell>
                    Done
                  </Button>
                </Dialog.Close>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
