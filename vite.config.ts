import { defineConfig } from 'vite'

import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svgr(), tsconfigPaths()],
})
