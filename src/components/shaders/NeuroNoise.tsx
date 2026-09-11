import {
  NeuroNoise as LibNeuroNoise,
  type NeuroNoiseProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { shaderPalette } from "./palette";
import { useShaderSpeed } from "./useShaderSpeed";

export type NeuroNoiseProps = LibProps;

/** Instrument web — mint beam over navy paper field. */
export function NeuroNoise({
  colorFront = shaderPalette.mint,
  colorMid = shaderPalette.action,
  colorBack = shaderPalette.navy,
  brightness = 0.12,
  contrast = 0.35,
  speed: speedProp = 0.4,
  className,
  style,
  ...rest
}: NeuroNoiseProps) {
  const speed = useShaderSpeed(speedProp);
  return (
    <LibNeuroNoise
      colorFront={colorFront}
      colorMid={colorMid}
      colorBack={colorBack}
      brightness={brightness}
      contrast={contrast}
      speed={speed}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
