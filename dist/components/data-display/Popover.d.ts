import * as RadixPopover from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export interface PopoverProps extends Omit<ComponentPropsWithoutRef<typeof RadixPopover.Root>, "children"> {
    trigger: ReactNode;
    content: ReactNode;
    side?: ComponentPropsWithoutRef<typeof RadixPopover.Content>["side"];
    align?: ComponentPropsWithoutRef<typeof RadixPopover.Content>["align"];
    contentClassName?: string;
    /** Portal target; defaults to document.body. For shadow DOM / iframe hosts. */
    container?: HTMLElement | null;
}
export declare function Popover({ trigger, content, side, align, contentClassName, container, ...rest }: PopoverProps): import("react").JSX.Element;
//# sourceMappingURL=Popover.d.ts.map