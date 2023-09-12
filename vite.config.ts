import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), tsConfigPaths()],
  resolve: {
    alias: {
      '@index': path.resolve(__dirname, './src/index.ts'),
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    manifest: true,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'mobx-toolbox',
      formats: ['es', 'cjs'],
      fileName: format => `mobx-toolbox.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
})
