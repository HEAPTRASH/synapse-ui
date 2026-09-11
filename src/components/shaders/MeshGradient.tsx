import {
  MeshGradient as LibMeshGradient,
  type MeshGradientProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { meshBrandColors } from "./palette";
import { useShaderSpeed } from "./useShaderSpeed";

export type MeshGradientProps = LibProps;

/** Soft brand field — paper / canvas / mint / action / navy. */
export function MeshGradient({
  colors = [...meshBrandColors],
  distortion = 0.45,
  swirl = 0.12,
  grainMixer = 0.08,
  grainOverlay = 0.05,
  speed: speedProp = 0.25,
  className,
  style,
  ...rest
}: MeshGradientProps) {
  const speed = useShaderSpeed(speedProp);
  return (
    <LibMeshGradient
      colors={colors}
      distortion={distortion}
      swirl={swirl}
      grainMixer={grainMixer}
      grainOverlay={grainOverlay}
      speed={speed}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
