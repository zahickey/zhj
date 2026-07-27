import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is hosted at github.com/zahickey/zhj -> Pages URL is zahickey.github.io/zhj/
export default defineConfig({
  base: '/zhj/',
  plugins: [react()],
})
