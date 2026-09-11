import * as Toast from "@radix-ui/react-toast";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ConfigProvider, type ConfigProviderProps } from "../../ConfigProvider";
import {
  MessageProvider,
  useMessage,
  type MessageOptions,
} from "../feedback/Message";
import { Modal } from "../feedback/Modal";
import { Notification, type NotificationProps } from "../feedback/Notification";
import { Button } from "../general/Button";
import { TooltipProvider } from "../data-display/Tooltip";

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

const AppContext = createContext<AppContextValue | null>(null);

let notificationId = 0;

function AppInner({ children }: { children: ReactNode }) {
  const msg = useMessage();
  const [notifications, setNotifications] = useState<
    Array<AppNotificationOptions & { key: number }>
  >([]);
  const [modal, setModal] = useState<ModalState>({ open: false });

  const closeNotification = useCallback(
    (key: number) => setNotifications((prev) => prev.filter((n) => n.key !== key)),
    [],
  );

  const notificationApi = useMemo(
    () => ({
      open: (options: AppNotificationOptions) =>
        setNotifications((prev) => [...prev, { ...options, key: ++notificationId }]),
      destroy: () => setNotifications([]),
    }),
    [],
  );

  const closeModal = useCallback(() => setModal({ open: false }), []);

  // Every dismissal path (Escape, outside click, header ✕, Cancel) runs this,
  // so `onCancel` can't be skipped by three of the four.
  const cancelModal = useCallback(() => {
    modal.onCancel?.();
    closeModal();
  }, [modal, closeModal]);

  const modalApi = useMemo(
    () => ({
      confirm: (options: Omit<ModalState, "open" | "kind">) =>
        setModal({ ...options, open: true, kind: "confirm" }),
      info: (options: Omit<ModalState, "open" | "kind" | "danger">) =>
        setModal({ ...options, open: true, kind: "info" }),
      destroy: closeModal,
    }),
    [closeModal],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      message: msg,
      notification: notificationApi,
      modal: modalApi,
    }),
    [msg, notificationApi, modalApi],
  );

  return (
    <AppContext.Provider value={value}>
      {/* Radix Toast owns the auto-dismiss timer, so notifications pause on
          hover/focus (WCAG 2.2.1) and cancel cleanly on unmount. */}
      <Toast.Provider swipeDirection="right">
        {children}
        {notifications.map(({ key, duration, type, onClose, ...props }) => (
          <Toast.Root
            key={key}
            type={type === "error" ? "foreground" : "background"}
            duration={duration === 0 ? Infinity : (duration ?? 4500)}
            onOpenChange={(open) => {
              if (!open) {
                onClose?.();
                closeNotification(key);
              }
            }}
          >
            {/* role lives on Toast.Root; a nested live region would announce twice. */}
            <Notification
              {...props}
              type={type}
              role="none"
              onClose={() => {
                onClose?.();
                closeNotification(key);
              }}
            />
          </Toast.Root>
        ))}
        <Toast.Viewport className="fixed top-su4 right-su4 z-[var(--su-z-toast)] m-0 p-0 list-none flex flex-col gap-su3 w-[min(360px,calc(100vw-var(--su-space-8)))] outline-none" />
      </Toast.Provider>
      <Modal
        open={modal.open}
        onOpenChange={(open) => !open && cancelModal()}
        title={modal.title}
        footer={
          <>
            {modal.kind === "confirm" ? (
              <Button onClick={cancelModal}>
                {modal.cancelText ?? "Cancel"}
              </Button>
            ) : null}
            <Button
              variant="primary"
              danger={modal.danger}
              onClick={() => {
                modal.onOk?.();
                closeModal();
              }}
            >
              {modal.okText ?? "OK"}
            </Button>
          </>
        }
      >
        {modal.content}
      </Modal>
    </AppContext.Provider>
  );
}

export interface AppProps extends ConfigProviderProps {
  children: ReactNode;
}

export function App({ children, ...config }: AppProps) {
  return (
    <ConfigProvider {...config}>
      <TooltipProvider>
        <MessageProvider>
          <AppInner>{children}</AppInner>
        </MessageProvider>
      </TooltipProvider>
    </ConfigProvider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within App");
  return ctx;
}
