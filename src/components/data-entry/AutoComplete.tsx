import {
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { cn } from "../../utils/cn";
import { Input } from "./Input";
import type { InputSize, SelectOption } from "./types";

export interface AutoCompleteProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  options?: SelectOption[];
  filterOption?: (input: string, option: SelectOption) => boolean;
  className?: string;
  /** Native input id — also the target of an external `<label for>`. */
  id?: string;
  /** Native input name, so the field is picked up by form submission / FormData. */
  name?: string;
  /** Show a clear affix once there is a value. */
  allowClear?: boolean;
  /** Suggestions are in flight — shows a searching row instead of "no matches". */
  loading?: boolean;
  /** Replaces the default "No matches" row. */
  notFoundContent?: ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  /** Fires with the visible text — including the option's `label` when one is picked. */
  onChange?: (value: string) => void;
  /** Fires with the option's `value`; the input shows `label`, so don't feed this back into `value`. */
  onSelect?: (value: string, option: SelectOption) => void;
  onClear?: () => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

function defaultFilter(input: string, option: SelectOption): boolean {
  return option.label.toLowerCase().includes(input.toLowerCase());
}

/* Listbox chrome shared with Mentions — one copy so the two can't drift again. */

/** Anchored suggestion surface. The parent must be `relative`. */
export const comboboxPanelClass =
  "absolute top-full left-0 right-0 z-[var(--su-z-dropdown)] overflow-y-auto overscroll-contain max-h-[min(var(--su-dropdown-max-h),50vh)] mt-su1 p-su1 border border-solid border-rule-strong contrast-more:border-2 rounded-none bg-paper shadow-none animate-su-dropdown-in motion-reduce:animate-none";

/** Empty / busy row — the brand's mono label recipe. */
export const comboboxNoticeClass = "px-su3 py-su3 su-label text-ink-2 text-start";

/** One suggestion: 44px to press, accent rail on the keyboard-active row. */
export const comboboxOptionClass =
  "flex items-center w-full min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none bg-transparent text-ink text-body text-start [overflow-wrap:anywhere] cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-secondary data-[active]:(bg-fill-secondary shadow-[inset_2px_0_0_var(--su-accent)]) contrast-more:data-[active]:(bg-accent text-on-action) data-[disabled]:(text-ink-3 opacity-45 pointer-events-none cursor-not-allowed)";

/** Default empty-state copy, shared so both components say the same thing. */
export const NO_MATCHES = "No matches";

export function AutoComplete({
  value: valueProp,
  defaultValue = "",
  placeholder,
  disabled,
  size,
  options = [],
  filterOption = defaultFilter,
  className,
  id,
  name,
  allowClear,
  loading,
  notFoundContent,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  onChange,
  onSelect,
  onClear,
  onFocus,
  onBlur,
}: AutoCompleteProps) {
  const listId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  // false right after a pick, so reopening browses the whole list instead of the one committed label
  const filteringRef = useRef(true);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;

  // ponytail: filter on every render — a few dozen substring tests is cheaper than
  // keeping a memo honest about `filteringRef`. Memoise if option counts reach thousands.
  const filtered =
    value && filteringRef.current ? options.filter((opt) => filterOption(value, opt)) : options;

  /** Next enabled index from `from`, wrapping; `from = -1, dir = 1` gives the first enabled one. */
  const step = (from: number, dir: 1 | -1) => {
    const n = filtered.length;
    if (!n) return 0;
    let i = from;
    for (let k = 0; k < n; k++) {
      i = (i + dir + n) % n;
      if (!filtered[i].disabled) return i;
    }
    return Math.max(from, 0);
  };

  // activeIndex can outlive the list it was picked in (async options, a new filter)
  const clamped = Math.max(0, Math.min(activeIndex, filtered.length - 1));
  const active = filtered[clamped]?.disabled ? step(clamped, 1) : clamped;
  const activeOption = filtered[active];

  const emitChange = (next: string) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const selectOption = (option: SelectOption) => {
    if (option.disabled) return;
    filteringRef.current = false;
    emitChange(option.label);
    onSelect?.(option.value, option);
    setActiveIndex(0);
    setOpen(false);
  };

  // Safari: pressing a non-focusable area doesn't always blur the input, so onBlur alone isn't enough
  useOutsideClick(rootRef, () => setOpen(false), open);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setOpen(true);
      }
      return;
    }
    // ponytail: no Home/End binding — in an editable combobox those belong to the caret.
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex(step(active, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(step(active, -1));
    } else if (event.key === "Enter") {
      event.preventDefault(); // never let an open list submit the enclosing form
      if (activeOption && !activeOption.disabled) selectOption(activeOption);
      else setOpen(false);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation(); // otherwise the same key also dismisses the surrounding Modal/Drawer
      setOpen(false);
    }
  };

  const showClear = Boolean(allowClear && value && !disabled);
  const showPanel = open && (loading || filtered.length > 0 || options.length > 0);

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <Input
        id={id}
        name={name}
        role="combobox"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-expanded={open}
        aria-controls={showPanel ? listId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={showPanel && activeOption ? `${listId}-${active}` : undefined}
        className={cn(showClear && "pr-[var(--su-hit-target)]")}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onChange={(e) => {
          filteringRef.current = true;
          emitChange(e.target.value);
          setOpen(true);
          setActiveIndex(0);
        }}
        onFocus={(e) => {
          setOpen(true);
          onFocus?.(e);
        }}
        onClick={() => setOpen(true)}
        onBlur={(e) => {
          if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
          onBlur?.(e);
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {showClear && (
        <button
          type="button"
          aria-label="Clear"
          className="absolute top-0 right-0 grid place-items-center h-full w-[var(--su-hit-target)] rounded-none bg-transparent text-ink-2 text-footnote cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:text-ink"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            filteringRef.current = true;
            emitChange("");
            onClear?.();
            setActiveIndex(0);
            setOpen(true);
          }}
        >
          ✕
        </button>
      )}
      <span
        aria-live="polite"
        className="absolute w-px h-px overflow-hidden [clip-path:inset(50%)]"
      >
        {open && !loading ? `${filtered.length} suggestions` : ""}
      </span>
      {showPanel && (
        <div
          id={listId}
          className={comboboxPanelClass}
          role="listbox"
          aria-label="Suggestions"
          aria-busy={loading || undefined}
        >
          {loading ? (
            <div className={comboboxNoticeClass}>Searching…</div>
          ) : filtered.length === 0 ? (
            <div className={comboboxNoticeClass}>{notFoundContent ?? NO_MATCHES}</div>
          ) : (
            filtered.map((option, index) => (
              <button
                key={option.value}
                id={`${listId}-${index}`}
                // browsers don't scroll aria-activedescendant targets into view — we have to
                ref={
                  index === active
                    ? (el) => void el?.scrollIntoView({ block: "nearest" })
                    : undefined
                }
                tabIndex={-1}
                type="button"
                role="option"
                aria-selected={option.label === value}
                data-active={index === active || undefined}
                aria-disabled={option.disabled || undefined}
                data-disabled={option.disabled || undefined}
                className={comboboxOptionClass}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
