import type { HTMLAttributes } from "react";
export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
    current: number;
    /**
     * Without `pageSize`: total number of **pages** (Synapse's historical meaning).
     * With `pageSize`: total number of **items**, Ant Design style — the page count
     * is then `Math.ceil(total / pageSize)`.
     */
    total?: number;
    /** Alias for `total` — total page count. Ignored when `pageSize` is set. */
    totalPages?: number;
    /** Items per page. Setting it switches `total` to Ant's item-count semantics. */
    pageSize?: number;
    onChange?: (page: number, pageSize?: number) => void;
    siblingCount?: number;
    /** Freeze the whole control (e.g. while the table is fetching). */
    disabled?: boolean;
    /** Render nothing when there is only one page. */
    hideOnSinglePage?: boolean;
}
/** Public helper (exported as `paginationRange`); also used by `getPageItems`. */
declare function range(start: number, end: number): number[];
export declare function Pagination({ current, total: totalProp, totalPages, pageSize, onChange, siblingCount, disabled, hideOnSinglePage, className, ...rest }: PaginationProps): import("react").JSX.Element | null;
export { range as paginationRange };
//# sourceMappingURL=Pagination.d.ts.map