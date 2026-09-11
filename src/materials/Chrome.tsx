import type { ElementType, HTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "../utils/cn";

export type ChromeStrength = "subtle" | "default" | "strong";

export interface ChromeProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  strength?: ChromeStrength;
  children?: ReactNode;
  /** React 19 forwards `ref` as an ordinary prop through `{...rest}`. */
  ref?: Ref<HTMLElement>;
}

/**
 * Strength -> rim class. Exported so Glass (and any other surface with a
 * `chrome` prop) uses one source of truth instead of re-declaring the map.
 *
 * "subtle" intentionally equals "default": the brand defines two rule weights
 * (--su-rule / --su-rule-strong), not three. Don't invent a third.
 */
export const chromeRimClass: Record<ChromeStrength, string> = {
  subtle: "su-chrome",
  default: "su-chrome",
  strong: "su-chrome-strong",
};

/**
 * Draws a 1px hairline edge (--su-rule / --su-rule-strong, via box-shadow so it
 * adds nothing to layout) around a surface someone else sizes — usually Glass.
 *
 * Not a material tier and not a gloss: the brand guide's Materials section says
 * "No specular chrome rims" and "Shadow: none. Depth comes from the light field
 * and from hairlines." Keep this a flat hairline; no gradients, no glow, no
 * radius (corner shape is always square and belongs to the host).
 */
export function Chrome({
  as: Comp = "div",
  strength = "default",
  className,
  children,
  ...rest
}: ChromeProps) {
  return (
    <Comp className={cn(chromeRimClass[strength], className)} {...rest}>
      {children}
    </Comp>
  );
}
