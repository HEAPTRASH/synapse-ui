import {
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";

export interface TreeNode {
  key: string;
  title: ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

export interface TreeProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  treeData: TreeNode[];
  defaultExpandedKeys?: string[];
  /** Controlled selection. Falls back to `defaultSelectedKeys` when omitted. */
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelect?: (key: string) => void;
}

/**
 * One focusable control per row (APG roving tabindex): the chevron is a click zone
 * inside the row button, not a nested button, so pointer users get a separate
 * expand target while keyboard users expand with ArrowRight/ArrowLeft.
 */
const rowClass =
  "flex items-center gap-su2 w-full min-h-[var(--su-hit-target)] pe-su3 ps-[calc(var(--su-space-2)+var(--su-tree-depth,0)*var(--su-space-4))] text-subhead text-start cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] su-focus-ring disabled:(opacity-45 cursor-not-allowed)";

function TreeNodeView({
  node,
  depth,
  expanded,
  selected,
  focusKey,
  toggle,
  select,
}: {
  node: TreeNode;
  depth: number;
  expanded: Set<string>;
  selected: Set<string>;
  focusKey: string | undefined;
  toggle: (key: string) => void;
  select: (key: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = expanded.has(node.key);
  const isSelected = selected.has(node.key);

  return (
    <div className="block" role="none">
      <button
        type="button"
        role="treeitem"
        data-key={node.key}
        aria-level={depth + 1}
        aria-selected={isSelected}
        aria-expanded={hasChildren ? isOpen : undefined}
        tabIndex={node.key === focusKey ? 0 : -1}
        className={cn(
          rowClass,
          isSelected
            ? "bg-fill-secondary text-label font-medium"
            : "bg-transparent text-label enabled:hover:bg-fill-quaternary enabled:active:bg-fill-tertiary",
        )}
        style={{ "--su-tree-depth": depth } as CSSProperties}
        disabled={node.disabled}
        onClick={() => select(node.key)}
      >
        {hasChildren ? (
          <span
            aria-hidden
            className={cn(
              // The ::before stretches the twisty's tap area to the full row height
              // (32×44) without moving the glyph or the label.
              "relative shrink-0 w-4 before:(absolute -inset-y-su3 -inset-x-su2 content-[''])",
              "text-label-tertiary transition-transform duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
              isOpen && "rotate-90",
            )}
            onClick={(event) => {
              event.stopPropagation();
              toggle(node.key);
            }}
          >
            ›
          </span>
        ) : (
          <span className="shrink-0 w-4" aria-hidden />
        )}
        <span className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
          {node.title}
        </span>
      </button>
      {hasChildren && isOpen ? (
        <div role="group">
          {node.children!.map((child) => (
            <TreeNodeView
              key={child.key}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              selected={selected}
              focusKey={focusKey}
              toggle={toggle}
              select={select}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Tree({
  treeData,
  defaultExpandedKeys = [],
  selectedKeys,
  defaultSelectedKeys = [],
  className,
  onSelect,
  ...rest
}: TreeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(() => new Set(defaultExpandedKeys));
  const [ownSelected, setOwnSelected] = useState(() => new Set(defaultSelectedKeys));
  const [focusKey, setFocusKey] = useState<string>();
  const selected = selectedKeys ? new Set(selectedKeys) : ownSelected;

  // Roving tabindex anchor: the remembered row, or the first one when it is collapsed away.
  const visible: string[] = [];
  const collect = (nodes: TreeNode[]) => {
    for (const node of nodes) {
      // Disabled rows are unfocusable (`HTMLElement.focus()` is a no-op on a disabled
      // button), so they must never become the roving-tabindex anchor.
      if (!node.disabled) visible.push(node.key);
      if (node.children?.length && expanded.has(node.key)) collect(node.children);
    }
  };
  collect(treeData);
  const activeKey = focusKey && visible.includes(focusKey) ? focusKey : visible[0];

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (!next.delete(key)) next.add(key);
      return next;
    });
  };

  const select = (key: string) => {
    setFocusKey(key);
    if (!selectedKeys) setOwnSelected(new Set([key]));
    onSelect?.(key);
  };

  /** Visible rows in DOM order — the rendered tree already is the flattened list. */
  const rows = () =>
    Array.from(
      ref.current?.querySelectorAll<HTMLElement>('[role="treeitem"]:not([disabled])') ?? [],
    );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const list = rows();
    const index = list.indexOf(document.activeElement as HTMLElement);
    if (index < 0) return;
    const current = list[index];
    const key = current.dataset.key!;
    const level = Number(current.getAttribute("aria-level"));
    const open = current.getAttribute("aria-expanded");
    let next: HTMLElement | undefined;

    switch (event.key) {
      case "ArrowDown":
        next = list[index + 1];
        break;
      case "ArrowUp":
        next = list[index - 1];
        break;
      case "Home":
        next = list[0];
        break;
      case "End":
        next = list[list.length - 1];
        break;
      case "ArrowRight":
        if (open === "false") toggle(key);
        else if (open === "true") next = list[index + 1];
        break;
      case "ArrowLeft":
        if (open === "true") toggle(key);
        else
          next = list
            .slice(0, index)
            .reverse()
            .find((el) => Number(el.getAttribute("aria-level")) < level);
        break;
      default:
        return;
    }

    event.preventDefault();
    if (next) {
      setFocusKey(next.dataset.key);
      next.focus();
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-none bg-paper border-t border-solid border-rule-strong py-su2",
        className,
      )}
      role="tree"
      onKeyDown={onKeyDown}
      onFocus={(event) => {
        const key = (event.target as HTMLElement).dataset?.key;
        if (key) setFocusKey(key);
      }}
      {...rest}
    >
      {treeData.map((node) => (
        <TreeNodeView
          key={node.key}
          node={node}
          depth={0}
          expanded={expanded}
          selected={selected}
          focusKey={activeKey}
          toggle={toggle}
          select={select}
        />
      ))}
    </div>
  );
}
