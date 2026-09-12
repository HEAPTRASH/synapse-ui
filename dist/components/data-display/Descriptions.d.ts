import type { HTMLAttributes, ReactNode } from "react";
export interface DescriptionItem {
    label: ReactNode;
    value?: ReactNode;
    span?: number;
}
export interface DescriptionsProps extends Omit<HTMLAttributes<HTMLDListElement>, "title"> {
    title?: ReactNode;
    /** Right-aligned action beside the title (same idiom as Card). */
    extra?: ReactNode;
    items: DescriptionItem[];
    column?: number;
    bordered?: boolean;
}
export declare function Descriptions({ title, extra, items, column, bordered, className, ...rest }: DescriptionsProps): import("react").JSX.Element;
//# sourceMappingURL=Descriptions.d.ts.map