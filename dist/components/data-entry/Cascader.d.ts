import { type ReactNode } from "react";
import type { CascaderOption } from "./types";
export interface CascaderProps {
    value?: string[];
    defaultValue?: string[];
    placeholder?: string;
    disabled?: boolean;
    options?: CascaderOption[];
    /** Rendered when the root column has no options. */
    notFoundContent?: ReactNode;
    className?: string;
    /**
     * Fires at every level of the drill-down, not only on leaf selection — the
     * emitted path is what the panel currently shows expanded. Check
     * `value.length` / your own tree if you need "the user finished picking".
     */
    onChange?: (value: string[], labels: string[]) => void;
}
export declare function Cascader({ value: valueProp, defaultValue, placeholder, disabled, options, notFoundContent, className, onChange, }: CascaderProps): import("react").JSX.Element;
//# sourceMappingURL=Cascader.d.ts.map