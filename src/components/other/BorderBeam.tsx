import {
  BorderBeam as LibBorderBeam,
  type BorderBeamProps as LibBorderBeamProps,
} from "border-beam";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useConfig, type ThemeMode } from "../../ConfigProvider";
import { useShaderSpeed } from "../shaders/useShaderSpeed";
import { cn } from "../../utils/cn";

export type BorderBeamSize = NonNullable<LibBorderBeamProps["size"]>;

export interface BorderBeamProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "className" | "style"> {
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
// ponytail: the beam colours live in the dependency's compiled JS and are
// string-patched post-install; a magicui-style `--beam-from`/`--beam-to` conic
// gradient of our own would drop the patch script and the theme prop entirely.
export function BorderBeam({
  duration,
  size = "md",
  active = true,
  strength = 1,
  theme: themeProp,
  className,
  style,
  children,
  ...rest
}: BorderBeamProps) {
  const { theme: configTheme } = useConfig();
  const speed = useShaderSpeed(1);

  return (
    <LibBorderBeam
      size={size}
      duration={duration}
      active={active && speed > 0}
      strength={strength}
      colorVariant="ocean"
      theme={themeProp ?? configTheme}
      staticColors
      borderRadius={0}
      className={cn("w-full rounded-none", className)}
      style={style}
      {...rest}
    >
      <div className="su-frame p-su5 text-body">
        {children}
      </div>
    </LibBorderBeam>
  );
}
