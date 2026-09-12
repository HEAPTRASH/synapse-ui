import { type HTMLAttributes, type ReactNode } from "react";
import { type SlotSpinnerSize } from "../general/SlotSpinner";
export interface SpinProps extends HTMLAttributes<HTMLDivElement> {
    spinning?: boolean;
    tip?: ReactNode;
    size?: SlotSpinnerSize;
    /** Milliseconds to wait before showing the indicator, so fast loads never flash one. */
    delay?: number;
    children?: ReactNode;
}
export declare function Spin({ spinning, tip, size, delay, className, children, ...rest }: SpinProps): import("react").JSX.Element;
//# sourceMappingURL=Spin.d.ts.map