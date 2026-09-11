import { forwardRef } from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type TypographyVariant =
  | "largeTitle"
  | "title1"
  | "title2"
  | "title3"
  | "headline"
  | "lede"
  | "body"
  | "callout"
  | "subhead"
  | "footnote"
  | "caption1"
  | "caption2"
  | "label"
  | "code";

/**
 * Ink roles carry text; status tones encode real product state (never decoration).
 * - `primary` / `secondary` — body and supporting copy.
 * - `tertiary` — placeholders and 19px+ only; ink-3 is 3.62:1 on light and fails 4.5:1.
 * - `quaternary` — decorative / disabled, never body copy (~2:1).
 * There is deliberately no `accent` tone: deep blue is the action colour and nothing else borrows it.
 */
export type TypographyTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "danger"
  | "success"
  | "warning";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  tone?: TypographyTone;
  /**
   * Visual role and document element are independent — use `as` to keep the
   * heading outline correct (`<Typography variant="title1" as="h3">`).
   */
  as?: ElementType;
  /** Bumps weight to 600; on inline variants it also renders a real `<strong>`. */
  strong?: boolean;
  /** Clamp to N lines (1 = single-line ellipsis). The full string stays in `title` for AT. */
  lines?: number;
  /** Cap the measure: `true` = 62ch running text, `"lede"` = 44ch. */
  measure?: boolean | "lede";
  /**
   * Variant utilities and `className` have equal specificity and `cn()` does not
   * resolve conflicts — use the `!` prefix (`!text-[13px]`) to override a variant.
   */
  className?: string;
  children?: ReactNode;
}

const variantClass: Record<TypographyVariant, string> = {
  // Brand Heading role: clamp(32px, 3.6vw, 48px) / 500 / 1.06 / -0.02em.
  largeTitle:
    "text-[length:clamp(var(--su-text-title-1),3.6vw,var(--su-text-large-title))] font-medium leading-[var(--su-leading-snug)] tracking-[var(--su-tracking-tight)] text-balance",
  // `text-*` carries the scale's own leading and tracking (see uno.config fontSize).
  title1: "text-title-1 font-medium text-balance",
  // Brand Subhead role: 22px / 500 / 1.25 / -0.01em.
  title2: "text-title-2 font-medium text-balance",
  title3: "text-title-3 font-medium tracking-[-0.01em] text-balance",
  // Emphasized body, not a section heading — hence weight 600 and a <p> default.
  headline:
    "text-[length:var(--su-text-headline)] font-semibold leading-[var(--su-leading-normal)]",
  // Brand Lede role: 19px / 400 / 1.55. Pairs with tone="secondary" measure="lede".
  lede: "text-[length:var(--su-text-title-3)] font-normal leading-[1.55]",
  body: "text-body font-normal",
  // 15px at the body's 1.6, not the scale's 1.5 — Callout is running copy here.
  callout:
    "text-[length:var(--su-text-callout)] leading-[var(--su-leading-relaxed)]",
  subhead: "text-subhead",
  footnote: "text-footnote",
  caption1: "text-caption-1",
  // Legacy 11px sans — prefer variant="label" for 11px chrome.
  caption2: "text-caption-2",
  label: "su-label [font-variant-numeric:tabular-nums]",
  code: "text-[0.88em] [font-stretch:87.5%] [font-variant-numeric:tabular-nums]",
};

const monoVariant: Partial<Record<TypographyVariant, true>> = {
  label: true,
  code: true,
};

const toneClass: Record<TypographyTone, string> = {
  primary: "text-label",
  secondary: "text-label-secondary",
  // tertiary/quaternary fail WCAG text contrast; lift them for prefers-contrast users.
  tertiary: "text-label-tertiary contrast-more:text-label-secondary",
  quaternary: "text-label-quaternary contrast-more:text-label-secondary",
  // Raw status fills fail 4.5:1 as text. danger-text is themed; success/warning have no
  // text-grade token (the -strong fills are ~3:1 on dark paper), so pull them toward ink.
  danger: "text-danger-text",
  success: "text-[color-mix(in_srgb,var(--su-success)_50%,var(--su-label))]",
  warning: "text-[color-mix(in_srgb,var(--su-warning)_50%,var(--su-label))]",
};

const defaultTag: Record<TypographyVariant, ElementType> = {
  largeTitle: "h1",
  title1: "h2",
  title2: "h2",
  title3: "h3",
  headline: "p",
  lede: "p",
  body: "p",
  callout: "p",
  subhead: "p",
  footnote: "p",
  caption1: "span",
  caption2: "span",
  label: "span",
  code: "code",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  function Typography(
    {
      variant = "body",
      tone = "primary",
      as,
      strong = false,
      lines,
      measure,
      className,
      children,
      style,
      ...rest
    },
    ref,
  ) {
    const tag = as ?? defaultTag[variant] ?? "p";
    const Comp = strong && tag === "span" ? "strong" : tag;
    const clamped = lines !== undefined && lines > 1;
    return (
      <Comp
        ref={ref}
        className={cn(
          "m-0 [overflow-wrap:anywhere]",
          monoVariant[variant] ? "font-mono" : "font-sans",
          variantClass[variant],
          toneClass[tone],
          strong && "font-semibold",
          measure && (measure === "lede" ? "max-w-[44ch]" : "max-w-[62ch]"),
          lines === 1 && "truncate",
          clamped &&
            "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:var(--su-lines)]",
          className,
        )}
        style={
          clamped
            ? ({ ...style, "--su-lines": lines } as CSSProperties)
            : style
        }
        {...rest}
        title={
          rest.title ??
          (lines !== undefined && typeof children === "string"
            ? children
            : undefined)
        }
      >
        {children}
      </Comp>
    );
  },
);

export const Title = ({
  level = 1,
  as,
  ...rest
}: Omit<TypographyProps, "variant"> & { level?: 1 | 2 | 3 | 4 | 5 }) => {
  const variant =
    level === 1
      ? "title1"
      : level === 2
        ? "title2"
        : level === 3
          ? "title3"
          : "headline";
  return <Typography variant={variant} as={as ?? `h${level}`} {...rest} />;
};

/** Inline run of body text. Block prose is `Paragraph`. */
export const Text = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body" as="span" {...props} />
);

export const Paragraph = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="body" as="p" {...props} />
);
