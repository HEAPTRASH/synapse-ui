import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import { useFieldState, useFormItemContext } from "./Form";
import { selectTriggerClass } from "./Select";
import type { CascaderOption } from "./types";

export interface CascaderProps {
  value?: string[];
  defaultValue?: string[];
  placeholder?: string;
  disabled?: boolean;
  options?: CascaderOption[];
  /** Rendered when the root column has no options. */
  notFoundContent?: ReactNode;
  className?: string;
  /**
   * Fires at every level of the drill-down, not only on leaf selection — the
   * emitted path is what the panel currently shows expanded. Check
   * `value.length` / your own tree if you need "the user finished picking".
   */
  onChange?: (value: string[], labels: string[]) => void;
}

function findPath(
  options: CascaderOption[],
  values: string[],
): { columns: CascaderOption[][]; labels: string[] } {
  const columns: CascaderOption[][] = [options];
  const labels: string[] = [];
  let current = options;

  for (const val of values) {
    const match = current.find((opt) => opt.value === val);
    if (!match) break;
    labels.push(match.label);
    if (match.children?.length) {
      current = match.children;
      columns.push(current);
    }
  }

  return { columns, labels };
}

function focusOption(column: Element | null | undefined, index = 0) {
  const opts = column?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
  if (!opts?.length) return;
  opts[Math.max(0, Math.min(index, opts.length - 1))].focus();
}

export function Cascader({
  value: valueProp,
  defaultValue = [],
  placeholder = "Select…",
  disabled,
  options = [],
  notFoundContent = "No options",
  className,
  onChange,
}: CascaderProps) {
  const item = useFormItemContext();
  const { disabled: isDisabled } = useFieldState(undefined, disabled);

  const [internal, setInternal] = useState<string[]>(defaultValue);
  const [open, setOpen] = useState(false);
  // Level whose first option should take focus once the panel has re-rendered.
  const [pendingLevel, setPendingLevel] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;

  const { columns, labels } = useMemo(() => findPath(options, value), [options, value]);
  const display = labels.length > 0 ? labels.join(" / ") : null;

  const emit = useCallback(
    (next: string[]) => {
      const { labels: nextLabels } = findPath(options, next);
      if (!isControlled) setInternal(next);
      onChange?.(next, nextLabels);
    },
    [isControlled, onChange, options],
  );

  const handleSelect = (level: number, option: CascaderOption) => {
    if (option.disabled) return;
    const next = value.slice(0, level);
    next[level] = option.value;
    emit(next);
    if (!option.children?.length) setOpen(false);
  };

  useEffect(() => {
    if (pendingLevel === null) return;
    focusOption(panelRef.current?.children[pendingLevel]);
    setPendingLevel(null);
  }, [pendingLevel, columns]);

  // Escape, outside press, Tab-out and focus return to the trigger are Radix Popover's job.
  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = document.activeElement as HTMLButtonElement | null;
    const column = current?.closest("[data-column]");
    if (!column) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const siblings = [...column.querySelectorAll<HTMLButtonElement>("button:not(:disabled)")];
      const i = siblings.indexOf(current as HTMLButtonElement);
      focusOption(column, i + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      const level = Number(column.getAttribute("data-column"));
      const option = columns[level]?.[Number(current?.dataset.index)];
      if (column.nextElementSibling && value[level] === option?.value) {
        // The focused option is the one that produced the next column.
        focusOption(column.nextElementSibling);
      } else if (option && current?.dataset.branch) {
        // Branch not expanded (or a sibling is): commit it, then focus its column.
        handleSelect(level, option);
        setPendingLevel(level + 1);
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusOption(column.previousElementSibling);
    }
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          id={item?.id}
          disabled={isDisabled}
          className={cn(selectTriggerClass, className)}
          aria-haspopup="listbox"
          aria-describedby={item?.descriptionId}
          aria-invalid={item?.error ? true : undefined}
          title={display ?? undefined}
        >
          <span className={cn("min-w-0 truncate", !display && "text-label-tertiary")}>
            {display ?? placeholder}
          </span>
          <span className="shrink-0 text-label-secondary text-[12px]" aria-hidden="true">
            ▾
          </span>
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={panelRef}
          role="listbox"
          align="start"
          sideOffset={4}
          collisionPadding={8}
          className="su-popover flex max-w-[calc(100vw-var(--su-space-4))] overflow-x-auto border-rule-strong p-0"
          onKeyDown={handlePanelKeyDown}
          // Radix would park focus on the panel itself, where the arrow keys have no row to move from.
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            focusOption(panelRef.current?.children[0]);
          }}
        >
          {columns.map((column, level) => (
            <div
              key={level}
              data-column={level}
              className="min-w-[140px] max-h-[var(--su-dropdown-max-h)] overflow-y-auto p-su1 border-e border-solid border-rule last:border-e-0"
            >
              {column.length === 0 ? (
                <div className="p-su3 text-footnote text-ink-2 text-center">{notFoundContent}</div>
              ) : (
                column.map((option, index) => {
                  const isActive = value[level] === option.value;
                  const isBranch = Boolean(option.children?.length);
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      tabIndex={-1}
                      data-index={index}
                      data-branch={isBranch ? "true" : undefined}
                      aria-selected={isActive}
                      disabled={option.disabled}
                      className={cn(
                        "flex items-center justify-between gap-su2 w-full min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none bg-transparent text-ink text-body text-start cursor-pointer su-focus-ring hover:bg-fill-secondary",
                        isActive && "bg-fill-secondary shadow-[inset_2px_0_0_var(--su-accent)]",
                        isActive && "contrast-more:(bg-accent text-on-action)",
                        option.disabled && "opacity-45 cursor-not-allowed",
                      )}
                      onClick={() => handleSelect(level, option)}
                    >
                      <span className="min-w-0 truncate">{option.label}</span>
                      {isBranch ? (
                        <span className="text-ink-2 text-caption-1" aria-hidden="true">
                          ›
                        </span>
                      ) : null}
                    </button>
                  );
                })
              )}
            </div>
          ))}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
