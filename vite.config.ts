import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // Divide React en un chunk separado
        },
      },
    },
  },
  publicDir: "public",
  server: {
    open: true,
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`, // Importar variables globales SCSS
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@store": resolve(__dirname, "./src/store"),
      "@services": resolve(__dirname, "./src/services"),
      "@features": resolve(__dirname, "./src/features"),
      "@context": resolve(__dirname, "./src/context"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@mocks": resolve(__dirname, "./src/mocks"),
      "@lib": resolve(__dirname, "./src/lib"),
    },
  },
});
