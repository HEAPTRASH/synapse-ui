import type { ElementType, HTMLAttributes, ReactNode } from "react";
export type SurfaceTone = "system" | "systemSecondary" | "systemTertiary" | "grouped" | "groupedSecondary" | "groupedTertiary" | "fill" | "fillSecondary" | "fillTertiary" | "fillQuaternary";
export type SurfaceRadius = "none" | "sm" | "md" | "lg" | "xl";
export type SurfaceElevation = "none" | "1" | "2";
export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    tone?: SurfaceTone;
    /** Kept for API; brand is square (always 0). */
    radius?: SurfaceRadius;
    elevation?: SurfaceElevation;
    children?: ReactNode;
}
/** Content-layer surface. Prefer this over Glass for page content. */
export declare const Surface: import("react").ForwardRefExoticComponent<SurfaceProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Surface.d.ts.map