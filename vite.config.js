import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base property to match your repo name.
export default defineConfig({
  base: '/resumeviewer/',
  plugins: [react()],
})
