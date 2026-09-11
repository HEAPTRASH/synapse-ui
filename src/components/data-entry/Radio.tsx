import * as RadioGroup from "@radix-ui/react-radio-group";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useFormContext, useFormItemContext } from "./Form";

export interface RadioOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  direction?: "vertical" | "horizontal";
  options?: RadioOption[];
  className?: string;
  children?: ReactNode;
  onValueChange?: (value: string) => void;
}

export interface RadioProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export function RadioGroupRoot({
  value,
  defaultValue,
  disabled,
  name,
  direction = "vertical",
  options,
  className,
  children,
  onValueChange,
}: RadioGroupProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;

  return (
    <RadioGroup.Root
      id={item?.id}
      value={value}
      defaultValue={defaultValue}
      disabled={isDisabled}
      name={name}
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row flex-wrap gap-su4" : "flex-col gap-su2",
        className,
      )}
      onValueChange={onValueChange}
      aria-describedby={item?.descriptionId}
      aria-invalid={item?.error ? true : undefined}
    >
      {options
        ? options.map((option) => (
            <Radio key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </Radio>
          ))
        : children}
    </RadioGroup.Root>
  );
}

const itemClass = [
  "flex items-center justify-center size-5 rounded-none bg-transparent cursor-pointer",
  // ink-3 (not gray-3) so the unchecked ring clears WCAG 1.4.11 3:1 against paper, as Switch's track does.
  "border-[1.5px] border-solid border-ink-3 contrast-more:border-[var(--su-label)]",
  "transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "hover:border-[var(--su-label)] data-[state=checked]:(border-accent hover:border-accent)",
  "su-focus-ring",
  "disabled:cursor-not-allowed",
].join(" ");

export function Radio({ value, disabled, className, children }: RadioProps) {
  const form = useFormContext();
  // Group-level `disabled` lives in Radix's context, not in props — read the rendered
  // button's native `disabled` instead of recomputing it, so every path (group prop,
  // per-option, Form context) dims identically.
  return (
    <label
      className={cn(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        "[&:has(button:disabled)]:(opacity-45 cursor-not-allowed)",
        className,
      )}
    >
      <RadioGroup.Item value={value} disabled={disabled ?? form.disabled} className={itemClass}>
        <RadioGroup.Indicator className="block size-2 rounded-full bg-accent" />
      </RadioGroup.Item>
      {children && (
        <span className="text-body text-label select-none">
          {children}
        </span>
      )}
    </label>
  );
}

export { RadioGroupRoot as RadioGroup };
