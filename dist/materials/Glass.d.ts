import type { ComponentPropsWithRef, ElementType, ReactElement, ReactNode } from "react";
import { type ChromeStrength as ChromeRimStrength } from "./Chrome";
export type GlassVariant = "regular" | "clear";
export type GlassRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
/** Chrome's rim strengths plus "none" (Glass can opt out; Chrome always draws). */
export type ChromeStrength = ChromeRimStrength | "none";
type GlassOwnProps<C extends ElementType> = {
    as?: C;
    variant?: GlassVariant;
    /** Uses --su-glass-bg-elevated instead of --su-glass-bg. Never a shadow. */
    elevated?: boolean;
    /** Clear glass only: dim backdrop for legibility over bright media */
    dim?: boolean;
    /** Kept for API; brand is square (always 0). */
    radius?: GlassRadius;
    chrome?: ChromeStrength;
    children?: ReactNode;
};
/**
 * Polymorphic: `as` also types that element's native props and `ref`.
 *
 * Legibility: text placed directly in Glass sits over a blurred, moving
 * backdrop — use the `label` / `label-secondary` tiers only, never
 * `label-tertiary` / `label-quaternary`.
 */
export type GlassProps<C extends ElementType = "div"> = GlassOwnProps<C> & Omit<ComponentPropsWithRef<C>, keyof GlassOwnProps<C>>;
/** Material/floating layer only — never the content layer (use Surface there). */
export declare const Glass: <C extends ElementType = "div">(props: GlassProps<C>) => ReactElement;
export {};
//# sourceMappingURL=Glass.d.ts.map