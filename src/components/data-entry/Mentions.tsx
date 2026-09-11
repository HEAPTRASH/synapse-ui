import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { cn } from "../../utils/cn";
import {
  NO_MATCHES,
  comboboxNoticeClass,
  comboboxOptionClass,
  comboboxPanelClass,
} from "./AutoComplete";
import { useFieldState, useFormItemContext } from "./Form";
import type { InputSize, SelectOption } from "./types";

export interface MentionsProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  prefix?: string;
  disabled?: boolean;
  size?: InputSize;
  options?: SelectOption[];
  className?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: SelectOption) => void;
}

/**
 * Text after the last `prefix` in `value.slice(0, cursor)`, or null when the caret
 * isn't inside a mention. Plain string ops — a RegExp built from `prefix` would break
 * on metacharacters and mis-handle multi-character prefixes.
 */
function getMentionQuery(value: string, cursor: number, prefix: string): string | null {
  const before = value.slice(0, cursor);
  const start = before.lastIndexOf(prefix);
  if (start === -1) return null;
  const rest = before.slice(start + prefix.length);
  return /\s/.test(rest) ? null : rest;
}

const textareaSize: Record<InputSize, string | undefined> = {
  sm: "min-h-[72px] text-[length:var(--su-text-footnote)]",
  md: "min-h-[80px]",
  lg: undefined,
};

export function Mentions({
  value: valueProp,
  defaultValue = "",
  placeholder,
  prefix = "@",
  disabled,
  size: sizeProp,
  options = [],
  className,
  onChange,
  onSelect,
}: MentionsProps) {
  const item = useFormItemContext();
  const { size, disabled: isDisabled } = useFieldState(sizeProp, disabled);

  const listId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;

  const filtered = useMemo(() => {
    if (query == null) return [];
    const q = query.toLowerCase();
    return options.filter((opt) => opt.label.toLowerCase().includes(q));
  }, [query, options]);

  /** Next enabled index from `from`, wrapping. */
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

  // activeIndex can outlive the list it was picked in (a new query, async options)
  const clamped = Math.max(0, Math.min(activeIndex, filtered.length - 1));
  const active = filtered[clamped]?.disabled ? step(clamped, 1) : clamped;
  const activeOption = filtered[active];

  const emit = useCallback(
    (next: string) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const close = () => {
    setOpen(false);
    setQuery(null);
  };

  // Safari: pressing a non-focusable area doesn't always blur the textarea, so onBlur alone isn't enough
  useOutsideClick(rootRef, close, open);

  const updateMentionState = (nextValue: string, nextCursor: number) => {
    const nextQuery = getMentionQuery(nextValue, nextCursor, prefix);
    setQuery(nextQuery);
    setOpen(nextQuery != null);
    setActiveIndex(0);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
    const nextCursor = event.target.selectionStart ?? nextValue.length;
    emit(nextValue);
    setCursor(nextCursor);
    updateMentionState(nextValue, nextCursor);
  };

  const insertMention = (option: SelectOption) => {
    const textarea = textareaRef.current;
    if (!textarea || query == null || option.disabled) return;

    const before = value.slice(0, cursor);
    const after = value.slice(cursor);
    const mentionStart = before.lastIndexOf(prefix);
    const nextValue = `${value.slice(0, mentionStart)}${prefix}${option.label} ${after}`;
    emit(nextValue);
    onSelect?.(option);
    close();

    requestAnimationFrame(() => {
      const pos = mentionStart + prefix.length + option.label.length + 1;
      textarea.focus();
      textarea.setSelectionRange(pos, pos);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!open || filtered.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex(step(active, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(step(active, -1));
    } else if (event.key === "Enter" || event.key === "Tab") {
      if (!activeOption) return;
      event.preventDefault();
      insertMention(activeOption);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation(); // otherwise the same key also dismisses the surrounding Modal/Drawer
      close();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node)) close();
  };

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <textarea
        ref={textareaRef}
        id={item?.id}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        role="combobox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={open && activeOption ? `${listId}-${active}` : undefined}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onClick={(e) => {
          const pos = e.currentTarget.selectionStart ?? value.length;
          setCursor(pos);
          updateMentionState(value, pos);
        }}
        className={cn(
          "su-frame su-focus-ring w-full min-h-[88px] p-su3 font-sans text-body resize-y transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] placeholder:text-ink-3 focus-visible:(border-accent shadow-none) aria-invalid:border-danger disabled:(opacity-45 cursor-not-allowed)",
          textareaSize[size],
        )}
        required={item?.required}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      />
      {open && (
        <div id={listId} className={comboboxPanelClass} role="listbox" aria-label="Mentions">
          {filtered.length === 0 ? (
            <div className={comboboxNoticeClass}>{NO_MATCHES}</div>
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
                aria-selected={index === active}
                data-active={index === active || undefined}
                aria-disabled={option.disabled || undefined}
                data-disabled={option.disabled || undefined}
                className={comboboxOptionClass}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => insertMention(option)}
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
