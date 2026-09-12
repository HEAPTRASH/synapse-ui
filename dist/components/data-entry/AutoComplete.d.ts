import { type FocusEvent, type ReactNode } from "react";
import type { InputSize, SelectOption } from "./types";
export interface AutoCompleteProps {
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: InputSize;
    options?: SelectOption[];
    filterOption?: (input: string, option: SelectOption) => boolean;
    className?: string;
    /** Native input id — also the target of an external `<label for>`. */
    id?: string;
    /** Native input name, so the field is picked up by form submission / FormData. */
    name?: string;
    /** Show a clear affix once there is a value. */
    allowClear?: boolean;
    /** Suggestions are in flight — shows a searching row instead of "no matches". */
    loading?: boolean;
    /** Replaces the default "No matches" row. */
    notFoundContent?: ReactNode;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    /** Fires with the visible text — including the option's `label` when one is picked. */
    onChange?: (value: string) => void;
    /** Fires with the option's `value`; the input shows `label`, so don't feed this back into `value`. */
    onSelect?: (value: string, option: SelectOption) => void;
    onClear?: () => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
/** Anchored suggestion surface. The parent must be `relative`. */
export declare const comboboxPanelClass = "absolute top-full left-0 right-0 z-[var(--su-z-dropdown)] overflow-y-auto overscroll-contain max-h-[min(var(--su-dropdown-max-h),50vh)] mt-su1 p-su1 border border-solid border-rule-strong contrast-more:border-2 rounded-none bg-paper shadow-none animate-su-dropdown-in motion-reduce:animate-none";
/** Empty / busy row — the brand's mono label recipe. */
export declare const comboboxNoticeClass = "px-su3 py-su3 su-label text-ink-2 text-start";
/** One suggestion: 44px to press, accent rail on the keyboard-active row. */
export declare const comboboxOptionClass = "flex items-center w-full min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none bg-transparent text-ink text-body text-start [overflow-wrap:anywhere] cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-secondary data-[active]:(bg-fill-secondary shadow-[inset_2px_0_0_var(--su-accent)]) contrast-more:data-[active]:(bg-accent text-on-action) data-[disabled]:(text-ink-3 opacity-45 pointer-events-none cursor-not-allowed)";
/** Default empty-state copy, shared so both components say the same thing. */
export declare const NO_MATCHES = "No matches";
export declare function AutoComplete({ value: valueProp, defaultValue, placeholder, disabled, size, options, filterOption, className, id, name, allowClear, loading, notFoundContent, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, onChange, onSelect, onClear, onFocus, onBlur, }: AutoCompleteProps): import("react").JSX.Element;
//# sourceMappingURL=AutoComplete.d.ts.map