import type { ReactNode } from "react";
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
export declare const selectTriggerClass = "inline-flex items-center justify-between gap-su2 w-full min-w-0 min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body text-start cursor-pointer su-focus-ring transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:(border-accent shadow-none) data-[state=open]:border-accent aria-invalid:border-danger disabled:(opacity-45 cursor-not-allowed)";
export declare function Select({ value, defaultValue, placeholder, disabled, size: sizeProp, options, className, children, onValueChange, }: SelectProps): import("react").JSX.Element;
//# sourceMappingURL=Select.d.ts.map