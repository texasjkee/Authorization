import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      common: '/src/common',
      pages: '/src/pages',
      hooks: '/src/hooks',
      store: '/src/store'
    }
  }
})
