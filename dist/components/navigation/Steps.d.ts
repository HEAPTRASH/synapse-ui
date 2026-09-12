import type { HTMLAttributes, Key, ReactNode } from "react";
export type StepStatus = "wait" | "process" | "finish" | "error";
export interface StepItem {
    title: ReactNode;
    description?: ReactNode;
    /** Overrides the status derived from `current`. */
    status?: StepStatus;
    /** Replaces the step numeral (16px glyph, same box). */
    icon?: ReactNode;
    /** Stable key; falls back to the array index. */
    key?: Key;
}
export interface StepsProps extends HTMLAttributes<HTMLElement> {
    current?: number;
    items: StepItem[];
    direction?: "horizontal" | "vertical";
    status?: StepStatus;
}
/**
 * Layout is vertical-first: the stacked form is the base and the horizontal row
 * is layered on above 532px, which gives Ant's `responsive` behaviour for free
 * (a squeezed row breaks titles one letter per line) from one set of classes.
 * The rail is a single element in both forms — absolutely positioned down the
 * marker column when stacked, a flex item between the title and the next marker
 * when in a row, where its inset/width classes go inert because it is `static`.
 */
export declare function Steps({ current, items, direction, status, className, ...rest }: StepsProps): import("react").JSX.Element | null;
//# sourceMappingURL=Steps.d.ts.map