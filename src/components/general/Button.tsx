import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { usePixelRipple } from "../../hooks/usePixelRipple";
import { cn } from "../../utils/cn";
import { Icon } from "./Icon";
import { SlotSpinner } from "./SlotSpinner";

export type ButtonVariant = "default" | "primary" | "ghost" | "dashed" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonIconPlacement = "start" | "end";

export type ButtonLoading =
  | boolean
  | {
      delay?: number;
      icon?: ReactNode;
    };

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ButtonProps
  extends Omit<NativeButtonProps, "type" | "children">,
    Pick<
      NativeAnchorProps,
      "download" | "hrefLang" | "ping" | "referrerPolicy"
    > {
  variant?: ButtonVariant;
  /** @deprecated Prefer `variant`. Ant Design–style alias (not the native button type). */
  type?:
    | "primary"
    | "default"
    | "dashed"
    | "link"
    | "text"
    | "ghost"
    | "submit"
    | "reset"
    | "button";
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

const VARIANT_BY_TYPE: Record<string, ButtonVariant> = {
  link: "text",
  text: "text",
  ghost: "ghost",
  dashed: "dashed",
  primary: "primary",
};

/* ——— Class vocabulary ———————————————————————————————————————————————
   Every contested declaration (font size, height vars, colour tokens) is
   chosen by ONE lookup below rather than layered by two class strings, so
   nothing depends on UnoCSS emission order. */

/* The border reset (reset.css) already zeroes every side, so only the variants
   that draw a border say so. Font size/leading are picked by ONE lookup
   (`fontClass`) — never layered here. */
const baseClass =
  "group box-border inline-flex w-max max-w-full flex-[0_0_auto] rounded-none " +
  "font-sans !font-medium tracking-normal " +
  "whitespace-nowrap no-underline cursor-pointer aria-busy:cursor-wait " +
  "transition-[background-color,color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] " +
  "su-focus-ring " +
  "aria-disabled:opacity-40 aria-disabled:cursor-not-allowed " +
  "disabled:opacity-40 disabled:cursor-not-allowed " +
  "forced-colors:[border:1px_solid_ButtonBorder]";

const sizeClass: Record<ButtonSize, string> = {
  sm:
    "[--su-h:var(--su-control-sm)] [--su-px:12px] [--su-touch-px:18px] " +
    "[--su-scan-slot:7px] [--su-slot-open:4.65]",
  md:
    "[--su-h:var(--su-control-md)] [--su-px:16px] [--su-touch-px:22px] " +
    "[--su-scan-slot:8px] [--su-slot-open:4.7]",
  lg:
    "[--su-h:var(--su-button-height)] [--su-px:20px] [--su-touch-px:26px] " +
    "[--su-scan-slot:10px] [--su-slot-open:4.9]",
};

/* The transparent pad that lifts sub-44px cuts to a 44px hit area. Picked by ONE
   lookup (size × icon-only) so no two conflicting `before:` insets ever co-exist.
   Icon-only cuts are 32/36px wide too, so those pad on both axes. */
const padBase = "relative before:content-empty before:absolute";
const hitPadClass: Record<ButtonSize, string> = {
  sm: padBase + " before:inset-x-0 before:-inset-y-[6px]",
  md: padBase + " before:inset-x-0 before:-inset-y-[4px]",
  lg: "",
};
const hitPadIconClass: Record<ButtonSize, string> = {
  sm: padBase + " before:-inset-[6px]",
  md: padBase + " before:-inset-[4px]",
  lg: "",
};

const boxClass =
  "relative h-[var(--su-h)] min-h-[var(--su-h)] items-center justify-center gap-su2";

/* Primary — the scan button */
const scanFillClass =
  "bg-[var(--su-btn-fill)] !text-on-action shadow-[inset_0_0_0_1px_var(--su-btn-edge)] " +
  "[&:not([aria-disabled=true])]:active:bg-[var(--su-btn-fill-press)]";

const scanClass =
  "relative items-stretch justify-start h-[var(--su-h)] min-h-[var(--su-h)] !p-0 gap-0 " +
  scanFillClass;

/** asChild hands the root to the consumer, so the scan cell/beam can't be hung
 *  off it — primary falls back to the plain box with the same fill. */
const scanFlatClass = boxClass + " px-[var(--su-px)] " + scanFillClass;

const scanTokens = {
  base:
    "[--su-btn-fill:var(--su-action)] [--su-btn-fill-press:var(--su-action-press)] " +
    "[--su-btn-edge:var(--su-action-edge)]",
  danger:
    "[--su-btn-fill:var(--su-danger)] [--su-btn-fill-press:color-mix(in_srgb,var(--su-danger)_82%,#000)] " +
    "[--su-btn-edge:color-mix(in_srgb,var(--su-danger)_80%,#000)] [--su-beam:var(--su-on-action)]",
};

const scanLabelClass =
  "relative z-1 inline-flex min-w-0 items-center gap-su2 px-[var(--su-px)] " +
  "[@media(hover:none)]:px-[var(--su-touch-px)]";

const scanCellClass =
  "relative z-1 grid place-items-center flex-[0_0_var(--su-h)] w-[var(--su-h)] overflow-hidden " +
  "[@media(hover:none)]:hidden " +
  "before:content-empty before:absolute before:inset-y-0 before:[inset-inline-start:0] " +
  "before:w-px before:z-0 before:pointer-events-none " +
  "before:bg-[color-mix(in_srgb,var(--su-on-action)_22%,transparent)]";

const scanSlotClass =
  "relative z-1 w-[var(--su-scan-slot)] h-[var(--su-scan-slot)] bg-on-action origin-center " +
  "[forced-color-adjust:none] " +
  "transition-transform duration-[var(--su-duration-base)] ease-[var(--su-ease-step)] " +
  "[@media(hover:hover)]:group-hover:scale-[var(--su-slot-open)] " +
  "[@media(hover:hover)]:group-hover:delay-[350ms] " +
  "[@media(hover:hover)]:group-focus-visible:scale-[var(--su-slot-open)] " +
  "[@media(hover:hover)]:group-focus-visible:delay-[350ms] " +
  "group-active:bg-beam group-active:duration-[40ms] group-active:delay-0 " +
  "motion-reduce:!delay-0";

const scanArrowClass =
  "absolute inset-0 z-2 grid place-items-center text-[var(--su-btn-fill)] opacity-0 " +
  "transition-opacity duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] " +
  "[@media(hover:hover)]:group-hover:opacity-100 " +
  "[@media(hover:hover)]:group-hover:delay-[400ms] " +
  "[@media(hover:hover)]:group-focus-visible:opacity-100 " +
  "[@media(hover:hover)]:group-focus-visible:delay-[400ms]";

const scanTrackClass = "absolute inset-0 z-0 overflow-hidden pointer-events-none";

// ponytail: the beam sweeps with a transition on inset-inline-start instead of a
// keyframe (uno.config.ts owns keyframes and is read-only here). The track clips
// it, so it exits instead of fading; leaving reverses at ~2× speed, which is what
// the brand asks for. Upgrade path: the `su-scan-beam` keyframe in sharedRequests.
const scanBeamClass =
  "absolute inset-y-0 [inset-inline-start:0] w-[2px] bg-beam opacity-0 " +
  "shadow-[0_0_8px_1px_color-mix(in_srgb,var(--su-beam)_45%,transparent)] " +
  "[transition-property:inset-inline-start,opacity] duration-[300ms] ease-[var(--su-ease-scan)] " +
  "[@media(hover:hover)]:group-hover:[inset-inline-start:100%] " +
  "[@media(hover:hover)]:group-hover:opacity-100 " +
  "[@media(hover:hover)]:group-hover:duration-[var(--su-duration-scan)] " +
  "[@media(hover:hover)]:group-focus-visible:[inset-inline-start:100%] " +
  "[@media(hover:hover)]:group-focus-visible:opacity-100 " +
  "[@media(hover:hover)]:group-focus-visible:duration-[var(--su-duration-scan)] " +
  "motion-reduce:hidden";

/* Secondary — frame + pixel ripple. The invert is plain CSS; the grid decorates it. */
const frameClass =
  boxClass +
  " px-[var(--su-px)] !text-[var(--su-frame-fg)] " +
  "[&:not([aria-disabled=true])]:hover:bg-[var(--su-frame-hover-bg)] " +
  "[&:not([aria-disabled=true])]:focus-visible:bg-[var(--su-frame-hover-bg)] " +
  // A menu-owning trigger stays inverted while its menu is open.
  "[&[data-state=open]:not([aria-disabled=true])]:bg-[var(--su-frame-hover-bg)] " +
  "[&:not([aria-disabled=true])]:active:bg-[var(--su-frame-press-bg)] " +
  "[@media(hover:none)]:bg-[var(--su-frame-hover-bg)]";

const frameTokens = {
  base:
    "[--su-frame-fg:var(--su-ink)] [--su-frame-hover-bg:var(--su-ink)] " +
    "[--su-frame-hover-fg:var(--su-paper)] [--su-frame-press-bg:var(--su-action)] " +
    "[--su-frame-press-fg:var(--su-on-action)] [--su-frame-ripple:var(--su-ink)]",
  danger:
    "[--su-frame-fg:var(--su-danger)] [--su-frame-hover-bg:var(--su-danger)] " +
    "[--su-frame-hover-fg:var(--su-on-action)] " +
    "[--su-frame-press-bg:color-mix(in_srgb,var(--su-danger)_82%,#000)] " +
    "[--su-frame-press-fg:var(--su-on-action)] [--su-frame-ripple:var(--su-danger)]",
};

const frameSkinClass = "bg-canvas";
const dashedSkinClass =
  "bg-transparent border-1 border-dashed border-rule-strong " +
  "[&:not([aria-disabled=true])]:hover:border-ink-2 [@media(hover:none)]:!border-transparent";

const pxClass =
  "absolute inset-0 z-0 grid pointer-events-none [@media(hover:none)]:hidden " +
  "[&>i]:bg-[var(--su-frame-ripple)] [&>i]:scale-0 [&>i]:origin-center " +
  "[&>i]:transition-transform [&>i]:duration-150 [&>i]:ease-[var(--su-ease-out)] " +
  "[&>i]:delay-[var(--ro,0ms)] " +
  "group-hover:[&>i]:scale-100 group-hover:[&>i]:delay-[var(--ri,0ms)] " +
  "group-focus-visible:[&>i]:scale-100 group-focus-visible:[&>i]:delay-[var(--ri,0ms)] " +
  "group-active:[&>i]:scale-0 group-active:[&>i]:delay-0 " +
  "motion-reduce:[&>i]:transition-none";

const frameLabelClass =
  "relative z-1 inline-flex min-w-0 items-center gap-su2 " +
  "transition-colors duration-90 delay-[80ms] " +
  "group-hover:text-[var(--su-frame-hover-fg)] " +
  "group-focus-visible:text-[var(--su-frame-hover-fg)] " +
  // Only when the button itself is an open trigger (label is its direct child). A descendant
  // `[data-state=open] &` also matched every button inside an open Dialog/Popover/Accordion,
  // inverting the label while the ground stayed canvas.
  "[[data-state=open]:not([aria-disabled=true])>&]:text-[var(--su-frame-hover-fg)] " +
  "group-active:text-[var(--su-frame-press-fg)] group-active:delay-0 " +
  "[@media(hover:none)]:text-[var(--su-frame-hover-fg)] " +
  "motion-reduce:transition-none motion-reduce:delay-0";

/* Ghost / text */
const ghostClass =
  boxClass +
  " px-su4 bg-transparent contrast-more:[border:1px_solid_var(--su-rule)] " +
  "[&:not([aria-disabled=true])]:active:bg-fill-secondary";

const ghostTone = {
  base:
    "!text-ink-2 [&:not([aria-disabled=true])]:hover:!text-ink " +
    "[&:not([aria-disabled=true])]:hover:bg-fill-tertiary",
  danger:
    "!text-danger [&:not([aria-disabled=true])]:hover:bg-[color-mix(in_srgb,var(--su-danger)_10%,transparent)]",
};

const textClass =
  "relative items-center justify-center gap-su2 h-auto min-h-[var(--su-hit-target)] p-0 " +
  "bg-transparent";

/* Rest-state underline for inline links (WCAG 1.4.1); the marketing `arrow`
   cut keeps the draw-in because it already carries a second cue. */
const underlineRest =
  "inline-block py-[2px] [background:linear-gradient(currentColor_0_0)_0_100%_/_100%_1px_no-repeat]";
const underlineDraw =
  "inline-block py-[2px] [background:linear-gradient(currentColor_0_0)_0_100%_/_0_1px_no-repeat] " +
  "[transition-property:background-size] duration-[var(--su-duration-scan)] ease-[var(--su-ease-out)] " +
  "[@media(hover:hover)]:group-hover:[background-size:100%_1px] " +
  "[@media(hover:hover)]:group-focus-visible:[background-size:100%_1px] " +
  "motion-reduce:transition-none";

const labelTextClass = "block min-w-0 truncate";

const ghostArrowClass =
  "transition-transform duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] " +
  "[@media(hover:hover)]:group-hover:translate-x-1 " +
  "rtl:-scale-x-100 " +
  // rtl: must lead — it wraps the whole selector, so a trailing one would place
  // [dir=rtl] *inside* the group-hover descendant chain.
  "rtl:[@media(hover:hover)]:group-hover:-translate-x-1 " +
  "motion-reduce:transition-none";

function ScanArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      aria-hidden="true"
      className={cn("block w-[1em] h-[1em]", className)}
    >
      <path
        d="M1 7h11M8 3l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant: variantProp,
    type: typeProp,
    size = "lg",
    block = false,
    asChild = false,
    danger = false,
    loading = false,
    icon,
    iconPlacement = "start",
    arrow = false,
    hideEndCell = false,
    href,
    target,
    rel,
    htmlType,
    className,
    children,
    disabled,
    onClick,
    ...rest
  },
  ref,
) {
  const variant =
    variantProp ?? VARIANT_BY_TYPE[typeProp as string] ?? "default";
  const resolvedHtmlType: NativeButtonProps["type"] =
    htmlType ??
    (typeProp === "submit" || typeProp === "reset" || typeProp === "button"
      ? typeProp
      : "button");

  const wantsLoading = Boolean(loading);
  const loadingDelay = typeof loading === "object" && loading ? (loading.delay ?? 0) : 0;
  const loadingIcon = typeof loading === "object" && loading ? loading.icon : undefined;
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(() => {
    if (!loadingDelay || !wantsLoading) {
      setDelayPassed(false);
      return undefined;
    }
    const id = window.setTimeout(() => setDelayPassed(true), loadingDelay);
    return () => window.clearTimeout(id);
  }, [loadingDelay, wantsLoading]);
  const loadingBool = loadingDelay ? delayPassed : wantsLoading;

  // Loading is busy, not disabled: full contrast, still focusable, clicks guarded.
  const inert = Boolean(disabled) || loadingBool;

  const frameRef = useRef<HTMLElement | null>(null);
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      frameRef.current = node;
      if (typeof ref === "function") ref(node as HTMLButtonElement | null);
      else if (ref)
        (ref as { current: HTMLButtonElement | null }).current =
          node as HTMLButtonElement | null;
    },
    [ref],
  );
  const isFrame = variant === "default" || variant === "dashed";
  usePixelRipple(frameRef, isFrame);

  if (
    import.meta.env?.DEV &&
    (children == null || children === false) &&
    (icon != null || loadingBool) &&
    !rest["aria-label"] &&
    !rest["aria-labelledby"]
  ) {
    console.warn("Button: icon-only/loading-only button needs an aria-label.");
  }

  const tone = danger ? "danger" : "base";
  const hasLabel = children != null && children !== false;
  const iconOnly = !hasLabel && (icon != null || loadingBool);

  // Size AND leading in one lookup: two `!leading-*` strings would be order-dependent.
  const fontClass =
    variant === "text"
      ? "text-body !leading-normal"
      : size === "sm"
        ? "text-caption-1 !leading-none"
        : "text-control !leading-none";

  const spinner = loadingBool
    ? (loadingIcon ?? (
        <SlotSpinner size="sm" onAction={variant === "primary"} />
      ))
    : null;
  const lead = spinner ?? (iconPlacement === "start" ? icon : null);
  const trail = !spinner && iconPlacement === "end" ? icon : null;

  /* Under asChild the consumer's element IS the root, so the label can't be
     wrapped: Radix Slot only honours a <Slottable> that is a DIRECT child. */
  const labelRow = (underline?: string): ReactNode[] => [
    lead ? (
      <Icon key="lead" size="inherit">
        {lead}
      </Icon>
    ) : null,
    asChild ? (
      <Slottable key="label">{children}</Slottable>
    ) : hasLabel ? (
      <span key="label" className={cn(labelTextClass, underline)}>
        {children}
      </span>
    ) : null,
    trail ? (
      <Icon key="trail" size="inherit">
        {trail}
      </Icon>
    ) : null,
  ];

  let variantClass: string;
  let chrome: ReactNode;

  if (variant === "primary") {
    variantClass = cn(
      asChild ? scanFlatClass : scanClass,
      scanTokens[tone],
      block && "!w-full max-w-none",
      iconOnly && (asChild ? "!w-[var(--su-h)] !px-0" : "!w-[var(--su-h)]"),
    );
    chrome = asChild ? (
      labelRow()
    ) : (
      <>
        <span
          className={cn(
            scanLabelClass,
            (block || iconOnly || hideEndCell) && "flex-1 justify-center",
            iconOnly && "!px-0",
          )}
        >
          {labelRow()}
        </span>
        {iconOnly || hideEndCell ? null : (
          <span className={scanCellClass} aria-hidden="true">
            <span className={scanSlotClass} />
            <span className={scanArrowClass}>
              <ScanArrowIcon className="rtl:-scale-x-100" />
            </span>
          </span>
        )}
        <span className={scanTrackClass} aria-hidden="true">
          <span className={scanBeamClass} />
        </span>
      </>
    );
  } else if (variant === "ghost" || variant === "text") {
    const isText = variant === "text";
    variantClass = cn(
      isText ? textClass : ghostClass,
      isText
        ? danger
          ? "!text-danger"
          : "!text-accent"
        : ghostTone[tone],
      block && "!w-full max-w-none",
      !isText && iconOnly && "!w-[var(--su-h)] !px-0",
      // No label span under asChild — the rest-state underline moves to the root.
      asChild &&
        isText &&
        !arrow &&
        "[background:linear-gradient(currentColor_0_0)_0_100%_/_100%_1px_no-repeat]",
    );
    chrome = [
      ...labelRow(isText ? (arrow ? underlineDraw : underlineRest) : undefined),
      arrow && !loadingBool ? (
        <Icon key="arrow" size="inherit" className={ghostArrowClass}>
          <ScanArrowIcon />
        </Icon>
      ) : null,
    ];
  } else {
    variantClass = cn(
      frameClass,
      frameTokens[tone],
      variant === "dashed" ? dashedSkinClass : frameSkinClass,
      block && "!w-full max-w-none",
      iconOnly && "!w-[var(--su-h)] !px-0",
      // asChild has no label span to invert, so the root carries the hover ink.
      asChild &&
        "[&:not([aria-disabled=true])]:hover:!text-[var(--su-frame-hover-fg)] " +
          "[&[data-state=open]:not([aria-disabled=true])]:!text-[var(--su-frame-hover-fg)] " +
          "[&:not([aria-disabled=true])]:active:!text-[var(--su-frame-press-fg)]",
    );
    chrome = asChild ? (
      [
        <span key="px" className={pxClass} data-su-px aria-hidden="true" />,
        ...labelRow(),
      ]
    ) : (
      <>
        <span className={pxClass} data-su-px aria-hidden="true" />
        <span className={frameLabelClass}>{labelRow()}</span>
      </>
    );
  }

  const Comp: ElementType = asChild ? Slot : href ? "a" : "button";
  const props: Record<string, unknown> = {
    ...rest,
    ref: setRef,
    className: cn(
      baseClass,
      fontClass,
      sizeClass[size],
      (iconOnly ? hitPadIconClass : hitPadClass)[size],
      variantClass,
      className,
    ),
    "aria-busy": loadingBool || undefined,
    "aria-disabled": disabled || undefined,
    onClick: (event: MouseEvent) => {
      if (inert) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      (onClick as ((e: MouseEvent) => void) | undefined)?.(event);
    },
  };
  if (loadingBool && !hasLabel && !rest["aria-label"] && !rest["aria-labelledby"]) {
    // Spinner-only button: the spinner is aria-hidden, so nothing would announce.
    props["aria-label"] = "Loading";
  }
  if (href) {
    // Drop the href while disabled: an onClick guard only stops `click`, so a
    // middle-click (auxclick) or a context-menu "open in new tab" would still navigate.
    if (!disabled) props.href = href;
    props.target = target;
    props.rel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
    // An <a> with no href is generic, so name the role for aria-disabled to land on.
    if (disabled) {
      props.role = "link";
      props.tabIndex = -1;
    }
  } else if (!asChild) {
    props.type = resolvedHtmlType;
    props.disabled = Boolean(disabled);
  }

  return <Comp {...props}>{chrome}</Comp>;
});
