import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // Repo root so src/ + playground/ are both watched — CSS HMR works.
  root: repoRoot,
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      "synapse-ui": fileURLToPath(new URL("./src/index.ts", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    open: false,
  },
  css: {
    devSourcemap: true,
  },
});
