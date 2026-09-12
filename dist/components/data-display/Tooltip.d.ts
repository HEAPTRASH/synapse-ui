import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export interface TooltipProps extends ComponentPropsWithoutRef<typeof RadixTooltip.Root> {
    content: ReactNode;
    side?: ComponentPropsWithoutRef<typeof RadixTooltip.Content>["side"];
    align?: ComponentPropsWithoutRef<typeof RadixTooltip.Content>["align"];
    children: ReactNode;
}
export declare function TooltipProvider({ children, ...rest }: ComponentPropsWithoutRef<typeof RadixTooltip.Provider>): import("react").JSX.Element;
/**
 * Requires a parent `TooltipProvider` (or `App`, which mounts one).
 * Avoids nesting a Provider per tooltip instance.
 */
export declare function Tooltip({ content, side, align, children, ...rest }: TooltipProps): import("react").JSX.Element;
export declare namespace Tooltip {
    var Provider: typeof TooltipProvider;
}
//# sourceMappingURL=Tooltip.d.ts.map