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
export declare function DatePicker({ value: valueProp, defaultValue, min, max, disabled, size: sizeProp, className, onChange, }: DatePickerProps): import("react").JSX.Element;
export declare namespace DatePicker {
    var RangePicker: typeof DateRangePicker;
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
    presets?: {
        label: string;
        value: [string, string];
    }[];
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
export declare function DateRangePicker({ value: valueProp, defaultValue, onChange, presets, startLabel, endLabel, disabled, min, max, size: sizeProp, className, }: DateRangePickerProps): import("react").JSX.Element;
//# sourceMappingURL=DatePicker.d.ts.map