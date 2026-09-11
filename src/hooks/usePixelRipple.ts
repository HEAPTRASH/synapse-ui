import { useEffect, type RefObject } from "react";

const PITCH = 12;
const STEP_IN = 9;
const STEP_OUT = 6;
/** Wide buttons would otherwise mint hundreds of nodes; past this the pitch widens. */
const MAX_COLS = 48;

/**
 * Secondary (frame) button fill: cells on a 12px pitch open from the centre
 * (Chebyshev rings) and close from the edges. Delays live on each cell as
 * --ri / --ro; the transition stays in CSS.
 *
 * The grid only decorates the hover invert — the ground itself is plain CSS,
 * so no-JS / pre-hydration / reduced-motion still get a styled control.
 */
export function usePixelRipple(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    const host = ref.current;
    const grid = host?.querySelector<HTMLElement>("[data-su-px]");
    if (!host || !grid) return undefined;

    const clear = () => grid.replaceChildren();
    if (!enabled) {
      clear();
      return undefined;
    }

    const coarse = window.matchMedia("(hover: none)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastCols = 0;
    let lastRows = 0;

    const build = () => {
      if (coarse.matches || still.matches) {
        lastCols = 0;
        lastRows = 0;
        clear();
        return;
      }
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      const pitch = Math.max(PITCH, Math.ceil(width / MAX_COLS));
      const cols = Math.max(1, Math.round(width / pitch));
      const rows = Math.max(1, Math.round(height / PITCH));
      if (cols === lastCols && rows === lastRows) return;
      lastCols = cols;
      lastRows = rows;
      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

      const cx = (cols - 1) / 2;
      const cy = (rows - 1) / 2;
      const far = Math.max(cx, cy) || 1;
      const cells: HTMLElement[] = [];
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const d = Math.max(Math.abs(c - cx), Math.abs(r - cy));
          const i = document.createElement("i");
          i.style.setProperty("--ri", `${Math.round(d * STEP_IN)}ms`);
          i.style.setProperty("--ro", `${Math.round((far - d) * STEP_OUT)}ms`);
          cells.push(i);
        }
      }
      grid.replaceChildren(...cells);
    };

    // ResizeObserver fires once on observe() — no manual first build needed.
    const ro = new ResizeObserver(build);
    ro.observe(host);
    coarse.addEventListener("change", build);
    still.addEventListener("change", build);
    return () => {
      ro.disconnect();
      coarse.removeEventListener("change", build);
      still.removeEventListener("change", build);
    };
  }, [ref, enabled]);
}
