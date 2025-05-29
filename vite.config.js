// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // <-- wichtig!
    port: 3000, // (optional) kann auch ein anderer Port sein
  },
});
