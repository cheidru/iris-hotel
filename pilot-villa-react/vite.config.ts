import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(
  {
    base: import.meta.env?.BASE_URL === 'production' ? '/iris-hotel' : '/',
    plugins: [react()],
  }

)
