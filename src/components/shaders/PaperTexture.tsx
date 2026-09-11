import {
  PaperTexture as LibPaperTexture,
  type PaperTextureProps as LibProps,
} from "@paper-design/shaders-react";
import { cn } from "../../utils/cn";
import { shaderPalette } from "./palette";

export type PaperTextureProps = LibProps;

/** Paper surface texture — brand paper / ink fiber, square bay. */
export function PaperTexture({
  colorBack = shaderPalette.paper,
  colorFront = shaderPalette.ink2,
  contrast = 0.28,
  roughness = 0.35,
  fiber = 0.25,
  fiberSize = 0.22,
  crumples = 0.2,
  folds = 0.35,
  foldCount = 4,
  drops = 0.12,
  className,
  style,
  ...rest
}: PaperTextureProps) {
  return (
    <LibPaperTexture
      colorBack={colorBack}
      colorFront={colorFront}
      contrast={contrast}
      roughness={roughness}
      fiber={fiber}
      fiberSize={fiberSize}
      crumples={crumples}
      folds={folds}
      foldCount={foldCount}
      drops={drops}
      className={cn("block w-full rounded-none", className)}
      style={{ width: "100%", height: 220, ...style }}
      {...rest}
    />
  );
}
