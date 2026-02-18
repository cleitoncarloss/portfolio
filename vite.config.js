import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    keepNames: true,
  },
  resolve: {
    alias: {
      '@directive': resolve(__dirname, 'packages/directive'),
    },
  },
})
