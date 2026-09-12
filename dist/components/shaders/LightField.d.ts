import { type CanvasHTMLAttributes } from "react";
import { type ThemeMode } from "../../ConfigProvider";
export type LightFieldVariant = "dither" | "pure" | "grain" | "halftone";
export interface LightFieldProps extends Omit<CanvasHTMLAttributes<HTMLCanvasElement>, "onError"> {
    /** Post pass over the same 266° → 175° field. `dither` is the one the brand site ships. */
    variant?: LightFieldVariant;
    /** Force an appearance. Default follows the canvas's computed `color-scheme` (tokens, ConfigProvider, OS). */
    theme?: ThemeMode;
    /** `false` draws one still frame. Reduced motion always does. */
    autoplay?: boolean;
    /** WebGL2 missing or a shader failure; the CSS gradient fallback stays visible. */
    onError?: (error: Error) => void;
}
/** The brand light field: light moving through paper or dark ground, navy → cyan → mint. Decorative; never behind text. */
export declare function LightField({ variant, theme: themeProp, autoplay, onError, className, style, ...rest }: LightFieldProps): import("react").JSX.Element;
//# sourceMappingURL=LightField.d.ts.map