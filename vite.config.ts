import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: ".", // raíz del proyecto (no "client")
  base: "./", // 👈 clave para que cargue en Vercel
  build: {
    outDir: "dist", // 👈 Vercel busca esto
    emptyOutDir: true,
  },
});

