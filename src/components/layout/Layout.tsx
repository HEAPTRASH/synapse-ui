import type { HTMLAttributes, Ref } from "react";
import { cn } from "../../utils/cn";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** React 19 forwards `ref` as an ordinary prop through `{...rest}`. */
  ref?: Ref<HTMLDivElement>;
}

/** Header and Footer share the bar padding. */
const barClass = "shrink-0 px-su4 py-su3";

export function Layout({ className, ...rest }: LayoutProps) {
  return (
    <div
      // `:has(> aside)` replaces Ant's LayoutContext + sider registry + hasSider
      // prop; `:has()` takes its argument's specificity so it beats `flex-col`
      // regardless of stylesheet order.
      // ponytail: only direct-child Siders flip the axis — add a `hasSider`
      // prop if someone wraps their Sider in another element.
      className={cn(
        "flex flex-col has-[>aside]:flex-row flex-auto min-h-full bg-paper",
        className,
      )}
      {...rest}
    />
  );
}

export function Header({ className, ...rest }: LayoutProps) {
  return (
    <header
      className={cn(
        barClass,
        "flex items-center min-h-[var(--su-nav-height)] bg-paper border-b border-b-rule",
        className,
      )}
      {...rest}
    />
  );
}

export function Sider({ className, ...rest }: LayoutProps) {
  return (
    <aside
      className={cn(
        "shrink-0 w-[min(240px,45vw)] bg-paper border-e border-e-rule",
        className,
      )}
      {...rest}
    />
  );
}

export function Content({ className, ...rest }: LayoutProps) {
  // <main> gives the shell its landmark. A nested Content should pass
  // role="region" + aria-label to avoid a duplicate main.
  return (
    <main
      className={cn("flex-1 min-w-0 min-h-0 p-su4 md:p-su6", className)}
      {...rest}
    />
  );
}

export function Footer({ className, ...rest }: LayoutProps) {
  return (
    <footer
      className={cn(
        barClass,
        "border-t border-t-rule text-label-secondary text-footnote",
        className,
      )}
      {...rest}
    />
  );
}

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;
