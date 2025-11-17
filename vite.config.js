import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Some packages (like Spline) can break when pre-bundled. Exclude them.
    exclude: ['@splinetool/react-spline'],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    // Enable HMR and file watching for smoother DX in preview
    hmr: true,
    watch: true,
    cors: {
      origin: '*',
      credentials: true
    },
    allowedHosts: [
      '.modal.host',
      'localhost',
      '127.0.0.1'
    ]
  }
})
