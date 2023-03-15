import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

import * as packageJson from './package.json'

const { EsLinter, linterPlugin } = EsLint

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    dts({
      include: ['src']
    }),
    react({ jsxRuntime: 'classic' }),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })]
    })
  ],
  resolve: {
    alias: {
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
      formats: ['es', 'umd'],
      fileName: format => `mobx-toolbox.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
}))
