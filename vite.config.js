import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      external: [
        "/src/main.jsx", // Add the module that Rollup is failing to resolve
      ],
    },
  },
});
