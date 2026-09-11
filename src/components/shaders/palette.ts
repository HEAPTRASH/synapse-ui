/** SynapseWare brand hues for Paper Shaders — scarce action, mint beam, paper/ink. */
export const shaderPalette = {
  paper: "#ffffff",
  paperDark: "#0a0c12",
  canvas: "#f5f5f7",
  ink: "#1d1d1f",
  ink2: "#6e6e73",
  navy: "#0f2971",
  action: "#1d4ed8",
  blue: "#3b82f6",
  mint: "#5eead4",
  cyan: "#22c1e0",
  teal: "#2dd4bf",
} as const;

/** Soft field: paper → canvas → mint → action → navy (no purple). */
export const meshBrandColors = [
  shaderPalette.paper,
  shaderPalette.canvas,
  shaderPalette.mint,
  shaderPalette.action,
  shaderPalette.navy,
] as const;

/** Scan-field warp: navy / action / mint / canvas. */
export const warpBrandColors = [
  shaderPalette.navy,
  shaderPalette.action,
  shaderPalette.mint,
  shaderPalette.canvas,
] as const;

/** Beam ring spots. */
export const beamBrandColors = [
  shaderPalette.mint,
  shaderPalette.action,
  shaderPalette.cyan,
] as const;
