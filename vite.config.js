import includeHtml from "vite-plugin-include-html";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [includeHtml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      }
    }
  }
});