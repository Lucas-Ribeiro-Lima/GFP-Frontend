/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: "vitest-setup.ts",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname
    }
  },
})