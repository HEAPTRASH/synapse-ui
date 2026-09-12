import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export interface ModalProps extends ComponentPropsWithoutRef<typeof Dialog.Root>, Pick<ComponentPropsWithoutRef<typeof Dialog.Content>, "onEscapeKeyDown" | "onPointerDownOutside" | "onInteractOutside" | "onOpenAutoFocus" | "onCloseAutoFocus"> {
    title?: ReactNode;
    /** Accessible (and optionally visible) description for the dialog. */
    description?: ReactNode;
    /** When true, show `description` in the body instead of sr-only. */
    showDescription?: boolean;
    footer?: ReactNode;
    width?: number | string;
    children?: ReactNode;
    trigger?: ReactNode;
    /** Set false to hide the close icon (mandatory-choice dialogs). */
    closable?: boolean;
}
export declare function Modal({ title, description, showDescription, footer, width, children, trigger, closable, onEscapeKeyDown, onPointerDownOutside, onInteractOutside, onOpenAutoFocus, onCloseAutoFocus, ...rest }: ModalProps): import("react").JSX.Element;
//# sourceMappingURL=Modal.d.ts.map