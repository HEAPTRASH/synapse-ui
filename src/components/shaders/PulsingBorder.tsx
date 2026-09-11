import {
  PulsingBorder as LibPulsingBorder,
  type PulsingBorderProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { beamBrandColors, shaderPalette } from "./palette";
import { useShaderSpeed } from "./useShaderSpeed";

export type PulsingBorderProps = LibProps;

/**
 * Square instrument frame with mint / action beam spots
 * (Paper PulsingBorder, brand-locked; bloom kept low).
 */
export function PulsingBorder({
  colors = [...beamBrandColors],
  colorBack = shaderPalette.paper,
  roundness = 0,
  thickness = 0.08,
  softness = 0.45,
  bloom = 0.08,
  intensity = 0.35,
  spots = 3,
  spotSize = 0.4,
  pulse = 0.2,
  smoke = 0,
  speed: speedProp = 0.55,
  className,
  style,
  ...rest
}: PulsingBorderProps) {
  const speed = useShaderSpeed(speedProp);
  return (
    <LibPulsingBorder
      colors={colors}
      colorBack={colorBack}
      roundness={roundness}
      thickness={thickness}
      softness={softness}
      bloom={bloom}
      intensity={intensity}
      spots={spots}
      spotSize={spotSize}
      pulse={pulse}
      smoke={smoke}
      speed={speed}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
