import {
  Dithering as LibDithering,
  type DitheringProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { shaderPalette } from "./palette";
import { useShaderSpeed } from "./useShaderSpeed";

export type DitheringProps = LibProps;

/** Print / warehouse dither — paper ground, action ink. */
export function Dithering({
  colorBack = shaderPalette.paper,
  colorFront = shaderPalette.action,
  shape = "wave",
  type = "4x4",
  size = 2,
  speed: speedProp = 0.35,
  className,
  style,
  ...rest
}: DitheringProps) {
  const speed = useShaderSpeed(speedProp);
  return (
    <LibDithering
      colorBack={colorBack}
      colorFront={colorFront}
      shape={shape}
      type={type}
      size={size}
      speed={speed}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
