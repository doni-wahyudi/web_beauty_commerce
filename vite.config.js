import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/web_beauty_commerce/',
  server: {
    port: 5173,
    open: true
  }
})
