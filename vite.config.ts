import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MetaIntegrations/',
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 8080,      // Default Vite port
  },
})
