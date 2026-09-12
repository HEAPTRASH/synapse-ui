import type { HTMLAttributes, ReactNode } from "react";
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    width?: number | string;
    height?: number | string;
    /** 1:1 block sized from `height`. Corners stay square — the brand guide has no radius token. */
    circle?: boolean;
    rows?: number;
    /** When explicitly `false`, render `children` instead of the placeholder. */
    loading?: boolean;
    children?: ReactNode;
}
export declare function Skeleton({ active, width, height, circle, rows, loading, children, className, style, ...rest }: SkeletonProps): import("react").JSX.Element;
//# sourceMappingURL=Skeleton.d.ts.map