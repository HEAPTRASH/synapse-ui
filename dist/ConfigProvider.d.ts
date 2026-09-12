import { type CSSProperties, type ReactNode } from "react";
export type ThemeMode = "light" | "dark";
export interface ConfigProviderProps {
    children: ReactNode;
    locale?: string;
    direction?: "ltr" | "rtl";
    /** Sets `data-theme` on the target element. Default: light */
    theme?: ThemeMode;
    /** CSS variable overrides keyed as `--su-*` or without the prefix */
    tokens?: Record<string, string>;
    /** Element that receives theme + token styles. Default: document.documentElement */
    target?: HTMLElement | null;
    className?: string;
    style?: CSSProperties;
}
interface ConfigContextValue {
    locale: string;
    direction: "ltr" | "rtl";
    theme: ThemeMode;
    tokens: Record<string, string>;
}
export declare function ConfigProvider({ children, theme: themeProp, locale: localeProp, direction: directionProp, tokens, target, className, style, }: ConfigProviderProps): import("react").JSX.Element;
export declare function useConfig(): ConfigContextValue;
export {};
//# sourceMappingURL=ConfigProvider.d.ts.map