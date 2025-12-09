import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: parseInt(process.env.FRONTEND_VITE_PORT!, 10),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "scheduler",
      "@maplab-oss/helloworld-trpc",
      "@maplab-oss/helloworld-config",
    ],
  },
  ssr: {
    noExternal: [
      "@maplab-oss/helloworld-trpc",
      "@maplab-oss/helloworld-config",
    ],
  },
});
