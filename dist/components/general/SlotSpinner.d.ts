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
export declare function SlotSpinner({ size, className, onAction, }: SlotSpinnerProps): import("react").JSX.Element;
//# sourceMappingURL=SlotSpinner.d.ts.map