import type { HTMLAttributes, ReactNode } from "react";
export type SlotState = "free" | "receiving" | "onhand" | "allocated" | "picking" | "counted";
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Bay mono code, e.g. A-01 */
    code?: ReactNode;
    title?: ReactNode;
    extra?: ReactNode;
    /** Slot-state swatch beside the code */
    state?: SlotState;
    /** Dense panel: canvas ground + hairline box (still square, no shadow) */
    bordered?: boolean;
    /**
     * Paint hook only: sweeps an accent bar on hover / focus-within (interactive bay).
     * It adds no click or keyboard behaviour — put a real focusable element (link,
     * button) in `title`/`children` so keyboard users get the same signal.
     */
    interactive?: boolean;
    children?: ReactNode;
}
export declare function Card({ code, title, extra, state, bordered, interactive, className, children, ...rest }: CardProps): import("react").JSX.Element;
//# sourceMappingURL=Card.d.ts.map