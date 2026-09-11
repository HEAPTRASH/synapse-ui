import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SegmentedOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

/**
 * Renders `role="radiogroup"` (Radix ToggleGroup) with no default accessible
 * name — pass `aria-label` or `aria-labelledby` so screen readers know what is
 * being switched. Icon-only options need their own label too (wrap the icon in
 * an element carrying `aria-label`).
 */
export interface SegmentedProps extends Omit<
  ComponentPropsWithoutRef<typeof ToggleGroup.Root>,
  "type" | "value" | "defaultValue" | "onValueChange"
> {
  options: SegmentedOption[];
  block?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Segmented({
  options,
  block = false,
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  ...rest
}: SegmentedProps) {
  const [internal, setInternal] = useState(defaultValue);
  const value = valueProp ?? internal;

  return (
    <ToggleGroup.Root
      type="single"
      // Always controlled: a bare ToggleGroup lets you click the active item to
      // deselect it, which leaves a segmented control with nothing selected.
      value={value ?? ""}
      onValueChange={(next) => {
        if (!next) return;
        if (valueProp === undefined) setInternal(next);
        onValueChange?.(next);
      }}
      className={cn(
        "inline-flex p-0 gap-0 border border-solid border-rule-strong rounded-none bg-canvas",
        block && "flex w-full",
        className,
      )}
      {...rest}
    >
      {options.map((opt) => (
        <ToggleGroup.Item
          key={opt.value}
          value={opt.value}
          disabled={opt.disabled}
          className={cn(
            "flex-1 min-h-[var(--su-hit-target)] px-su3 rounded-none bg-transparent text-label-secondary font-sans text-footnote font-medium cursor-pointer",
            "transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
            "not-first:border-s not-first:border-s-solid not-first:border-s-rule",
            "su-focus-ring",
            "data-[state=off]:not-disabled:hover:(bg-fill-quaternary text-label)",
            "data-[state=on]:bg-ink data-[state=on]:text-paper",
            "disabled:opacity-45 disabled:cursor-not-allowed",
          )}
        >
          {opt.label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
