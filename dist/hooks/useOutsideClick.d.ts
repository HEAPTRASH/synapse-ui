import { type RefObject } from "react";
/**
 * Close-on-outside-press for the hand-rolled popups (AutoComplete, Mentions).
 * `pointerdown` fires for mouse, pen and touch, so one listener covers all three —
 * and it lands before focus moves, which `click` does not.
 *
 * ponytail: re-subscribes when `onOutside` changes identity (usually every render
 * while open). Add/remove of one document listener is free; wrap the callback in a
 * ref only if a profile ever says otherwise.
 */
export declare function useOutsideClick(ref: RefObject<HTMLElement | null>, onOutside: () => void, enabled?: boolean): void;
//# sourceMappingURL=useOutsideClick.d.ts.map