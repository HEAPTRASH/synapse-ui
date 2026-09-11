import * as Toast from "@radix-ui/react-toast";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useConfig } from "../../ConfigProvider";
import { cn } from "../../utils/cn";
import { dismissButtonClass, toneBorderClass, type FeedbackTone } from "./shared";

export type MessageType = FeedbackTone;

export interface MessageOptions {
  content: ReactNode;
  type?: MessageType;
  duration?: number;
  icon?: ReactNode;
}

interface MessageItem extends MessageOptions {
  id: string;
}

interface MessageContextValue {
  open: (options: MessageOptions) => void;
  success: (content: ReactNode) => void;
  error: (content: ReactNode) => void;
  info: (content: ReactNode) => void;
  warning: (content: ReactNode) => void;
}

const MessageContext = createContext<MessageContextValue | null>(null);

let idCounter = 0;

export function MessageProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<MessageItem[]>([]);

  const { direction } = useConfig();

  const open = useCallback((options: MessageOptions) => {
    const id = `msg-${++idCounter}`;
    setItems((prev) => [...prev, { ...options, id }]);
  }, []);

  const api = useMemo<MessageContextValue>(
    () => ({
      open,
      success: (content) => open({ content, type: "success" }),
      error: (content) => open({ content, type: "error" }),
      info: (content) => open({ content, type: "info" }),
      warning: (content) => open({ content, type: "warning" }),
    }),
    [open],
  );

  // Binds the imperative `message` helper. Without this every message.* call
  // is a silent no-op.
  useEffect(() => {
    message._api = api;
    return () => {
      if (message._api === api) message._api = null;
    };
  }, [api]);

  return (
    <MessageContext.Provider value={api}>
      <Toast.Provider swipeDirection={direction === "rtl" ? "left" : "right"}>
        {children}
        {items.map((item) => (
          <Toast.Root
            key={item.id}
            className={cn(
              "flex items-center gap-su3 py-su3 px-su4 rounded-none bg-paper shadow-none border border-solid border-rule border-t-rule-strong",
              "data-[state=open]:animate-su-rise-in motion-reduce:animate-none",
              "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:(transition-transform duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)])",
              toneBorderClass[item.type ?? "info"],
            )}
            duration={item.duration === 0 ? Infinity : (item.duration ?? 3000)}
            onOpenChange={(open) => {
              if (!open) setItems((previous) => previous.filter((entry) => entry.id !== item.id));
            }}
          >
            {item.icon ? <div className="shrink-0 text-label-secondary">{item.icon}</div> : null}
            <Toast.Description className="flex-1 text-subhead text-label">
              {item.content}
            </Toast.Description>
            <Toast.Close
              className={dismissButtonClass}
              aria-label="Dismiss"
            >
              ×
            </Toast.Close>
          </Toast.Root>
        ))}
        <Toast.Viewport className="fixed top-su4 left-1/2 -translate-x-1/2 z-[var(--su-z-toast)] flex flex-col gap-su2 w-[min(420px,calc(100vw-var(--su-space-8)))] outline-none" />
      </Toast.Provider>
    </MessageContext.Provider>
  );
}

export function useMessage(): MessageContextValue {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error("useMessage must be used within MessageProvider");
  return ctx;
}

/** Imperative helper when provider is mounted via App */
export const message = {
  _api: null as MessageContextValue | null,
  useBind(api: MessageContextValue) {
    message._api = api;
  },
  open(opts: MessageOptions) {
    message._api?.open(opts);
  },
  success(content: ReactNode) {
    message._api?.success(content);
  },
  error(content: ReactNode) {
    message._api?.error(content);
  },
  info(content: ReactNode) {
    message._api?.info(content);
  },
  warning(content: ReactNode) {
    message._api?.warning(content);
  },
};
