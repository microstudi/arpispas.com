
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// IMPORTANT: Replace 'YOUR_REPO_NAME' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/',
})
