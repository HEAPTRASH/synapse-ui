import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
export type ButtonVariant = "default" | "primary" | "ghost" | "dashed" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonIconPlacement = "start" | "end";
export type ButtonLoading = boolean | {
    delay?: number;
    icon?: ReactNode;
};
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export interface ButtonProps extends Omit<NativeButtonProps, "type" | "children">, Pick<NativeAnchorProps, "download" | "hrefLang" | "ping" | "referrerPolicy"> {
    variant?: ButtonVariant;
    /** @deprecated Prefer `variant`. Ant Design–style alias (not the native button type). */
    type?: "primary" | "default" | "dashed" | "link" | "text" | "ghost" | "submit" | "reset" | "button";
    size?: ButtonSize;
    block?: boolean;
    asChild?: boolean;
    /** Destructive action (delete, revoke). */
    danger?: boolean;
    loading?: ButtonLoading;
    icon?: ReactNode;
    iconPlacement?: ButtonIconPlacement;
    /** Opt-in trailing arrow (marketing text links). Off by default. */
    arrow?: boolean;
    /**
     * Drop the primary variant's scan end-cell and centre the label instead —
     * for dense 50/50 footers (Popconfirm, Modal, Drawer). No effect elsewhere.
     */
    hideEndCell?: boolean;
    /** Render as anchor when set (same as Ant Design `href`). */
    href?: string;
    target?: NativeAnchorProps["target"];
    rel?: string;
    /** Native button `type` attribute. */
    htmlType?: NativeButtonProps["type"];
    children?: ReactNode;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Button.d.ts.map