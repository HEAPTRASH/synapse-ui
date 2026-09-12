import * as ScrollArea from "@radix-ui/react-scroll-area";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface ListyProps extends ComponentPropsWithoutRef<typeof ScrollArea.Root> {
    height?: number | string;
    /** Virtual rows have a fixed height; disable virtualization for variable-height content. */
    itemHeight?: number;
    overscan?: number;
    virtual?: boolean;
    children?: ReactNode;
}
export declare function Listy({ height, itemHeight, overscan, virtual, className, children, style, ...rest }: ListyProps): import("react").JSX.Element;
export declare namespace Listy {
    var Item: typeof ListyItem;
}
export interface ListyItemProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
    /** Slots mirror List.Item; omit them all for a bare `children` row. */
    title?: ReactNode;
    description?: ReactNode;
    avatar?: ReactNode;
    extra?: ReactNode;
    children?: ReactNode;
}
export declare function ListyItem({ title, description, avatar, extra, className, children, ...rest }: ListyItemProps): import("react").JSX.Element;
//# sourceMappingURL=Listy.d.ts.map