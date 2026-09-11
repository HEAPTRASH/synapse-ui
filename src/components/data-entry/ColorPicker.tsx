import { useCallback, useState, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import type { InputSize } from "./types";

export interface ColorPickerProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange" | "type"
  > {
  value?: string;
  defaultValue?: string;
  size?: InputSize;
  disabled?: boolean;
  showText?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const swatchSizeClass: Record<InputSize, string> = {
  sm: "size-[var(--su-control-sm)]",
  md: "size-[var(--su-control-md)]",
  lg: "size-[var(--su-control-lg)]",
};

/** `<input type="color">` only accepts 7-char hex; anything else silently renders black. */
const toHex = (v: string) => (/^#[0-9a-fA-F]{6}$/.test(v) ? v : "#000000");

export function ColorPicker({
  value: valueProp,
  defaultValue = "#1D4ED8",
  size: sizeProp,
  disabled,
  showText = true,
  className,
  onChange,
  id: idProp,
  ...rest
}: ColorPickerProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const [internal, setInternal] = useState(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = toHex(isControlled ? valueProp : internal);

  const emit = useCallback(
    (next: string) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  return (
    <div className={cn("inline-flex items-center gap-su3", className)}>
      <div
        className={cn(
          "relative border border-solid border-separator rounded-none overflow-hidden cursor-pointer",
          "transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
          "hover:border-rule-strong [@media(hover:none)]:hover:border-separator",
          // outline-solid is required: outline-2 only sets the width, style stays `none`
          "focus-within:(outline-solid outline-2 outline-accent outline-offset-[var(--su-focus-ring-offset)])",
          swatchSizeClass[size],
          isDisabled && "opacity-45 cursor-not-allowed hover:border-separator",
        )}
        style={{ backgroundColor: value }}
      >
        <input
          type="color"
          id={idProp ?? item?.id}
          value={value}
          disabled={isDisabled}
          className="absolute inset-0 size-full appearance-none p-0 border-none bg-transparent outline-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:border-none"
          onChange={(e) => emit(e.target.value)}
          {...rest}
          aria-describedby={item?.descriptionId}
          aria-invalid={item?.error ? true : undefined}
        />
      </div>
      {showText && (
        <span className="font-mono text-footnote text-label-secondary">
          {value.toUpperCase()}
        </span>
      )}
    </div>
  );
}
