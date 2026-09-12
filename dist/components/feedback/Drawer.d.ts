import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export interface DrawerProps extends ComponentPropsWithoutRef<typeof Dialog.Root> {
    title?: ReactNode;
    description?: ReactNode;
    placement?: "left" | "right";
    width?: number | string;
    /** Pinned action bar below the scroll region (Apply / Cancel). */
    footer?: ReactNode;
    children?: ReactNode;
    trigger?: ReactNode;
}
export declare function Drawer({ title, description, placement, width, footer, children, trigger, ...rest }: DrawerProps): import("react").JSX.Element;
//# sourceMappingURL=Drawer.d.ts.map