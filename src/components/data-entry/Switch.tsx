import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { SlotSpinner } from "../general/SlotSpinner";
import { useFormContext, useFormItemContext } from "./Form";

export interface SwitchProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Async toggle in flight: shows a slot spinner in the thumb and blocks input. */
  loading?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * 51×31 track, 1.5px solid edge so the unchecked state clears WCAG 1.4.11 (3:1)
 * on its own — the `--su-gray-4` fill alone sits at ~1.5:1 against paper.
 * Border-box maths: 48×28 inner, 24px thumb, 2px gutter on every side.
 */
const trackClass = [
  "relative flex items-center w-[51px] h-[31px] p-0 rounded-none cursor-pointer",
  "border-[1.5px] border-solid border-ink-3 bg-[var(--su-gray-4)] contrast-more:border-[var(--su-label)]",
  "transition-[background-color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "data-[state=checked]:(bg-action border-action)",
  "disabled:cursor-not-allowed",
  "su-focus-ring",
].join(" ");

const thumbClass = [
  "flex items-center justify-center size-[24px] rounded-none bg-on-action shadow-none",
  "border border-solid border-ink-3 data-[state=checked]:border-transparent",
  "transition-transform duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] will-change-transform",
  "translate-x-[2px] data-[state=checked]:translate-x-[22px]",
  // physical translates, mirrored under [dir=rtl] so the thumb travels toward the trailing edge
  "rtl:-translate-x-[2px] rtl:data-[state=checked]:-translate-x-[22px]",
].join(" ");

/** ponytail: no `size` variant or ref forwarding (siblings have neither) — add when a caller needs one. */
export function Switch({
  checked,
  defaultChecked,
  disabled,
  loading,
  required,
  name,
  value,
  id: idProp,
  className,
  children,
  onCheckedChange,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: SwitchProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;

  return (
    <label
      className={cn(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        isDisabled && "opacity-45 cursor-not-allowed",
        loading && "cursor-wait",
        className,
      )}
    >
      <SwitchPrimitive.Root
        id={idProp ?? item?.id}
        // Visible children already name the control via the wrapping <label>;
        // forwarding aria-label too would let the two diverge (WCAG 2.5.3).
        aria-label={children ? undefined : ariaLabel}
        aria-labelledby={children ? undefined : ariaLabelledBy}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={isDisabled}
        required={required ?? item?.required}
        name={name}
        value={value}
        className={cn(trackClass, loading && "cursor-wait")}
        // Loading is busy, not disabled: full contrast, still focusable, clicks
        // guarded (Button.tsx convention). preventDefault stops Radix's own
        // toggle handler, so space/enter are covered too.
        onClick={(event) => {
          if (loading) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onCheckedChange={(next) => {
          if (!loading) onCheckedChange?.(next);
        }}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
        aria-busy={loading || undefined}
      >
        <SwitchPrimitive.Thumb className={thumbClass}>
          {loading ? <SlotSpinner size="sm" /> : null}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      {children && (
        <span className="text-body text-label select-none">
          {children}
        </span>
      )}
    </label>
  );
}
