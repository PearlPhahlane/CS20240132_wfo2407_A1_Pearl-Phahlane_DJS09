import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // Output directory
  },
  server: {
    port: 3000, // Port for the dev server
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
});
