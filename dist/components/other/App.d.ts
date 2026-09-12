import { type ReactNode } from "react";
import { type ConfigProviderProps } from "../../ConfigProvider";
import { type MessageOptions } from "../feedback/Message";
import { type NotificationProps } from "../feedback/Notification";
interface ModalState {
    open: boolean;
    kind?: "confirm" | "info";
    title?: ReactNode;
    content?: ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: ReactNode;
    cancelText?: ReactNode;
    /** Opt in when the confirmed action destroys something (delete, revoke). */
    danger?: boolean;
}
export interface AppNotificationOptions extends NotificationProps {
    /** Milliseconds before auto-dismiss. 0 keeps it until dismissed. Default 4500. */
    duration?: number;
}
interface AppContextValue {
    notification: {
        open: (options: AppNotificationOptions) => void;
        destroy: () => void;
    };
    message: {
        open: (options: MessageOptions) => void;
        success: (content: ReactNode) => void;
        error: (content: ReactNode) => void;
        info: (content: ReactNode) => void;
        warning: (content: ReactNode) => void;
    };
    modal: {
        confirm: (options: Omit<ModalState, "open" | "kind">) => void;
        info: (options: Omit<ModalState, "open" | "kind" | "danger">) => void;
        destroy: () => void;
    };
}
export interface AppProps extends ConfigProviderProps {
    children: ReactNode;
}
export declare function App({ children, ...config }: AppProps): import("react").JSX.Element;
export declare function useApp(): AppContextValue;
export {};
//# sourceMappingURL=App.d.ts.map