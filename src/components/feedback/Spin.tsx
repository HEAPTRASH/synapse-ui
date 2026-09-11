import { useEffect, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { SlotSpinner, type SlotSpinnerSize } from "../general/SlotSpinner";

export interface SpinProps extends HTMLAttributes<HTMLDivElement> {
  spinning?: boolean;
  tip?: ReactNode;
  size?: SlotSpinnerSize;
  /** Milliseconds to wait before showing the indicator, so fast loads never flash one. */
  delay?: number;
  children?: ReactNode;
}

export function Spin({
  spinning = true,
  tip,
  size = "md",
  delay,
  className,
  children,
  ...rest
}: SpinProps) {
  const [show, setShow] = useState(!delay);
  useEffect(() => {
    if (!delay) {
      setShow(true);
      return;
    }
    if (!spinning) {
      setShow(false);
      return;
    }
    const id = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(id);
  }, [spinning, delay]);

  const active = spinning && show;

  const indicator = (
    <>
      <SlotSpinner size={size} />
      {tip ? (
        <span className="su-label text-ink-2">
          {tip}
        </span>
      ) : (
        <span className="sr-only">Loading</span>
      )}
    </>
  );

  if (!children) {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center gap-su3 min-h-[var(--su-hit-target)]",
          className,
        )}
        role="status"
        aria-live="polite"
        aria-busy={active || undefined}
        {...rest}
      >
        {active ? indicator : null}
      </div>
    );
  }

  return (
    <div
      className={cn("relative", className)}
      aria-busy={active || undefined}
      {...rest}
    >
      {/* inert covers pointer, selection and tab order natively; the opaque
          overlay below covers the visuals, so no dimming class is needed. */}
      <div inert={active || undefined}>{children}</div>
      {active ? (
        <div
          className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-su3 bg-paper"
          role="status"
          aria-live="polite"
        >
          {indicator}
        </div>
      ) : null}
    </div>
  );
}
