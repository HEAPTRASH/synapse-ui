import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface AffixProps extends HTMLAttributes<HTMLDivElement> {
  offsetTop?: number;
  /** Pin to the bottom edge instead of (or as well as) the top. */
  offsetBottom?: number;
  children?: ReactNode;
}

/**
 * Sticks to the top of whichever ancestor scrolls — the window or any
 * scroll container. `position: sticky` also reserves the element's own space,
 * so the content below it never jumps when it pins. Pass `offsetBottom` to pin
 * against the bottom edge (a bottom action bar in a scroll panel) instead.
 *
 * For chrome that should read as material (nav bars, floating toolbars), wrap
 * the content in `<Glass>` inside `<Affix>` — Affix only positions, Glass
 * supplies the blur and hairline. Don't put a background or blur on Affix
 * itself.
 */
export function Affix({
  offsetTop,
  offsetBottom,
  className,
  children,
  style,
  ...rest
}: AffixProps) {
  return (
    <div
      className={cn("sticky z-[var(--su-z-sticky)]", className)}
      style={{
        top: offsetBottom === undefined ? (offsetTop ?? 0) : offsetTop,
        bottom: offsetBottom,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
