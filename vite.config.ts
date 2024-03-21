import path from "path"
import react from "@vitejs/plugin-react"
import legacy from '@vitejs/plugin-legacy'
import { defineConfig,loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react(),legacy({
      targets: ['defaults', 'not IE 11'],
    }),],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    },
      base: '/',
  }
})

