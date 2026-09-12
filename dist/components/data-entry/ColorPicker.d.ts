import { type InputHTMLAttributes } from "react";
import type { InputSize } from "./types";
export interface ColorPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "onChange" | "type"> {
    value?: string;
    defaultValue?: string;
    size?: InputSize;
    disabled?: boolean;
    showText?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}
export declare function ColorPicker({ value: valueProp, defaultValue, size: sizeProp, disabled, showText, className, onChange, id: idProp, ...rest }: ColorPickerProps): import("react").JSX.Element;
//# sourceMappingURL=ColorPicker.d.ts.map