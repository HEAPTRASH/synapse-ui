/** Shape of the generated `*.webgl.js` light-field modules (synapseware-web/tools/light-field-gen). */
declare module "*.webgl.js" {
  export interface LightFieldShaderOptions {
    theme?: "light" | "dark";
    /** Page grounds as #rrggbb; the field fades into them. */
    background?: { dark?: string; light?: string };
    /** `false` renders one still frame on demand via `render()`. */
    autoplay?: boolean;
    signal?: AbortSignal;
    onError?: (error: Error) => void;
  }
  export interface LightFieldShader {
    setTheme(theme: "light" | "dark"): void;
    render(time: number): void;
    destroy(): void;
  }
  /** Throws when WebGL2 is unavailable. */
  export function createShader(canvas: HTMLCanvasElement, options?: LightFieldShaderOptions): LightFieldShader;
}
