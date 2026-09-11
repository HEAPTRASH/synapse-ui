import { forwardRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Button, type ButtonProps } from "./Button";

export type FloatButtonPlacement =
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface FloatButtonProps
  extends Omit<ButtonProps, "variant" | "size" | "type"> {
  /** Corner to pin to. Left/right are reading-direction relative (they flip in RTL). */
  placement?: FloatButtonPlacement;
  icon?: ReactNode;
  /**
   * Mouse-hover hint; also names the button when it has no visible label.
   * For a tooltip that works on keyboard and touch, wrap in `<Tooltip content="…">`.
   */
  tooltip?: string;
}

// Logical insets so the corner follows reading direction; the bottom offset clears
// the iOS home indicator (needs `viewport-fit=cover` in the host app's meta tag).
const bottomInset =
  "bottom-[max(var(--su-space-5),env(safe-area-inset-bottom,0px))]";

const placementClass: Record<FloatButtonPlacement, string> = {
  "bottom-right": `end-su5 ${bottomInset}`,
  "bottom-left": `start-su5 ${bottomInset}`,
  "bottom-center": `left-1/2 -translate-x-1/2 ${bottomInset}`,
};

/**
 * Floating action button: fixed to a screen corner so a primary action stays
 * reachable while the page scrolls. A normal Button belongs in document flow.
 *
 * Renders in place, not through a portal — a `transform`, `filter`, `backdrop-filter`
 * or `contain` on any ancestor becomes the containing block and the button will pin
 * to that element instead of the viewport. Mount it near the app root.
 */
export const FloatButton = forwardRef<HTMLButtonElement, FloatButtonProps>(
  function FloatButton(
    { placement = "bottom-right", icon, className, children, tooltip, ...rest },
    ref,
  ) {
    return (
      <Button
        ref={ref}
        variant="primary"
        icon={icon}
        // Never overwrite a visible label (WCAG 2.5.3 Label in Name).
        aria-label={children == null || children === false ? tooltip : undefined}
        title={tooltip}
        className={cn(
          // `!` — Button's own `scanClass`/`boxClass` set `relative`, and UnoCSS
          // decides which of two equal-specificity utilities wins by sheet order.
          // Button's `labelTextClass` already truncates, so no override here.
          "!fixed z-[var(--su-z-sticky)] max-w-[calc(100vw_-_2_*_var(--su-space-5))]",
          "animate-su-rise-in motion-reduce:animate-none",
          // Forced-colors drops the action fill; keep an edge so the FAB stays
          // distinguishable from whatever content it floats over.
          "forced-colors:border forced-colors:border-[ButtonBorder]",
          placementClass[placement],
          className,
        )}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
