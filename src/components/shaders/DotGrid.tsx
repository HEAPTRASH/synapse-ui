import {
  DotGrid as LibDotGrid,
  type DotGridProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { shaderPalette } from "./palette";

export type DotGridProps = LibProps;

/** Square plot grid — brand grid wash language. */
export function DotGrid({
  colorBack = shaderPalette.paper,
  colorFill = shaderPalette.ink2,
  colorStroke = shaderPalette.action,
  shape = "square",
  size = 2,
  gapX = 24,
  gapY = 24,
  strokeWidth = 0,
  className,
  style,
  ...rest
}: DotGridProps) {
  return (
    <LibDotGrid
      colorBack={colorBack}
      colorFill={colorFill}
      colorStroke={colorStroke}
      shape={shape}
      size={size}
      gapX={gapX}
      gapY={gapY}
      strokeWidth={strokeWidth}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
