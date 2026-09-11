import { useCallback, useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

const navButtonClass =
  "inline-flex shrink-0 items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] " +
  "border border-solid border-rule-strong rounded-none bg-paper text-label cursor-pointer " +
  "transition-[background-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none " +
  "hover:not-disabled:bg-fill-secondary active:not-disabled:bg-fill su-focus-ring " +
  "disabled:opacity-45 disabled:cursor-not-allowed";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Carousel({ className, children, ...rest }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ atStart: true, atEnd: true });

  // ponytail: scroll/resize listener only — no IntersectionObserver per slide;
  // add one if a "slide X of Y" indicator is ever needed.
  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // RTL scrollLeft counts down from 0, so compare on magnitude.
    const offset = Math.abs(el.scrollLeft);
    setBounds({
      atStart: offset <= 1,
      atEnd: offset + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sync]);

  // dir: -1 scrolls toward the start of reading order, 1 toward the end.
  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl" ? -1 : 1;
    // 0.85 mirrors CarouselItem's flex basis below — keep the two in step.
    el.scrollBy({ left: dir * rtl * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      className={cn("relative flex items-center gap-su2", className)}
      {...rest}
    >
      <button
        type="button"
        className={navButtonClass}
        onClick={() => scroll(-1)}
        disabled={bounds.atStart}
        aria-label="Previous"
      >
        ‹
      </button>
      <div
        ref={trackRef}
        tabIndex={0}
        className="flex gap-su3 overflow-x-auto snap-x snap-mandatory flex-1 py-su1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden su-focus-ring"
      >
        {children}
      </div>
      <button
        type="button"
        className={navButtonClass}
        onClick={() => scroll(1)}
        disabled={bounds.atEnd}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function CarouselItem({ className, children, ...rest }: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        // 85% basis leaves the next slide peeking; Carousel's scroll() uses the same ratio.
        "flex-[0_0_85%] snap-start rounded-none border border-solid border-rule border-t-rule-strong bg-paper",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Carousel.Item = CarouselItem;
