import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "es2020",
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          lit: ["lit"],
        },
      },
    },
  },
  esbuild: {
    target: "es2020",
  },
  publicDir: "public", // This ensures public folder is copied to dist
});
