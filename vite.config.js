import includeHtml from "vite-plugin-include-html";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [includeHtml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        recyclage: resolve(__dirname, 'pages/recyclage.html'),
        economieEnergie: resolve(__dirname, 'pages/economie-energie.html'),
        circuitCourt: resolve(__dirname, 'pages/circuit-court.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      }
    }
  }
});