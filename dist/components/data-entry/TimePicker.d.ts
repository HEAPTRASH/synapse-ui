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
export declare function TimePicker({ value: valueProp, defaultValue, min, max, step, disabled, size: sizeProp, className, onChange, id: idProp, name, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: TimePickerProps): import("react").JSX.Element;
//# sourceMappingURL=TimePicker.d.ts.map