import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

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

const ConfigContext = createContext<ConfigContextValue | null>(null);
const EMPTY_TOKENS: Record<string, string> = {};
const DEFAULT_CONFIG: ConfigContextValue = {
  theme: "light",
  tokens: EMPTY_TOKENS,
  locale: "en-US",
  direction: "ltr",
};

const normalizeTokenEntries = (
  tokens: Record<string, string>,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [
      key.startsWith("--") ? key : `--su-${key}`,
      value,
    ]),
  );

export function ConfigProvider({
  children,
  theme: themeProp,
  locale: localeProp,
  direction: directionProp,
  tokens = EMPTY_TOKENS,
  target,
  className,
  style,
}: ConfigProviderProps) {
  const parent = useContext(ConfigContext);
  const wrapper = useRef<HTMLDivElement>(null);
  const theme = themeProp ?? parent?.theme ?? "light";
  const locale = localeProp ?? parent?.locale ?? "en-US";
  const direction = directionProp ?? parent?.direction ?? "ltr";
  const normalized = useMemo(() => normalizeTokenEntries(tokens), [tokens]);
  const value = useMemo(
    () => ({
      theme,
      locale,
      direction,
      tokens: { ...parent?.tokens, ...normalized },
    }),
    [theme, locale, direction, normalized, parent],
  );

  useLayoutEffect(() => {
    const el = target ?? (parent ? wrapper.current : document.documentElement);
    if (!el) return;
    const previousAttributes = ["data-theme", "lang", "dir"].map(
      (name) => [name, el.getAttribute(name)] as const,
    );
    el.setAttribute("data-theme", theme);
    el.setAttribute("lang", locale);
    el.setAttribute("dir", direction);

    const previous: Array<[string, string]> = [];
    for (const [key, val] of Object.entries(normalized)) {
      previous.push([key, el.style.getPropertyValue(key)]);
      el.style.setProperty(key, val);
    }

    return () => {
      for (const [name, old] of previousAttributes) {
        if (old === null) el.removeAttribute(name);
        else el.setAttribute(name, old);
      }
      for (const [key, val] of previous) {
        if (val) el.style.setProperty(key, val);
        else el.style.removeProperty(key);
      }
    };
  }, [theme, locale, direction, normalized, target, !!parent]);

  // A root provider already themes <html> from the effect above, so the wrapper
  // element only earns its place for subtree scoping or caller-supplied styling.
  if (!parent && !className && !style)
    return (
      <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
    );

  return (
    <ConfigContext.Provider value={value}>
      {/* Radix primitives read direction from this context, not from the `dir` attribute. */}
      <DirectionProvider dir={direction}>
        <div
          ref={wrapper}
          className={className}
          style={{ ...normalized, ...style }}
          data-theme={theme}
          lang={locale}
          dir={direction}
          data-su-config=""
        >
          {children}
        </div>
      </DirectionProvider>
    </ConfigContext.Provider>
  );
}

export function useConfig(): ConfigContextValue {
  return useContext(ConfigContext) ?? DEFAULT_CONFIG;
}
