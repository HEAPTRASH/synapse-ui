import type {
  HTMLAttributes,
  Key,
  MouseEventHandler,
  ReactNode,
} from "react";
import { cn } from "../../utils/cn";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  /** Stable key; falls back to the array index. */
  key?: Key;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface BreadcrumbProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

const truncateClass =
  "block max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap";

/**
 * Link presentation lives on the <li> as descendant rules, so a router
 * `<Link>` passed as `label` is styled exactly like the <a> we render —
 * no `itemRender`/`asChild` escape hatch needed.
 * `py/-my` grows the tap band to 44px without changing the row height.
 */
const itemClass = cn(
  "inline-flex items-center gap-su2 min-w-0",
  "[&_a]:(block max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap text-label-secondary no-underline leading-[20px] py-[12px] -my-[12px] transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)])",
  "[&_a:hover]:(text-label underline decoration-1 underline-offset-[3px])",
  "[&_a:active]:text-accent",
  "[&_a:focus-visible]:(outline-2 outline-accent outline-offset-[var(--su-focus-ring-offset)])",
  // Current page keeps the weight + ink step even when it is a real link.
  "[&_a[aria-current]]:(text-label font-medium)",
);

export function Breadcrumb({
  items,
  separator = "/",
  className,
  ...rest
}: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className={cn("font-sans text-footnote", className)}
      aria-label="Breadcrumb"
      {...rest}
    >
      <ol role="list" className="flex flex-wrap items-center gap-su2 m-0 p-0 list-none">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const title = typeof item.label === "string" ? item.label : undefined;
          return (
            <li key={item.key ?? index} className={itemClass}>
              {index > 0 && (
                <span
                  className="inline-block select-none text-label-secondary contrast-more:text-label rtl:-scale-x-100"
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  title={title}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={cn(
                    truncateClass,
                    isLast ? "text-label font-medium" : "text-label-secondary",
                  )}
                  title={title}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
