import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
    striped?: boolean;
    bordered?: boolean;
    children?: ReactNode;
}
export declare function Table({ striped, bordered, className, children, ...rest }: TableProps): import("react").JSX.Element;
export declare namespace Table {
    var Head: typeof TableHead;
    var Body: typeof TableBody;
    var Row: typeof TableRow;
    var Th: typeof TableTh;
    var Td: typeof TableTd;
}
export declare function TableHead({ className, children, ...rest }: HTMLAttributes<HTMLTableSectionElement>): import("react").JSX.Element;
export declare function TableBody({ className, children, ...rest }: HTMLAttributes<HTMLTableSectionElement>): import("react").JSX.Element;
export declare function TableRow({ className, children, ...rest }: HTMLAttributes<HTMLTableRowElement>): import("react").JSX.Element;
export declare function TableTh({ className, children, ...rest }: ThHTMLAttributes<HTMLTableCellElement>): import("react").JSX.Element;
export declare function TableTd({ className, children, ...rest }: TdHTMLAttributes<HTMLTableCellElement>): import("react").JSX.Element;
//# sourceMappingURL=Table.d.ts.map