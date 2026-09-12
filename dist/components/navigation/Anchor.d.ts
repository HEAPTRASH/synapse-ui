import { type ComponentPropsWithRef } from "react";
export interface AnchorItem {
    href: string;
    title: string;
}
export interface AnchorProps extends Omit<ComponentPropsWithRef<"nav">, "onChange"> {
    items: AnchorItem[];
    /** Pixel offset from top when determining and scrolling to the active section */
    offset?: number;
    getContainer?: () => HTMLElement | null;
    /** Fired when the active section changes, with its href (`#id`). */
    onChange?: (activeHref: string) => void;
}
export declare function Anchor({ items, offset, getContainer, onChange, className, ...rest }: AnchorProps): import("react").JSX.Element | null;
//# sourceMappingURL=Anchor.d.ts.map