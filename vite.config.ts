import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [Unocss(), solidPlugin()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://36.139.161.136:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "esnext",
  },
});
