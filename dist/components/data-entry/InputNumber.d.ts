import { type InputHTMLAttributes } from "react";
import type { InputSize } from "./types";
export interface InputNumberProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange" | "size" | "min" | "max" | "step" | "type"> {
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
export declare function InputNumber({ value: valueProp, defaultValue, min, max, step, disabled, size: sizeProp, className, onChange, id: idProp, onBlur, onKeyDown, ...rest }: InputNumberProps): import("react").JSX.Element;
//# sourceMappingURL=InputNumber.d.ts.map