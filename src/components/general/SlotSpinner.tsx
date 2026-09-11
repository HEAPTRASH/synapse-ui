import { useSyncExternalStore } from "react";
import { cn } from "../../utils/cn";

/** Stock lifecycle as it runs on a floor: receiving → on hand → (counted → on hand) → allocated → picking. */
const STOCK = [
  "receiving",
  "onhand",
  "counted",
  "onhand",
  "allocated",
  "picking",
] as const;

type Stock = (typeof STOCK)[number];

/** Clockwise ring around a 3×3 — centre stays empty, like the nav toggle’s rack face. */
const RING = [0, 1, 2, 5, 8, 7, 6, 3];

/** Resting rack face drawn when motion is off: a full field, not a dead grid. */
const RESTING: Stock[] = [
  "onhand",
  "onhand",
  "allocated",
  "picking",
  "counted",
  "onhand",
  "receiving",
  "allocated",
];

/** Uno needs literal class names, so the state ramp is a map rather than a template string. */
const TONE: Record<Stock, string> = {
  receiving: "bg-s-receiving",
  onhand: "bg-s-onhand",
  allocated: "bg-s-allocated",
  picking: "bg-s-picking",
  counted: "bg-s-counted",
};

const SIZE = {
  sm: "grid-cols-[repeat(3,4px)] gap-px [&>span]:size-[4px]",
  md: "grid-cols-[repeat(3,6px)] gap-px [&>span]:size-[6px]",
  lg: "grid-cols-[repeat(3,8px)] gap-[2px] [&>span]:size-[8px]",
} satisfies Record<string, string>;

/**
 * Stepped slot fill (the brand's `steps(4)`), timed to one tick so the lit cell
 * reaches full value before it hands off and the outgoing cell leaves a short tail.
 */
const cellClass = "[transition:background-color_140ms_var(--su-ease-step)]";

/** Empty slot on paper/canvas. --su-s-free (7%) is tuned for a full lattice; at 3×3 it vanishes, so `rule` (10/12%). */
const freeClass =
  "bg-rule contrast-more:bg-ink-3 forced-colors:(bg-[Canvas] outline outline-1 outline-[GrayText])";
/** Empty slot on the action fill — derived from --su-on-action, never raw white. */
const freeOnActionClass =
  "bg-[color-mix(in_srgb,var(--su-on-action)_28%,transparent)] contrast-more:bg-[color-mix(in_srgb,var(--su-on-action)_45%,transparent)] forced-colors:(bg-[Canvas] outline outline-1 outline-[GrayText])";
const litClass = "contrast-more:bg-accent forced-colors:bg-[CanvasText]";
/**
 * On the action fill the stock ramp is unusable: --su-blue-deep IS the fill, so one
 * beat per lap would vanish. The scan button's own vocabulary is on-action white.
 */
const litOnActionClass =
  "bg-on-action forced-colors:bg-[CanvasText]";

// One clock for every spinner on the page: one timer, one phase, no drift between marks.
// The interval lives only while ≥1 spinner is mounted (first subscribe starts it, last
// unsubscribe clears it). SSR: getServerSnapshot → 0, no window touched. HMR: a
// re-evaluated module is a fresh store; `subscribe` changes identity so React moves over.
let tick = 0;
let timer: number | undefined;
const subscribers = new Set<() => void>();
const still =
  typeof window === "undefined"
    ? null
    : window.matchMedia("(prefers-reduced-motion: reduce)");

function notify() {
  for (const fn of subscribers) fn();
}

function subscribe(fn: () => void) {
  subscribers.add(fn);
  if (subscribers.size === 1) {
    // 8 cells × 140ms = one revolution — the brand's slot-field tick.
    timer = window.setInterval(() => {
      if (document.hidden) return;
      tick += 1;
      notify();
    }, 140);
    still?.addEventListener("change", notify);
  }
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.clearInterval(timer);
      timer = undefined;
      still?.removeEventListener("change", notify);
    }
  };
}

const getSnapshot = () => (still?.matches ? -1 : tick);
const getServerSnapshot = () => 0;

export type SlotSpinnerSize = "sm" | "md" | "lg";

export interface SlotSpinnerProps {
  size?: SlotSpinnerSize;
  className?: string;
  /** On primary (white-on-action) faces, cells drop the stock ramp for on-action white */
  onAction?: boolean;
}

/**
 * Warehouse slot-field loader: a 3×3 rack face with stock-state colour
 * walking the perimeter. Shared by Button loading and Spin.
 *
 * Decorative by design — `aria-hidden`. The busy announcement belongs to the
 * consumer (Spin's role="status", Button's aria-busy).
 *
 * ponytail: no `percent` / determinate mode. The 8-cell perimeter is the right
 * progress dial (fill round(pct/100*8) cells clockwise); build it when a caller asks.
 */
export function SlotSpinner({
  size = "md",
  className,
  onAction = false,
}: SlotSpinnerProps) {
  const t = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const resting = t < 0;
  const active = resting ? -1 : RING[t % RING.length];
  // One stock state per lap: the lit slot is being worked, not strobing five hues a second.
  const state = STOCK[Math.floor(Math.max(t, 0) / RING.length) % STOCK.length];

  return (
    <span
      // dir is fixed so the ring always walks clockwise, mirrored contexts included.
      dir="ltr"
      className={cn("inline-grid shrink-0 align-middle", SIZE[size], className)}
      aria-hidden="true"
    >
      {Array.from({ length: 9 }, (_, i) => {
        const k = RING.indexOf(i);
        const lit = resting ? k >= 0 : i === active;
        const tone = resting ? RESTING[k] : state;
        return (
          <span
            key={i}
            className={cn(
              cellClass,
              lit
                ? onAction
                  ? litOnActionClass
                  : cn(TONE[tone], litClass)
                : onAction
                  ? freeOnActionClass
                  : freeClass,
            )}
          />
        );
      })}
    </span>
  );
}
