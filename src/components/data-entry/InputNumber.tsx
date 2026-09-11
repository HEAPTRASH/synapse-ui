import {
  useCallback,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import { inputClass, inputSizeClass } from "./Input";
import type { InputSize } from "./types";

export interface InputNumberProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue" | "onChange" | "size" | "min" | "max" | "step" | "type"
  > {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  onChange?: (value: number | undefined) => void;
}

function clamp(value: number, min?: number, max?: number): number {
  let next = value;
  if (min != null && next < min) next = min;
  if (max != null && next > max) next = max;
  return next;
}

/** Decimal places a step carries, exponential notation ("1e-7" → 7) included. */
function stepDecimals(step: number) {
  const [mantissa, exponent] = String(step).toLowerCase().split("e");
  const fraction = (mantissa.split(".")[1] ?? "").length;
  return Math.min(100, Math.max(0, fraction - Number(exponent ?? 0)));
}

/** Clamp, then round away float drift (0.1 + 0.2) to the step's own precision. */
function normalize(value: number, min: number | undefined, max: number | undefined, step: number) {
  return Number(clamp(value, min, max).toFixed(stepDecimals(step)));
}

const stepperClass =
  // 44px floor, never below the hit target, whatever `size` the input uses (same
  // tradeoff Segmented makes). Inset ring: the segment is fused to its neighbours.
  "inline-flex items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] px-[var(--su-space-2)] py-0 border border-solid border-rule rounded-none bg-canvas text-ink text-body cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none hover:not-disabled:bg-fill focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[calc(var(--su-focus-ring-offset)*-1)] disabled:opacity-45 disabled:cursor-not-allowed";

export function InputNumber({
  value: valueProp,
  defaultValue,
  min,
  max,
  step = 1,
  disabled,
  size: sizeProp,
  className,
  onChange,
  id: idProp,
  onBlur,
  onKeyDown,
  ...rest
}: InputNumberProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const [internal, setInternal] = useState<number | undefined>(defaultValue);
  // Raw text while the user is mid-typing; cleared (and clamped) on commit.
  const [draft, setDraft] = useState<string | null>(null);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;

  const emit = useCallback(
    (next: number | undefined) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    setDraft(raw);
    if (raw === "" || raw === "-") {
      emit(undefined);
      return;
    }
    const parsed = Number(raw);
    // Report what was typed as-is; min/max are enforced on commit so typing "99"
    // into a max=10 field isn't hijacked after the first digit.
    if (!Number.isNaN(parsed)) emit(parsed);
  };

  const commit = () => {
    setDraft(null);
    if (value != null) {
      const next = normalize(value, min, max, step);
      if (next !== value) emit(next);
    }
  };

  const stepBy = (delta: number) => {
    setDraft(null);
    emit(normalize((value ?? min ?? 0) + delta, min, max, step));
  };

  return (
    <div className={cn("inline-flex items-stretch w-full max-w-[200px]", className)}>
      <button
        type="button"
        className={stepperClass}
        disabled={isDisabled || (min != null && (value ?? min) <= min)}
        onClick={() => stepBy(-step)}
        aria-label="Decrease"
      >
        −
      </button>
      <input
        type="number"
        id={idProp ?? item?.id}
        disabled={isDisabled}
        value={draft ?? value ?? ""}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        onBlur={(event: FocusEvent<HTMLInputElement>) => {
          commit();
          onBlur?.(event);
        }}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            // Only swallow the key when the draft still needs clamping — a native
            // submit here would otherwise post the pre-commit value. A value that
            // is already valid keeps the browser's "Enter submits the form".
            if (value != null && normalize(value, min, max, step) !== value) {
              event.preventDefault();
            }
            commit();
          }
          onKeyDown?.(event);
        }}
        className={cn(
          inputClass,
          inputSizeClass[size],
          "flex-1 min-w-0 text-center rounded-none border-l-0 border-r-0",
          // Contained ring: the segment is fused to the steppers, so the standard
          // 3px offset would bleed over them.
          "focus:outline-offset-[calc(var(--su-focus-ring-offset)*-1)]",
          "disabled:opacity-45 disabled:cursor-not-allowed",
          // Native chevrons are a rounded second stepper next to ours.
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:(appearance-none m-0)",
        )}
        required={item?.required}
        {...rest}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      />
      <button
        type="button"
        className={stepperClass}
        disabled={isDisabled || (max != null && (value ?? max) >= max)}
        onClick={() => stepBy(step)}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}
