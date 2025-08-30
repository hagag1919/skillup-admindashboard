import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['skillup-admindashboard.onrender.com', 'localhost']
  },
  preview: {
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    allowedHosts: ['skillup-admindashboard.onrender.com', 'localhost']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          charts: ['recharts'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
