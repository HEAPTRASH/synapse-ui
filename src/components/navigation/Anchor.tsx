import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithRef,
  type MouseEvent,
} from "react";
import { cn } from "../../utils/cn";

export interface AnchorItem {
  href: string;
  title: string;
}

export interface AnchorProps
  extends Omit<ComponentPropsWithRef<"nav">, "onChange"> {
  items: AnchorItem[];
  /** Pixel offset from top when determining and scrolling to the active section */
  offset?: number;
  getContainer?: () => HTMLElement | null;
  /** Fired when the active section changes, with its href (`#id`). */
  onChange?: (activeHref: string) => void;
}

function normalizeHash(href: string): string {
  const at = href.lastIndexOf("#");
  return at >= 0 ? href.slice(at + 1) : href;
}

const listClass = "flex flex-col m-0 p-0 list-none border-s border-s-solid border-s-rule";

const linkClass =
  "flex items-center min-h-[var(--su-hit-target)] -ms-px py-su2 px-su3 border-s-2 border-s-solid text-footnote font-medium break-words no-underline su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:no-underline";

// Colour lives in exactly one of the two branches — hover only on fine pointers,
// so a tap does not leave a second item looking current.
const restLinkClass =
  "border-s-transparent text-label-secondary [@media(hover:hover)]:hover:text-label";

const activeLinkClass =
  "border-s-accent text-accent [@media(hover:hover)]:hover:text-[var(--su-accent-hover)] contrast-more:font-semibold";

export function Anchor({
  items,
  offset = 80,
  getContainer,
  onChange,
  className,
  ...rest
}: AnchorProps) {
  const ids = items.map((item) => normalizeHash(item.href));
  const [active, setActive] = useState<string>(() => ids[0] ?? "");
  const activeId = ids.includes(active) ? active : (ids[0] ?? "");

  const containerRef = useRef(getContainer);
  containerRef.current = getContainer;
  // Suppresses the tracker while a click-driven smooth scroll is in flight.
  const lockUntil = useRef(0);
  const hrefKey = ids.join("|");

  useEffect(() => {
    const sectionIds = hrefKey.split("|");
    const scroller = containerRef.current?.() ?? null;
    const target: Window | HTMLElement = scroller ?? window;
    let frame = 0;

    // "Last section whose top has passed the offset line" — recomputed from live
    // rects, so it is order-independent and never lags. An IntersectionObserver
    // fires only when an element crosses the rootMargin band, which measured
    // ~375px late here. Looking the elements up per frame also picks up
    // sections that mount after the Anchor.
    // ponytail: N getBoundingClientRect calls per frame; fine for a TOC-sized
    // list, cache tops on scroll-start if a 200-item one ever shows up.
    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      const base = scroller ? scroller.getBoundingClientRect().top : 0;
      const passed = elements
        .map((el) => ({ el, top: el.getBoundingClientRect().top - base }))
        .filter((entry) => entry.top <= offset + 1)
        .sort((a, b) => a.top - b.top)
        .pop();
      const next = passed?.el ?? elements[0];
      if (next) setActive(next.id);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    target.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      target.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [hrefKey, offset]);

  const lastNotified = useRef(activeId);
  useEffect(() => {
    if (lastNotified.current === activeId) return;
    lastNotified.current = activeId;
    onChange?.(`#${activeId}`);
  }, [activeId, onChange]);

  if (items.length === 0) return null;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;
    event.preventDefault();
    setActive(id);

    const scroller = containerRef.current?.() ?? null;
    const elementTop = element.getBoundingClientRect().top;
    const top = scroller
      ? elementTop - scroller.getBoundingClientRect().top + scroller.scrollTop - offset
      : elementTop + window.scrollY - offset;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    lockUntil.current = Date.now() + (smooth ? 700 : 0);
    (scroller ?? window).scrollTo({ top, behavior: smooth ? "smooth" : "auto" });

    // replaceState (unlike location.hash) fires no hashchange, so hash routers stay put.
    history.replaceState(null, "", `#${id}`);
    element.setAttribute("tabindex", "-1");
    element.focus({ preventScroll: true });
    element.addEventListener(
      "blur",
      () => element.removeAttribute("tabindex"),
      { once: true },
    );
  };

  return (
    <nav
      className={cn("font-sans", className)}
      aria-label="Page sections"
      {...rest}
    >
      <ul className={listClass}>
        {items.map((item, index) => {
          const id = ids[index] as string;
          const isActive = activeId === id;
          return (
            <li key={`${id}-${index}`}>
              <a
                href={`#${id}`}
                className={cn(
                  linkClass,
                  // Picked, not overridden: two same-property utilities would
                  // race on source order in the generated CSS.
                  isActive ? activeLinkClass : restLinkClass,
                )}
                aria-current={isActive ? "location" : undefined}
                title={item.title}
                onClick={(event) => handleClick(event, id)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
