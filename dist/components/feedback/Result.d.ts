import type { HTMLAttributes, ReactNode } from "react";
export type ResultStatus = "success" | "error" | "info" | "warning" | "404" | "403" | "500";
export interface ResultProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    status?: ResultStatus;
    title?: ReactNode;
    subTitle?: ReactNode;
    extra?: ReactNode;
    icon?: ReactNode;
}
export declare function Result({ status, title, subTitle, extra, icon, children, className, ...rest }: ResultProps): import("react").JSX.Element;
//# sourceMappingURL=Result.d.ts.map