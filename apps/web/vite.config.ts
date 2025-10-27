import { defineConfig } from "vite";
import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/web", // two levels up, not one

  server: {
    port: 4200,
    host: "localhost",
    open: true,
  },
  preview: {
    port: 4200,
    host: "localhost",
  },

  plugins: [react(), tsconfigPaths()] as unknown as PluginOption[],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@types": path.resolve(__dirname, "../../packages/types/src"),
      "@api": path.resolve(__dirname, "../api/src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  // uncomment if you later use web workers
  // worker: { plugins: [nxViteTsPaths()] },

  build: {
    emptyOutDir: true,
    outDir: "./dist",
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
});
