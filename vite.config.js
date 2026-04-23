import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "jsx",
      enableJsx: true,
    },
  ],
  resolve: {
    // Use a regex to match imports like "~/path/to/file" and replace
    // with the project `src/` absolute path. Also keep a simple '~'
    // fallback for imports that use just '~'.
    alias: [
      { find: /^~\//, replacement: path.resolve(__dirname, "src") + "/" },
      { find: "~", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
