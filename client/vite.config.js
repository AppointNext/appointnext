import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// Get the directory name of the current file
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  https: {
    key: fs.readFileSync(
      path.resolve(
        __dirname,
        "/Users/latishadwani/Developer/Webdev/Projects/Appoint-next/client/key.pem"
      )
    ),
    cert: fs.readFileSync(
      path.resolve(
        __dirname,
        "/Users/latishadwani/Developer/Webdev/Projects/Appoint-next/client/cert.pem"
      )
    ),
  },
  plugins: [react()],
});
