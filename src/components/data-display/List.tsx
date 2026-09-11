import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  extra?: ReactNode;
  avatar?: ReactNode;
  /**
   * Clickable row: pointer cursor, hover fill, 44px hit target and a square focus ring.
   * With `onClick` it also becomes a keyboard target (role="button", Enter/Space).
   */
  interactive?: boolean;
  children?: ReactNode;
}

export function ListItem({
  title,
  description,
  extra,
  avatar,
  interactive = false,
  className,
  children,
  onClick,
  onKeyDown,
  ...rest
}: ListItemProps) {
  // ponytail: role="button" trades this row's `listitem` role for a keyboard target.
  // Need both? Put a real <button>/<a> in `title` and leave `interactive` as paint only.
  const activatable = interactive && onClick != null;

  return (
    <li
      className={cn(
        "flex items-start gap-su3 py-su3 px-su4",
        interactive &&
          "min-h-[var(--su-hit-target)] cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none [@media(hover:hover)]:hover:bg-fill-quaternary su-focus-ring focus-visible:relative focus-visible:z-10",
        className,
      )}
      onClick={onClick}
      onKeyDown={
        activatable
          ? (event: KeyboardEvent<HTMLLIElement>) => {
              onKeyDown?.(event);
              if (event.defaultPrevented) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.currentTarget.click();
              }
            }
          : onKeyDown
      }
      {...(activatable ? { role: "button", tabIndex: 0 } : null)}
      {...rest}
    >
      {avatar ? <div className="shrink-0">{avatar}</div> : null}
      <div className="flex-1 min-w-0">
        {title ? (
          <div className="text-body font-medium text-label">{title}</div>
        ) : null}
        {description ? (
          <div className="mt-su1 text-footnote text-label-secondary">{description}</div>
        ) : null}
        {children}
      </div>
      {extra ? (
        <div className="shrink-0 text-label-secondary text-footnote">{extra}</div>
      ) : null}
    </li>
  );
}

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  bordered?: boolean;
  split?: boolean;
  children?: ReactNode;
}

/**
 * Static list primitive. For the zero-item case render `<Empty description="No results" />`
 * instead of an empty `<List>`; for thousands of rows use `Listy` (virtualized).
 */
export function List({ bordered = false, split = true, className, children, ...rest }: ListProps) {
  return (
    <ul
      // role="list" is required: `list-none` strips the implicit list role in Safari/VoiceOver.
      role="list"
      className={cn(
        "m-0 p-0 list-none rounded-none bg-paper border-solid",
        bordered
          ? "border border-rule border-t-rule-strong"
          : "border-t border-rule-strong",
        split && "[&>li+li]:border-t [&>li+li]:border-solid [&>li+li]:border-rule",
        className,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}

List.Item = ListItem;
