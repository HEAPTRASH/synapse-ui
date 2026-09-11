import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  children?: ReactNode;
}

const cellClass = "py-su3 px-su4 text-start border-b border-solid border-rule";

export function Table({ striped = false, bordered = false, className, children, ...rest }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-none bg-paper border-t border-solid border-rule-strong">
      <table
        className={cn(
          "w-full border-collapse text-subhead",
          "[&_tbody_tr]:transition-colors [&_tbody_tr]:duration-[var(--su-duration-fast)] [&_tbody_tr]:ease-[var(--su-ease-out)]",
          "[@media(hover:hover)]:[&_tbody_tr:hover]:bg-fill-tertiary",
          bordered && "border border-solid border-rule border-t-rule-strong",
          striped && "[&_tbody_tr:nth-child(even)]:bg-canvas",
          className,
        )}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHead({ className, children, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={cn("bg-canvas", className)} {...rest}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={className} {...rest}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  // `last:[&_td]:…` compiled to `tr td:last-child` (dropping the LAST COLUMN's
  // rule in every row); `&:last-child td` is the row-scoped form that works.
  return (
    <tr className={cn("[&:last-child_td]:border-b-0", className)} {...rest}>
      {children}
    </tr>
  );
}

export function TableTh({ className, children, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        cellClass,
        "su-label whitespace-nowrap text-label-secondary",
        className,
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

export function TableTd({ className, children, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn(cellClass, "text-label", className)} {...rest}>
      {children}
    </td>
  );
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Th = TableTh;
Table.Td = TableTd;
