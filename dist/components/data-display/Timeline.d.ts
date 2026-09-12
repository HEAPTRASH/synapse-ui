import type { HTMLAttributes, ReactNode } from "react";
export interface TimelineItem {
    title?: ReactNode;
    description?: ReactNode;
    dot?: ReactNode;
    color?: "default" | "accent" | "success" | "warning" | "danger";
}
export interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
    items: TimelineItem[];
    pending?: ReactNode;
}
export declare function Timeline({ items, pending, className, ...rest }: TimelineProps): import("react").JSX.Element;
//# sourceMappingURL=Timeline.d.ts.map