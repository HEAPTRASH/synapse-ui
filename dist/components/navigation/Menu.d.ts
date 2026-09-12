import type { ComponentPropsWithRef, MouseEvent, ReactNode } from "react";
export interface MenuItem {
    key: string;
    /** Omit only on `type: "divider"`. */
    label?: ReactNode;
    /** `"item"` (default) · `"group"` — a mono section heading whose children sit at the same depth · `"divider"` — a hairline. */
    type?: "item" | "group" | "divider";
    icon?: ReactNode;
    disabled?: boolean;
    href?: string;
    danger?: boolean;
    /** Native tooltip for a truncated label. Defaults to `label` when it is a string. */
    title?: string;
    children?: MenuItem[];
}
export interface MenuProps extends Omit<ComponentPropsWithRef<"nav">, "onSelect"> {
    items: MenuItem[];
    selectedKey?: string;
    /** `event` is the row's click — call `preventDefault()` to keep an `href` item on the page (router navigation). */
    onSelect?: (key: string, event: MouseEvent) => void;
}
export declare function Menu({ items, selectedKey, onSelect, className, ...rest }: MenuProps): import("react").JSX.Element | null;
//# sourceMappingURL=Menu.d.ts.map