import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";

/**
 * The viewport is the focusable element, but its own ring would be clipped by
 * the frame's overflow-hidden, so the frame wears the ring instead.
 */
const focusRingClass =
  "[&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-2 " +
  "[&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-solid " +
  "[&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-accent " +
  "[&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-offset-[var(--su-focus-ring-offset)]";

export interface ListyProps extends ComponentPropsWithoutRef<
  typeof ScrollArea.Root
> {
  height?: number | string;
  /** Virtual rows have a fixed height; disable virtualization for variable-height content. */
  itemHeight?: number;
  overscan?: number;
  virtual?: boolean;
  children?: ReactNode;
}
export function Listy({
  height = 240,
  itemHeight = 48,
  overscan = 4,
  virtual = true,
  className,
  children,
  style,
  ...rest
}: ListyProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof height === "number" ? height : 240,
  );
  useEffect(() => {
    if (!viewport.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setViewportHeight(entry.contentRect.height),
    );
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);
  const rows = Children.toArray(children);
  const rowHeight = Math.max(1, itemHeight);
  const start = Math.max(
    0,
    Math.min(rows.length - 1, Math.floor(scrollTop / rowHeight) - overscan),
  );
  const end = Math.min(
    rows.length,
    start + Math.ceil(viewportHeight / rowHeight) + overscan * 2,
  );
  return (
    <ScrollArea.Root
      className={cn(
        "rounded-none bg-paper border border-solid border-rule border-t-rule-strong overflow-hidden",
        focusRingClass,
        className,
      )}
      style={{ height, ...style }}
      {...rest}
    >
      <ScrollArea.Viewport
        ref={viewport}
        // Focusable so keyboard/switch users can reach rows past the fold:
        // a focused overflow:auto element handles Arrow/Page/Home/End natively.
        tabIndex={0}
        className="size-full"
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        {virtual ? (
          <div
            role="list"
            style={{ height: rows.length * rowHeight, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: start * rowHeight,
                width: "100%",
              }}
            >
              {rows.slice(start, end).map((row, i) => (
                <div
                  key={start + i}
                  role="listitem"
                  aria-setsize={rows.length}
                  aria-posinset={start + i + 1}
                  className={cn(
                    "overflow-hidden",
                    start + i > 0 && "border-t border-solid border-rule",
                  )}
                  style={{ height: rowHeight }}
                >
                  {row}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div role="list">
            {rows.map((row, i) => (
              <div
                key={i}
                role="listitem"
                aria-setsize={rows.length}
                aria-posinset={i + 1}
                className={cn(i > 0 && "border-t border-solid border-rule")}
              >
                {row}
              </div>
            ))}
          </div>
        )}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex w-2 p-0.5 touch-none"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 rounded-none bg-fill" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
export interface ListyItemProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  /** Slots mirror List.Item; omit them all for a bare `children` row. */
  title?: ReactNode;
  description?: ReactNode;
  avatar?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
}
export function ListyItem({
  title,
  description,
  avatar,
  extra,
  className,
  children,
  ...rest
}: ListyItemProps) {
  const slotted = title || description || avatar || extra;
  return (
    <div
      className={cn(
        "py-su3 px-su4 text-body text-label not-first:border-t not-first:border-solid not-first:border-rule",
        slotted ? "flex items-start gap-su3" : "truncate",
        className,
      )}
      {...rest}
    >
      {slotted ? (
        <>
          {avatar ? <div className="shrink-0">{avatar}</div> : null}
          <div className="flex-1 min-w-0">
            {title ? <div className="font-medium truncate">{title}</div> : null}
            {description ? (
              <div className="mt-su1 text-footnote text-label-secondary truncate">
                {description}
              </div>
            ) : null}
            {children}
          </div>
          {extra ? (
            <div className="shrink-0 text-label-tertiary text-footnote">
              {extra}
            </div>
          ) : null}
        </>
      ) : (
        children
      )}
    </div>
  );
}
Listy.Item = ListyItem;
