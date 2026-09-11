import * as SelectPrimitive from "@radix-ui/react-select";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import { inputSizeClass } from "./Input";
import type { InputSize, SelectOption } from "./types";

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  options?: SelectOption[];
  className?: string;
  children?: ReactNode;
  onValueChange?: (value: string) => void;
}

/** Shared combobox trigger surface — Select, TreeSelect */
export const selectTriggerClass =
  "inline-flex items-center justify-between gap-su2 w-full min-w-0 min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body text-start cursor-pointer su-focus-ring transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:(border-accent shadow-none) data-[state=open]:border-accent aria-invalid:border-danger disabled:(opacity-45 cursor-not-allowed)";

const scrollButtonClass =
  "flex items-center justify-center h-[var(--su-space-6)] bg-paper text-label-secondary text-[12px] cursor-default";

export function Select({
  value,
  defaultValue,
  placeholder = "Select…",
  disabled,
  size: sizeProp,
  options = [],
  className,
  children,
  onValueChange,
}: SelectProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger
        id={item?.id}
        className={cn(selectTriggerClass, inputSizeClass[size], className)}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      >
        {/* Radix's SelectValue drops className, so the truncation lives on a wrapper. */}
        <span className="min-w-0 truncate">
          <SelectPrimitive.Value
            placeholder={<span className="text-label-tertiary">{placeholder}</span>}
          />
        </span>
        <SelectPrimitive.Icon
          className="shrink-0 text-label-secondary text-[12px]"
          aria-hidden="true"
        >
          ▾
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="su-popover overflow-hidden min-w-[var(--radix-select-trigger-width)] max-h-[var(--su-dropdown-max-h)] p-0"
          position="popper"
          sideOffset={4}
        >
          <SelectPrimitive.ScrollUpButton className={scrollButtonClass} aria-hidden="true">
            ▴
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-su1">
            {children ??
              (options.length === 0 ? (
                // A blank bordered popover reads as broken; say it's empty on purpose.
                <div className="px-su3 py-su3 su-label text-ink-2 text-start">No options</div>
              ) : (
                options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className="flex items-center gap-su2 min-w-0 min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none text-body text-label cursor-pointer su-focus-ring data-[highlighted]:(bg-fill-secondary text-label) data-[highlighted]:[&_[data-indicator]]:text-accent contrast-more:data-[highlighted]:(bg-accent text-on-action) data-[disabled]:(opacity-45 pointer-events-none)"
                  >
                    <SelectPrimitive.ItemIndicator
                      data-indicator
                      className="shrink-0 w-[14px] text-accent"
                    >
                      ✓
                    </SelectPrimitive.ItemIndicator>
                    <SelectPrimitive.ItemText className="truncate">
                      {option.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))
              ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className={scrollButtonClass} aria-hidden="true">
            ▾
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
