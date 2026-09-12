import type { HTMLAttributes, ReactNode } from "react";
export type TagColor = "default" | "accent" | "success" | "warning" | "danger";
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    color?: TagColor;
    closable?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}
export declare function Tag({ color, closable, onClose, className, children, ...rest }: TagProps): import("react").JSX.Element;
//# sourceMappingURL=Tag.d.ts.map