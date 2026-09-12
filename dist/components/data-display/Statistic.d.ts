import type { HTMLAttributes, ReactNode } from "react";
export interface StatisticProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "prefix"> {
    title?: ReactNode;
    value?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    description?: ReactNode;
}
export declare function Statistic({ title, value, prefix, suffix, description, className, ...rest }: StatisticProps): import("react").JSX.Element;
//# sourceMappingURL=Statistic.d.ts.map