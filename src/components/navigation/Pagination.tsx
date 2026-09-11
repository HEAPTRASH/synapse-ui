import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  current: number;
  /**
   * Without `pageSize`: total number of **pages** (Synapse's historical meaning).
   * With `pageSize`: total number of **items**, Ant Design style — the page count
   * is then `Math.ceil(total / pageSize)`.
   */
  total?: number;
  /** Alias for `total` — total page count. Ignored when `pageSize` is set. */
  totalPages?: number;
  /** Items per page. Setting it switches `total` to Ant's item-count semantics. */
  pageSize?: number;
  onChange?: (page: number, pageSize?: number) => void;
  siblingCount?: number;
  /** Freeze the whole control (e.g. while the table is fetching). */
  disabled?: boolean;
  /** Render nothing when there is only one page. */
  hideOnSinglePage?: boolean;
}

/** Public helper (exported as `paginationRange`); also used by `getPageItems`. */
function range(start: number, end: number): number[] {
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);
}

/**
 * Constant-width window: while `total` is unchanged the slot count never varies,
 * so items do not slide out from under the pointer between clicks (rc-pagination
 * does the same with `pageBufferSize`).
 */
function getPageItems(current: number, total: number, siblingCount: number): Array<number | "ellipsis"> {
  if (total <= 1) return total === 1 ? [1] : [];

  const slots = 2 * siblingCount + 5;
  if (total <= slots) return range(1, total);

  const run = 2 * siblingCount + 3;
  if (current <= siblingCount + 3) return [...range(1, run), "ellipsis", total];
  if (current >= total - (siblingCount + 2)) return [1, "ellipsis", ...range(total - run + 1, total)];
  return [1, "ellipsis", ...range(current - siblingCount, current + siblingCount), "ellipsis", total];
}

/**
 * One 32px cell with a centred 44x44 invisible hit area — the brand's
 * "32px visible, 44px hit area" rule for small controls.
 */
const cellClass =
  "su-hit-44 inline-flex items-center justify-center h-[var(--su-control-sm)] min-w-[var(--su-control-sm)] px-su1 select-none " +
  "font-mono text-caption-1 tabular-nums";

const itemClass = cn(
  cellClass,
  "m-0 cursor-pointer",
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
  "su-focus-ring",
  "[&[aria-disabled='true']]:(text-label-quaternary cursor-not-allowed pointer-events-none)",
);

// `cn` is a plain join, so rest/current colours are mutually exclusive strings
// rather than overrides — nothing here may depend on stylesheet source order.
const restClass =
  "bg-transparent text-label-secondary hover:(bg-fill-tertiary text-label) contrast-more:shadow-[0_0_0_1px_var(--su-label)]";

/** Current page = the one filled cell on the row. Ink invert, never the action blue. */
const currentClass = "bg-ink text-paper contrast-more:shadow-[0_0_0_2px_var(--su-label)]";

function Chevron({ back }: { back?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className="rtl:rotate-180"
    >
      <path d={back ? "M9 3L5 7l4 4" : "M5 3l4 4-4 4"} />
    </svg>
  );
}

export function Pagination({
  current,
  total: totalProp,
  totalPages,
  pageSize,
  onChange,
  siblingCount = 1,
  disabled,
  hideOnSinglePage,
  className,
  ...rest
}: PaginationProps) {
  const rawTotal = pageSize
    ? Math.ceil((totalProp ?? 0) / pageSize)
    : (totalPages ?? totalProp ?? 1);
  const total = Math.max(0, Math.trunc(rawTotal) || 0);
  // Clamp: a stale `current` must never render a dead page button (Ant's getValidValue).
  const page = Math.min(Math.max(1, Math.trunc(current) || 1), Math.max(1, total));

  const pages = getPageItems(page, total, siblingCount);
  if (pages.length === 0 || (hideOnSinglePage && total <= 1)) return null;

  const canPrev = page > 1;
  const canNext = page < total;

  const goTo = (next: number) => {
    if (disabled || next < 1 || next > total || next === page) return;
    onChange?.(next, pageSize);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const rtl = event.currentTarget.closest("[dir='rtl']") !== null;
    const back = rtl ? "ArrowRight" : "ArrowLeft";
    const fwd = rtl ? "ArrowLeft" : "ArrowRight";
    const step: Record<string, number> = {
      [back]: page - 1,
      [fwd]: page + 1,
      ArrowUp: page - 1,
      ArrowDown: page + 1,
      Home: 1,
      End: total,
    };
    const next = step[event.key];
    if (next === undefined) return;
    event.preventDefault();
    goTo(next);
  };

  const arrow = (dir: "prev" | "next"): ReactNode => {
    const enabled = dir === "prev" ? canPrev : canNext;
    return (
      <li>
        <button
          type="button"
          className={cn(itemClass, restClass)}
          aria-disabled={!enabled || disabled || undefined}
          aria-label={dir === "prev" ? "Previous page" : "Next page"}
          title={dir === "prev" ? "Previous page" : "Next page"}
          onClick={() => goTo(dir === "prev" ? page - 1 : page + 1)}
        >
          <Chevron back={dir === "prev"} />
        </button>
      </li>
    );
  };

  return (
    <nav
      className={cn(
        "inline-flex flex-wrap items-center justify-center max-w-full",
        disabled && "opacity-40 pointer-events-none",
        className,
      )}
      aria-label="Pagination"
      aria-busy={disabled || undefined}
      onKeyDown={onKeyDown}
      {...rest}
    >
      {/* 12px gutters make the 32px cells tile on a 44px hit-area pitch. */}
      <ul role="list" className="flex flex-wrap items-center justify-center gap-su3 m-0 p-0 list-none">
        {arrow("prev")}

        {pages.map((item, index) =>
          item === "ellipsis" ? (
            <li key={index === 1 ? "ellipsis-start" : "ellipsis-end"}>
              <span className={cn(cellClass, "text-label-secondary [&::after]:hidden")}>
                <span aria-hidden="true">…</span>
                <span className="sr-only">More pages</span>
              </span>
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                className={cn(itemClass, item === page ? currentClass : restClass)}
                aria-label={`Page ${item}`}
                aria-current={item === page ? "page" : undefined}
                aria-disabled={disabled || undefined}
                onClick={() => goTo(item)}
              >
                {item}
              </button>
            </li>
          ),
        )}

        {arrow("next")}
      </ul>

      <span className="sr-only" aria-live="polite">{`Page ${page} of ${total}`}</span>
    </nav>
  );
}

export { range as paginationRange };
