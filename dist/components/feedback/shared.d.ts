/**
 * Bits the feedback surfaces (Alert, Message, Notification) share: the status
 * union, the status → left-rule map, and the dismiss target's class string.
 * They were copy-pasted three ways and had already drifted; keep them here.
 */
export type FeedbackTone = "info" | "success" | "warning" | "error";
/** Status colour as a 3px left rule — the only place status colour is spent. */
export declare const toneBorderClass: Record<FeedbackTone, string>;
/** Status tint for a status glyph (state shown by shape and colour, never colour alone). */
export declare const toneTextClass: Record<FeedbackTone, string>;
/**
 * 44×44 dismiss target. `border-0`, not `border-none`: the reset zeroes border
 * width already, but an explicit 0 keeps the UA `2px outset` off a bare
 * <button> even if that reset is ever narrowed.
 */
export declare const dismissButtonClass = "shrink-0 grid place-items-center size-[var(--su-hit-target)] min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] border-0 rounded-none bg-transparent text-label-secondary hover:text-label su-focus-ring transition-colors duration-[var(--su-duration-fast)] text-[16px] cursor-pointer";
//# sourceMappingURL=shared.d.ts.map