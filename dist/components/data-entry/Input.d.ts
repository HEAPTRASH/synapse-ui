import { type InputHTMLAttributes, type ReactNode, type Ref } from "react";
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
export declare const inputClass = "w-full min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body su-focus-ring transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent aria-invalid:border-danger placeholder:text-ink-3";
export declare const inputSizeClass: Record<InputSize, string | undefined>;
/**
 * Native `date`/`time` field trim, shared by DatePicker, DateRangePicker and TimePicker.
 * `color-scheme` is inherited from `:root`/`[data-theme]` (tokens.css) — never re-set it here,
 * it would pin the native calendar glyph to the OS theme instead of the app's.
 * The 45% dim lives on the wrapper (as in Input), so it must not be repeated here or it compounds.
 */
export declare const nativePickerClass = "[&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 disabled:cursor-not-allowed";
export declare function Input({ size: sizeProp, prefix, suffix, fullWidth, allowClear, disabled, className, id: idProp, ref, onChange, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ...rest }: InputProps): import("react").JSX.Element;
//# sourceMappingURL=Input.d.ts.map