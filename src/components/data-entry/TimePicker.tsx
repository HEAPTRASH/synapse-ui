import { useCallback, useState, type ChangeEvent } from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import { inputClass, inputSizeClass, nativePickerClass } from "./Input";
import type { InputSize } from "./types";

export interface TimePickerProps {
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  onChange?: (value: string) => void;
  id?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export function TimePicker({
  value: valueProp,
  defaultValue,
  min,
  max,
  step,
  disabled,
  size: sizeProp,
  className,
  onChange,
  id: idProp,
  name,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: TimePickerProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const [internal, setInternal] = useState(defaultValue ?? "");
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;

  const emit = useCallback(
    (next: string) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    emit(event.target.value);
  };

  return (
    <div
      className={cn(
        "inline-flex w-full max-w-[180px]",
        isDisabled && "opacity-45 cursor-not-allowed",
        className,
      )}
    >
      <input
        type="time"
        id={idProp ?? item?.id}
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={isDisabled}
        onChange={handleChange}
        className={cn(inputClass, nativePickerClass, inputSizeClass[size])}
        required={item?.required}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      />
    </div>
  );
}
