import type { ReactNode } from "react";
export interface RadioOption {
    label: ReactNode;
    value: string;
    disabled?: boolean;
}
export interface RadioGroupProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;
    direction?: "vertical" | "horizontal";
    options?: RadioOption[];
    className?: string;
    children?: ReactNode;
    onValueChange?: (value: string) => void;
}
export interface RadioProps {
    value: string;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
}
export declare function RadioGroupRoot({ value, defaultValue, disabled, name, direction, options, className, children, onValueChange, }: RadioGroupProps): import("react").JSX.Element;
export declare function Radio({ value, disabled, className, children }: RadioProps): import("react").JSX.Element;
export { RadioGroupRoot as RadioGroup };
//# sourceMappingURL=Radio.d.ts.map