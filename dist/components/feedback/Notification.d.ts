import type { HTMLAttributes, ReactNode } from "react";
import { type FeedbackTone } from "./shared";
export type NotificationType = FeedbackTone;
export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    type?: NotificationType;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
    onClose?: () => void;
}
export declare function Notification({ type, title, description, icon, action, onClose, className, children, ...rest }: NotificationProps): import("react").JSX.Element;
export declare namespace Notification {
    var Stack: typeof NotificationStack;
}
export interface NotificationStackProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export declare function NotificationStack({ className, children, ...rest }: NotificationStackProps): import("react").JSX.Element;
//# sourceMappingURL=Notification.d.ts.map