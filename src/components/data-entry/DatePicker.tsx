import { useCallback, useState, type ChangeEvent } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../general/Button";
import { formLabelClass, useFieldState, useFormItemContext } from "./Form";
import { inputClass, inputSizeClass, nativePickerClass } from "./Input";
import type { InputSize } from "./types";

export interface DatePickerProps {
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  onChange?: (value: string) => void;
}

const disabledFieldClass = "opacity-45 cursor-not-allowed";

export function DatePicker({
  value: valueProp,
  defaultValue,
  min,
  max,
  disabled,
  size: sizeProp,
  className,
  onChange,
}: DatePickerProps) {
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
        "inline-flex w-full max-w-[220px]",
        isDisabled && disabledFieldClass,
        className,
      )}
    >
      <input
        type="date"
        id={item?.id}
        value={value}
        min={min}
        max={max}
        disabled={isDisabled}
        onChange={handleChange}
        className={cn(inputClass, nativePickerClass, inputSizeClass[size])}
        required={item?.required}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      />
    </div>
  );
}

/**
 * Native dual date inputs with optional presets.
 *
 * Gaps vs DatePicker (intentional for now):
 * - Does not bind a single Form.Item `id` (two fields; start gets form id when present).
 * - No calendar popover / day-grid UX — browser native pickers only.
 * - Presets are buttons only; no relative-date helpers.
 */
export interface DateRangePickerProps {
  value?: [string, string];
  defaultValue?: [string, string];
  onChange?: (value: [string, string]) => void;
  presets?: { label: string; value: [string, string] }[];
  /** Caption above the start field. Pass `""` to suppress it (e.g. when a FormItem already labels the range). */
  startLabel?: string;
  /** Caption above the end field. Pass `""` to suppress it. */
  endLabel?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  size?: InputSize;
  className?: string;
}

export function DateRangePicker({
  value: valueProp,
  defaultValue = ["", ""],
  onChange,
  presets = [],
  startLabel = "Start date",
  endLabel = "End date",
  disabled,
  min,
  max,
  size: sizeProp,
  className,
}: DateRangePickerProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const [internal, setInternal] = useState<[string, string]>(defaultValue);
  const isControlled = valueProp !== undefined;
  const range = isControlled ? valueProp : internal;

  const emit = useCallback(
    (next: [string, string]) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const fieldClass = cn(inputClass, nativePickerClass, inputSizeClass[size]);
  const legClass = cn(
    "flex flex-col min-w-0 flex-[1_1_160px] max-w-[220px]",
    isDisabled && disabledFieldClass,
  );

  return (
    <div className={cn("flex flex-col gap-su3 w-full", className)}>
      <div className="flex flex-wrap gap-su3">
        <label className={legClass}>
          {startLabel && <span className={formLabelClass}>{startLabel}</span>}
          <input
            type="date"
            id={item?.id}
            className={fieldClass}
            value={range[0]}
            min={min}
            max={range[1] || max}
            disabled={isDisabled}
            required={item?.required}
            aria-describedby={item?.descriptionId}
            aria-invalid={item?.error ? true : undefined}
            onChange={(e) => emit([e.target.value, range[1]])}
          />
        </label>
        <label className={legClass}>
          {endLabel && <span className={formLabelClass}>{endLabel}</span>}
          <input
            type="date"
            className={fieldClass}
            value={range[1]}
            min={range[0] || min}
            max={max}
            disabled={isDisabled}
            required={item?.required}
            aria-describedby={item?.descriptionId}
            aria-invalid={item?.error ? true : undefined}
            onChange={(e) => emit([range[0], e.target.value])}
          />
        </label>
      </div>
      {presets.length > 0 && (
        <div className="flex flex-wrap gap-su2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="default"
              size="sm"
              disabled={isDisabled}
              onClick={() => emit(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

DatePicker.RangePicker = DateRangePicker;
