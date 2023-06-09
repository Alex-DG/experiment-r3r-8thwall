import { defineConfig, loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import glsl from 'vite-plugin-glsl'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

const htmlPlugin = (env) => {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      transform: (html) => html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    },
  }
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), reactRefresh(), glsl(), basicSsl(), htmlPlugin(loadEnv(mode, '.'))],
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.fbx', '**/*.mp4', '**/*.webp', '**/*.png', '**/*.jpg'],
  }
})
