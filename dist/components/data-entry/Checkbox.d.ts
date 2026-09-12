import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { ReactNode } from "react";
/** Radix's own tri-state: `true` | `false` | `"indeterminate"` (renders `aria-checked="mixed"`). */
export type CheckboxState = CheckboxPrimitive.CheckedState;
export interface CheckboxProps {
    "aria-label"?: string;
    "aria-labelledby"?: string;
    checked?: CheckboxState;
    defaultChecked?: CheckboxState;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    id?: string;
    className?: string;
    children?: ReactNode;
    /** `checked` collapses `"indeterminate"` to `false`; read `state` for the raw tri-state. */
    onCheckedChange?: (checked: boolean, state: CheckboxState) => void;
}
export declare function Checkbox({ checked, defaultChecked, disabled, required, name, value, id: idProp, className, children, onCheckedChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: CheckboxProps): import("react").JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map