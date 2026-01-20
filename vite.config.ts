import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Importação do lovable-tagger removida

// https://vitejs.dev/config/
// Altere a base para o nome do repositório
const repoName = "Portal-de-Inclusao-Tecnologica";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
