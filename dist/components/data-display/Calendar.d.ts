import { type HTMLAttributes, type ReactNode } from "react";
export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue" | "value"> {
    fullscreen?: boolean;
    /** Extra line under the day number — an event title, a count. Truncated to one line. */
    dateRender?: (date: Date) => ReactNode;
    /** Blocks a date: not selectable, muted, still reachable by keyboard. */
    disabledDate?: (date: Date) => boolean;
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
}
export declare function Calendar({ value, fullscreen, dateRender, disabledDate, defaultValue, onChange, className, ...rest }: CalendarProps): import("react").JSX.Element;
//# sourceMappingURL=Calendar.d.ts.map