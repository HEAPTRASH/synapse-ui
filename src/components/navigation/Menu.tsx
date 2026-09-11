import type { ComponentPropsWithRef, CSSProperties, MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { IconChevronDown } from "@tabler/icons-react";
import { Icon } from "../general/Icon";
import { cn } from "../../utils/cn";

export interface MenuItem {
  key: string;
  /** Omit only on `type: "divider"`. */
  label?: ReactNode;
  /** `"item"` (default) · `"group"` — a mono section heading whose children sit at the same depth · `"divider"` — a hairline. */
  type?: "item" | "group" | "divider";
  icon?: ReactNode;
  disabled?: boolean;
  href?: string;
  danger?: boolean;
  /** Native tooltip for a truncated label. Defaults to `label` when it is a string. */
  title?: string;
  children?: MenuItem[];
}

export interface MenuProps extends Omit<ComponentPropsWithRef<"nav">, "onSelect"> {
  items: MenuItem[];
  selectedKey?: string;
  /** `event` is the row's click — call `preventDefault()` to keep an `href` item on the page (router navigation). */
  onSelect?: (key: string, event: MouseEvent) => void;
}

/**
 * No colour and no background here: `cn()` is a plain join and UnoCSS decides which of two
 * same-specificity utilities wins, so every row gets exactly one `bg-*` and one `text-*`
 * from `rowClass` below rather than layering an override on a base.
 */
const itemBase =
  "group relative flex items-center gap-su3 w-full min-h-[var(--su-hit-target)] ps-[calc(var(--su-space-3)+var(--su-menu-depth)*var(--su-space-6))] pe-su3 text-subhead text-start no-underline transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] disabled:opacity-45 disabled:cursor-not-allowed";

/** `:enabled` never matches an `<a>`, so link rows need `:not(:disabled)` for hover/press. */
function rowClass(opts: { selected?: boolean; danger?: boolean; trail?: boolean }) {
  return cn(
    itemBase,
    opts.selected
      ? "bg-accent-soft before:absolute before:inset-y-0 before:start-0 before:w-[2px] before:bg-accent before:content-[''] contrast-more:underline contrast-more:underline-offset-4"
      : "bg-transparent hover:not-disabled:bg-fill-quaternary active:not-disabled:bg-fill-tertiary [@media(hover:none)]:active:not-disabled:bg-fill-secondary",
    opts.selected
      ? "text-accent font-medium"
      : opts.danger
        ? "text-danger-text"
        : opts.trail
          ? "text-accent"
          : "text-label-secondary hover:not-disabled:text-label",
  );
}

const groupLabelClass =
  "su-label block text-label-secondary ps-[calc(var(--su-space-3)+var(--su-menu-depth)*var(--su-space-6))] pe-su3 pt-su3 pb-su1";

interface MenuListProps {
  items: MenuItem[];
  selectedKey?: string;
  depth: number;
  onSelect?: (key: string, event: MouseEvent) => void;
  /** Root list only — padding lives here so nested and grouped lists stay flush. */
  className?: string;
}

function containsKey(items: MenuItem[], key?: string): boolean {
  if (!key) return false;
  return items.some(
    (item) => item.key === key || containsKey(item.children ?? [], key),
  );
}

function itemContent(item: MenuItem) {
  return (
    <>
      {item.icon && (
        <Icon size="sm" className="shrink-0">
          {item.icon}
        </Icon>
      )}
      <span className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {item.label}
      </span>
    </>
  );
}

function titleOf(item: MenuItem) {
  return item.title ?? (typeof item.label === "string" ? item.label : undefined);
}

/**
 * Open state is controlled-with-a-default so a `selectedKey` that lands on a descendant
 * after mount (route change, deep link) opens the branch instead of hiding the selection.
 */
function MenuBranch({
  item,
  selectedKey,
  depth,
  onSelect,
}: Omit<MenuListProps, "items" | "className"> & { item: MenuItem }) {
  const contains = containsKey(item.children ?? [], selectedKey) && !item.disabled;
  const [open, setOpen] = useState(contains);

  useEffect(() => {
    if (contains) setOpen(true);
  }, [contains]);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} disabled={item.disabled}>
      <Collapsible.Trigger
        className={rowClass({ trail: contains && !open })}
        title={titleOf(item)}
      >
        {itemContent(item)}
        <Icon
          size="sm"
          className="shrink-0 text-label-tertiary transition-transform duration-[var(--su-duration-normal)] ease-[var(--su-ease-out)] group-data-[state=open]:rotate-180"
        >
          <IconChevronDown />
        </Icon>
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=open]:animate-su-collapse-down data-[state=closed]:animate-su-collapse-up motion-reduce:animate-none">
        <MenuList
          items={item.children ?? []}
          selectedKey={selectedKey}
          depth={depth + 1}
          onSelect={onSelect}
        />
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

function MenuList({ items, selectedKey, depth, onSelect, className }: MenuListProps) {
  // The custom property inherits, so one declaration per list covers every row in it.
  const indent = { "--su-menu-depth": depth } as CSSProperties;

  return (
    <ul className={cn("flex flex-col m-0 p-0 list-none", className)} style={indent}>
      {items.map((item) => {
        if (item.type === "divider") {
          return (
            <li
              key={item.key}
              role="separator"
              className="h-px my-su1 su-rule"
            />
          );
        }

        if (item.type === "group") {
          return (
            <li key={item.key}>
              <span className={groupLabelClass}>{item.label}</span>
              {item.children?.length ? (
                <MenuList
                  items={item.children}
                  selectedKey={selectedKey}
                  depth={depth}
                  onSelect={onSelect}
                />
              ) : null}
            </li>
          );
        }

        if (item.children?.length) {
          return (
            <li key={item.key}>
              <MenuBranch
                item={item}
                selectedKey={selectedKey}
                depth={depth}
                onSelect={onSelect}
              />
            </li>
          );
        }

        const isSelected = selectedKey === item.key;
        const rowCls = rowClass({ selected: isSelected, danger: item.danger });

        return (
          <li key={item.key}>
            {item.href && !item.disabled ? (
              <a
                href={item.href}
                className={rowCls}
                title={titleOf(item)}
                aria-current={isSelected ? "page" : undefined}
                onClick={(event) => onSelect?.(item.key, event)}
              >
                {itemContent(item)}
              </a>
            ) : (
              <button
                type="button"
                disabled={item.disabled}
                className={rowCls}
                title={titleOf(item)}
                aria-current={isSelected ? "true" : undefined}
                onClick={(event) => onSelect?.(item.key, event)}
              >
                {itemContent(item)}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Menu({ items, selectedKey, onSelect, className, ...rest }: MenuProps) {
  if (!items.length) return null;

  return (
    <nav
      className={cn(
        "border border-solid border-rule-strong bg-paper text-ink font-sans",
        className,
      )}
      aria-label="Menu"
      {...rest}
    >
      <MenuList
        items={items}
        selectedKey={selectedKey}
        depth={0}
        onSelect={onSelect}
        className="p-su2"
      />
    </nav>
  );
}
