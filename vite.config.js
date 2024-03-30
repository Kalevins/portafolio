/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const config = {
    resolve:{
      alias: {
        '@': path.resolve(__dirname, './src/'),
        assets: path.resolve(__dirname, './src/assets/'),
        components: path.resolve(__dirname, './src/components/'),
        context: path.resolve(__dirname, './src/context/'),
        hooks: path.resolve(__dirname, './src/hooks/'),
        styles: path.resolve(__dirname, './src/styles/'),
        utils: path.resolve(__dirname, './src/utils/')
      }
    },
    plugins: [react()],
    server: {
      host: true,
      port: 3000
    },
    base: '/',
  }

  if (command !== 'serve') {
    config.base = env.VITE_BASE_URL
  }

  return config
})
