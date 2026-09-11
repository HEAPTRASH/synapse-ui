import { useEffect, type RefObject } from "react";

/**
 * Close-on-outside-press for the hand-rolled popups (AutoComplete, Mentions).
 * `pointerdown` fires for mouse, pen and touch, so one listener covers all three —
 * and it lands before focus moves, which `click` does not.
 *
 * ponytail: re-subscribes when `onOutside` changes identity (usually every render
 * while open). Add/remove of one document listener is free; wrap the callback in a
 * ref only if a profile ever says otherwise.
 */
export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  onOutside: () => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;
    const handle = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onOutside();
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [ref, onOutside, enabled]);
}
