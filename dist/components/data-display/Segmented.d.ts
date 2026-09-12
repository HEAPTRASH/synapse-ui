import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export interface SegmentedOption {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}
/**
 * Renders `role="radiogroup"` (Radix ToggleGroup) with no default accessible
 * name — pass `aria-label` or `aria-labelledby` so screen readers know what is
 * being switched. Icon-only options need their own label too (wrap the icon in
 * an element carrying `aria-label`).
 */
export interface SegmentedProps extends Omit<ComponentPropsWithoutRef<typeof ToggleGroup.Root>, "type" | "value" | "defaultValue" | "onValueChange"> {
    options: SegmentedOption[];
    block?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
export declare function Segmented({ options, block, className, value: valueProp, defaultValue, onValueChange, ...rest }: SegmentedProps): import("react").JSX.Element;
//# sourceMappingURL=Segmented.d.ts.map