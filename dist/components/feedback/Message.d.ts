import { type ReactNode } from "react";
import { type FeedbackTone } from "./shared";
export type MessageType = FeedbackTone;
export interface MessageOptions {
    content: ReactNode;
    type?: MessageType;
    duration?: number;
    icon?: ReactNode;
}
interface MessageContextValue {
    open: (options: MessageOptions) => void;
    success: (content: ReactNode) => void;
    error: (content: ReactNode) => void;
    info: (content: ReactNode) => void;
    warning: (content: ReactNode) => void;
}
export declare function MessageProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useMessage(): MessageContextValue;
/** Imperative helper when provider is mounted via App */
export declare const message: {
    _api: MessageContextValue | null;
    useBind(api: MessageContextValue): void;
    open(opts: MessageOptions): void;
    success(content: ReactNode): void;
    error(content: ReactNode): void;
    info(content: ReactNode): void;
    warning(content: ReactNode): void;
};
export {};
//# sourceMappingURL=Message.d.ts.map