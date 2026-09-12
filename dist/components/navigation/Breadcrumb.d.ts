import type { HTMLAttributes, Key, MouseEventHandler, ReactNode } from "react";
export interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    /** Stable key; falls back to the array index. */
    key?: Key;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
    items: BreadcrumbItem[];
    separator?: ReactNode;
}
export declare function Breadcrumb({ items, separator, className, ...rest }: BreadcrumbProps): import("react").JSX.Element | null;
//# sourceMappingURL=Breadcrumb.d.ts.map