import type { HTMLAttributes, ReactNode } from "react";
export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
    title?: ReactNode;
    description?: ReactNode;
    extra?: ReactNode;
    avatar?: ReactNode;
    /**
     * Clickable row: pointer cursor, hover fill, 44px hit target and a square focus ring.
     * With `onClick` it also becomes a keyboard target (role="button", Enter/Space).
     */
    interactive?: boolean;
    children?: ReactNode;
}
export declare function ListItem({ title, description, extra, avatar, interactive, className, children, onClick, onKeyDown, ...rest }: ListItemProps): import("react").JSX.Element;
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
    bordered?: boolean;
    split?: boolean;
    children?: ReactNode;
}
/**
 * Static list primitive. For the zero-item case render `<Empty description="No results" />`
 * instead of an empty `<List>`; for thousands of rows use `Listy` (virtualized).
 */
export declare function List({ bordered, split, className, children, ...rest }: ListProps): import("react").JSX.Element;
export declare namespace List {
    var Item: typeof ListItem;
}
//# sourceMappingURL=List.d.ts.map