import * as RadixProgress from "@radix-ui/react-progress";
import type { ComponentPropsWithoutRef } from "react";
export interface ProgressProps extends ComponentPropsWithoutRef<typeof RadixProgress.Root> {
    type?: "line" | "circle";
    /**
     * Circle: diameter in px (default 100). Line: bar thickness in px (default 6).
     * ponytail: one raw px number for both types, so a size meant for a circle looks
     * absurd on a line; swap for a named scale ("sm" | "md" | "lg") if that bites.
     */
    size?: number;
    /** `null` = indeterminate (unknown duration). */
    value?: number | null;
    max?: number;
    showInfo?: boolean;
    status?: "normal" | "success" | "error";
}
export declare function Progress({ type, size, value, max, showInfo, status, className, ...rest }: ProgressProps): import("react").JSX.Element;
//# sourceMappingURL=Progress.d.ts.map