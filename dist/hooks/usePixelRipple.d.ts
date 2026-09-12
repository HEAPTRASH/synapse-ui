import { type RefObject } from "react";
/**
 * Secondary (frame) button fill: cells on a 12px pitch open from the centre
 * (Chebyshev rings) and close from the edges. Delays live on each cell as
 * --ri / --ro; the transition stays in CSS.
 *
 * The grid only decorates the hover invert — the ground itself is plain CSS,
 * so no-JS / pre-hydration / reduced-motion still get a styled control.
 */
export declare function usePixelRipple(ref: RefObject<HTMLElement | null>, enabled?: boolean): void;
//# sourceMappingURL=usePixelRipple.d.ts.map