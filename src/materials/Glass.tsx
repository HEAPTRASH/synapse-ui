import { forwardRef } from "react";
import type { ComponentPropsWithRef, ElementType, ReactElement, ReactNode, Ref } from "react";
import { cn } from "../utils/cn";
import { chromeRimClass, type ChromeStrength as ChromeRimStrength } from "./Chrome";

export type GlassVariant = "regular" | "clear";
export type GlassRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
/** Chrome's rim strengths plus "none" (Glass can opt out; Chrome always draws). */
export type ChromeStrength = ChromeRimStrength | "none";

type GlassOwnProps<C extends ElementType> = {
  as?: C;
  variant?: GlassVariant;
  /** Uses --su-glass-bg-elevated instead of --su-glass-bg. Never a shadow. */
  elevated?: boolean;
  /** Clear glass only: dim backdrop for legibility over bright media */
  dim?: boolean;
  /** Kept for API; brand is square (always 0). */
  radius?: GlassRadius;
  chrome?: ChromeStrength;
  children?: ReactNode;
};

/**
 * Polymorphic: `as` also types that element's native props and `ref`.
 *
 * Legibility: text placed directly in Glass sits over a blurred, moving
 * backdrop — use the `label` / `label-secondary` tiers only, never
 * `label-tertiary` / `label-quaternary`.
 */
export type GlassProps<C extends ElementType = "div"> = GlassOwnProps<C> &
  Omit<ComponentPropsWithRef<C>, keyof GlassOwnProps<C>>;

function GlassImpl(
  {
    as,
    variant = "regular",
    elevated = false,
    dim = false,
    radius: _radius = "md",
    chrome = "none",
    className,
    children,
    ...rest
  }: GlassProps<ElementType>,
  ref: Ref<Element>,
) {
  const Comp: ElementType = as ?? "div";
  const isClear = variant === "clear";
  return (
    <Comp
      ref={ref}
      // Native <button> would otherwise default to type="submit".
      type={Comp === "button" ? "button" : undefined}
      className={cn(
        "relative isolate text-label rounded-none",
        "backdrop-blur-[var(--su-glass-blur)] backdrop-saturate-[var(--su-glass-saturate)]",
        elevated ? "bg-[var(--su-glass-bg-elevated)]" : "bg-[var(--su-glass-bg)]",
        "transparency-reduce:(bg-[var(--su-glass-solid)] backdrop-filter-none)",
        "contrast-more:(bg-[var(--su-bg-secondary)] backdrop-filter-none border-b-label)",
        isClear
          ? // Translucency implies its own edge; in contrast mode it's gone, so draw one.
            "bg-[var(--su-glass-clear-bg)] transparency-reduce:bg-[var(--su-glass-clear-solid)] contrast-more:(border border-label)"
          : // su-chrome already rings all 4 sides, so when chrome is on there's no
            // manual hairline to double up with.
            chrome === "none" && "border-b border-b-rule",
        chrome !== "none" && chromeRimClass[chrome],
        className,
      )}
      {...rest}
    >
      {isClear && dim ? (
        <span
          aria-hidden
          className="absolute inset-0 z-[-1] rounded-none bg-[var(--su-glass-clear-dim)] pointer-events-none transparency-reduce:hidden contrast-more:hidden"
        />
      ) : null}
      {children}
    </Comp>
  );
}

/** Material/floating layer only — never the content layer (use Surface there). */
export const Glass = forwardRef(GlassImpl) as <C extends ElementType = "div">(
  props: GlassProps<C>,
) => ReactElement;
