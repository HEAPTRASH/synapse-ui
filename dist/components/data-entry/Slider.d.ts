export interface SliderProps {
    "aria-label"?: string;
    value?: number[];
    defaultValue?: number[];
    min?: number;
    max?: number;
    step?: number;
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    className?: string;
    onValueChange?: (value: number[]) => void;
    onValueCommit?: (value: number[]) => void;
}
export declare function Slider({ value, defaultValue, min, max, step, orientation, disabled, className, onValueChange, onValueCommit, "aria-label": ariaLabel, }: SliderProps): import("react").JSX.Element;
//# sourceMappingURL=Slider.d.ts.map