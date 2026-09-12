import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface PopconfirmProps extends ComponentPropsWithoutRef<typeof AlertDialog.Root> {
    title?: ReactNode;
    description?: ReactNode;
    okText?: ReactNode;
    cancelText?: ReactNode;
    /**
     * Confirm handler. Return a promise to keep the dialog open (confirm button
     * spinning) until it settles; a rejection leaves the dialog open.
     */
    onConfirm?: () => void | Promise<unknown>;
    /** Fired when the user dismisses via Cancel. */
    onCancel?: () => void;
    /** Block the trigger from opening (e.g. the row is already being deleted). */
    disabled?: boolean;
    /** Style the confirm action as destructive (Ant Design `okButtonProps.danger`). */
    okDanger?: boolean;
    /** Alias for `okDanger`. */
    danger?: boolean;
    children: ReactNode;
}
/**
 * Modal confirmation before a consequential action. Uses Radix Alert Dialog
 * (focus trap, inert backdrop) instead of a floating popover.
 */
export declare function Popconfirm({ title, description, okText, cancelText, onConfirm, onCancel, disabled, okDanger, danger, children, open: openProp, defaultOpen, onOpenChange, ...rest }: PopconfirmProps): import("react").JSX.Element;
//# sourceMappingURL=Popconfirm.d.ts.map