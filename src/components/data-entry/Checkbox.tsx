import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useFormContext, useFormItemContext } from "./Form";

/** Radix's own tri-state: `true` | `false` | `"indeterminate"` (renders `aria-checked="mixed"`). */
export type CheckboxState = CheckboxPrimitive.CheckedState;

export interface CheckboxProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  checked?: CheckboxState;
  defaultChecked?: CheckboxState;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
  /** `checked` collapses `"indeterminate"` to `false`; read `state` for the raw tri-state. */
  onCheckedChange?: (checked: boolean, state: CheckboxState) => void;
}

const boxClass = [
  "flex items-center justify-center size-[22px] rounded-none bg-transparent text-on-action cursor-pointer",
  // ink-3 (not gray-3) so the unchecked box clears WCAG 1.4.11 3:1 against paper, as Switch's track does.
  "border-[1.5px] border-solid border-ink-3 contrast-more:border-[var(--su-label)]",
  "transition-[background-color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "hover:border-[var(--su-label)] data-[state=unchecked]:hover:bg-[var(--su-gray-4)]",
  "data-[state=checked]:(bg-accent border-accent) data-[state=indeterminate]:(bg-accent border-accent)",
  "data-[state=checked]:hover:bg-[var(--su-accent-hover)] data-[state=indeterminate]:hover:bg-[var(--su-accent-hover)]",
  "su-focus-ring",
].join(" ");

export function Checkbox({
  checked,
  defaultChecked,
  disabled,
  required,
  name,
  value = "on",
  id: idProp,
  className,
  children,
  onCheckedChange,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: CheckboxProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;

  return (
    <label
      className={cn(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        isDisabled && "opacity-45 cursor-not-allowed",
        className,
      )}
    >
      <CheckboxPrimitive.Root
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
        className={boxClass}
        onCheckedChange={(state) => onCheckedChange?.(state === true, state)}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      >
        <CheckboxPrimitive.Indicator className="size-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 6L5 8.5L9.5 3.5" className="[[data-state=indeterminate]_&]:hidden" />
            <path d="M2.5 6H9.5" className="hidden [[data-state=indeterminate]_&]:block" />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children && (
        <span className="text-body text-label select-none">
          {children}
        </span>
      )}
    </label>
  );
}
