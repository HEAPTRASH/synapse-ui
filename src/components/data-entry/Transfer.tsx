import { type KeyboardEvent, useCallback, useMemo, useState } from "react";
import { cn } from "../../utils/cn";
import { useFormContext, useFormItemContext } from "./Form";
import type { SelectOption } from "./types";

export interface TransferProps {
  dataSource?: SelectOption[];
  targetKeys?: string[];
  defaultTargetKeys?: string[];
  disabled?: boolean;
  titles?: [string, string];
  className?: string;
  onChange?: (targetKeys: string[]) => void;
}

const moveButtonClass =
  "min-w-[var(--su-hit-target)] min-h-[var(--su-control-lg)] px-[var(--su-space-2)] py-0 border border-solid border-rule-strong rounded-none bg-canvas text-label text-body cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] rtl:rotate-180 hover:not-disabled:bg-fill su-focus-ring disabled:(opacity-45 cursor-not-allowed)";

const panelClass =
  "flex-1 min-w-0 flex flex-col border border-solid border-rule border-t-rule-strong rounded-none bg-paper overflow-hidden";

/** Brand label recipe (mono, wide cut, 11px uppercase) — matches Card's header label. */
const headerClass =
  "flex items-center justify-between gap-su2 px-[var(--su-space-3)] py-[var(--su-space-2)] border-b border-solid border-rule bg-canvas su-label text-ink-2";

const optionClass =
  "flex items-center gap-su2 p-su2 rounded-none text-body text-label cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-secondary su-focus-ring [&_>span]:(min-w-0 overflow-hidden whitespace-nowrap text-ellipsis)";

export function Transfer({
  dataSource = [],
  targetKeys: targetKeysProp,
  defaultTargetKeys = [],
  disabled,
  titles = ["Source", "Target"],
  className,
  onChange,
}: TransferProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;

  const [internal, setInternal] = useState<string[]>(defaultTargetKeys);
  const [sourceSelected, setSourceSelected] = useState<string[]>([]);
  const [targetSelected, setTargetSelected] = useState<string[]>([]);
  // roving tabindex: one Tab stop per listbox, arrows move DOM focus between rows
  const [activeIndex, setActiveIndex] = useState({ source: 0, target: 0 });

  const isControlled = targetKeysProp !== undefined;
  const targetKeys = isControlled ? targetKeysProp : internal;

  const emit = useCallback(
    (next: string[]) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const sourceItems = useMemo(
    () => dataSource.filter((item) => !targetKeys.includes(item.value)),
    [dataSource, targetKeys],
  );

  const targetItems = useMemo(
    () => dataSource.filter((item) => targetKeys.includes(item.value)),
    [dataSource, targetKeys],
  );

  const toggleSelection = (
    key: string,
    side: "source" | "target",
    itemDisabled?: boolean,
  ) => {
    if (isDisabled || itemDisabled) return;
    const setter = side === "source" ? setSourceSelected : setTargetSelected;
    setter((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const moveToTarget = (keys: string[] = sourceSelected) => {
    if (isDisabled || keys.length === 0) return;
    emit([...targetKeys, ...keys.filter((k) => !targetKeys.includes(k))]);
    setSourceSelected([]);
  };

  const moveToSource = (keys: string[] = targetSelected) => {
    if (isDisabled || keys.length === 0) return;
    emit(targetKeys.filter((key) => !keys.includes(key)));
    setTargetSelected([]);
  };

  const handleListKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    side: "source" | "target",
  ) => {
    const nodes = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="option"]'),
    );
    if (nodes.length === 0) return;
    const current = nodes.indexOf(document.activeElement as HTMLElement);
    let next: number;
    if (event.key === "ArrowDown") next = Math.min(current + 1, nodes.length - 1);
    else if (event.key === "ArrowUp") next = Math.max(current - 1, 0);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = nodes.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex((prev) => ({ ...prev, [side]: next }));
    nodes[next]?.focus();
  };

  const renderPanel = (
    title: string,
    items: SelectOption[],
    selected: string[],
    side: "source" | "target",
  ) => {
    // keep the single Tab stop on an enabled row
    const firstEnabled = items.findIndex((o) => !o.disabled);
    const stop =
      !isDisabled && items[activeIndex[side]] && !items[activeIndex[side]].disabled
        ? activeIndex[side]
        : firstEnabled;

    return (
      <div className={panelClass}>
        <div className={headerClass}>
          <span className="truncate">{title}</span>
          {/* title wins the space on small screens */}
          <span className="hidden sm:inline text-footnote text-label-secondary tabular-nums normal-case tracking-normal font-sans">
            {selected.length}/{items.length}
          </span>
        </div>
        <div
          className="flex-1 overflow-auto max-h-[240px] p-su1"
          role="listbox"
          aria-label={title}
          aria-multiselectable="true"
          aria-describedby={item?.descriptionId}
          aria-invalid={item?.error ? true : undefined}
          onKeyDown={(e) => handleListKeyDown(e, side)}
        >
          {items.length === 0 ? (
            <div className="p-su3 text-footnote text-ink-2 text-center">
              No items
            </div>
          ) : (
            items.map((option, index) => {
              const isSelected = selected.includes(option.value);
              const rowDisabled = isDisabled || option.disabled;
              return (
                <div
                  key={option.value}
                  role="option"
                  tabIndex={!rowDisabled && index === stop ? 0 : -1}
                  aria-disabled={rowDisabled}
                  aria-selected={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      toggleSelection(option.value, side, option.disabled);
                    }
                  }}
                  className={cn(
                    optionClass,
                    isSelected && "bg-accent-soft",
                    // root already dims when the whole control is disabled
                    option.disabled && "opacity-45",
                    rowDisabled && "cursor-not-allowed",
                  )}
                  onClick={() => toggleSelection(option.value, side, option.disabled)}
                  onDoubleClick={() => {
                    if (rowDisabled) return;
                    if (side === "source") moveToTarget([option.value]);
                    else moveToSource([option.value]);
                  }}
                >
                  <span>{option.label}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      id={item?.id}
      className={cn(
        "flex items-stretch w-full gap-su3",
        isDisabled && "opacity-45",
        className,
      )}
      role="group"
    >
      {renderPanel(titles[0], sourceItems, sourceSelected, "source")}
      <div className="flex flex-col justify-center gap-su2">
        <button
          type="button"
          className={moveButtonClass}
          disabled={isDisabled || sourceSelected.length === 0}
          onClick={() => moveToTarget()}
          aria-label="Move to target"
        >
          ›
        </button>
        <button
          type="button"
          className={moveButtonClass}
          disabled={isDisabled || targetSelected.length === 0}
          onClick={() => moveToSource()}
          aria-label="Move to source"
        >
          ‹
        </button>
      </div>
      {renderPanel(titles[1], targetItems, targetSelected, "target")}
    </div>
  );
}
