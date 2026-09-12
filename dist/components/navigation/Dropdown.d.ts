import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type ButtonProps } from "../general/Button";
export type DropdownProps = DropdownMenu.DropdownMenuProps;
export declare function Dropdown(props: DropdownProps): import("react").JSX.Element;
export type DropdownTriggerProps = DropdownMenu.DropdownMenuTriggerProps & Pick<ButtonProps, "variant" | "size" | "icon" | "iconPlacement">;
export declare function DropdownTrigger({ className, asChild, children, variant, size, icon, iconPlacement, ...rest }: DropdownTriggerProps): import("react").JSX.Element;
export type DropdownContentProps = DropdownMenu.DropdownMenuContentProps & {
    /** Portal target (Ant Design's `getPopupContainer`). Defaults to document.body. */
    container?: HTMLElement | null;
};
export declare function DropdownContent({ className, sideOffset, align, collisionPadding, container, forceMount, ...rest }: DropdownContentProps): import("react").JSX.Element;
/** Shared row vocabulary — items, checkbox/radio items and sub-triggers. */
export declare const dropdownItemClass: string;
export type DropdownItemProps = DropdownMenu.DropdownMenuItemProps & {
    /** Destructive action (delete, revoke) — Ant Design's `items[].danger`. */
    danger?: boolean;
};
export declare function DropdownItem({ className, danger, ...rest }: DropdownItemProps): import("react").JSX.Element;
export type DropdownSeparatorProps = DropdownMenu.DropdownMenuSeparatorProps;
export declare function DropdownSeparator({ className, ...rest }: DropdownSeparatorProps): import("react").JSX.Element;
export type DropdownLabelProps = DropdownMenu.DropdownMenuLabelProps;
export declare function DropdownLabel({ className, ...rest }: DropdownLabelProps): import("react").JSX.Element;
/** Groups items under a DropdownLabel (`role="group"`). */
export type DropdownGroupProps = DropdownMenu.DropdownMenuGroupProps;
export declare function DropdownGroup(props: DropdownGroupProps): import("react").JSX.Element;
export type DropdownSubProps = DropdownMenu.DropdownMenuSubProps;
export declare function DropdownSub(props: DropdownSubProps): import("react").JSX.Element;
export type DropdownSubTriggerProps = DropdownMenu.DropdownMenuSubTriggerProps;
export declare function DropdownSubTrigger({ className, children, ...rest }: DropdownSubTriggerProps): import("react").JSX.Element;
export type DropdownSubContentProps = DropdownMenu.DropdownMenuSubContentProps;
export declare function DropdownSubContent({ className, sideOffset, ...rest }: DropdownSubContentProps): import("react").JSX.Element;
export type DropdownCheckboxItemProps = DropdownMenu.DropdownMenuCheckboxItemProps;
export declare function DropdownCheckboxItem({ className, children, ...rest }: DropdownCheckboxItemProps): import("react").JSX.Element;
export type DropdownRadioGroupProps = DropdownMenu.DropdownMenuRadioGroupProps;
export declare function DropdownRadioGroup(props: DropdownRadioGroupProps): import("react").JSX.Element;
export type DropdownRadioItemProps = DropdownMenu.DropdownMenuRadioItemProps;
export declare function DropdownRadioItem({ className, children, ...rest }: DropdownRadioItemProps): import("react").JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map