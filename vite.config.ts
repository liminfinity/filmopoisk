import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3002,
    strictPort: true
  },
  server: {
    port: 3001,
    strictPort: true
  },
  resolve: {
    alias: {
      "@shared": "/src/shared",
      "@pages": "/src/pages",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@widgets": "/src/widgets",
      "@app": "/src/app",
    }
  },
})
