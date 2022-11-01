import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit : false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ['./main.js'],
      // entry: resolve(__dirname, 'lib/main.js'),
      name: 'michel-lib',
      // the proper extensions will be added
      fileName: (format,entryAlias) => `michel-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
