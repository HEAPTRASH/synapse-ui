import {
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import type { InputSize } from "./types";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
  fullWidth?: boolean;
  /** Show a clear glyph while the field has content. It takes the suffix slot. */
  allowClear?: boolean;
  ref?: Ref<HTMLInputElement>;
}

/** Shared control field surface — Input, DatePicker, TimePicker, InputNumber */
export const inputClass =
  "w-full min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body su-focus-ring transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent aria-invalid:border-danger placeholder:text-ink-3";

export const inputSizeClass: Record<InputSize, string | undefined> = {
  sm: "min-h-[var(--su-control-sm)] text-footnote",
  md: "min-h-[var(--su-control-md)]",
  lg: undefined,
};

/**
 * Native `date`/`time` field trim, shared by DatePicker, DateRangePicker and TimePicker.
 * `color-scheme` is inherited from `:root`/`[data-theme]` (tokens.css) — never re-set it here,
 * it would pin the native calendar glyph to the OS theme instead of the app's.
 * The 45% dim lives on the wrapper (as in Input), so it must not be repeated here or it compounds.
 */
export const nativePickerClass =
  "[&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 disabled:cursor-not-allowed";

// Click-through for plain text/icon affixes; anything nested (a button, a link) stays pressable.
const affixClass =
  "absolute flex items-center text-label-tertiary pointer-events-none [&_*]:pointer-events-auto";

export function Input({
  size: sizeProp,
  prefix,
  suffix,
  fullWidth = true,
  allowClear,
  disabled,
  className,
  id: idProp,
  ref,
  onChange,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ...rest
}: InputProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const node = useRef<HTMLInputElement>(null);
  const [filled, setFilled] = useState(() => String(rest.defaultValue ?? "") !== "");
  const showClear =
    allowClear === true &&
    !isDisabled &&
    (rest.value != null ? String(rest.value) !== "" : filled);

  const setNode = (el: HTMLInputElement | null) => {
    node.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  const clear = () => {
    const el = node.current;
    if (!el) return;
    // Native setter + input event, so controlled consumers hear it through onChange.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(el, "");
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.focus();
  };

  return (
    <div
      className={cn(
        "relative flex items-center",
        fullWidth && "w-full",
        isDisabled && "opacity-45 cursor-not-allowed",
      )}
    >
      {prefix && <span className={cn(affixClass, "start-[var(--su-space-3)]")}>{prefix}</span>}
      <input
        id={idProp ?? item?.id}
        disabled={isDisabled}
        className={cn(
          inputClass,
          inputSizeClass[size],
          prefix != null && "ps-su8",
          showClear ? "pe-11" : suffix != null && "pe-su8",
          className,
        )}
        required={item?.required}
        {...rest}
        ref={setNode}
        onChange={
          allowClear
            ? (e: ChangeEvent<HTMLInputElement>) => {
                setFilled(e.target.value !== "");
                onChange?.(e);
              }
            : onChange
        }
        aria-describedby={ariaDescribedBy ?? item?.descriptionId}
        aria-invalid={ariaInvalid ?? (item?.error ? true : undefined)}
      />
      {showClear ? (
        <button
          type="button"
          aria-label="Clear"
          onClick={clear}
          className="absolute end-0 inset-y-0 flex items-center justify-center w-11 p-0 before:(absolute content-[''] start-0 end-0 top-1/2 -translate-y-1/2 h-[var(--su-hit-target)]) border-none bg-transparent font-sans text-body leading-none text-label-tertiary cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:text-ink"
        >
          ×
        </button>
      ) : (
        suffix && <span className={cn(affixClass, "end-[var(--su-space-3)]")}>{suffix}</span>
      )}
    </div>
  );
}
