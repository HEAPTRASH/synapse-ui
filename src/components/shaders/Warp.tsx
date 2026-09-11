import {
  Warp as LibWarp,
  type WarpProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { warpBrandColors } from "./palette";
import { useShaderSpeed } from "./useShaderSpeed";

export type WarpProps = LibProps;

/** Quiet scan field — navy / action / mint warp (Paper ink-adjacent). */
export function Warp({
  colors = [...warpBrandColors],
  speed: speedProp = 0.3,
  className,
  style,
  ...rest
}: WarpProps) {
  const speed = useShaderSpeed(speedProp);
  return (
    <LibWarp
      colors={colors}
      speed={speed}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
