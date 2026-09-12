import { type BorderBeamProps as LibBorderBeamProps } from "border-beam";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { type ThemeMode } from "../../ConfigProvider";
export type BorderBeamSize = NonNullable<LibBorderBeamProps["size"]>;
export interface BorderBeamProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "className" | "style"> {
    /** Rotation/travel duration in seconds. Default: the preset's own pacing. */
    duration?: number;
    /** Size/type preset from libraries.dev/beam */
    size?: BorderBeamSize;
    /** Whether the animation is active */
    active?: boolean;
    /** Overall strength/opacity of the beam (0–1) */
    strength?: number;
    /** Force an appearance. Default follows ConfigProvider. */
    theme?: ThemeMode;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}
/**
 * libraries.dev/beam (`border-beam`) with SynapseWare ocean palette
 * swapped to action + mint (see scripts/patch-border-beam.mjs), square corners.
 */
export declare function BorderBeam({ duration, size, active, strength, theme: themeProp, className, style, children, ...rest }: BorderBeamProps): import("react").JSX.Element;
//# sourceMappingURL=BorderBeam.d.ts.map