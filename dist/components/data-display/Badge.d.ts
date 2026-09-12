import type { HTMLAttributes, ReactNode } from "react";
export type BadgeVariant = "default" | "success" | "warning" | "danger";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    count?: number;
    dot?: boolean;
    max?: number;
    showZero?: boolean;
    variant?: BadgeVariant;
    children?: ReactNode;
}
export declare function Badge({ count, dot, max, showZero, variant, className, children, title, ...rest }: BadgeProps): import("react").JSX.Element;
//# sourceMappingURL=Badge.d.ts.map