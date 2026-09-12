import type { ReactNode } from "react";
export interface SwitchProps {
    "aria-label"?: string;
    "aria-labelledby"?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    /** Async toggle in flight: shows a slot spinner in the thumb and blocks input. */
    loading?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    id?: string;
    className?: string;
    children?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
}
/** ponytail: no `size` variant or ref forwarding (siblings have neither) — add when a caller needs one. */
export declare function Switch({ checked, defaultChecked, disabled, loading, required, name, value, id: idProp, className, children, onCheckedChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: SwitchProps): import("react").JSX.Element;
//# sourceMappingURL=Switch.d.ts.map