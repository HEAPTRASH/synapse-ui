import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useConfig } from "../../ConfigProvider";
import { cn } from "../../utils/cn";
import { SvgIcon } from "../general/Icon";
import { Segmented } from "./Segmented";

export interface CalendarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange" | "defaultValue" | "value"
> {
  fullscreen?: boolean;
  /** Extra line under the day number — an event title, a count. Truncated to one line. */
  dateRender?: (date: Date) => ReactNode;
  /** Blocks a date: not selectable, muted, still reachable by keyboard. */
  disabledDate?: (date: Date) => boolean;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Chevron({ back }: { back?: boolean }) {
  return (
    <SvgIcon size="sm">
      <path d={back ? "M15 4 7 12l8 8" : "M9 4l8 8-8 8"} />
    </SvgIcon>
  );
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function sameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** Days in a month, so a page-up out of the 31st lands on the 28th rather than overflowing. */
function clampDay(year: number, month: number, day: number) {
  return new Date(year, month, Math.min(day, new Date(year, month + 1, 0).getDate()));
}

/** Sunday-indexed first day of the week for a locale (Intl says Mon=1…Sun=7). */
function weekStart(locale: string) {
  try {
    const info = (
      new Intl.Locale(locale) as Intl.Locale & {
        getWeekInfo?: () => { firstDay: number };
        weekInfo?: { firstDay: number };
      }
    );
    const firstDay = (info.getWeekInfo?.() ?? info.weekInfo)?.firstDay;
    return firstDay ? firstDay % 7 : 0;
  } catch {
    return 0;
  }
}

const navButtonClass =
  "inline-flex items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] rounded-none bg-transparent text-label-secondary cursor-pointer transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:(bg-fill-quaternary text-label) su-focus-ring";

const ARROW_DELTA: Record<string, number> = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -7,
  ArrowDown: 7,
};

export function Calendar({
  value,
  fullscreen = false,
  dateRender,
  disabledDate,
  defaultValue,
  onChange,
  className,
  ...rest
}: CalendarProps) {
  const { locale } = useConfig();
  const firstDay = weekStart(locale);
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
      // 4 Jan 2026 is a Sunday; the weekday cycles every 7 days.
      new Date(2026, 0, 4 + firstDay + i),
    ),
  );
  const [internal, setInternal] = useState(() => defaultValue ?? new Date());
  const selected = value ?? internal;
  const [mode, setMode] = useState<"month" | "year">("month");
  const [view, setView] = useState(
    () => new Date(selected.getFullYear(), selected.getMonth(), 1),
  );
  // A controlled value that jumps months must bring the panel with it.
  const valueYear = value?.getFullYear();
  const valueMonth = value?.getMonth();
  useEffect(() => {
    if (valueYear !== undefined && valueMonth !== undefined) {
      setView(new Date(valueYear, valueMonth, 1));
    }
  }, [valueYear, valueMonth]);

  const days = useMemo(() => {
    const start = new Date(view.getFullYear(), view.getMonth(), 1);
    const end = new Date(view.getFullYear(), view.getMonth() + 1, 0);
    const cells: Array<Date | null> = [];
    for (let i = 0; i < (start.getDay() - firstDay + 7) % 7; i++) cells.push(null);
    for (let d = 1; d <= end.getDate(); d++) {
      cells.push(new Date(view.getFullYear(), view.getMonth(), d));
    }
    return cells;
  }, [view, firstDay]);

  // Roving tabindex: one day is in the tab order, arrows move between the rest.
  const gridRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<Date | null>(null);
  const tabbable =
    focused && sameMonth(focused, view)
      ? focused.getDate()
      : sameMonth(selected, view)
        ? selected.getDate()
        : sameMonth(new Date(), view)
          ? new Date().getDate()
          : 1;

  useEffect(() => {
    if (!focused) return;
    gridRef.current
      ?.querySelector<HTMLButtonElement>(`[data-day="${focused.getDate()}"]`)
      ?.focus();
  }, [focused]);

  const pick = (date: Date) => {
    if (disabledDate?.(date)) return;
    if (!value) setInternal(date);
    onChange?.(date);
  };

  const shiftMonth = (delta: number) => {
    setView((v) => new Date(v.getFullYear(), v.getMonth() + delta, 1));
  };

  const onDayKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: Date) => {
    const [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate()];
    const arrow = ARROW_DELTA[event.key];
    let next: Date | null = null;
    if (arrow !== undefined) next = new Date(y, m, d + arrow);
    else if (event.key === "Home") next = new Date(y, m, d - ((date.getDay() - firstDay + 7) % 7));
    else if (event.key === "End")
      next = new Date(y, m, d + 6 - ((date.getDay() - firstDay + 7) % 7));
    else if (event.key === "PageUp") next = clampDay(y, m - (event.shiftKey ? 12 : 1), d);
    else if (event.key === "PageDown") next = clampDay(y, m + (event.shiftKey ? 12 : 1), d);
    if (!next) return;
    event.preventDefault();
    setFocused(next);
    if (!sameMonth(next, view)) setView(new Date(next.getFullYear(), next.getMonth(), 1));
  };

  const monthLabel = view.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className={cn(
        "w-[280px] p-su3 rounded-none bg-paper border-t border-solid border-rule-strong",
        fullscreen && "w-full p-su4",
        className,
      )}
      {...rest}
    >
      <div className="flex flex-wrap items-center justify-between gap-su2 mb-su3">
        <span
          className={cn(
            "font-semibold text-label tabular-nums",
            fullscreen
              ? "text-title-3"
              : "text-subhead",
          )}
        >
          {mode === "year" ? view.getFullYear() : monthLabel}
        </span>
        <div className="flex items-center gap-su2 ms-auto">
          {fullscreen && (
            <Segmented
              value={mode}
              onValueChange={(next) => setMode(next as "month" | "year")}
              options={[
                { value: "month", label: "Month" },
                { value: "year", label: "Year" },
              ]}
            />
          )}
          <div className="inline-flex items-center">
            <button
              type="button"
              className={navButtonClass}
              onClick={() => shiftMonth(mode === "year" ? -12 : -1)}
              aria-label={mode === "year" ? "Previous year" : "Previous month"}
            >
              <Chevron back />
            </button>
            <button
              type="button"
              className={navButtonClass}
              onClick={() => shiftMonth(mode === "year" ? 12 : 1)}
              aria-label={mode === "year" ? "Next year" : "Next month"}
            >
              <Chevron />
            </button>
          </div>
        </div>
      </div>
      {mode === "year" ? (
        <div className="grid grid-cols-3 gap-su2">
          {Array.from({ length: 12 }, (_, month) => (
            <button
              type="button"
              key={month}
              aria-current={month === view.getMonth() ? "true" : undefined}
              className={cn(
                "min-h-[72px] border border-solid border-rule rounded-none bg-canvas text-label text-subhead cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-tertiary su-focus-ring",
                month === view.getMonth() && "bg-accent-soft text-accent font-semibold",
              )}
              onClick={() => {
                setView(new Date(view.getFullYear(), month, 1));
                setMode("month");
              }}
            >
              {new Intl.DateTimeFormat(locale, { month: "long" }).format(
                new Date(view.getFullYear(), month, 1),
              )}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div
            className={cn(
              "grid grid-cols-7",
              fullscreen ? "gap-0" : "gap-su1",
            )}
          >
            {weekdays.map((d) => (
              <span
                key={d}
                className={cn(
                  "font-semibold text-label-tertiary text-caption-1",
                  fullscreen
                    ? "px-su2 pb-su2 text-start"
                    : "pb-su1 text-center",
                )}
              >
                {d}
              </span>
            ))}
          </div>
          <div
            ref={gridRef}
            className={cn(
              "grid grid-cols-7",
              fullscreen ? "gap-0" : "gap-su1",
            )}
          >
            {days.map((date, i) => {
              if (!date) {
                return (
                  <span
                    key={`empty-${i}`}
                    className={cn(
                      fullscreen
                        ? "aspect-auto min-h-[92px] max-md:min-h-14 border-t border-solid border-rule"
                        : dateRender
                          ? "min-h-13"
                          : "aspect-square",
                    )}
                  />
                );
              }
              const isSelected = sameDay(date, selected);
              // aria-disabled, not `disabled`: a blocked day stays in the roving focus path.
              const isDisabled = disabledDate?.(date) ?? false;
              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  data-day={date.getDate()}
                  tabIndex={date.getDate() === tabbable ? 0 : -1}
                  className={cn(
                    // Alignment and padding live only in the branches: `cn()` is a plain join, so a
                    // base `place-items-center` would beat the fullscreen `place-items-start`.
                    "group grid rounded-none bg-transparent text-footnote cursor-pointer su-focus-ring",
                    fullscreen
                      ? "aspect-auto min-h-[92px] max-md:min-h-14 border-t border-solid border-rule place-items-start content-start gap-su1 p-su2 max-md:p-su1 text-start"
                      : dateRender
                        ? "place-items-center min-h-13 content-center gap-su1 px-0 py-su1"
                        : "place-items-center p-0 aspect-square",
                    fullscreen && isSelected && "bg-accent-soft",
                    fullscreen &&
                      !isSelected &&
                      !isDisabled &&
                      "hover:bg-fill-quaternary",
                    isDisabled
                      ? "text-label-tertiary cursor-not-allowed"
                      : "text-label",
                  )}
                  aria-label={date.toLocaleDateString(locale, {
                    dateStyle: "full",
                  })}
                  aria-pressed={isSelected}
                  aria-disabled={isDisabled || undefined}
                  onClick={() => pick(date)}
                  onKeyDown={(event) => onDayKeyDown(event, date)}
                >
                  <span
                    className={cn(
                      "grid place-items-center h-[var(--su-control-xs)] rounded-none tabular-nums transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
                      fullscreen
                        ? "min-w-0 px-su2"
                        : "min-w-[var(--su-control-xs)] px-su1",
                      isSelected
                        ? "bg-accent text-on-action font-semibold group-hover:bg-[var(--su-accent-hover)]"
                        : cn(
                            !isDisabled &&
                              sameDay(date, new Date()) &&
                              "text-accent font-semibold",
                            !fullscreen &&
                              !isDisabled &&
                              "group-hover:bg-fill-quaternary",
                          ),
                    )}
                  >
                    {date.getDate()}
                  </span>
                  {dateRender && (
                    <span
                      className={cn(
                        "block max-w-full overflow-hidden text-label-secondary text-caption-2 text-ellipsis whitespace-nowrap",
                        fullscreen && "ps-su2",
                      )}
                    >
                      {dateRender(date)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
