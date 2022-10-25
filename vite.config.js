import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "common",
        replacement: resolve(__dirname, "src/common"),
      },
    ],
  },

  plugins: [react(), envCompatible],
});
