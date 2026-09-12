import * as Separator from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export type DividerSpacing = "none" | "compact" | "default";
export interface DividerProps extends Omit<ComponentPropsWithoutRef<typeof Separator.Root>, "children"> {
    orientation?: "horizontal" | "vertical";
    /** `false` when the rule separates genuinely distinct groups; leave `true` for visual rhythm. */
    decorative?: boolean;
    /** Hairline (10%/12%) by default; `"strong"` is the brand's bay-top / table-head rule (22%/24%). */
    strength?: "hairline" | "strong";
    /** Block margin on a horizontal rule, inline margin on a vertical one. */
    spacing?: DividerSpacing;
    /** Mono eyebrow sitting on the rule. Ignored when `orientation="vertical"` (as in Ant).
     *  Note: `asChild` is ignored while `children` is set — the labelled rule is a plain row. */
    children?: ReactNode;
    labelPlacement?: "start" | "center" | "end";
}
/**
 * Anything the component already sets (colour, size, margin) loses to its own
 * utilities regardless of class order — UnoCSS decides by stylesheet order, not
 * attribute order. Use the props above, or the important prefix: `className="bg-rule-strong!"`.
 */
export declare function Divider({ orientation, decorative, strength, spacing, labelPlacement, children, className, asChild, ...rest }: DividerProps): import("react").JSX.Element;
//# sourceMappingURL=Divider.d.ts.map